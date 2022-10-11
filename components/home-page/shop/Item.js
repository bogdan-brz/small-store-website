import Image from "next/image";
import styles from "./Item.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import CartContext from "../../context/cart-context";

const Item = (props) => {
    const { productId, name, brand, price, images } = props.item;
    const ctx = useContext(CartContext);
    const showModal = () => {
        ctx.setModalShown(true);
        ctx.setProductViewed(productId);
    };
    const inCart =
        ctx.cart.filter((item) => item.productId == productId).length == 1;
    return (
        <div className={styles.item}>
            <div className={styles.main}>
                <div className={styles.image} onClick={showModal}>
                    <Image src={images[0]} layout="fill" />
                </div>
                <div onClick={showModal} className={styles.nameAndPrice}>
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
                        ctx.toggleInCart(productId);
                    }}
                />
                <FontAwesomeIcon
                    className={styles.icon + " " + styles.heartIcon}
                    icon={faHeart}
                />
            </div>
        </div>
    );
};

export default Item;
