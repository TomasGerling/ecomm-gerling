<<<<<<< HEAD
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
        
=======
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
>>>>>>> develop
        </div>
    )
}

export default ItemList