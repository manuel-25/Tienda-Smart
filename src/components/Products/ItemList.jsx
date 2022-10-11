import Item from "./Item"

function ItemList(props) {
    return (
        <div className="itemList">
            {props.data.map((item) => {
                    return (
                        <Item
                            key = {item.id}
                            id = {item.id}
                            title = {item.title}
                            img = {item.img}
                            price = {item.price}
                            stock = {item.stock}
                        />
                    )
                })}
        </div>
    )
}

export default ItemList