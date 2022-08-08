import React from "react";
import {useCartContext} from '../../Context/CartContext';

export const CartWidget =() =>{
    const {totalProducts} = useCartContext(); 
   
    return(
        <>
        
        <i className="bi bi-cart3"></i>
        <span> {totalProducts() || ''} </span>
        </>
        
     );
}

export default CartWidget;