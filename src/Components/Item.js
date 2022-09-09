import Products from "./utils/Products"

const Item = (props) => {
    return(
        <>
        {Products.map(item => (
            <Products
                key={item.id}
                title={item.title}
                developerCompany={item.developerCompany}
                img={item.img}
                description={item.description}
                productCategory={item.productCategory}
                stock={item.stock}
                />
        ))}
        </>
    )
}
export default Item