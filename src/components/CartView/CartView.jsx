import "./CartView.css"
import React, { useContext } from 'react'
import { cartContext } from '../../context/cartContext'
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'

function CartView({item}) {
    const { deleteItem } = useContext(cartContext)
    const urlDetail = `/productos/${item.id}`

    const [count, setCount] = React.useState(item.stock)

    function handleAdd() {
        if(count < item.stock) {
            setCount(count+1)
        }
    }

    function handleSubstract() {
        if(count > 1) {
            setCount(count-1)
            item.stock = count
        }
    }

  return (
    <div className='cart-item-container'>
        <div className="cart-item-img">
            <img src={item.img} alt={item.name}></img>
        </div>
        <div className='cart-item-title'>
            <Link to={urlDetail}><h3>{item.title}</h3></Link>
        </div>
        <div className="cart-detail-container">
            <span className='cart-item-quantity'>
                <button onClick={handleSubstract}>-</button>
                <input type="number" name="quantity" defaultValue={item.count} className="itemCounter-number"></input>
                <button onClick={handleAdd}>+</button>
            </span>
            <h6 className='cart-item-price'>$ {item.price}</h6>
        </div>
        <div className='cart-item-delete'>
            <FontAwesomeIcon icon={faX} onClick={() => deleteItem(item.id)} />
        </div>
    </div>
  )
}

export default CartView