<<<<<<< HEAD
import ItemCount from "./ItemCount"
import ItemList from "./ItemList"

const Item = (id, img, price, title, description, stock, onAdd) => {

    return (
        <div className="product" key={id}>
            <span className="productPrice">{price}</span>
            <img className="productImage" src={img} alt=""></img>
            <h4 className="productTitle">{title}</h4>
            <hr/>
            <p>Descripción: {description}</p>
            <ItemCount stock={stock} initial={1} onAdd={onAdd}/>
        </div>
    )
}

export default Item
=======
import { Link } from "react-router-dom"



export default function Item (props){

    return (
        <div className="product">
            <span className="productPrice">{props.price}</span>
            <img className="productImage" src={props.img} alt=""></img>
            <h4 className="productTitle">{props.title}</h4>
            <hr/>
            <p>Descripción: {props.description}</p>
            <Link to={`/item/${props.id}`}><button className="detailBtn">Ver detalles</button></Link>
        </div>
    )
}
>>>>>>> develop
