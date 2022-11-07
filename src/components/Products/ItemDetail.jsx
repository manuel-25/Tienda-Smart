import "./ItemDetail.css"
import BuyButton from "../Buttons/BuyButton"
import { Link, useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import { cartContext } from "../../context/cartContext"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ItemDetail ({item}) {
    const { addItem } = useContext(cartContext)
    const [estadoCart, setEstadoCart] = useState(false)
    const navigate = useNavigate()

    const notify = () => {
        toast.success('Item agregado al carrito!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        })
    }

    let discount = item.discount / 100
    let discountPrice = item.price - (item.price * discount)
    discountPrice = discountPrice.toFixed(3)

    function handleAddToCart(count) {
        setEstadoCart(true)
        addItem(item, count)
        notify()
    }

    function handleNavigate(e) {
        navigate(-1)
    }

    return (
        <div className="Detail__main-container">
            <div className="Detail__navegation" onClick={handleNavigate}>Volver atras</div>
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
                        <p className="details__now">{item.oferr ? "$" + discountPrice : "$" + item.price}
                            <span className="details__discount" style={{ visibility: item.oferr ? 'visible': 'hidden'}}>
                                {item.oferr ? item.discount + "%" : null}
                            </span>
                        </p>
                        <p className="details__before">{item.oferr ? "$" + item.price : null}</p>
                    </div>
                    <div className="details__product-quantity">
                        { !estadoCart ? 
                            <ItemCount stock={item.stock} initial={1} onAddToCart={handleAddToCart}/> : 
                            <Link to="/cart"><BuyButton text="Ir al carrito" backgroundColor="#3483fa" color="#fff"/></Link>
                        }
                        <ToastContainer />
                        <div className="details__product-stock">Stock Disponible: {item.stock}</div>
                    </div>
                </article>
            </section>
        </div>
    )
}

export default ItemDetail