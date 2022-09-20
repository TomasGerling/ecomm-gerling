import { useState, useEffect } from "react"

const ItemCount = ({ Stock, initial, onAdd }) => {
    const [count, setCount] = useState(1);
    const [stock, setStock] = useState(1);
    console.log(Stock)
    useEffect (() => {
        setCount(initial)
        setStock(Stock)
    }, [Stock, initial])

    const increment = () => {
        if(count === stock) {
            setCount(stock)
        }else{
            setCount(prevCount => prevCount +1)
        }
    }

    const decrement = () => {
        if (count === initial) {
          setCount(1);
        } else if (count > stock) {
          setCount(0);
        } else {
          setCount((prevCount) => prevCount - 1);
        }
      };
return (
        <>
            <div className="ProductAmountContainer">
                <button className="circleMinus" variant="Text" onClick={decrement}>-</button>
            <div className= "productAmount">{count}</div>
            <button className="circlePlus" variant="Text" onClick={increment}>+</button>
            <button className="addCart" onClick={() => { onAdd(stock, count);}}>Comprar</button>
            </div>
        </>
);
}
export default ItemCount