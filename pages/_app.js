import { Fragment } from "react";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import "../styles/globals.css";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { CartContextProvider } from "../components/context/cart-context";
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
    return (
        <CartContextProvider>
            <Navbar />
            <Component {...pageProps} />
            <Footer />
        </CartContextProvider>
    );
}

export default MyApp;
