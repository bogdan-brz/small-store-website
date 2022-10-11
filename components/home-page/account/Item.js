import Image from "next/image";
import { useContext } from "react";
import AccountContext from "../../context/account-context";
import CartContext from "../../context/cart-context";
import styles from "./Item.module.css";

const Item = (props) => {
    const accCtx = useContext(AccountContext);
    const cartCtx = useContext(CartContext);
    const { productId, name, brand, price, images } = props.item;
    return (
        <div className={styles.item}>
            <div
                onClick={() => {
                    accCtx.setModalShown(false);
                    cartCtx.setModalShown(true);
                    cartCtx.setProductViewed(props.item);
                }}
                className={styles.image}>
                <Image src={images[0]} layout="fill" />
            </div>
            <div
                className={styles.name}
                onClick={() => {
                    accCtx.setModalShown(false);
                    cartCtx.setModalShown(true);
                    cartCtx.setProductViewed(props.item);
                }}>
                {name}
            </div>
            <div className={styles.price}>${price}</div>
        </div>
    );
};

export default Item;
