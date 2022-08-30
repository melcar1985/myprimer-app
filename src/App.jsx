import './App.css';
import React from 'react';

import ItemListContainer from './components/ItemListContainer';
import Cart from './components/Cart/Cart';
import NavBar from './components/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartProvider from './Context/CartContext';
import ContactForm from './components/ContactForm/ContactForm';
import ItemListLimit from './components/ItemListLimit/Index';

function App() {
  return(
    
  <>
  <BrowserRouter>
  <CartProvider> 
  <NavBar />
  <br />
 
  <Routes>
      
      <Route path='/' element = {<ItemListContainer />} />
      <Route path='/category/:categoryId'element = {<ItemListContainer />} />
      <Route path='/cart' element = {<Cart />} />
      <Route path='/detalle/:detalleId' element = {<ItemDetailContainer />} />
      <Route path='/Contacto' element= { <ContactForm />} />
      <Route path='/Buscar' element =  {<ItemListLimit/>}/>
  </Routes>
   </CartProvider>
  </BrowserRouter>
</>
  );
}

export default App;
