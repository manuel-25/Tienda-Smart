import "./ItemDetail.css"
import BuyButton from "../Buttons/BuyButton"
import {Link} from "react-router-dom"
import { useContext, useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import { cartContext } from "../../context/cartContext"

function ItemDetail ({item}) {
    const { addItem } = useContext(cartContext)
    const [estadoCart, setEstadoCart] = useState(false);

    function handleAddToCart(count) {
        setEstadoCart(true)
        addItem(item, count)
        alert(`Se agregaron ${count} items al carrito!`)
    }

    return (
        <div className="main-container">
            <div className="navegacion">
                <Link to="/">Volver al listado</Link>
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
                            { estadoCart === false ? 
                            <ItemCount stock={item.stock} initial={1} onAddToCart={handleAddToCart}/> : 
                            <BuyButton text="Finalizar Compra" backgroundColor="#3483fa" color="#fff"/> }
                            <p className="stock">Stock Disponible: {item.stock}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail