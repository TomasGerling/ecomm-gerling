import Products from "./utils/products"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import desafio from "./utils/promesa"
import Item from "./Item"

const ItemList = (props) => {
    const [products, setProducts] = useState([])
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
        <>
        <Item>
        {Products.map(item => (
            <Products
                key={item.id}
                title={item.title}
                developerCompany={item.developerCompany}
                img={item.img}
                description={item.description}
                productCategory={item.productCategory}
                stock={item.stock}
                />
        ))}
        </Item>
        </>
    )
}
export default ItemList