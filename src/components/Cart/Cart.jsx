import React from "react";
import { useCartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';
import ItemCart from '../ItemCart';
import './Cart.css'
import ReactDOM from "react-dom"

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

const Cart = () => {
 
    const { cart, totalPrice} = useCartContext();

    if (cart.length === 0) {
        
        return (
            <>
            <p>Carrito vacio</p>
            <button><Link className="AGREGAR PRODUCTOS"  to='/'> AGREGAR PRODUCTOS AL CARRITO</Link></button>
            </>
        );
    }

    return(
        <>
        
        {
            cart.map(product => <ItemCart key={product.id} product={product} />)
        }
        <div> 
            <h4 className="total">
            TOTAL: $  {totalPrice()} <Link className="COMPRA" to='/pago'> COMPRAR</Link>
            </h4>
        </div>
        
        
        </>
    )
}

export default Cart;