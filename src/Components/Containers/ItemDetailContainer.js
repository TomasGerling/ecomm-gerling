import { useEffect, useState } from "react";
import desafio from "../utils/promesa";
import ItemDetail from "../ItemDetail";
import Products from "../utils/Products"

const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});

    useEffect(() => {
        desafio(2000, Products[1])
            .then(result => setDato(result))
            .catch(err => console.log(err))
    }, [])
    return (
        <ItemDetail item={dato}/>
    )
}
export default ItemDetailContainer;