import React from "react"
import "./ItemCount.css"
import AddButtonToCart from "../Buttons/AddButtonToCart"


function ItemCount ({stock, initial, onAddToCart}) {
    const [count, setCount] = React.useState(initial)

    function handleAdd() {
        if(count < stock) {
            setCount(count+1)
        }
    }

    function handleSubstract() {
        if(count > 1) {
            setCount(count-1)
        }
    }

    return (
        <div>
            <div className="cart-btn">
                <AddButtonToCart text="Agregar al Carrito" onAddToCart={onAddToCart} count={count}/>
            </div>
            <div className="itemCount-container">
                <button onClick={handleSubstract}>-</button>
                <span className="itemCounter-number">{count}</span>
                <button onClick={handleAdd}>+</button>
            </div>
        </div>
    )
}

export default ItemCount