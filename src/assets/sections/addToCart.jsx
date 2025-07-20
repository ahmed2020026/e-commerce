import { createContext, useContext, useState, useEffect, useMemo } from "react";
import toast from "react-hot-toast";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const storedCart = localStorage.getItem("cartItems");
        if (storedCart) {
            setCartItems(JSON.parse(storedCart));
        }
    }, []);


    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    const calcTatalPrice = useMemo(() => {
        const prices =  cartItems.map(ele => {
            return ele.discount? ele.price - ele.price * ele.discount / 100: ele.price
        }) 
        return prices.reduce((acc , current) => acc + current,0)
    } ,[cartItems])
    const notify = (event) => toast.success(event);

    const AddToCart = (product) => {
        notify('Success to adding')
        setCartItems(prevItems => {
            const existingItem = prevItems.find(item => item.id === product.id);

            if (existingItem) {
                return prevItems.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...prevItems, { ...product, quantity: 1 }];
            }
        });
    };

    const removeFromCart = (id) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id));
        notify('Success to remove')
    };

    const clearCart = () => {
        setCartItems([]);
    };

    return (
        <CartContext.Provider value={{ cartItems, AddToCart, removeFromCart, clearCart, calcTatalPrice }}>
            {children}
        </CartContext.Provider>
    );
};

export const getProductCart = () => useContext(CartContext);
