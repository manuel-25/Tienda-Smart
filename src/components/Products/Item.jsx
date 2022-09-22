import "./Item.css"
import ItemCount from "../ItemCount/ItemCount"

function Card (props) {
    return(
        <div className="item">
            <div className="item-img">
                <a href="#"><img src={props.img} alt={props.name}></img></a>
            </div>
            <div className="item-detail">
                <h3>{props.name}</h3>
                <p></p>
                <h4>$ {props.price}</h4>
            </div>
            <ItemCount stock={props.stock} initial={1}/>
        </div>
    )
}

export default Card