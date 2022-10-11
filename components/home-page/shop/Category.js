import styles from "./Category.module.css";
import Item from "./Item";

const Category = (props) => {
    let itemsCols = [];
    for (let i = 0; i < Math.ceil(props.items.length / 2); i++) {
        if (
            props.items.length % 2 == 1 &&
            i == Math.ceil(props.items.length / 2) - 1
        ) {
            itemsCols.push(
                <div key={i} className={styles.itemCol}>
                    <Item item={props.items[i]} />
                </div>
            );
        } else {
            itemsCols.push(
                <div key={i} className={styles.itemCol}>
                    <Item item={props.items[i]} />
                    <Item
                        item={
                            props.items[i + Math.ceil(props.items.length / 2)]
                        }
                    />
                </div>
            );
        }
    }
    return (
        <div className={styles.category}>
            <h2 className={styles.title}>{props.name}</h2>
            <div className={styles.items}>{itemsCols}</div>
        </div>
    );
};

export default Category;
