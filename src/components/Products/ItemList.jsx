import Item from "./Item"

function ItemList(props) {
    return (
        <div className="itemList">
            {props.data.map((item) => {
                    return (
                        <Item
                            key = {item.id}
                            item = {item}
                        />
                    )
                })}
        </div>
    )
}

export default ItemList