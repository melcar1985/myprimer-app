import React, { useState, useEffect} from "react";
import {useParams} from 'react-router-dom';
import ItemDetail from "../ItemDetail";


const images= [
   
 {id : 1, Image:"https://www.elmueble.com/medio/2019/10/09/guzmania-y-su-peculiar-inflorescencia_d91fa920_1333x2000.jpg", 
 title :"Su peculiar inflorescencia ,las hace llamativas y muy decorativas. Las hojas que protegen a la flor cuando nace, son de colores muy llamativos, como rojos, naranjas o amarillos. De hecho es lo más espectacular de esta especie. Aunque florecen una sola vez en la vida, cuando lo hacen su flor dura entre 3 y 6 meses.",price : 2820},
 {id: 2, Image:"https://www.elmueble.com/medio/2019/10/09/begonia-o-flor-de-azucar_e1452695_1333x2000.jpg",category:'Plantas', 
 title:"Sus flores pueden ser de color rojo, blanco o rosa. Su nombre en latín es Begonia semperflorens, que en latín significa “siempre con flores”. Su floración, como su nombre indica, se produce durante todo el año", price : 2500},
 {id: 3, Image:"https://www.elmueble.com/medio/2019/10/09/hibiscus-una-aroma-inigualable_6f7a5047_800x800.jpg",category:'Plantas', 
 title:"Su época de floración se da desde el principio de la primavera hasta finales del verano o el otoño, pero en climas tropicales es capaz de dar flores durante casi todo el año. Y, aunque solo duran entre uno y tres días, crecen tan prolíficamente que poco importa su corta vida. ¿En qué colores puedes encontrarla? Pues desde el blanco más puro a naranja, rojo, violeta e incluso amarillo.",price : 2150},
 {id: 4, Image:"https://www.elmueble.com/medio/2019/10/09/espatifilo-el-contraste-del-blanco-y-el-verde_6cb433a4_1000x1000.jpg",category:'Plantas', 
 title:"Conocido también como lirio de la paz –sin desmerecer al clásico olivo–, esta peculiar planta se caracteriza por su verde brillante y sus llamativas flores blancas. Aunque florece durante todo el año, es durante primavera y verano cuando lo hace de manera ininterrumpida. Y, para favorecerla y siga ofreciendo sus peculiares flores, hay que cortar las flores secas cuando empiecen a amarillear." ,price : 1800},
 {id: 5, Image:"https://www.elmueble.com/medio/2019/10/09/orquideas-las-mas-bella_74a52907_1600x2000.jpg",category:'Plantas', 
 title:"Las hay azules, amarilllas, rosas, blancas y hasta moteadas. Y su bella flor imita las alas de una mariposa. ¿Quién no quiere una planta así en su casa? Su hermosísima floración dura tres meses, aunque puedes alargarla con abonos específicos. Las espigas y capullos aparecen a finales del otoño y poco después florecen hasta primavera. Y no pienses que es difícil cuidarla. Seguro que, si alguien te regala una orquídea, piensas: “La voy a matar fijo”.", price: 1500},
 {id: 6, Image:"https://www.elmueble.com/medio/2019/10/09/poinsettia-o-flor-de-pascua_68bbb27e_1968x2000.jpg",category:'Plantas', 
 title:"Esta planta de interior con flor es uno de los símbolos navideños por excelencia. Se caracterizan por sus puntiagudas hojas de un color verde brillante y las brácteas de color rojo, rosa o blanco, que rodean las verdaderas flores de la Flor de Pascua. Estas son pequeñas y de un color amarillo cremoso. De hecho, la belleza de este tipo de plantas son estas “falsas hojas”, que aportan colorido y viveza. Su floración se da a finales de año, aunque si quieres que florezca antes puedes “engañarla”, colocándola en una zona sombría, fresca y que no reciba sol durante, al menos, 12 horas al día. Ofreciendo poca luz a esta planta de interior, verás cómo florece antes." ,price: 1750},
 {id: 7, Image:"https://www.elmueble.com/medio/2019/10/09/violeta-africana-o-saintpaulia_5a2cc539_2000x1500.jpg",category:'Plantas', 
 title:"Este colorida especie es capaz de ofrecerte flores ¡todo el año! Aunque contradiga a su nombre, también se pueden encontrar en azul, rosa, rojo, blanco o multicolor. Su floración es se da indistintamente durante todo el año, especialmente si está situada en una zona muy luminosa. ¿Y si deja de florecer? Cámbiala a una zona de tu casa con más luz y, en poco tiempo, volverá a deleitarte con sus flores. ", price:1500 },
 {id: 8, Image:"https://www.elmueble.com/medio/2019/10/09/anturio-el-rojo-mas-intenso_29ff38b8_1500x2000.jpg", category:'Plantas',
 title:"Su flor es muy peculiar: parece una especie de espiga rodeada por una hoja de color intenso en forma de corazón. Y, aunque el color más habitual es el rojo, pero también los hay púrpuras, blancos, naranjas y ¡negros! Aunque requieren de una mano más especializada. Con unas buenas condiciones de cultivo –sustrato, riego, luz, abono...– conseguirás una floración continuada. ¡Así que podrás disfrutar de su atractivo y atrayente color durante todo el año!", price: 2200},
 {id: 9, Image:"https://www.elmueble.com/medio/2019/10/09/kalanchoe-resistente-y-colorida_8be1c0a1_2000x1500.jpg" ,category:'Plantas',
 title:"Es una de esas plantas que puede lucir flor casi todo el año, aunque lo habitual es que florezcan a finales de verano o principios de primavera. Todas sus variedades se caracterizan por ser plantas de interior resistentes y estar dotadas con unas particulares hojas carnosas y de un verde intenso. ¿Y sus colores? El kalanchoe puede lucir flores blancas, rojas, rosas, naranjas, amarillas y hasta bicolores. ¡Una planta perfecta para dar colorido a cualquier rincón! Y sus cuidados son muy sencillos.", price:1800},
 {id: 10, Image:"https://www.elmueble.com/medio/2019/10/09/amaryllis-un-bulbo-con-flor-duradera_507078c1_1000x1000.jpeg",category:'Plantas', 
 title:"La flor de este tipo de bulbos suele durar entre 3 y 6 semanas, pero con un buen cuidado puedes conseguir que florezca más de una vez al año y disfrutar de su característica belleza. Sus flores pueden ser naranjas, amarillas, rosas, blancas o bicolores.", price: 2500},
 {id: 11, Image:"https://www.elmueble.com/medio/2019/10/09/rosal-mini-o-pitimini_745aa7e8_510x558.jpg",category:'Plantas', 
 title:"Aunque estamos acostumbrados a disfrutar de ellos al aire libre y en “grandes dimensiones”, la especie enana del rosal ofrece la misma belleza. Durante el verano, florecerá de manera continuada, impregnando tu hogar de su delicado aroma y fascinante belleza. También conocido como rosal de pitiminí, puedes encontrarlo con flores de muchísimos colores: amarillas, blancas, rojas, rosas y, claro está, rojas. " ,price: 2800},
 {id: 12, Image:"https://www.elmueble.com/medio/2019/10/09/gardenia-aroma-y-belleza-en-blanco_aa5bd066_2000x2000.jpg", category:'Plantas',
  title:"Sus delicadas flores blancas tienen un gran simbolismo. Pero más allá de eso, ofrecen un aroma y una belleza única a tu hogar. La temporada de floración es de mayo hasta julio, pero si en su clima ideal dará flores de nuevo en otoño, alargándose hasta diciembre. ¡Más de 6 meses disfrutando de sus increíbles flores! Ahora, ¿cuál es clima ideal? Pues el semitropical. Con una temperatura media de 18º y pulverizándolo de vez en cuando, puedes conseguir una gardenia muy frondosa. Aprende cómo cuidarla.", price: 1580},
 {id: 13, Image:"https://microplast.com.ar/estructura/_plantilla/e_microplast/img/clementina.png", category:'Macetas', title:"CAPACIDAD: 90 Litros MEDIDAS:80cm de Alto - 29cm de Base - 39cm de Boca",price : 2800},
 {id: 14, Image:"https://microplast.com.ar/estructura/_plantilla/e_microplast/img/luisana.png", category:'Macetas', title:"CAPACIDAD: 48 Litros MEDIDAS: 63cm de Alto - 24cm de Base - 32cm de Boca",price : 1800},
 {id: 15, Image:"https://microplast.com.ar/estructura/_plantilla/e_microplast/img/fanny.png", category:'Macetas', title:"CAPACIDAD:19 Litros MEDIDAS: 53cm de Alto - 16cm de Base - 22cm de Boca ",price : 1750},
 {id: 16, Image:"https://microplast.com.ar/estructura/_plantilla/e_microplast/img/constantina.png", category:'Macetas', title:"CAPACIDAD: 20 Litros MEDIDAS: 30cm de Alto - 30cm de Base - 80cm de Boca",price : 2000},
 {id: 17, Image:"https://microplast.com.ar/estructura/_plantilla/e_microplast/img/isolina.png", category:'Macetas', title:"CAPACIDAD: 30 Litros MEDIDAS: 70cm de Alto - 20cm de Base - 20cm de Boca",price : 2580},
 {id: 18, Image:"https://microplast.com.ar/estructura/_plantilla/e_microplast/img/chicha.png", category:'Macetas', title: "CAPACIDAD: 60 Litros MEDIDAS: 40cm de Alto - 40cm de Base - 40cm de Boca",price : 2900},
 {id: 19, Image:"https://ar.isadoraonline.com/media/catalog/product/7/_/7.000.jpg?quality=75&bg-color=255,255,255&fit=bounds&height=985&width=770&canvas=770:985", category:"regala", title:"Completa el formulario con los datos de la persona a la que le queres regalar una GIFCARD y se la enviamos  a su domicilio",price : 7000},
 {id: 20, Image:"https://ar.isadoraonline.com/media/catalog/product/5/_/5.000.jpg?quality=75&bg-color=255,255,255&fit=bounds&height=985&width=770&canvas=770:985",category:"regala", title:"Completa el formulario con los datos de la persona a la que le queres regalar una GIFCARD y se la enviamos a su domicilio",price : 5000}
    
]
    export const ItemDetailContainer = () => {
    
        const [data, setData] = useState({});
        const{detalleId} = useParams();
         
    useEffect(() => {
    const getData = new Promise(resolve => {
        setTimeout(() => {
            resolve(images);
        }, 1000);
    });
    getData.then (res => setData(res.find(img => img.id === parseInt(detalleId))));

   }, [])

   return(
    
    < ItemDetail data={data}/>
    
    );
}

export default ItemDetailContainer;