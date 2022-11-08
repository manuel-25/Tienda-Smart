import "./CartContainer.css"
import React, { useContext } from 'react'
import { cartContext } from '../../context/cartContext'
import CartView from "./CartView"
import { useNavigate } from "react-router-dom"
import CheckoutForm from "../CheckoutForm/CheckoutForm"

function CartContainer() {
    const { getCartItems, getSubtotalPrice, getTotalItemsInCart} = useContext(cartContext)
    const cartItems = getCartItems()
    const navigate = useNavigate()

    function handleNavigate(e) {
        navigate("/")
    }

    /* Carrito Vacio */
    if(getTotalItemsInCart() === 0) {
        return (
            <div className="cart-main-container">
                <div className='cart-navegation'>
                    <div className="cart-navegate" onClick={handleNavigate}>Volver al Listado </div>
                    <div> &nbsp;- Carrito de Compras</div>
                </div>
                <div className="cart-title" style={{margin: "auto"}}>
                    <h2 className="cart-title-empty">El carrrito de compras esta vacio</h2>
                </div>
            </div>
        )
    }

    return (
        <div className='cart-main-container'>
            <div className='cart-title-container'>
                <h2 className='cart-title'>Carrito de Compras</h2>
            </div>
            <div className='cart-navegation'>
                <div className="cart-navegate" onClick={handleNavigate}>Volver al Listado </div>
                <div> &nbsp;- Carrito de Compras</div>
            </div>
            {
                cartItems.map((item) => {
                    return <CartView key={item.id} item={item}/>
                })
            }
            <div className='checkout'>
                <div className="checkout-subtotal">
                    <div>Subtotal: $</div>
                    <span>{getSubtotalPrice()}</span>
                </div>
                <div className="checkout-delivery">
                    <div>Envio: $</div>
                    <span>0</span>
                </div>
                <div className="checkout-total">
                    <div>Total: $</div>
                    <span>{getSubtotalPrice()}</span>
                </div>
                <CheckoutForm />
            </div>
        </div>
    )
}

export default CartContainer