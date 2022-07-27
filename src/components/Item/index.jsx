import './item.css';
import {Link} from 'react-router-dom';
import React from 'react';

const Item =({info}) => {
    return(
        <Link to={`/detalle/${info.id}`} className='img'>
            <img className='foto'   src={info.Image} alt="" />
            <p className='nombre'>{info.title}</p>
        </Link>
    );
}

export default Item