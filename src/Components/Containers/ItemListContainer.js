import ItemList from "../ItemList"
const ItemListContainer = (props) =>{

    return(
        <div className="listContainer">
            <h2 className="listTitle">
                {props.greeting}
            </h2>
            <ItemList></ItemList>
        </div>
        
    )
}
export default ItemListContainer