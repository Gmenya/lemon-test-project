import styles from "./HeaderListItem.module.css"
import {ItemList} from "../../../../shared/constants/itemList";
import {HeaderItem} from "../../../../entities/HeaderItem";

interface IOptionsType {
    title: ItemList
}

const options :IOptionsType[] = [
    { title: ItemList.ABOUT },
    { title: ItemList.NEWS },
    { title: ItemList.CONTACTS },
];

export const HeaderListItem  = () => {
    return (
        <div className={styles.HeaderListItem}>
            {options.map(({title})=>{
                return <HeaderItem title={title} key={title}/>
            })}
        </div>
    );
};
