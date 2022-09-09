import { useEffect, useState } from "react"
import ItemCount from "../ItemCount"
import desafio from "../utils/promesa"
import Products from "../utils/Products"
import { useParams } from "react-router-dom"


const ItemListContainer = (props) => {
    const [products, setProducts] = useState([])
    const { id } = useParams();

    useEffect(() =>{
        if (id) {
        desafio(2000, Products.filter(item => item.categoryId === parseInt(id)))
            .then(result => setProducts(result))
            .catch(err => console.log(err))
        } else {
        desafio(Products)
            .then(result => setProducts(result))
            .catch(err => console.log(err))
        }
    }, [id])

    const onAdd = (qty) => {
        alert("Has seleccionado " + qty + " articulos.")
    }
    return (
        <div className="productsList">
        {
        Products.map(item => (
        <div className="product" key={item.id}>
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
