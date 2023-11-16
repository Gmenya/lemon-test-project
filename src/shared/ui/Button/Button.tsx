import React, {ButtonHTMLAttributes, memo, FC} from 'react';
import styles from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    type?: "button" | "submit" | "reset";
    isMenuItem?: boolean
}

export const Button: FC<ButtonProps> = memo((props) => {
    const {
        children,
        onClick,
        type = "button",
        isMenuItem =  false,
        ...otherProps
    } = props

    const buttonClass = `${isMenuItem ? styles['header-item-button'] : styles['button']} ${!isMenuItem ? styles['loginFormButtonHover'] : ''}`;
    return (
        <button type={type} className={buttonClass} onClick={onClick} {...otherProps} >
            {children}
        </button>
    );
});
