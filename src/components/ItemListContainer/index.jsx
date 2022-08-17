
import ItemList from '../ItemList';
import React, {useState, useEffect} from 'react';
import Title from '../Title';
import {useParams} from 'react-router-dom';


const images =[
    {id: 1, price: 2820, Image:"https://www.elmueble.com/medio/2019/10/09/guzmania-y-su-peculiar-inflorescencia_d91fa920_1333x2000.jpg", category:'Plantas', title:"GUZMANIA Y SU PECULIAR INFLORESCENCIA"},
    {id: 2, price: 2500, Image:"https://www.elmueble.com/medio/2019/10/09/begonia-o-flor-de-azucar_e1452695_1333x2000.jpg",category:'Plantas', title:"BEGONIA O FLOR DE AZÚCAR"},
    {id: 3, price: 2150, Image:"https://www.elmueble.com/medio/2019/10/09/hibiscus-una-aroma-inigualable_6f7a5047_800x800.jpg",category:'Plantas', title:"HIBISCUS, UNA AROMA INIGUALABLE"},
    {id: 4, price: 1800, Image:"https://www.elmueble.com/medio/2019/10/09/espatifilo-el-contraste-del-blanco-y-el-verde_6cb433a4_1000x1000.jpg",category:'Plantas', title:"ESPATIFILO, EL CONTRASTE DEL BLANCO Y EL VERDE"},
    {id: 5, price: 1500 ,Image:"https://www.elmueble.com/medio/2019/10/09/orquideas-las-mas-bella_74a52907_1600x2000.jpg",category:'Plantas', title:"ORQUÍDEAS, LAS MÁS BELLA"},
    {id: 6, price: 1750, Image:"https://www.elmueble.com/medio/2019/10/09/poinsettia-o-flor-de-pascua_68bbb27e_1968x2000.jpg",category:'Plantas', title:"POINSETTIA O FLOR DE PASCUA"},
    {id: 7, price: 1500, Image:"https://www.elmueble.com/medio/2019/10/09/violeta-africana-o-saintpaulia_5a2cc539_2000x1500.jpg",category:'Plantas', title:"VIOLETA AFRICANA O SAINTPAULIA"},
    {id: 8, price: 2200, Image:"https://www.elmueble.com/medio/2019/10/09/anturio-el-rojo-mas-intenso_29ff38b8_1500x2000.jpg", category:'Plantas',title:"ANTURIO, EL ROJO MÁS INTENSO"},
    {id: 9, price: 1810 , Image:"https://www.elmueble.com/medio/2019/10/09/kalanchoe-resistente-y-colorida_8be1c0a1_2000x1500.jpg" ,category:'Plantas',title:"KALANCHOE, RESISTENTE Y COLORIDA"},
    {id: 10,price: 2520 , Image:"https://www.elmueble.com/medio/2019/10/09/amaryllis-un-bulbo-con-flor-duradera_507078c1_1000x1000.jpeg",category:'Plantas', title:"AMARYLLIS, UN BULBO CON FLOR DURADERA"},
    {id: 11,price: 2800, Image:"https://www.elmueble.com/medio/2019/10/09/rosal-mini-o-pitimini_745aa7e8_510x558.jpg",category:'Plantas', title:"ROSAL MINI O PITIMINÍ"},
    {id: 12,price: 1580 ,Image:"https://www.elmueble.com/medio/2019/10/09/gardenia-aroma-y-belleza-en-blanco_aa5bd066_2000x2000.jpg", category:'Plantas', title:"GARDENIA, UNA PLANTA DE INTERIOR CON FLORES BLANCAS"},
    {id: 13, price:2800, Image:"https://microplast.com.ar/estructura/_plantilla/e_microplast/img/clementina.png", category:'Macetas', title:"CLEMENTINA1"},
    {id: 14,price: 1800 , Image:"https://microplast.com.ar/estructura/_plantilla/e_microplast/img/luisana.png", category:'Macetas', title:"CLEMENTINA2"},
    {id: 15,price: 1750, Image:"https://microplast.com.ar/estructura/_plantilla/e_microplast/img/fanny.png", category:'Macetas', title:"CLEMENTINA3"},
    {id: 16,price: 2000, Image:"https://microplast.com.ar/estructura/_plantilla/e_microplast/img/constantina.png", category:'Macetas', title:"CONSTANTINA"},
    {id: 17,price: 2580, Image:"https://microplast.com.ar/estructura/_plantilla/e_microplast/img/isolina.png", category:'Macetas', title:"CIELO"},
    {id: 18,price: 2900, Image:"https://microplast.com.ar/estructura/_plantilla/e_microplast/img/chicha.png", category:'Macetas', title: "SOÑADA"},
    {id: 19, price: 7000, Image:"https://ar.isadoraonline.com/media/catalog/product/7/_/7.000.jpg?quality=75&bg-color=255,255,255&fit=bounds&height=985&width=770&canvas=770:985", category:"regala", title:"REGALÁ A QUIEN MAS QUERÉS"},
    {id: 20, price: 5000, Image:"https://ar.isadoraonline.com/media/catalog/product/5/_/5.000.jpg?quality=75&bg-color=255,255,255&fit=bounds&height=985&width=770&canvas=770:985",category:"regala", title:"REGALÁ A TUS AMIGOS"}
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

    return(
        <>
        <Title greeting={texto} />
        <ItemList data={data}/>
       
        </>
        
    );

}

export default ItemListContainer;