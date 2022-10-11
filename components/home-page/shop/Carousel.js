import styles from "./Carousel.module.css";
import Category from "./Category";

const Carousel = (props) => {
    return (
        <div className={styles.carousel}>
            {props.shop_items.map((el, i) => (
                <Category key={i} name={el.category} items={el.items} />
            ))}
        </div>
    );
};

export default Carousel;
