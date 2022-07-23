import ItemCount from '../ItemCount';
import ItemList from '../ItemList';
import React, {useState, useEffect} from 'react';
import Title from '../Title';



const images =[
    {id: 1, Image:"https://www.elmueble.com/medio/2019/10/09/guzmania-y-su-peculiar-inflorescencia_d91fa920_1333x2000.jpg", title:"GUZMANIA Y SU PECULIAR INFLORESCENCIA"},
    {id: 2, Image:"https://www.elmueble.com/medio/2019/10/09/begonia-o-flor-de-azucar_e1452695_1333x2000.jpg", title:"BEGONIA O FLOR DE AZÚCAR"},
    {id: 3, Image:"https://www.elmueble.com/medio/2019/10/09/hibiscus-una-aroma-inigualable_6f7a5047_800x800.jpg", title:"HIBISCUS, UNA AROMA INIGUALABLE"},
    {id: 4, Image:"https://www.elmueble.com/medio/2019/10/09/espatifilo-el-contraste-del-blanco-y-el-verde_6cb433a4_1000x1000.jpg", title:"ESPATIFILO, EL CONTRASTE DEL BLANCO Y EL VERDE"},
    {id: 5, Image:"https://www.elmueble.com/medio/2019/10/09/orquideas-las-mas-bella_74a52907_1600x2000.jpg", title:"ORQUÍDEAS, LAS MÁS BELLA"},
    {id: 6, Image:"https://www.elmueble.com/medio/2019/10/09/poinsettia-o-flor-de-pascua_68bbb27e_1968x2000.jpg", title:"POINSETTIA O FLOR DE PASCUA"},
    {id: 7, Image:"https://www.elmueble.com/medio/2019/10/09/violeta-africana-o-saintpaulia_5a2cc539_2000x1500.jpg", title:"VIOLETA AFRICANA O SAINTPAULIA"},
    {id: 8, Image:"https://www.elmueble.com/medio/2019/10/09/anturio-el-rojo-mas-intenso_29ff38b8_1500x2000.jpg", title:"ANTURIO, EL ROJO MÁS INTENSO"}
]

export const ItemListContainer = ({texto}) => {
   const [data, setData] = useState([]);

   useEffect(() => {
    const getData = new Promise(resolve => {
        setTimeout(() => {
            resolve(images);
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