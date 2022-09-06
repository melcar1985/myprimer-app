import React, {useState, useContext } from "react";
const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);


const CartProvider = ({children}) => { 
/*Logica para el carrito*/
     const[cart, setCart] = useState([]);
    
     const addProduct = (item, quantity) => {
        let newCart;
        let product = cart.find(product => product.id === item.id);
        if (product) {
            product.quantity += quantity;
            newCart = [...cart];
        }else{
            product = {...item, quantity: quantity};
            newCart = [...cart, product];
        }
        setCart(newCart)
        }
console.log('carrito: ', cart);
     
        const totalPrice = () => {
        return cart.reduce ((prev, act) => prev + act.quantity * act.price, 0)
     }
     
     const totalProducts = () => cart.reduce ((acumulador, productoActual) => acumulador + productoActual.quantity, 0 );


     const isInCart = (id) => cart.find(product => product.id === id) ? true : false; 
    
    const clearCart = () => setCart([]);
    const onApprove = () => setCart([]);
    
    const removeProduct = (id) => setCart (cart.filter(product => product.id !== id));


    return (
        
            <CartContext.Provider value= {{
                isInCart,
                clearCart,
                removeProduct,
                addProduct,
                totalPrice,
                totalProducts,
                onApprove,
                cart


            }}>
                {children}
            </CartContext.Provider>
        
    )

}

export default CartProvider;