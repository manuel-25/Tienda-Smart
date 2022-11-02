import "./CartWidget.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useContext } from "react"
import { cartContext } from "../../context/cartContext"
import { Link } from "react-router-dom"



function CartWidget () {
    const {getTotalItemsInCart, getSubtotalPrice} = useContext(cartContext)
    return (
        <div className="widget-container">
             <div className="widget-link"><FontAwesomeIcon icon={faCartShopping} /></div>
             <div className="widget-details">
                <span className="widgetCounter">{getTotalItemsInCart() !== 0 ? `${getTotalItemsInCart()} - $${getSubtotalPrice()}` : null}</span>
             </div>
        </div>
    )
}

export default CartWidget