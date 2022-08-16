import Item from "../Item";
import React from "react";
import { useEffect, useState } from "react";
import {collection, getDocs, getFirestore, limit, query, where} from "firebase/firestore";



const ItemList = ({data = []}) =>{

    const [products, setProducts] = useState([]);
    const [categoryId, setCategoriId] = useState(1);

    const categorySelectHandler = (ev) => {
        setCategoriId(ev.target.value)
    }

   useEffect( ()=> {
    const db = getFirestore();

    const itemsCollection = collection(db, "item");
    const q = query(itemsCollection, where("categoryId", "==", categoryId));
    
    getDocs(q).then(snapshot => {
        const docs = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
        setProducts(data);

    })

   }, [categoryId]);

    return(
        <div>  
            <h2>Item List</h2>
            <select onChange={categorySelectHandler}>
                <option value={1}>Categoria 1 (Plantas)</option>
                <option value={2}>Categoria 2 (Macetas)</option>
                <option value={3}>Categoria 3 (regala)</option>

            </select>
            {categoryId}
            
            <input type="categoryId" value = {limit} onChange={(ev)=> setProducts((ev.target.value))} />
        {(products.length === 0) ?
            <div>Cargando...</div>  :
             products.map(product => <div key={product.id}> {product.title} - {product.price} $</div>)
        }
        
            
           
        
        </div>
       
     );
    
    
}

export default ItemList;