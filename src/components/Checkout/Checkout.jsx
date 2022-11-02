import React from 'react'
import "./Checkout.css"
import {useParams} from "react-router-dom"
import Alert from 'react-bootstrap/Alert'

function Checkout() {
    const {orderId} = useParams()

  return (
    <div className='checkout-container'>
      <Alert variant="success">
        <Alert.Heading>
          Compra realizada con exito!
        </Alert.Heading>
        <p>
          Codigo de compra: {orderId}
        </p>
      </Alert>
    </div>
  )
}

export default Checkout