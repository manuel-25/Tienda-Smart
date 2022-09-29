import "./Item.css"
import ItemCount from "../ItemCount/ItemCount"
import {Link} from "react-router-dom"

function Card (props) {
    const urlDetail = `/productos/${props.id}`
    
    return(
        <div className="item">
            <div className="item-img">
                <Link to={urlDetail}><img src={props.img} alt={props.name}></img></Link>
            </div>
            <div className="item-detail">
                <h3>{props.title}</h3>
                <p></p>
                <h4>$ {props.price}</h4>
            </div>
            <ItemCount stock={props.stock} initial={1}/>
        </div>
    )
}

export default Card