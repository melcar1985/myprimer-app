import Item from "../Item";
import React from "react";


const ItemList = ({data = []}) =>{
    return(
    
   data.map(img => <Item key={img.id} info={img}/>)
    );
    
    
}

export default ItemList;