import styles from "./HomePage.module.css";
import Info from "./info/Info";
import Carousel from "./shop/Carousel";

const HomePage = (props) => {
    return (
        <div className={styles.home}>
            <Carousel shop_items={props.shop_items} />
            <Info />
        </div>
    );
};

export default HomePage;
