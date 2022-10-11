import Image from "next/image";
import styles from "./ProductDetails.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
import { Fragment, useContext, useEffect, useRef } from "react";
import CartContext from "../../context/cart-context";

const ProductDetails = (props) => {
    const ctx = useContext(CartContext);
    const quantityRef = useRef(props.quantity);
    const {
        productId,
        name,
        brand,
        price,
        images,
        size,
        sizes,
        color,
        colors,
    } = props.product;
    useEffect(() => {
        quantityRef.current.value = props.quantity || 0;
    }, [props.quantity]);
    return (
        <div className={styles.details}>
            <div className={styles.left}>
                <div className={styles.image}>
                    <Image src={images[0]} layout="fill" />{" "}
                </div>
                <div className={styles.icons}>
                    <FontAwesomeIcon
                        className={`${styles.icon} ${
                            props.quantity != 0 && props.quantity != null
                                ? styles.inCart
                                : ""
                        }`}
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
            <div className={styles.right}>
                <div className={styles.name}>
                    {name} <span className={styles.price}>{price}</span>
                </div>
                <div className={styles.brand}>{brand}</div>
                {sizes && (
                    <div className={styles.size}>
                        size:{" "}
                        <select>
                            {sizes.map((size, i) => (
                                <option key={i}>{size}</option>
                            ))}
                        </select>
                    </div>
                )}
                {colors && (
                    <div className={styles.color}>
                        color:{" "}
                        <select>
                            {colors.map((colorObject, i) => (
                                <option key={i}>{colorObject.color}</option>
                            ))}
                        </select>
                    </div>
                )}
                {size && <div className={styles.size}>color: {size}</div>}
                {color && <div className={styles.color}>color: {color}</div>}
                <div className={styles.grow}></div>
                <div className={styles.quantity}>
                    quantity:{" "}
                    <input className={styles.input} ref={quantityRef} />
                    <button
                        className={styles.enterBtn}
                        onClick={() => {
                            ctx.setItemQuantity(
                                productId,
                                quantityRef.current.value
                            );
                        }}>
                        Update
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
