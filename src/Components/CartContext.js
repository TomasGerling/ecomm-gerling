import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
	const [cartList, setCartList] = useState([]);

	const isOnCart = (itemId) => {
		const item = cartList.find((element) => element.id === itemId);
		return item ? true : false;
	};

/**
 * If the item is already on the cart, add the quantity to the existing item. If the item is not on the
 * cart, add the item to the cart
 * @param item - the item that is being added to the cart
 * @param qty - the quantity of the item to be added
 */
	const addItem = (item, qty) => {
		if (isOnCart(item.id)) {
			setCartList((prevState) => {
				return prevState.map((element) => {
					console.log(element.stock);
					if (element.id === item.id) {
						if (element.quantity + qty > element.stock - 1) {
							return {
								...element,
								quantity: element.stock,
							};
						} else {
							return {
								...element,
								quantity: element.quantity + qty,
							};
						}
					} else {
						return element;
					}
				});
			});
		} else {
			let itemForCart = {
				...item,
				quantity: qty,
			};
			setCartList((prevState) => [...prevState, itemForCart]);
		}
	};

	const removeItem = (itemId) => {
		let newCartList = cartList.filter((item) => item.id !== itemId);
		setCartList(newCartList);
	};

	const clear = () => {
		setCartList([]);
	};

/**
 * TotalPrice is the total price of the cartList, rounded to the nearest integer.
 * @returns The total price of all items in the cart.
 */
	const totalPrice = () => {
		return Math.round(
			cartList.reduce(
				(totalPrice, item) => totalPrice + item.price * item.quantity,
				0
			)
		);
	};

	const TotalPrice = totalPrice();

/**
 * The function `countQuantity` returns the total number of items in the cart by adding up the quantity
 * of each item in the cart.
 * @returns The total number of items in the cart.
 */
		const countQuantity = () => {
			return Math.round(
				cartList.reduce(
					(totalItems, item) =>
						totalItems + item.quantity,
					0
				)
			);
		};

	const totalItems = countQuantity();

	return (
		<CartContext.Provider value={{ cartList, addItem, removeItem, clear, TotalPrice, totalItems }}>
			{children}
		</CartContext.Provider>
	);
};

export default CartContextProvider;