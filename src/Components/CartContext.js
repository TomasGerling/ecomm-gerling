import { createContext, useState } from "react";


export const CartContext = createContext()


const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])

/**
 * It takes an item and a quantity, and adds it to the cart list.
 * @param item - {
 * @param qty - the quantity of the item to be added to the cart
 */
    const addItem = async(item, qty, id) => {
        const isInCart= (id) =>{
            return(
                cartList.some(item => item.id === id)
            )
        }
        if(isInCart(id)){
            console.log("el item ya estaba");
            let isInCart = {
                ...item,
                qty,
                id
        }

        setCartList(
            ...cartList,
            isInCart
        )
        console.log(cartList);
        }else{
        

        let itemForCart = {
            ...item,
            qty
        }
        setCartList([
            ...cartList,
            itemForCart
        ])
        console.log(cartList);
    }}


// Remove the item from the cartList array that has the same id as the id passed in as an argument.

    const removeItem = (id) =>{
        let newCartList = cartList.filter(item => item.id !== id)
        setCartList(newCartList)
    }

    const clear = () =>{
        setCartList([])
    }
    console.log(cartList.length)
    return(
        <CartContext.Provider value={{cartList, addItem, removeItem, clear}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider