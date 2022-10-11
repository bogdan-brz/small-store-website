import React, { useReducer, useState } from "react";

const CartContext = React.createContext({
    cart: [],
    toggleInCart: () => {},
    setItemQuantity: () => {},
    modalShown: false,
    productViewed: false,
    setProductViewed: () => {},
    setModalShown: () => {},
});

const CartContextProvider = (props) => {
    const [cart, setCart] = useState([]);
    const toggleInCart = (productId) => {
        setCart((cart) => {
            let _itemInCart = cart.filter(
                (item) => item.productId == productId
            );
            if (_itemInCart.length > 0) {
                return cart.filter((item) => item.productId != productId);
            } else {
                let _cart = cart;
                _cart.push({ productId, quantity: 1 });
                return [..._cart];
            }
        });
        return;
    };
    const setItemQuantity = (productId, quantity) => {
        setCart((cart) => {
            if (quantity == 0) {
                return cart.filter((item) => item.productId != productId);
            } else {
                if (
                    cart.filter((item) => item.productId == productId).length ==
                    1
                ) {
                    return cart.map((item) => {
                        let _quantity = item.quantity;
                        if (item.productId == productId) _quantity = quantity;
                        return {
                            productId: item.productId,
                            quantity: _quantity,
                        };
                    });
                } else {
                    let _cart = cart;
                    _cart.push({ productId, quantity });
                    return [..._cart];
                }
            }
        });
        return;
    };
    const [modalShown, setModalShown] = useState(false);
    const [productViewed, setProductViewed] = useState(null);
    return (
        <CartContext.Provider
            value={{
                cart: cart,
                toggleInCart: toggleInCart,
                setItemQuantity: setItemQuantity,
                modalShown: modalShown,
                productViewed: productViewed,
                setProductViewed: setProductViewed,
                setModalShown: setModalShown,
            }}>
            {props.children}
        </CartContext.Provider>
    );
};

export { CartContextProvider };

export default CartContext;
