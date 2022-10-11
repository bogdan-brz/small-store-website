import { Fragment, useEffect, useState } from "react";
import HomePage from "../components/home-page/HomePage";
import { useContext } from "react";
import CartContext from "../components/context/cart-context";
import Modal from "../components/layout/Modal";
import ProductDetails from "../components/home-page/cart/ProductDetails";
import Cart from "../components/home-page/cart/Cart";

const shop_items = [
    {
        category: "Watches",
        items: [
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
            {
                name: "smallwatch",
                brand: "brnd",
                sizes: ["S", "M", "L"],
                images: [
                    "https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2198&q=80",
                    "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8d2F0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
                    "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
                ],
                price: 134.49,
                productId: 2,
            },
            {
                name: "cool watch 2",
                brand: "that one good brand",
                sizes: ["S", "M"],
                color: "white",
                images: [
                    "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
                    "https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2198&q=80",
                    "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8d2F0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
                ],
                price: 109.99,
                productId: 3,
            },
            {
                name: "nice watch 2",
                brand: "that one good brand",
                sizes: ["S", "M"],
                images: [
                    "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8d2F0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
                    "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
                    "https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2198&q=80",
                ],
                price: 109.99,
                productId: 4,
            },
            {
                name: "smallwatch 2",
                brand: "brnd",
                sizes: ["S", "M", "L"],
                images: [
                    "https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2198&q=80",
                    "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8d2F0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
                    "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
                ],
                price: 109.99,
                productId: 5,
            },
        ],
    },
    {
        category: "Second category",
        items: [
            {
                name: "cool watch",
                brand: "that one good brand",
                size: "M",
                colors: [
                    { color: "white", imgId: 0 },
                    { color: "green", imgId: 1 },
                    { color: "black", imgId: 2 },
                ],
                images: [
                    "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
                    "https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2198&q=80",
                    "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8d2F0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
                ],
                price: 109.99,
                productId: 6,
            },
            {
                name: "nice watch",
                brand: "that one good brand",
                colors: [
                    { color: "white", imgId: 0 },
                    { color: "green", imgId: 1 },
                    { color: "blue", imgId: 2 },
                    { color: "black", imgId: null },
                ],
                images: [
                    "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8d2F0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
                    "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
                    "https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2198&q=80",
                ],
                price: 109.99,
                productId: 7,
            },
            {
                name: "smallwatch",
                brand: "brnd",
                sizes: ["S", "M", "L"],
                images: [
                    "https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2198&q=80",
                    "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8d2F0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
                    "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
                ],
                price: 109.99,
                productId: 8,
            },
        ],
    },
    {
        category: "Watches",
        items: [
            {
                name: "cool watch",
                brand: "that one good brand",
                sizes: ["S", "M"],
                images: [
                    "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
                    "https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2198&q=80",
                    "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8d2F0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
                ],
                price: 109.99,
                productId: 9,
            },
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
                productId: 10,
            },
            {
                name: "smallwatch",
                brand: "brnd",
                sizes: ["S", "M", "L"],
                images: [
                    "https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2198&q=80",
                    "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8d2F0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
                    "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
                ],
                price: 134.49,
                productId: 11,
            },
            {
                name: "cool watch 2",
                brand: "that one good brand",
                sizes: ["S", "M"],
                color: "white",
                images: [
                    "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
                    "https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2198&q=80",
                    "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8d2F0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
                ],
                price: 109.99,
                productId: 12,
            },
            {
                name: "nice watch 2",
                brand: "that one good brand",
                sizes: ["S", "M"],
                images: [
                    "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8d2F0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
                    "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
                    "https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2198&q=80",
                ],
                price: 109.99,
                productId: 13,
            },
            {
                name: "smallwatch 2",
                brand: "brnd",
                sizes: ["S", "M", "L"],
                images: [
                    "https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2198&q=80",
                    "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8d2F0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
                    "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
                ],
                price: 109.99,
                productId: 14,
            },
        ],
    },
    {
        category: "Second category",
        items: [
            {
                name: "cool watch",
                brand: "that one good brand",
                size: "M",
                colors: [
                    { color: "white", imgId: 0 },
                    { color: "green", imgId: 1 },
                    { color: "black", imgId: 2 },
                ],
                images: [
                    "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
                    "https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2198&q=80",
                    "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8d2F0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
                ],
                price: 109.99,
                productId: 15,
            },
            {
                name: "nice watch",
                brand: "that one good brand",
                colors: [
                    { color: "white", imgId: 0 },
                    { color: "green", imgId: 1 },
                    { color: "blue", imgId: 2 },
                    { color: "black", imgId: null },
                ],
                images: [
                    "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8d2F0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
                    "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
                    "https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2198&q=80",
                ],
                price: 109.99,
                productId: 16,
            },
            {
                name: "smallwatch",
                brand: "brnd",
                sizes: ["S", "M", "L"],
                images: [
                    "https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2198&q=80",
                    "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8d2F0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
                    "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
                ],
                price: 109.99,
                productId: 17,
            },
        ],
    },
];

const Home = () => {
    const ctx = useContext(CartContext);
    const [isBrowser, setIsBrowser] = useState(false);
    useEffect(() => {
        setIsBrowser(true);
    }, []);
    if (isBrowser) {
        if (ctx.modalShown) {
            document.body.classList.add("fixHeight");
        } else {
            document.body.classList.remove("fixHeight");
        }
    }
    const findProductById = (id) => {
        let product = null;
        shop_items.forEach((el) => {
            el.items.forEach((_item) => {
                if (_item.productId == id) product = _item;
            });
        });
        return product;
    };

    let cart = [];
    ctx.cart.forEach((item) => {
        cart.push({
            quantity: item.quantity,
            product: findProductById(item.productId),
        });
    });
    const productViewed = findProductById(ctx.productViewed);
    let productViewedQuantity = productViewed
        ? ctx.cart.filter((item) => item.productId == ctx.productViewed)
              .length == 1
            ? ctx.cart.filter((item) => item.productId == ctx.productViewed)[0]
                  .quantity
            : null
        : null;
    return (
        <Fragment>
            <HomePage shop_items={shop_items} />
            {ctx.modalShown && isBrowser && (
                <Modal
                    onClose={() => {
                        ctx.setModalShown(false);
                        ctx.setProductViewed(null);
                    }}>
                    {productViewed && (
                        <ProductDetails
                            product={productViewed}
                            quantity={productViewedQuantity}
                        />
                    )}
                    <Cart cart={cart} />
                </Modal>
            )}
        </Fragment>
    );
};

export default Home;
