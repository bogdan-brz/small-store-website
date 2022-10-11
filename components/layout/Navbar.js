import styles from "./Navbar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
    const router = useRouter();
    return <div className={styles.navbar}>OnlineStore</div>;
};

export default Navbar;
