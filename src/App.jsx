import './App.css';
import React from 'react';

import ItemListContainer from './components/ItemListContainer';
import Cart from './components/Cart';
import NavBar from './components/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartProvider from './Context/CartContext';
import ItemListLimit from './components/ItemListLimit/ItemListLimit';
import SendOrder from './components/SendOrder/SendOrder';
import ContactForm from './components/ContactForm/ContactForm';
import ItemList from './components/ItemList/index';

function App() {
  return(
  <>
  <BrowserRouter>
  <CartProvider> 
  <NavBar />
  <ItemList/>
  <br />
  <Routes>
      <Route path='/' element = {<ItemListContainer />} />
      <Route path='/categoria/:categoriaId' element = {<ItemListContainer />} />
      <Route path='/cart' element = {<Cart />} />
      <Route path='/detalle' element = {<ItemDetailContainer />} />
      <Route path='/buscador' element= { <ItemListLimit /> } />
      <Route path='/Contacto' element= { <ContactForm />}/>
    </Routes>
    < SendOrder />
   </CartProvider>
  </BrowserRouter>
</>
  );
}

export default App;
