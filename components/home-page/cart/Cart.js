import styles from "./Cart.module.css";
import Item from "./Item";

const Cart = (props) => {
    let total = 0;
    props.cart.forEach((item) => {
        total += item.quantity * item.price;
    });
    return (
        <div className={styles.cart}>
            <h2 className={styles.title}>Your Cart:</h2>
            <div className={styles.carousel}>
                {props.cart.map((item, i) => (
                    <Item key={i} item={item} />
                ))}
                {props.cart.length == 0 && <div>your cart is empty</div>}
            </div>
            <div className={styles.total}>Total: ${total.toFixed(2)}</div>
            <button className={styles.checkoutBtn}>Proceed to Checkout</button>
        </div>
    );
};

export default Cart;
