import styles from "./Navbar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import CartContext from "../context/cart-context";
import AccountContext from "../context/account-context";

const Navbar = () => {
    const cartCtx = useContext(CartContext);
    let itemNumber = 0;
    cartCtx.cart.forEach((item) => {
        itemNumber += parseInt(item.quantity);
    });
    const accCtx = useContext(AccountContext);
    return (
        <div className={styles.navbar}>
            <div className={styles.navgroup}>
                <span className={styles.navItem}>OnlineStore</span>
            </div>
            <div className={styles.navgroup}>
                <span
                    data-tooltip={itemNumber}
                    onClick={() => cartCtx.setModalShown(true)}
                    className={styles.iconItem + " " + styles.cartIcon}>
                    <FontAwesomeIcon
                        className={styles.icon}
                        icon={faCartShopping}
                    />
                </span>
                <span
                    onClick={() => accCtx.setModalShown(true)}
                    className={styles.iconItem}>
                    <FontAwesomeIcon className={styles.icon} icon={faUser} />
                </span>
            </div>
        </div>
    );
};

export default Navbar;
