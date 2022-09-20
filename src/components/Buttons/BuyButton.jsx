import "./BuyButton.css"

function buyButton (props) {
    return (
        <div className="btn-container">
            <button onClick={props.onAdd}>{props.text}</button>
        </div>
    )
}

export default buyButton