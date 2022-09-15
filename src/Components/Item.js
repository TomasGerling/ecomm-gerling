import { Link } from "react-router-dom"

export default function Item (props){

    return (
        <div className="product" key={props.id}>
            <span className="productPrice">{props.price}</span>
            <img className="productImage" src={props.img} alt=""></img>
            <h4 className="productTitle">{props.title}</h4>
            <hr/>
            <p>Descripción: {props.description}</p>
            <Link to={`/item/${props.id}`}><button className="detailBtn">Ver detalles</button></Link>
        </div>
    )
}
