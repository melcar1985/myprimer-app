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
            TOTAL: $  {totalPrice()} <Link className="COMPRA" to='/page'> COMPRAR</Link>
            </h4>
        </div>
        
        
        </>
    )
}

export default Cart;