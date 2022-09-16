import "./Card.css"
import BuyButton from "../Buttons/BuyButton"

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
            <BuyButton />
        </div>
    )
}

export default Card