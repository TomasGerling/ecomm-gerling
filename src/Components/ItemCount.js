import { useEffect, useState } from "react"

const ItemCount = ({stock = 0, initial = 1, onAdd}) => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
        setCount(initial)
    },[])

    const increment = () =>{
        if (count < stock) {
            setCount(count + 1)
        }
    }

    const decrement = () =>{
        if (count > initial)
        setCount(count - 1)
    }
return (
        <>
            <div className="ProductAmountContainer">
                <button className="circleMinus" variant="Text" onClick={decrement}>-</button>
            <div className= "productAmount">{count}</div>
            <button className="circlePlus" variant="Text" onClick={increment}>+</button>
            {
                stock
                ? <button className="addCart" variant="contained" onClick={() => onAdd(count)}> Agregar al carrito</button>
                : <button variant="contained"></button>
            }
            </div>
        </>
);
}
export default ItemCount