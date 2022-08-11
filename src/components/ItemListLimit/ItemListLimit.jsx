import { useEffect, useState } from "react";
import {collection, getDocs, getFirestore, query, where} from "firebase/firestore";


const ItemListLimit = () => {

    const [limit, setLimit] = useState(3000)

    const [products, setProducts] = useState([]);

   useEffect( ()=> {
    const db = getFirestore();
    const itemsCollection = collection(db, "items");
    const q = query (itemsCollection, where("price", "<", limit));
    getDocs(q).then(snapshot => {
        const data = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
        setProducts(data);
    
    });

   }, [limit]);

    return(
        <div>
           <h2>ItemListLimit</h2> 
        
        <input type="number" value = {limit} onChange={(ev)=> setLimit(Number(ev.target.value))} />
        {(products.length === 0) ?
            <div>Cargando...</div>  :
             products.map(product => <div key={product.id}> {product.title} - {product.price} $</div>)
        }
    </div>
    
        )
}

export default ItemListLimit;