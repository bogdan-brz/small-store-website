import Image from "next/image";
import styles from "./ProductDetails.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
import { Fragment, useContext, useEffect, useRef, useState } from "react";
import CartContext from "../../context/cart-context";
import AccountContext from "../../context/account-context";
import { useSession } from "next-auth/react";

const ProductDetails = (props) => {
    const { data: session } = useSession();
    const cartCtx = useContext(CartContext);
    const accCtx = useContext(AccountContext);
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
    const [perItemList, setPerItemList] = useState([
        <div key={0} className={styles.perItemCol}>
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
        </div>,
    ]);
    useEffect(() => {
        console.log("useeffect");
        quantityRef.current.value = props.quantity || 0;
        let _perItemList = [];
        if (quantityRef.current && quantityRef.current.value > 1) {
            for (let i = 0; i < quantityRef.current.value; i++) {
                _perItemList.push(
                    <div key={i} className={styles.perItemCol}>
                        <div className={styles.perItemCounter}>{i + 1}</div>
                        {sizes && (
                            <div className={styles.size}>
                                <span className={styles.labelSpan}>size:</span>{" "}
                                <select>
                                    {sizes.map((size, i) => (
                                        <option key={i}>{size}</option>
                                    ))}
                                </select>
                            </div>
                        )}
                        {colors && (
                            <div className={styles.color}>
                                <span className={styles.labelSpan}>color:</span>{" "}
                                <select>
                                    {colors.map((colorObject, i) => (
                                        <option key={i}>
                                            {colorObject.color}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        )}
                    </div>
                );
            }
        } else {
            _perItemList = [
                <div key={0} className={styles.perItemCol}>
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
                </div>,
            ];
        }
        setPerItemList(_perItemList);
    }, [props.quantity]);

    const inLiked =
        accCtx.likedItems.filter((item) => item.productId == productId)
            .length == 1;
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
                            cartCtx.toggleInCart(props.product);
                        }}
                    />
                    <FontAwesomeIcon
                        className={`${styles.icon} ${styles.heartIcon} ${
                            inLiked ? styles.inLiked : ""
                        } ${!session ? styles.mustSignIn : ""}`}
                        icon={faHeart}
                        onClick={() => {
                            if (session)
                                accCtx.toggleInLikedItems(props.product);
                        }}
                    />
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.name}>
                    {name} <span className={styles.price}>${price}</span>
                </div>
                <div className={styles.brand}>{brand}</div>
                {size && <div className={styles.size}>size: {size}</div>}
                {color && <div className={styles.color}>color: {color}</div>}
                <div className={styles.perItemRow}>{perItemList}</div>

                <div className={styles.grow}></div>
                <div className={styles.quantity}>
                    quantity:{" "}
                    <input
                        className={styles.input}
                        ref={quantityRef}
                        onBlur={() => {
                            const inputValue = quantityRef.current.value || 0;
                            cartCtx.setItemQuantity(props.product, inputValue);
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
