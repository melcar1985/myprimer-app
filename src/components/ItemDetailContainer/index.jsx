import React, { useState, useEffect} from "react";

import ItemDetail from "../ItemDetail";

const img= {
    id: 1, Image:"https://www.elmueble.com/medio/2019/10/09/guzmania-y-su-peculiar-inflorescencia_d91fa920_1333x2000.jpg", 
    title:"GUZMANIA Y SU PECULIAR INFLORESCENCIA"};
    
    const img2= {id: 2, Image:"https://www.elmueble.com/medio/2019/10/09/begonia-o-flor-de-azucar_e1452695_1333x2000.jpg", 
    title:"BEGONIA O FLOR DE AZÚCAR"}
 
    export const ItemDetailContainer = () => {
    
        const [data, setData] = useState({});

    useEffect(() => {
    const getData = new Promise(resolve => {
        setTimeout(() => {
            resolve(img);
        }, 3000);
    });
    getData.then(res => setData(res));

   }, [])

   return(
    
    < ItemDetail data={data}/>
    
    );
}

export default ItemDetailContainer;