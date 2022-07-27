import ItemCount from '../ItemCount';
import ItemList from '../ItemList';
import React, {useState, useEffect} from 'react';
import Title from '../Title';
import {useParams} from 'react-router-dom';



const images =[
    {id: 1, Image:"https://www.elmueble.com/medio/2019/10/09/guzmania-y-su-peculiar-inflorescencia_d91fa920_1333x2000.jpg", category:'Plantas', title:"GUZMANIA Y SU PECULIAR INFLORESCENCIA"},
    {id: 2, Image:"https://www.elmueble.com/medio/2019/10/09/begonia-o-flor-de-azucar_e1452695_1333x2000.jpg",category:'Plantas', title:"BEGONIA O FLOR DE AZÚCAR"},
    {id: 3, Image:"https://www.elmueble.com/medio/2019/10/09/hibiscus-una-aroma-inigualable_6f7a5047_800x800.jpg",category:'Plantas', title:"HIBISCUS, UNA AROMA INIGUALABLE"},
    {id: 4, Image:"https://www.elmueble.com/medio/2019/10/09/espatifilo-el-contraste-del-blanco-y-el-verde_6cb433a4_1000x1000.jpg",category:'Plantas', title:"ESPATIFILO, EL CONTRASTE DEL BLANCO Y EL VERDE"},
    {id: 5, Image:"https://www.elmueble.com/medio/2019/10/09/orquideas-las-mas-bella_74a52907_1600x2000.jpg",category:'Plantas', title:"ORQUÍDEAS, LAS MÁS BELLA"},
    {id: 6, Image:"https://www.elmueble.com/medio/2019/10/09/poinsettia-o-flor-de-pascua_68bbb27e_1968x2000.jpg",category:'Plantas', title:"POINSETTIA O FLOR DE PASCUA"},
    {id: 7, Image:"https://www.elmueble.com/medio/2019/10/09/violeta-africana-o-saintpaulia_5a2cc539_2000x1500.jpg",category:'Plantas', title:"VIOLETA AFRICANA O SAINTPAULIA"},
    {id: 8, Image:"https://www.elmueble.com/medio/2019/10/09/anturio-el-rojo-mas-intenso_29ff38b8_1500x2000.jpg", category:'Plantas',title:"ANTURIO, EL ROJO MÁS INTENSO"},
    {id: 9, Image:"https://www.elmueble.com/medio/2019/10/09/kalanchoe-resistente-y-colorida_8be1c0a1_2000x1500.jpg" ,category:'Plantas',title:"KALANCHOE, RESISTENTE Y COLORIDA"},
    {id: 10, Image:"https://www.elmueble.com/medio/2019/10/09/amaryllis-un-bulbo-con-flor-duradera_507078c1_1000x1000.jpeg",category:'Plantas', title:"AMARYLLIS, UN BULBO CON FLOR DURADERA"},
    {id: 11, Image:"https://www.elmueble.com/medio/2019/10/09/rosal-mini-o-pitimini_745aa7e8_510x558.jpg",category:'Plantas', title:"ROSAL MINI O PITIMINÍ"},
    {id: 12, Image:"https://www.elmueble.com/medio/2019/10/09/gardenia-aroma-y-belleza-en-blanco_aa5bd066_2000x2000.jpg", category:'Plantas', title:"KALANCHOE, RESISTENTE Y COLORIDA"},
    {id: 13, Image:"https://microplast.com.ar/estructura/_plantilla/e_microplast/img/clementina.png", category:'Macetas', title:"CLEMENTINA1"},
    {id: 14, Image:"https://microplast.com.ar/estructura/_plantilla/e_microplast/img/luisana.png", category:'Macetas', title:"CLEMENTINA2"},
    {id: 15, Image:"https://microplast.com.ar/estructura/_plantilla/e_microplast/img/fanny.png", category:'Macetas', title:"CLEMENTINA3"},
    {id: 16, Image:"https://microplast.com.ar/estructura/_plantilla/e_microplast/img/constantina.png", category:'Macetas', title:"CONSTANTINA"},
    {id: 17, Image:"https://microplast.com.ar/estructura/_plantilla/e_microplast/img/isolina.png", category:'Macetas', title:"CIELO"},
    {id: 18, Image:"https://microplast.com.ar/estructura/_plantilla/e_microplast/img/chicha.png", category:'Macetas', title: "SOÑADA"},
    {id: 19, Image:"https://ar.isadoraonline.com/media/catalog/product/7/_/7.000.jpg?quality=75&bg-color=255,255,255&fit=bounds&height=985&width=770&canvas=770:985", category:"regala", title:"REGALÁ A QUIEN MAS QUERÉS"},
    {id: 20, Image:"https://ar.isadoraonline.com/media/catalog/product/5/_/5.000.jpg?quality=75&bg-color=255,255,255&fit=bounds&height=985&width=770&canvas=770:985",category:"regala", title:"REGALÁ A TUS AMIGOS"}
]

export const ItemListContainer = ({texto}) => {
   const [data, setData] = useState([]);

   const{categoriaId} = useParams();

   useEffect(() => {
    const getData = new Promise(resolve => {
        setTimeout(() => {
            resolve(images);
        }, 1000);
    });
    
    if(categoriaId){
        
        getData.then (res => setData(res.filter(img => img.category === categoriaId)));
    } else{
        getData.then(res => setData(res));
    }
    }, [categoriaId])

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