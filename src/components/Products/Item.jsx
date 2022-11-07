import "./Item.css"
import {Link} from "react-router-dom"

function Card ({item}) {
    const urlDetail = `/productos/${item.id}`
    
    return(
        <article className="item">
            <div className="item-img">
                <Link to={urlDetail}><img src={item.img} alt={item.name}></img></Link>
            </div>
            <div className="item-detail">
                <h3>{item.title}</h3>
                <p></p>
                <h4>$ {item.price}</h4>
            </div>
            <div className="item-offer" style={{ visibility: item.oferr ? 'visible': 'hidden'}}>
                {item.oferr ? item.discount + "%" : null}
            </div>
        </article>
    )
}

export default Card