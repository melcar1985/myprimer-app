
import './itemDetail.css';
import React from "react";

export const ItemDetail = ({data}) => {
    return(
    
    <div className="detalles">
        <div className="detalles2">
            <img className="foto"  src={data.Image} alt="" />
            <div>
                <h3 >{data.title}</h3>
                <p className='precio'>{ data.price}$ </p>
            </div>
        </div>
    </div>
    
    );
}

export default ItemDetail;