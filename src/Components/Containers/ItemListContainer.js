import ItemList from "../ItemList"
<<<<<<< HEAD

const ItemListContainer = () =>{
    return(
        <div className="productsList">
            <ItemList ></ItemList>
=======
const ItemListContainer = (props) =>{

    return(
        <div className="listContainer">
            <h2 className="listTitle">
                {props.greeting}
            </h2>
            <ItemList></ItemList>
>>>>>>> develop
        </div>
        
    )
}
<<<<<<< HEAD

=======
>>>>>>> develop
export default ItemListContainer