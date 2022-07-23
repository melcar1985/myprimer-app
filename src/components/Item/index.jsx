import './item.css';

import React from 'react';

const Item =({info}) => {
    return(
        <a href='' className='img'>
            <img className='foto'   src={info.Image} alt="" />
            <p className='nombre'>{info.title}</p>
        </a>
    );
}

export default Item