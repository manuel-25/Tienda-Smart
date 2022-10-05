import React, {useState, createContext} from "react"

const cartContext = createContext()

export default function CartContextProvider({children}) {
    const [cart, setCart] = useState([])

    function addItem(item, count) {
        if(isInCart(item.id)) {
            let newCart = cart.map((itemMapeo) => {
                if(itemMapeo === item.id){
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
        let total = cart.length
        return total
    }

    function isInCart(id) {
        let found = cart.some(item => item.id === id)
        return found
    }

    function clear() {
        setCart([])
    }

    return(
        <cartContext.Provider value={{cart, addItem, getTotalItemsInCart, isInCart, clear}}>
            {children}
        </cartContext.Provider>
    )
}

export { cartContext }