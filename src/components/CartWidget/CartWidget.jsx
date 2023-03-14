import "./CartWidget.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useContext } from "react"
import { cartContext } from "../../context/cartContext"
import {Link} from "react-router-dom"



function CartWidget () {
    const {getTotalItemsInCart, getSubtotalPrice} = useContext(cartContext)



    return (
        <div className='widget-container'>
             <Link to="/cart" className="widget-link"><FontAwesomeIcon icon={faCartShopping} /*style={color}*/ /></Link>
             <div className="widget-details">
                <Link to="/cart" className="widgetCounter">
                    {getTotalItemsInCart() !== 0 ? getTotalItemsInCart() + " - ": null}
                    <span className="widget__counter--price">{"$" + getSubtotalPrice()}</span>
                </Link>
             </div>
        </div>
    )
}

export default CartWidget