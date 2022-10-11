import styles from "./HomePage.module.css";
import Info from "./info/Info";
import Carousel from "./shop/Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const HomePage = (props) => {
    return (
        <div className={styles.home}>
            <h1 className={styles.sectionTitle}>
                Shop Online <FontAwesomeIcon icon={faChevronDown} />
            </h1>
            <Carousel shop_items={props.shop_items} />
            <h2 className={styles.sectionTitle}>
                Shop In Store <FontAwesomeIcon icon={faChevronDown} />
            </h2>
            <Info />
        </div>
    );
};

export default HomePage;
