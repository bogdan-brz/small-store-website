import { Fragment } from "react";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { CartContextProvider } from "../components/context/cart-context";
import { AccountContextProvider } from "../components/context/account-context";
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
    return (
        <SessionProvider session={pageProps.session}>
            <AccountContextProvider>
                <CartContextProvider>
                    <Navbar />
                    <Component {...pageProps} />
                    <Footer />
                </CartContextProvider>
            </AccountContextProvider>
        </SessionProvider>
    );
}

export default MyApp;
