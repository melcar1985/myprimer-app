import React from "react";
import { useCartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';
import ItemCart from '../ItemCart';
import './Cart.css'


const Cart = () => {
 
    const { cart, totalPrice} = useCartContext();

    if (cart.length === 0) {
        
        return (
            <>
            <p>Carrito vacio</p>
            <Link to='/'> AGREGAR PRODUCTOS AL CARRITO</Link>
            </>
        );
    }

    return(
        <>
        
        {
            cart.map(product => <ItemCart key={product.id} product={product} />)
        }
        <h4 className="total">
            TOTAL: ${totalPrice()}
        </h4>
        <button className="COMPRA" onClick> COMPRAR</button>
        
        </>
    )
}

export default Cart;