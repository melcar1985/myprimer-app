import './item.css';

import {Link} from 'react-router-dom';
import React from 'react';



 const Item =({info}) => {
 
     return(
        <Link to={`/detalle/${info.Image}`} className="">
            <img className='foto-portada'  src={info.Image} alt="" />
            <p className="foto-portada">{info.title}</p>
        </Link>
    );
}

export default Item