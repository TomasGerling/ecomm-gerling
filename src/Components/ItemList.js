import { useEffect } from "react"
import ItemListContainer from "../Containers/ItemListContainer"

const ItemList = (props) => {
    useEffect(()=> {
        
    }, [] )
    return(
        <>
        {props.item.map(item => (
            <ItemListContainer
                key={item.id}
                title={item.title}
                developerCompany={item.developerCompany}
                img={item.img}
                description={item.description}
                gameCategory={item.gameCategory}
                stock={item.stock}
                />
        ))}
        </>
    )

}

export default ItemList