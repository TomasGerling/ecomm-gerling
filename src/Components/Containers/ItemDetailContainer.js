import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail";
<<<<<<< HEAD
import products from "../utils/Products"
=======
import Data from "../utils/data"
import desafio from "../utils/promesa";
>>>>>>> develop

const ItemDetailContainer  = () => {
    const [dato, setDato] = useState({})

    const  { id } = useParams();
    
    
    useEffect(() => {
<<<<<<< HEAD
        desafio(2000, products[4])
            .then(result => setDato(result))
            .catch(err => console.log(err))
    }, [])
    return (
        <ItemDetail item={dato}/>
=======
        desafio(Data.find(item => item.id === parseInt(id)))
        .then(res => setDato(res));
    }, [id])
    
    return(
        <div className="mainProductPage">
            <ItemDetail item={dato} />
        </div>
>>>>>>> develop
    )
}

export default ItemDetailContainer