import Products from "./utils/Products"

const ItemList = (props) => {
    return(
        <>
        {Products.map(item => (
            <Products
                key={item.id}
                title={item.title}
                developerCompany={item.developerCompany}
                img={item.img}
                description={item.description}
                stock={item.stock}
                />
        ))}
        </>
    )
}
export default ItemList