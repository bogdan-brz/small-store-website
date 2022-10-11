import { useContext, useEffect, useState } from "react";
import styles from "./Account.module.css";
import { useSession, signIn, signOut } from "next-auth/react";
import Item from "./Item";
import AccountContext from "../../context/account-context";

const Account = () => {
    const { data: session } = useSession();
    const [userData, setUserData] = useState(null);
    const accCtx = useContext(AccountContext);
    useEffect(() => {
        // fetch data
        if (session)
            setUserData({
                likedItems: [
                    {
                        name: "cool watch",
                        brand: "that one good brand",
                        color: "black",
                        sizes: ["S", "M"],
                        images: [
                            "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
                            "https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2198&q=80",
                            "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8d2F0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
                        ],
                        price: 109.99,
                        productId: 0,
                    },
                ],
                previousPurchases: [
                    {
                        name: "nice watch",
                        brand: "that one good brand",
                        sizes: ["S", "M"],
                        color: "blue",
                        images: [
                            "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8d2F0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
                            "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
                            "https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2198&q=80",
                        ],
                        price: 129.99,
                        productId: 1,
                    },
                ],
            });
    }, []);
    return (
        <div className={styles.account}>
            <h2 className={styles.title}>Your Account</h2>
            {session ? (
                <button className={styles.authBtn} onClick={() => signOut()}>
                    Sign Out
                </button>
            ) : (
                <button className={styles.authBtn} onClick={() => signIn()}>
                    Sign In
                </button>
            )}
            {userData ? (
                <div className={styles.main}>
                    <div className={styles.liked}>
                        <h4 className={styles.subtitle}>Liked Items:</h4>
                        {accCtx.likedItems.map((item, i) => (
                            <Item key={i} item={item} />
                        ))}
                    </div>
                    <div className={styles.previous}>
                        <h4 className={styles.subtitle}>Previous Purchases:</h4>
                        {userData.previousPurchases.map((item, i) => (
                            <Item key={i} item={item} />
                        ))}
                    </div>
                </div>
            ) : (
                <p>You will see your liked items and previous purchases</p>
            )}
        </div>
    );
};

export default Account;
