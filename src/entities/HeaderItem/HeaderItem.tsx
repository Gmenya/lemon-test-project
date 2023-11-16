import React, {FC} from "react";
import styles from "./HeaderItem.module.css"
import { Button } from "../../shared/ui/Button";

interface HeaderItemProps {
    title:string;
}

export const HeaderItem: FC<HeaderItemProps> = ({title}) => {
    return (
        <div className={styles.HeaderItem} data-testid="header-item">
            <Button isMenuItem>
                {title}
            </Button>
        </div>
    );
};
