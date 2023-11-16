import React, { memo } from 'react';
import styles from './Input.module.css';
interface InputProps {
    type: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    error?: string;
    id:string
}
export const Input: React.FC<InputProps> = memo(({ type, value, onChange, placeholder, error,id }) => {
    return (
        <div className={styles.inputWrapper}>
            <input
                id={id}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={error ? `${styles.inputField} ${styles.inputError}` : styles.inputField}
            />
            <div className={styles.errorMessage}>
                {error}
            </div>
        </div>
    );
});
