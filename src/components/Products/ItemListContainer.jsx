import "./ItemListContainer.css"
import ItemList from "./ItemList"
import { getItems, getItemsByCategory} from "../../services/mockAPI"
import { useEffect, useState } from "react"
import {useParams} from "react-router-dom"

function ItemListContainer (props) {
    const [data, setData] = useState([])

    const {cat} = useParams()

    useEffect(() => {
        if(cat === undefined) {
            getItems().then((response) => {
                setData(response)
            })
        } else {
            getItemsByCategory(cat).then((response) => {
                setData(response)
            })
        }
    }, [cat])

    return (
        <div className="ItemListContainer">
            <h1 className="greetings">{props.greetings ? props.greetings : cat}</h1>
            <div className="itemList">
                <ItemList data={data} />
            </div>
        </div>
    )
}

export default ItemListContainer