import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail";
import { firestoreFind } from "../utils/firebaseConfig";


const ItemDetailContainer  = () => {
    const [dato, setDato] = useState({})

    const  { id } = useParams();
    
    
    useEffect(() => {
        firestoreFind(id)
            .then(result => {
                console.log(result)
                setDato(result)
            })
            .catch(error => console.error(error))
    }, [id])
    
    return(
        <div className="mainProductPage">
            <ItemDetail item={dato} />
        </div>
    )
}

export default ItemDetailContainer