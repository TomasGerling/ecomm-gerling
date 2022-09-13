import ItemCount from "./ItemCount";
import { Link } from 'react-router-dom';


const ItemDetail = ({item}) => {
    const onAdd = (qty) => {
        alert("Has seleccionado " + qty + " articulos.")
    }
    return(
        <div className="itemDetailContainer">
            { 
            item.img && item
            ?
            <div>
            <img src={item.img} alt="x"/>
            <div className="itemDetailTitle">
                <h3>{item.title}</h3>
            </div>
            <div className="itemDetailCompany">{item.developerCompany}</div>
            <div className="itemDetailDescription">
                <p>{item.description}</p>
            </div>
            <div className="itemDetailPrice">{item.price}</div>
            {
                item.img && item.stock && ItemCount === 1
                
                ? <ItemCount stock={item.stock} initial={ItemCount} onAdd={onAdd}/>
                : <Link to="/cart"><button variant="contained">Ir al Carrito</button></Link>
            }
            </div>
            :<p>Cargando...</p>
        }   
        </div>
    );

}

export default ItemDetail