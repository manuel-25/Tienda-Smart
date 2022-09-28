import "./ItemDetail.css"
import BuyButton from "../Buttons/BuyButton"
import AddButton from "../Buttons/AddButton"

function ItemDetail (props) {
    let item = props.props
    return (
        <div className="main-container">
            <div className="item-container">
                <div className="image-container">
                    <img src={item.img} alt={item.title}></img>
                </div>
                <div className="item-detail">
                    <div className="detail">
                        <h2>{item.title}</h2>
                        <span>$ {item.price}</span>
                        <p>{item.detail}</p>
                        <div className="buybox">
                            <BuyButton text="Comprar Ahora" backgroundColor="#3483fa" color="#fff"/>
                            <AddButton text="Agregar al Carrito" backgroundColor="rgba(65,137,230,.15)" color="#3483fa"/>
                            <p className="stock">Stock Disponible: {item.stock}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail