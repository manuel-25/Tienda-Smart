import "./ItemListContainer.css"
import Card from "./Card"

function ItemListContainer (props) {
    return (
        <div className="ItemListContainer">
            <h1 className="greetings">{props.greetings}</h1>
            <div className="itemList">
                <Card 
                    name = "TCL 20 SE 256 GB nuit black 6 GB RAM"
                    img = "./images/D_NQ_NP_2X_685173-MLA49653440486_042022-F.webp"
                    price = {61.999}
                />
                <Card 
                    name = "Moto G22 128 GB cosmic black 4 GB RAM"
                    img = "./images/D_NQ_NP_2X_854793-MLA50262132804_062022-F.webp"
                    price = {46.999}
                />
                <Card 
                    name = "Moto G60s 128 GB aqua 6 GB RAM"
                    img = "./images/D_NQ_NP_2X_966438-MLA48112811958_112021-F.webp"
                    price = {69.799}
                />
                <Card 
                    name = "Samsung Galaxy A32 128 GB awesome blue 4 GB RAM"
                    img = "./images/D_NQ_NP_2X_878776-MLA48428092348_122021-F.webp"
                    price = {75.999}
                />
            </div>
        </div>
    )
}

export default ItemListContainer