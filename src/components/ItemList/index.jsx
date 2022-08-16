import Item from "../Item";
import React from "react";
import { useEffect, useState } from "react";
import {collection, getDocs, getFirestore} from "firebase/firestore";



const ItemList = ({data = []}) =>{

    const [products, setProducts] = useState([]);
    const [categoryId, setCategoriId] = useState(1);

   useEffect( ()=> {
    const db = getFirestore();
    const itemsCollection = collection(db, "items");
    getDocs(itemsCollection).then(snapshot => {
        const data = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
        setProducts(data);
        console.log(data);
    })

   }, []);

    return(
        <div>  
            <h2> Item list</h2>
            <select onChange={1}categoria 1 (plantas)
            {(products.length === 0) ?
            <div>Cargando...</div>  :
             data.map(img => <Item key={img.id} info={img}/>)
        }
            
           
        
        </div>
       
     );
    
    
}

export default ItemList;