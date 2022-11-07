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


    let discount = item.discount / 100
    let discountPrice = Math.round(item.price - (item.price * discount))

    function handleAddToCart(count) {
        setEstadoCart(true)
        addItem(item, count)
        alert(`Se agregaron ${count} items al carrito!`)
    }

    function handleNavigate(e) {
        navigate(-1)
    }

    return (
        <div className="Detail__main-container">
            <section className="content">
                <article className="gallery">
                    <div className="gallery__image-container">
                        <img src={item.img} alt={item.title}></img>
                    </div>
                </article>

                <article className="details">
                    <h2 className="details__title">{item.title}</h2>
                    <p className="details__description">{item.detail}</p>
                    <div className="details__prices">
                        <p className="details__now">{item.oferr === true ? "$" + discountPrice : "$" + item.price}
                            <span className="details__discount" style={{ visibility: item.oferr === true ? 'visible': 'hidden'}}>
                                {item.oferr === true ? item.discount + "%" : null}
                            </span>
                        </p>
                        <p className="details__before">{item.oferr === true ? "$" + item.price : null}</p>
                    </div>
                    <div className="details__product-quantity">
                        { !estadoCart ? 
                            <ItemCount stock={item.stock} initial={1} onAddToCart={handleAddToCart}/> : 
                            <Link to="/cart"><BuyButton text="Ir al carrito" backgroundColor="#3483fa" color="#fff"/></Link>
                        }
                    </div>
                </article>

            </section>


            {/*
            <div className="navegacion">
                <div onClick={handleNavigate}>Volver atras</div>
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
            */}
        </div>
    )
}

export default ItemDetail