import './item.css';
import {Link} from 'react-router-dom';
import React from 'react';



 const Item =({info}) => {
 
     return(
        <div className='contenedor'>
        <Link  to={`/detalle/${info.id}`} className='nombre'> 
            <img className='foto-portada'  src={info.Image} alt="" />
            <p className='titulo-portada'>{info.title}</p>
        </Link>
        </div>
    );
}

export default Item