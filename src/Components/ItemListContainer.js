import ItemCount from "./ItemCount"

const ItemListContainer = (greeting) => {
    const onAdd = (qty) => {
        alert("Has seleccionado " + qty + " articulos.")
    }
    return (
        <>
            <div className="saludo"><p>Bienvenid@ a RetroGames</p></div>
            <ItemCount stock={5} initial={1} onAdd={onAdd}/>
        </>
    )
}
export default ItemListContainer