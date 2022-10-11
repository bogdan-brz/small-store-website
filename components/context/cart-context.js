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
    const toggleInCart = (item) => {
        setCart((cart) => {
            let _itemInCart = cart.filter(
                (_item) => _item.productId == item.productId
            );
            if (_itemInCart.length > 0) {
                return cart.filter(
                    (_item) => _item.productId != item.productId
                );
            } else {
                let _cart = cart;
                _cart.push({ ...item, quantity: 1 });
                return [..._cart];
            }
        });
        return;
    };
    const setItemQuantity = (item, quantity) => {
        setCart((cart) => {
            if (quantity == 0) {
                return cart.filter(
                    (_item) => _item.productId != item.productId
                );
            } else {
                if (
                    cart.filter((_item) => _item.productId == item.productId)
                        .length == 1
                ) {
                    return cart.map((_item) => {
                        let _quantity = _item.quantity;
                        if (_item.productId == item.productId)
                            _quantity = quantity;
                        const updatedItem = {
                            ..._item,
                            quantity: _quantity,
                        };
                        console.log(
                            "-------------------------------- here ---------------------------------"
                        );
                        console.log(updatedItem);
                        return updatedItem;
                    });
                } else {
                    let _cart = cart;
                    const newItem = { ...item, quantity };
                    _cart.push(newItem);
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
