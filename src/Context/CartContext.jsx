import React, {useState, useContext }from "react";
const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);


const CartProvider = ({Children}) =>{ 
/*Logica para el carrito*/
    
    const addProducto = (item, quantity) => {
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


    
    const[cart, setCart] = useState([]);

    
     
    const isInCart = (id) => cart.find(product => product.id === id) ? true : false; 
    
    const clearCart = () => setCart([]);
    
    const removerProduct = (id) => setCart (cart.filter(product => product.id !== id));


    return (
        
            <CartContext.Provider value= {{
                isInCart,
                clearCart,
                removerProduct,
                addProducto
               
            }}>
                {Children}
            </CartContext.Provider>
        
    )

}

export default CartProvider;