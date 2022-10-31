import "./ItemDetail.css"
import BuyButton from "../Buttons/BuyButton"
import { Link, useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import { cartContext } from "../../context/cartContext"

function ItemDetail ({item}) {
    const { addItem } = useContext(cartContext)
    const [estadoCart, setEstadoCart] = useState(false)
    const navigate = useNavigate()

    function handleAddToCart(count) {
        setEstadoCart(true)
        addItem(item, count)
        alert(`Se agregaron ${count} items al carrito!`)
    }

    function handleNavigate(e) {
        navigate(-1)
    }

    return (
        <div className="main-container">
            <div className="navegacion">
                <div onClick={handleNavigate}>Volver al listado</div>
            </div>
            <div className="item-container">
                <div className="image-container">
                    <img src={item.img} alt={item.title}></img>
                </div>
                <div className="item-detail-container">
                    <div className="item-detail">
                        <h2>{item.title}</h2>
                        <span className="detail-price">$ {item.price}</span>
                        <p className="detail-description">{item.detail}</p>
                        <div className="buybox">
                            { !estadoCart ? 
                            <ItemCount stock={item.stock} initial={1} onAddToCart={handleAddToCart}/> : 
                            <Link to="/cart"><BuyButton text="Finalizar Compra" backgroundColor="#3483fa" color="#fff"/></Link> }
                            <p className="stock">Stock Disponible: {item.stock}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail