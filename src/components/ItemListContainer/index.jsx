import ItemCount from '../ItemCount';
import ItemList from '../ItemList';
import React, {useState, useEffect} from 'react';
import Title from '../Title';



const films ={
    id: 1, Image:"https://cdn.pixabay.com/photo/2012/03/01/00/55/garden-19830_960_720.jpg"
}

export const ItemListContainer = ({texto}) => {

   const [data, setData] = useState([]);

   useEffect(() =>{
     const getData = new Promise(resolve =>{
       setTimeout(() =>{
        resolve (films);
       }, 3000);
    });
    getData.then(res => setData(res)); 


   }, [])

   

    const onAdd = (quantity) =>{
        console.log(`Compraste ${quantity} unidades`);
    }

    return(
        <>
        <Title greeting={texto} />
        <ItemCount initial={1} stock={10} onAdd={onAdd}/>
        <ItemList data={data}/>
        </>
        
    );

}

export default ItemListContainer;