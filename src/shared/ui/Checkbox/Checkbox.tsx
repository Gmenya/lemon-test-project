import React, {memo, FC} from 'react';
import styles from './Checkbox.module.css';

interface CheckboxProps {
    label: string;
    checked: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox: FC<CheckboxProps> = memo(({label, checked, onChange}) => {
    return (
        <label className={styles.checkboxContainer}>
            {label}
            <input
                type="checkbox"
                checked={checked}
                onChange={onChange}
            />
            <span className={styles.checkmark}></span>
        </label>
    );
});
