import "./CartWidget.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'


function CartWidget () {
    return (
        <div className="cart-container">
             <a href="#" className="cart-link"><FontAwesomeIcon icon={faCartShopping} /></a>
             <span className="cartCounter"></span>
        </div>
    )
}

export default CartWidget