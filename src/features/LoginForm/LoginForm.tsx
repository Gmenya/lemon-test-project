import React, {useState, useCallback, ChangeEvent} from 'react';
import {useSelector} from "react-redux";
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import {Input} from "../../shared/ui/Input";
import {Button} from "../../shared/ui/Button";
import {Checkbox} from "../../shared/ui/Checkbox";
import {useAppDispatch} from "../../shared/hooks/useAppDispatch";
import {getLoginPassword} from "./model/selectors/getLoginPassword/getLoginPassword";
import {loginActions} from "./model/slice";
import {getLoginEmail} from "./model/selectors/getLoginEmail/getLoginEmail";
import {loginByEmail} from "./model/services/loginByEmail";
import {validateEmail, validatePassword} from "./validation/validation";
import styles from './LoginForm.module.css';
export const LoginForm = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [error, setError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [isChecked, setIsChecked] = useState(false);


    const password = useSelector(getLoginPassword);
    const email = useSelector(getLoginEmail);


    const handleEmailChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(loginActions.setUserEmail(e.target.value));
    }, [dispatch]);

    const handlePasswordChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(loginActions.setPassword(e.target.value));
    }, [dispatch]);

    const handleCheckboxChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setIsChecked(e.target.checked);
    }, []);

    const mutation = useMutation(loginByEmail, {
        onSuccess: () => {
            navigate('/profile');
        },
        onError: (error) => {
            setError('Invalid email or password');
        },
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let isValid = true;

        const emailValidationResult = validateEmail(email);
        if (emailValidationResult) {
            setEmailError(emailValidationResult);
            isValid = false;
        } else {
            setEmailError('');
        }

        const passwordValidationResult = validatePassword(password);
        if (passwordValidationResult) {
            setPasswordError(passwordValidationResult);
            isValid = false;
        } else {
            setPasswordError('');
        }

        if (isValid) {
            mutation.mutate({ email, password ,isChecked});
        }
    };


    return (
        <div className={styles.wrapper} data-testid="login-form">
            <h3 className={styles.title}>Submit your details</h3>
            <form onSubmit={handleSubmit} className={styles.form} noValidate>
                <div className={styles.box}>
                    <label className={styles.label} htmlFor="text">Email</label>
                    <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        error={emailError}
                    />
                    <label className={styles.label} htmlFor="password">Password</label>
                    <Input
                        id="password"
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                        error={passwordError}
                    />
                    <div className={styles.error}>{error}</div>
                </div>
                <Checkbox
                    label="I want to receive updates via email"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                />
                <div className={styles.button}>
                    <Button type="submit">Start the Course</Button>
                </div>
            </form>
        </div>
    );
};
