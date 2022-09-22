import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import ItemCount from "./ItemCount";


const ItemDetail = ({ item }) => {
    const test = useContext(CartContext);
    const [itemCount, setItemCount] = useState(1);
    const [itemStock, setItemStock] = useState(1);
    const [added, setAdded] = useState(false);

    useEffect(() => {
        setItemCount(item.quantity);
        setItemStock(item.stock);
    }, [item]);

    const onAdd = (stock, count) => {
        alert(
            `Has agregado ${
                count > 1 ? `${count} productos` : `${count} producto`
            } al carrito`
        );
        setItemStock(stock - count);
        setAdded(true);
        test.addItem(item, count);
    };

    return (
        <div>
            <div className="itemDetailContainer">
                <img className="itemDetailImg" src={item.img} alt="x"/>
                <div className="itemDetailTitle">
                    <h3>{item.title}</h3>
                </div>
                <p className="itemDetailCompany">{item.developerCompany}</p>
                <div className="itemDetailDescription">
                    <p>{item.description}</p>
                </div>
                <div className="itemDetailPrice">${item.price}</div>
                <div className="addToCartSection">
                {added === false 
                ?   (
                    <ItemCount Stock={itemStock} initial={itemCount} onAdd={onAdd}/>
                ) : (
                    <Link to="/cart">
                        <button>
                        Ir al carrito
                        </button>
                    </Link>
                )}
                    <p className="itemDescription">Disponibles: {itemStock}</p>
                </div>
            </div>
        </div>
        
    );
};
export default ItemDetail;