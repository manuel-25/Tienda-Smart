import { useState, useEffect } from "react"
import { getSingleItem } from "../../services/mockAPI"
import ItemDetail from "./ItemDetail"

function ItemDetailContainer () {
    const [data, setData] = useState({})

    useEffect(() => {
        getSingleItem(1).then((responseData) => setData(responseData))
    }, [])

    return (
        <div>
            <ItemDetail props={data}/>
        </div>
    )
}

export default ItemDetailContainer