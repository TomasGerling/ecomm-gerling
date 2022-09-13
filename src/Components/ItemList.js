import {useState, useEffect } from 'react';
import desafio from './utils/promesa'
import Data from './utils/data';
import Item from './Item'
import {useParams}from 'react-router-dom'

const ItemList = () => {
    const [products, setProducts] = useState([])
    const {id} = useParams()
    useEffect(() =>{
        if(id){
            desafio(Data.filter(item => item.categoryId == id))
            .then(res => setProducts(res));
        }else{
            desafio(Data)
            .then(res => setProducts(res));
        };
    }, [id])

    const itemElements = products.map(Data => {
        return <Item key={Data.id} img={Data.img} id={Data.id} title={Data.title} price={Data.price} stock={Data.stock} description={Data.description} initial={1} />
    })


    return(

        <div className="productsList">
            {itemElements}
        </div>
    )
}

export default ItemList