import { useState, useEffect } from "react"
import { getSingleItem } from "../../services/mockAPI"
import ItemDetail from "./ItemDetail"
import {useParams} from "react-router-dom"

function ItemDetailContainer () {
    const [data, setData] = useState({})

    const {id} = useParams()

    useEffect(() => {
        getSingleItem(id).then((responseData) => setData(responseData))
    }, [id])

    return (
        <div>
            <ItemDetail item={data}/>
        </div>
    )
}

export default ItemDetailContainer