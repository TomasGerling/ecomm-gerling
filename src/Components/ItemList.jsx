import {useState, useEffect } from 'react';
import Item from './Item'
import {useParams}from 'react-router-dom'
import { firestoreFetch } from "./utils/firebaseConfig"
import './Styles/itemList.css';

const ItemList = () => {
    const [products, setProducts] = useState([])
    const {id} = useParams()

    useEffect(() =>{
        firestoreFetch(id)
        .then(res => setProducts(res))
    }, [id])


    const itemElements = products.map(Data => {
        return <Item 
        key={Data.id} 
        img={Data.img} 
        id={Data.id} 
        title={Data.title} 
        price={Data.price} 
        stock={Data.stock} 
        description={Data.description} 
        initial={1} />
    })


    return(

        <div className="productsList">
            {itemElements}
        </div>
    )
}

export default ItemList