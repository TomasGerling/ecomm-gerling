import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";


const ItemDetail = ({item}) => {
    const [itemCount, setItemCount] = useState(0)
    const onAdd = (qty) => {
        alert("Has seleccionado " + qty + " articulos.")
        setItemCount(qty);

}
    return(
        <div>
        {
            item && item.img
            ?
            <div className="itemDetailContainer">
                <img src={item.img} alt="x"/>
                <div className="itemDetailTitle">
                    <h3>{item.title}</h3>
                </div>
                <p className="itemDetailCompany">{item.developerCompany}</p>
                <div className="itemDetailDescription">
                    <p>{item.description}</p>
                </div>
                <div className="itemDetailPrice">{item.price}</div>
                {
                itemCount === 0
                ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd}/>
                : <Link to="/cart"><button>Al carrito</button></Link>
                }
            </div>
            :<p>Cargando...</p>
        }
        </div>
    );

}

export default ItemDetail