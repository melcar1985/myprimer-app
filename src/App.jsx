import './App.css';
import React from 'react';

import ItemListContainer from './components/ItemListContainer';
import Cart from './components/Cart';
import NavBar from './components/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartProvider from './Context/CartContext';


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
      </Routes>
   </CartProvider>
  </BrowserRouter>
</>
  );
}

export default App;
