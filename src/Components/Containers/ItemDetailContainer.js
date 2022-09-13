import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail";
import Data from "../utils/data"
import desafio from "../utils/promesa";

const ItemDetailContainer  = () => {
    const [dato, setDato] = useState({})

    const  { id } = useParams();
    
    
    useEffect(() => {
        desafio(Data.find(item => item.id === parseInt(id)))
        .then(res => setDato(res));
    }, [id])
    
    return(
        <div className="mainProductPage">
            <ItemDetail item={dato} />
        </div>
    )
}

export default ItemDetailContainer