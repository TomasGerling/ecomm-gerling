import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {

    const onAdd = (qty) => {
        alert("Has seleccionado " + qty + " articulos.")
}

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
            <p className="itemDetailCompany">{item.developerCompany}</p>
            <div className="itemDetailDescription">
                <p>{item.description}</p>
            </div>
            <p className="itemDetailPrice">{item.price}</p>
            <ItemCount stock={item.stock} initial={1} onAdd={onAdd}/>
        </div>
        : <p>Cargando...</p>
        }
        </>
    );

}

export default ItemDetail;