import React from 'react';
import './SuccesAlert.css';

const SuccessAlert = ({ orderId }) => {
  return (
    <div className='success-alert'>
      <p className='success-message'>Compra realizada con éxito!</p>
      <p className='order-code'>Código de compra: {orderId}</p>
    </div>
  );
};

export default SuccessAlert;