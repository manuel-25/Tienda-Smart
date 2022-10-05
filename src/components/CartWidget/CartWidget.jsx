import "./CartWidget.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useContext } from "react"
import { cartContext } from "../../context/cartContext"



function CartWidget () {
    const {getTotalItemsInCart} = useContext(cartContext)
    return (
        <div className="cart-container">
             <a href="/" className="cart-link"><FontAwesomeIcon icon={faCartShopping} /></a>
             <span className="cartCounter">{getTotalItemsInCart() !== 0 ? getTotalItemsInCart() : null}</span>
        </div>
    )
}

export default CartWidget