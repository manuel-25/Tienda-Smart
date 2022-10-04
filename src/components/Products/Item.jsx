import "./Item.css"
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
        </div>
    )
}

export default Card