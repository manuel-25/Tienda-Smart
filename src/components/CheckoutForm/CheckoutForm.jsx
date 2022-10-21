import React, { useState, useContext } from 'react'
import { createBuyOrder } from "../../services/firestore"
import { useNavigate } from "react-router-dom"
import BuyButton from '../Buttons/BuyButton'
import { cartContext } from '../../context/cartContext'


function CheckoutForm() {
    const navigate = useNavigate()
    const { getCartItems, getSubtotalPrice} = useContext(cartContext)
    const [dataForm, setDataForm] = useState({
        name:"",
        phone:"",
        email:""
    })

    function inputChangeHandler(event) {
        let inputName = event.target.name
        let value = event.target.value

        const newDataForm = { ...dataForm}
        newDataForm[inputName] = value
        setDataForm(newDataForm)
    }

    function handleCheckout(event) {
        event.preventDefault()
        const orderData = {
            buyer: dataForm,
            items: getCartItems(),
            date: new Date(),
            total: getSubtotalPrice()
        }
        createBuyOrder(orderData).then(orderId => {
            navigate(`/checkout/${orderId}`)
        })
    }

  return (
    <div className="form-container">
            <form onSubmit={handleCheckout}>
                <div className="form-item">
                    <label htmlFor="name">Nombre: </label>
                    <input
                        value={dataForm.name}
                        onChange={inputChangeHandler}
                        name="name"
                        type="text"
                        placeholder="Nombre"
                        required
                    />
                </div>

                <div className="form-item">
                    <label htmlFor="telefono">Telefono: </label>
                    <input
                        value={dataForm.phone}
                        onChange={inputChangeHandler}
                        name="phone"
                        type="text"
                        placeholder="Telefono"
                        required
                    />
                </div>

                <div className="form-item">
                    <label htmlFor="email">Email: </label>
                    <input
                        value={dataForm.mail}
                        onChange={inputChangeHandler}
                        name="email"
                        type="text"
                        placeholder="Mail"
                        required
                    />
                </div>
                <BuyButton accion={handleCheckout} text="Finalizar Compra"/>
            </form>
        </div>
  )
}

export default CheckoutForm