import "./AddButton.css"

function buyButton (props) {
    let backgroundColor = props.backgroundColor
    let color = props.color
    return (
        <div className="btn-container">
            <button onClick={props.onAdd} style = {{backgroundColor: backgroundColor, color: color}}>{props.text}</button>
        </div>
    )
}

export default buyButton