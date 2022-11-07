import React, { useState, useContext, useEffect } from 'react'
import { createBuyOrder } from "../../services/firestore"
import { useNavigate } from "react-router-dom"
import BuyButton from '../Buttons/BuyButton'
import { cartContext } from '../../context/cartContext'


function CheckoutForm() {
    const navigate = useNavigate()
    const { getCartItems, getSubtotalPrice, clearCart} = useContext(cartContext)
    const [dataForm, setDataForm] = useState({
        name:"",
        phone:"",
        email:""
    })
    const [errorForm, setErrorForm] = useState({})


    function inputChangeHandler(event) {
        let inputName = event.target.name
        let value = event.target.value

        const newDataForm = { ...dataForm}
        newDataForm[inputName] = value
        setDataForm(newDataForm)
    }

    function validateForm() {
        let errorName = dataForm.name.length <= 3
        //let errorPhone = dataForm.phone.length <= 10

        //let regexEmail = /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$/
        //let errorEmail = dataForm.email.match(regexEmail)

        const newErrorForm = {...errorForm}

        if(errorName) newErrorForm.name = {
            type: "name",
            message: "El nombre debe contener al menos 10 caracteres"
        }
        else delete newErrorForm.name

        setErrorForm(newErrorForm)
    }

    useEffect( () => {
        validateForm()
    }, [dataForm])


    //Submit form 
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
            clearCart()
        })

    }

  return (
    <div className="form-container" id="checkoutForm">
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
                {
                    Object.keys(errorForm).map((err) => (
                        <span key="{errorForm.type}" className="error-form">
                            {errorForm[err].message}
                        </span>
                    ))
                }

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