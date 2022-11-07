import "./AddButtonToCart.css"

function buyButton (props) {
    let backgroundColor = props.backgroundColor
    let color = props.color
    let style = {backgroundColor: backgroundColor, color: color}
    return (
        <div className="btn-container">
            <button onClick={() => props.onAddToCart(props.count)} style = {style}  disabled={props.text === "No stock" ? "true" : null}>{props.text}</button>
        </div>
    )
}

export default buyButton