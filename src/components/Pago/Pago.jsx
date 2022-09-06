import React, { useState } from "react";
import ReactDOM from "react-dom";
import './Pago.css';

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

const Pago = () => {

 const [price, setPrice] = useState(0);


  createOrder(data, actions) 
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: price
          },
        },
      ],
    });
  }
  const onApprove = (data, actions) => {
    return actions.order.capture();
  };
  function changeHandler(e) {
    setPrice(e.target.value);
  }
 
            
    return (
        <div className="boton-pago">
      <PayPalButton
        createOrder={(data, actions) => createOrder(data, actions)}
        onApprove={(data, actions) => onApprove(data, actions)}
      />
      <h1> El monto total de tu pago es {totalPrice()} </h1>
      <input type="text" onChange={changeHandler} value={price} > </input></div>
    );
  
export default Pago;