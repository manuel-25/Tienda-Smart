import "./ItemListContainer.css"
import ItemList from "./ItemList"
import { getItems } from "../../services/mockAPI"
import { useEffect, useState } from "react"

function ItemListContainer (props) {
    const [data, setData] = useState([])

    useEffect(() => {
        getItems().then((response) => {
            setData(response)
        })
    }, [])

    return (
        <div className="ItemListContainer">
            <h1 className="greetings">{props.greetings}</h1>
            <div className="itemList">
                <ItemList data={data} />
            </div>
        </div>
    )
}

export default ItemListContainer