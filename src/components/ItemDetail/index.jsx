import './itemDetail.css';

import React, {useState} from "react";
import ItemCount from '../ItemCount';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../Context/CartContext';


export const ItemDetail = ({data}) => {
    const [goToCard, setGoToCart] = useState(false)
    const{addProduct} = useCartContext();
    
    const onAdd = (quantity) =>{
        setGoToCart(true);
        addProduct(data, quantity);
    }
    
return(
    
    <div className="detalles">
        <div className="detalles2">
            <img className="foto"  src={data.Image} alt="" />
            <div>
                <div className="contenido">
                    <h3 >{data.title}</h3>
                {
                    goToCard
                    ? <Link className='finalizar' to= '/cart'>Finalizar compra</Link>
                    :<ItemCount initial={1} stock={10} onAdd={onAdd}/>
                }
                <p className="precio">{ data.price}$ </p>
                </div>
            </div>
        </div>
    </div>
    
    );
}

export default ItemDetail;