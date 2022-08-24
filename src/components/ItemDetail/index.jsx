import './itemDetail.css';

import React, {useState} from 'react';
import {useCartContext} from '../../Context/CartContext';
import ItemCount from '../ItemCount';
import { Link } from 'react-router-dom';



export const ItemDetail = ({data}) => {
    const [goToCard, setGoToCart] = useState(false)
    const{addProduct} = useCartContext();
    
    const onAdd = (quantity) =>{
        setGoToCart(true);
        addProduct(data, quantity);
    }
    
return(
    
    <div className='detalles'>
         <div className='detalles2'>
        <img className='foto'  src={data.Image} alt="" />
             <div>
            <h3>{data.title}</h3>
            <p className='detalles'>
                <h3>{data.detalleId}</h3>
                </p>
                {
                    goToCard
                    ? <Link className='finalizar' to= '/cart'>Finalizar compra</Link>
                    :<ItemCount initial={1} stock={5} onAdd={onAdd}/>
                 }
                <p className='precio'>{ data.price}</p>
            </div>
        </div>
    </div>
    
    );
}

export default ItemDetail;