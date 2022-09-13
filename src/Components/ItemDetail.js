import ItemCount from "./ItemCount";

<<<<<<< HEAD
const ItemDetail = ({item}) => {

=======

const ItemDetail = ({item}) => {
>>>>>>> develop
    return(
        <div className="itemDetailContainer">
            <img src={item.img} alt="x"/>
            <div className="itemDetailTitle">
                <h3>{item.title}</h3>
            </div>
            <p className="itemDetailCompany">{item.developerCompany}</p>
            <div className="itemDetailDescription">
                <p>{item.description}</p>
            </div>
<<<<<<< HEAD
            <p className="itemDetailPrice">{item.price}</p>
            <ItemCount stock={item.stock} initial={1} onAdd={onAdd}/>
=======
            <div className="itemDetailPrice">{item.price}</div>
            <ItemCount stock={item.stock} initial={1}/>
>>>>>>> develop
        </div>

    );

}

export default ItemDetail