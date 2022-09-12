import products from "./utils/products"
import desafio from "./utils/promesa";
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Item from "./Item"

const ItemList = (props) => {
    const [Products, setProducts] = useState([])
    const { id } = useParams();

    useEffect(() =>{
        if (id) {
        desafio(2000, products.filter(item => item.categoryId === parseInt(id)))
            .then(result => setProducts(result))
            .catch(err => console.log(err))
        } else {
        desafio(products)
            .then(result => setProducts(result))
            .catch(err => console.log(err))
        }
    }, [id])
    return(
        <div>
        <Item/>
        {products.map(item => (
            <products
                key={item.id}
                title={item.title}
                price={item.price}
                img={item.img}
                description={item.description}
                stock={item.stock}
                />
        ))}
        
        </div>
    )
}
export default ItemList