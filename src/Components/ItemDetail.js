import ItemCount from "./ItemCount";


const ItemDetail = ({item}) => {
    return(
        <div className="itemDetailContainer">
            <img src={item.img} alt="x"/>
            <div className="itemDetailTitle">
                <h3>{item.title}</h3>
            </div>
            <div className="itemDetailCompany">{item.developerCompany}</div>
            <div className="itemDetailDescription">
                <p>{item.description}</p>
            </div>
            <div className="itemDetailPrice">{item.price}</div>
            <ItemCount stock={item.stock} initial={1}/>
        </div>

    );

}

export default ItemDetail