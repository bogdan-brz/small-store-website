import styles from "./Info.module.css";
import Map from "./Map";

const Info = () => {
    return (
        <div className={styles.info}>
            <h2 className={styles.title}>Store Information</h2>
            <h4 className={styles.subtitle}>Hours:</h4>
            <div className={styles.hours}>Monday - Friday: 12pm - 9pm</div>
            <div className={styles.hours}>Saturday: 2pm - 10pm</div>
            <h4 className={styles.subtitle}>Contact:</h4>
            <div className={styles.contact}>email - ouremail@ourdomain.com</div>
            <div className={styles.contact}>phone number - 888 888 8888</div>
            <Map />
        </div>
    );
};

export default Info;
