import "./AddButtonToCart.css"

function BuyButton (props) {
    let backgroundColor = props.backgroundColor
    let color = props.color
    return (
        <div className="btn-container">
            <button onClick={props.accion} type="submit" style = {{backgroundColor: backgroundColor, color: color}}>{props.text}</button>
        </div>
    )
}

export default BuyButton