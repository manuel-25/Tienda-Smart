import "./ItemListContainer.css"
import ItemList from "./ItemList"
import { getItems, getItemsByCategory } from "../../services/firestore"
import { useEffect, useState } from "react"
import {useParams} from "react-router-dom"
import Loader from "../Loader/Loader"

function ItemListContainer (props) {
    const [data, setData] = useState([])

    const [error, setError] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    const {cat} = useParams()

    useEffect(() => {
        setData([])
        setIsLoading(true)
        if(!cat) {
            getItems()
                .then((response) => setData(response))
                .catch((errormsg) => setError(errormsg.message))
                .finally(() => setIsLoading(false))
        } else {
            getItemsByCategory(cat)
                .then((response) => {
                    setData(response)
                })
                .catch((errormsg) => {
                    setError(errormsg.message)
                })
                .finally(() => setIsLoading(false))
        }
    }, [cat])

    if(isLoading) {
        return (
            <>
                {error ? 
                    <div>
                        <h2 style={{color: "aa0033"}}>Error obteniendo los datos</h2>
                        <p>{error}</p>
                    </div>
                : <Loader />
                }
            </>
        )
    }

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