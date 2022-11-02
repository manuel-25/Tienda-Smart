import React, {useState, createContext} from "react"
import { getItems } from "../services/firestore"

const cartContext = createContext()

export default function CartContextProvider({children}) {
    const [cart, setCart] = useState([])

    function addItem(item, count) {
        if(isInCart(item.id)) {
            let newCart = cart.map((itemMapeo) => {
                if(itemMapeo.id === item.id){
                    itemMapeo.count += count
                    return itemMapeo
                } else {
                    return itemMapeo
                }
            })
            setCart(newCart)
        } else {
            let newCart = cart.map((item) => item)
            newCart.push({ ...item, count })
            setCart(newCart)
        }
    }

    function getTotalItemsInCart() {
        let total = 0
        cart.map((itemMapeo) => {
            return total += itemMapeo.count
        })
        return total
    }

    function getSubtotalPrice() {
        return cart.reduce((acc, item) => acc += item.price * item.count, 0)
    }

    function isInCart(id) {
        let found = cart.some(item => item.id === id)
        return found
    }

    function getCartItems() {
        return cart
    }

    function deleteItem(id) {
        return setCart(cart.filter(item => item.id !== id))
    }

    function clearCart() {
        setCart([])
    }

    async function checkStockFromDb(item) {
        if(isInCart(item.id)) {
            getItems()
            .then(data => {
                let found = data.find(dbItem => dbItem.id === item.id)
                if((found) && (item.count < found.stock)){
                    return true
                } else return false
            })
            .catch((err) => {console.log(err)})
        }
    }

    function updateCart(item) {
        let newCart = cart.map( itemMapeo => {
            if(itemMapeo.id === item.id) {
                itemMapeo = item
            }
            return itemMapeo
        })
        setCart(newCart)
    }

    return(
        <cartContext.Provider 
        value={{
                cart, 
                addItem, 
                getTotalItemsInCart, 
                isInCart, 
                clearCart, 
                getCartItems, 
                deleteItem, 
                getSubtotalPrice,
                checkStockFromDb,
                updateCart
            }}
        >
            {children}
        </cartContext.Provider>
    )
}

export { cartContext }