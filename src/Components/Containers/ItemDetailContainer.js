import { useEffect, useState } from "react";
import desafio from "../utils/promesa";
import ItemDetail from "../ItemDetail";
import Item from "../utils/Products"

const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});

    useEffect(() => {
        desafio(2000, Item[1])
            .then(result => setDato(result))
            .catch(err => console.log(err))
    }, [])
    return (
        <ItemDetail item={dato}/>
    )
}
export default ItemDetailContainer;