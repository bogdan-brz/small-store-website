import Image from "next/image";
import { useContext } from "react";
import CartContext from "../../context/cart-context";
import styles from "./Item.module.css";

const Item = (props) => {
    const ctx = useContext(CartContext);
    const { productId, name, brand, price, images } = props.item;
    const quantity = props.item.quantity;
    return (
        <div className={styles.item}>
            <div
                onClick={() => ctx.setProductViewed(props.item)}
                className={styles.image}>
                <Image src={images[0]} layout="fill" />
            </div>
            <div
                onClick={() => ctx.setProductViewed(props.item)}
                className={styles.name}>
                {name}
            </div>
            <div className={styles.price}>
                ${price} <span className={styles.quantity}>x{quantity}</span>
            </div>
        </div>
    );
};

export default Item;
