import React from 'react';
import {LoginForm} from "../../features/LoginForm";
import {mockText} from "../../shared/constants/infoMockText";
import styles from "./MainPage.module.css";

export const MainPage = () => {
    return (
        <div className={styles.login} data-testid="main-page">
            <LoginForm />
            <div className={styles.info} data-testid="info-text">
                <p>{mockText}</p>
            </div>
        </div>
    );
};

