import "./Card.css"
import ItemCount from "../ItemCount/ItemCount"

function Card (props) {
    return(
        <div className="card">
            <div className="card-img">
                <a href="#"><img src={process.env.PUBLIC_URL + props.img} alt={props.name}></img></a>
            </div>
            <div className="card-detail">
                <h3>{props.name}</h3>
                <p></p>
                <h4>$ {props.price}</h4>
            </div>
            <ItemCount stock={10} initial={1}/>
        </div>
    )
}

export default Card