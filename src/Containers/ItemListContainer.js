import { useEffect, useState } from "react"
import ItemCount from "../Components/ItemCount"
import desafio from "../utils/promesa"
import infoGames from "../utils/Item"

const ItemListContainer = (props) => {
    const [products, setProducts] = useState([])
    useEffect(() =>{
        desafio(infoGames)
            .then(result => setProducts(result))
            .catch(err => console.log(err))
    }, [])
    const onAdd = (qty) => {
        alert("Has seleccionado " + qty + " articulos.")
    }
    return (
        <div className="productsList">
        {
        products.map(item => (
        <div className="product">
            <span className="productPrice">{item.price}</span>
            <img className="productImage" src={item.img} alt=""></img>
            <h4 className="productTitle">{item.title}</h4>
            <hr/>
            <p>Descripción: {item.description}</p>
            <ItemCount stock={item.stock} initial={1} onAdd={onAdd}/>
        </div>
        ))
        }
        </div>
    )
}
export default ItemListContainer