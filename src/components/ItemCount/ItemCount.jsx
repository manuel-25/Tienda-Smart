import React from "react"
import "./ItemCount.css"
import BuyButton from "../Buttons/BuyButton"


function ItemCount ({stock, initial}) {
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

    function onAdd() {
        alert(`Se agregaron ${count} items al carrito!`)
    }

    return (
        <div>
            <div className="itemCount-container">
                <button onClick={handleSubstract}>-</button>
                <span>{count}</span>
                <button onClick={handleAdd}>+</button>
            </div>
            <div className="cart-btn">
                <BuyButton text="Agregar al Carrito" onAdd={onAdd}/>
            </div>
        </div>
    )
}

export default ItemCount