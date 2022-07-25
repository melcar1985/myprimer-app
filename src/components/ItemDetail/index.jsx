
import './itemDetail.css';
import React from "react";

export const ItemDetail = ({data}) => {
    return(
    
    <div className="detalles">
        <div className="detalles2">
            <img className="foto"  src={data.Image} alt="" />
            <div className="nombre">
                <h3 >{data.title}</h3>
            </div>
        </div>
    </div>
    
    );
}

export default ItemDetail;