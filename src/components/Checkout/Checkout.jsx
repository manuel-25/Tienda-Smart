import React from 'react'
import "./Checkout.css"
import {useParams} from "react-router-dom"

function Checkout() {
    const {orderId} = useParams()

  return (
    <div className='checkout-container'>
        <h2>Compra realizada con exito!</h2>
        <span>Codigo de compra: <span className='checkout-id'>{orderId}</span></span>
    </div>
  )
}

export default Checkout