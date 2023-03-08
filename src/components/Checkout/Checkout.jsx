import React from 'react';
import SuccessAlert from '../Alert/SuccesAlert';
import { useParams } from 'react-router-dom';
import "./Checkout.css"

function Checkout() {
  const { orderId } = useParams();

  return (
    <div className='checkout-container' >
    <SuccessAlert orderId={orderId} />
  </div>
  );
}

export default Checkout;

