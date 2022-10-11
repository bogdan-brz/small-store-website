import { createContext, useState } from "react";
import { signIn, signOut } from "next-auth/react";

const AccountContext = createContext({
    modalShown: false,
    setModalShown: () => {},
    likedItems: [],
    toggleInLikedItems: () => {},
});

const AccountContextProvider = (props) => {
    const [modalShown, setModalShown] = useState(false);
    const [likedItems, setLikedItems] = useState([]);
    const toggleInLikedItems = (item) => {
        setLikedItems((likedItems) => {
            let _itemInLikedItems = likedItems.filter(
                (_item) => _item.productId == item.productId
            );
            if (_itemInLikedItems.length > 0) {
                return likedItems.filter(
                    (_item) => _item.productId != item.productId
                );
            } else {
                let _likedItems = likedItems;
                _likedItems.push(item);
                return [..._likedItems];
            }
        });
        return;
    };
    return (
        <AccountContext.Provider
            value={{
                modalShown: modalShown,
                setModalShown: setModalShown,
                likedItems: likedItems,
                toggleInLikedItems: toggleInLikedItems,
            }}>
            {props.children}
        </AccountContext.Provider>
    );
};

export default AccountContext;
export { AccountContextProvider };
