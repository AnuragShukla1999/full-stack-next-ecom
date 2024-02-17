"use client";

import { useState, createContext } from "react";



export const GlobalContext = createContext(null);

export const initialCheckoutFormData = {
    shippingAddress: {},
    paymentMethod: "",
    totalPrice: 0,
    isPaid: false,
    paidAt: new Date(),
    isProcessing: true,
};


const protectedRoute = ["cart", "checkout", "account", "orders", "admin-view"];


const protectedAdminRoutes = [
    "/admin-view",
    "/admin-view/add-product",
    "/admin-view/all-products",
];


export default function GlobalState({ children }) {
    const [showNavModal, setShowNavModal] = useState(false);
    const [pageLevelLoader, setPageLevelLoader] = useState(true);
    const [componentLevelLoader, setComponentLevelLoader] = useState({
        loading: false,
        id: "",
    });
    const [isAuthUser, setIsAuthUser] = useState(null);
    const [user, setUser] = useState(null);
    const [currentUpdatedProduct, setCurrentUpdatedProduct] = useState(null);

    const [showCartModal, setShowCartModal] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [addresses, setAddresses] = useState([]);
    const [addressFormData, setAddressFormData] = useState({
        fullName: "",
        city: "",
        country: "",
        postalCode: "",
        address: "",
    });

    const [checkoutFormData, setCheckoutFormData] = useState(
        initialCheckoutFormData
    );


    return (
        <GlobalContext.Provider
            value={{
                showNavModal,
                setShowNavModal,
                pageLevelLoader,
                setPageLevelLoader,
                isAuthUser,
                setIsAuthUser,
                user,
                setUser,

            }}
        >
            {children}
        </GlobalContext.Provider>
    );
}