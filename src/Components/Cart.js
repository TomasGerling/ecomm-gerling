import { useContext, useEffect } from "react"
import { CartContext } from "./CartContext"

export default function Cart () {
    const test = useContext(CartContext)


    useEffect(() => {

    })
    return(
        <>
        {
            test.cartList.map(item => 
            <li>{item.title}
                <input type="number" value={item.qty}></input> 
                <button onClick={() => test.removeItem(item.id)}>Eliminar producto</button>
            </li>)
        }
        <button onClick={test.clear}>Borrar todo</button>
        </>
    )
}
