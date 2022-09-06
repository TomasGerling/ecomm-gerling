import { useEffect } from "react";
import ItemCount from "./ItemCount";

const onAdd = (qty) => {
    alert("Has seleccionado " + qty + " articulos.")
}
const ItemDetail = ({item}) => {
    useEffect(()=> {
        
    }, [] )
    return(
        <>
        {
        item.img
        ?
        <div className="itemDetailContainer">
            <img src={item.img[1]} alt=""/>
            <div className="itemDetailTitle">
                <h3>{item.title}</h3>
            </div>
            <div className="itemDetailCompany">{item.developerCompany}</div>
            <div className="itemDetailDescription">
                <p>{item.description}</p>
            </div>
            <div className="itemDetailPrice">{item.price}</div>
            <ItemCount stock={item.stock} initial={1} onAdd={onAdd}/>
        </div>
        : <p>Cargando...</p>
        }
        </>
    );

}

export default ItemDetail;