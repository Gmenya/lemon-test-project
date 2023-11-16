import React from "react";
import styles from "./Header.module.css"
import {HeaderListItem} from "./ui/HeaderListItem";
import {Button} from "../../shared/ui/Button";
import { useNavigate } from 'react-router-dom'

export const Header = () => {
    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate('/');
    };
    return (
        <div className={styles.Header} data-testid="header">
            <Button isMenuItem onClick={handleHomeClick}>
                HOME
            </Button>
        <HeaderListItem/>
        </div>
    );
};
