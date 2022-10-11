import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <nav className={styles.footer}>
            <div className={styles.foot}>&copy;OnlineStore</div>
        </nav>
    );
};

export default Footer;
