import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
	const [cartList, setCartList] = useState([]);

	const isOnCart = (itemId) => {
		const item = cartList.find((element) => element.id === itemId);
		return item ? true : false;
	};

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

	const totalPrice = () => {
		return Math.round(
			cartList.reduce(
				(totalPrice, item) => totalPrice + item.price * item.quantity,
				0
			)
		);
	};

	const TotalPrice = totalPrice();

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