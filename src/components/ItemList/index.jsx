import Item from "../Item";
import React from "react";
import { useEffect, useState } from "react";
import {collection, getDocs, getFirestore} from "firebase/firestore";



 const ItemList = () =>{
 
    const [data, setData] = useState([]);

   useEffect( ()=> {
    const db = getFirestore();
    
    
    
    const itemsCollection = collection(db, "items");
    getDocs(itemsCollection).then(snapshot => {
    const data = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
    setData(data);
        
     })

   }, []);

    return(
       
     data.map(img => <Item key={img.id} info={img}/>)
       
        );
    
}

export default ItemList;

