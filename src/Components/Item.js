import ItemCount from "./ItemCount"
import products from "./utils/products"


const Item = (props) => {
    const onAdd = (qty) => {
        alert("Has seleccionado " + qty + " articulos.")
    }
    return (
        <div className="productsList">
        {
        products.map(item => (
        <div className="product">
            <span className="productPrice">{item.price}</span>
            <img className="productImage" src={item.img} alt=""></img>
            <h4 className="productTitle">{item.title}</h4>
            <hr/>
            <p>Descripción: {item.description}</p>
            <ItemCount stock={item.stock} initial={1} onAdd={onAdd}/>
        </div>
        ))
        }
        </div>
    )
}
export default Item