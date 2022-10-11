import Image from "next/image";
import styles from "./Item.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import CartContext from "../../context/cart-context";
import AccountContext from "../../context/account-context";
import { useSession } from "next-auth/react";

const Item = (props) => {
    const { productId, name, brand, price, images } = props.item;
    const { data: session } = useSession();
    const cartCtx = useContext(CartContext);
    const accCtx = useContext(AccountContext);
    const inCart =
        cartCtx.cart.filter((item) => item.productId == productId).length == 1;
    const inLiked =
        accCtx.likedItems.filter((item) => item.productId == productId)
            .length == 1;
    return (
        <div className={styles.item}>
            <div className={styles.main}>
                <div
                    className={styles.image}
                    onClick={() => {
                        cartCtx.setModalShown(true);
                        cartCtx.setProductViewed(props.item);
                    }}>
                    <Image src={images[0]} layout="fill" />
                </div>
                <div
                    onClick={() => {
                        cartCtx.setModalShown(true);
                        cartCtx.setProductViewed(props.item);
                    }}
                    className={styles.nameAndPrice}>
                    {name} -{" "}
                    <span className={styles.price}>${price.toFixed(2)}</span>
                </div>
                <div className={styles.brand}>{brand}</div>
            </div>
            <div className={styles.sidebar}>
                <FontAwesomeIcon
                    className={`${styles.icon} ${inCart ? styles.inCart : ""}`}
                    icon={faCartShopping}
                    onClick={() => {
                        cartCtx.toggleInCart(props.item);
                    }}
                />
                <div className={!session ? styles.mustSignIn : ""}>
                    <FontAwesomeIcon
                        className={`${styles.icon} ${styles.heartIcon} ${
                            inLiked ? styles.inLiked : ""
                        }`}
                        icon={faHeart}
                        onClick={() => {
                            if (session) accCtx.toggleInLikedItems(props.item);
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Item;
