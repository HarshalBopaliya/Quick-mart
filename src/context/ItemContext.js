import React, { createContext, useState } from 'react';

// Create Context
export const ItemContext = createContext();

const CustomItemContext = ({ children }) => {
    const [itemsInCart, setItemsInCart] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [items, setitems] = useState([]);

    // Function to add a item to the cart
    const addItemToCart = (item) => {
        setItemsInCart((prev) => prev + 1);
        setTotalPrice((prev) => prev + item.price);      
        setTimeout(() => {
            alert("Item has been added to the cart!","success");
        }, 1000);           
        
    };

    // Function to remove a item from the cart
    const removeItemFromCart = (item) => {
        setItemsInCart((prev) => Math.max(0, prev - 1));
        setTotalPrice((prev) => Math.max(0, prev - item.price));
        setTimeout(() => {
            alert("Item has been removed to the cart!","warning");
        }, 1000);   
       
    };

    return (
        <ItemContext.Provider value={{ itemsInCart, totalPrice, items, setitems, addItemToCart, removeItemFromCart }}>
            {children}
        </ItemContext.Provider>
    );
};

export default CustomItemContext;


