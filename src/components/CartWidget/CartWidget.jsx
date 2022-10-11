import "./CartWidget.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useContext } from "react"
import { cartContext } from "../../context/cartContext"
import { Link } from "react-router-dom"



function CartWidget () {
    const {getTotalItemsInCart} = useContext(cartContext)
    return (
        <div className="cart-container">
             <Link to="/cart" className="cart-link"><FontAwesomeIcon icon={faCartShopping} /></Link>
             <span className="cartCounter">{getTotalItemsInCart() !== 0 ? getTotalItemsInCart() : null}</span>
        </div>
    )
}

export default CartWidget