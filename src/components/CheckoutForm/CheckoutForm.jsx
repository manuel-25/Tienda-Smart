import React, { useContext } from 'react'
import { createBuyOrder } from "../../services/firestore"
import { useNavigate } from "react-router-dom"
import BuyButton from '../Buttons/BuyButton'
import { cartContext } from '../../context/cartContext'
import { Formik } from "formik"
import "./CheckoutForm.css"


function CheckoutForm() {
    const navigate = useNavigate()
    const { getCartItems, getSubtotalPrice, clearCart} = useContext(cartContext)

  return (
    <div className="CartForm__container" id="checkoutForm">
        <h4 className='CartForm__title'>Complete los datos:</h4>
        <Formik
            initialValues={{
                name: '',
                email: ''
            }}
            validate={(values) => {
                let validateError = {}

                //Validate name
                if(!values.name) {
                    validateError.name = 'Por favor ingresa un nombre'
                } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)) {
                    validateError.name = 'El nombre solo puede contener letras y espacios'
                }

                //Validate email
                if(!values.email) {
                    validateError.email = 'Por favor ingresa tu email'
                } else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)) {
                    validateError.email = 'Debes ingresar un email valido'
                }

                return validateError
            }}
            onSubmit={(valores, {resetForm}) => {
                const orderData = {
                    buyer: {
                        name: valores.name,
                        email: valores.email
                    },
                    items: getCartItems(),
                    date: new Date(),
                    total: getSubtotalPrice()
                }
                resetForm()
                createBuyOrder(orderData).then(orderId => {
                    navigate(`/checkout/${orderId}`)
                    clearCart()
                })
            }}
        >
            {( {values, errors, touched, handleSubmit, handleChange, handleBlur} ) => (
                <form className="CartForm" onSubmit={handleSubmit}>
                    <div className="CartForm__input--name">
                        <input
                            name="name"
                            type="text"
                            placeholder="Nombre"
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>
                    {touched.name && errors.name && <div className='CartForm__error'>{errors.name}</div>}

                    <div className="CartForm__input--email">
                        <input
                            name="email"
                            type="text"
                            placeholder="Email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>
                    {touched.email && errors.email && <div className='CartForm__error'>{errors.email}</div>}

                    <BuyButton text="Finalizar Compra"/>
                </form>
            )}
            
        </Formik>
    </div>
  )
}

export default CheckoutForm