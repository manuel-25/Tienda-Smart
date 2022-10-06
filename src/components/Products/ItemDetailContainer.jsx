import { useState, useEffect } from "react"
import { getSingleItem } from "../../services/mockAPI"
import ItemDetail from "./ItemDetail"
import {useParams} from "react-router-dom"
import { Jelly } from '@uiball/loaders'

function ItemDetailContainer () {
    const [data, setData] = useState({})

    const [error, setError] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    const {id} = useParams()

    useEffect(() => {
        setData([])
        setIsLoading(true)
        getSingleItem(id)
            .then((responseData) => setData(responseData))
            .catch((errormsg) => setError(errormsg.message))
            .finally(() => setIsLoading(false))
    }, [id])

    if(isLoading) {
        return (
            <>
                {error ? 
                    <div>
                        <h2 style={{color: "aa0033"}}>Error obteniendo los datos</h2>
                        <p>{error}</p>
                    </div>
                : <Jelly 
                    size={80}
                    speed={0.9} 
                    color="black" 
                />   
                }
            </>
        )
    }

    return (
        <div>
            <ItemDetail item={data}/>
        </div>
    )
}

export default ItemDetailContainer