import Item from "../Item";
import React from "react";
import { useEffect, useState } from "react";
import {collection, getDocs, getFirestore} from "firebase/firestore";



 const ItemList = () =>{
 
    const [products, setProducts] = useState([]);
    


   useEffect( ()=> {
    const db = getFirestore();
    
    const itemsCollection = collection(db, "items" );
    
    getDocs(itemsCollection).then(snapshot => {
    const data = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
    setProducts(data);
        
     })

   }, []);

    return(
       
     products.map(img => <Item key={img.id} info={img}/>)
       
        );
    
}

export default ItemList;

