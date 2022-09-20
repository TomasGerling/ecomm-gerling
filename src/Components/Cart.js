import React from "react";
import { useContext } from "react";
import {CartContext} from "./CartContext";
import CartItem from "./CartItem";

const Cart = () => {
	const test = useContext(CartContext);

	const cartElements = test.cartList.map((el) => {
		return (
			<div key={el.id}>
				<CartItem
					id={el.id}
					img={el.img}
					title={el.title}
					price={el.price}
                    quantity={el.quantity}
					removeItem={test.removeItem}
				/>
			</div>
		);
	});

	return (
		<div className="cartSection">
            <div className="cartTitlesContainer">
				<h4 className="cartTitles">Imagen</h4>
				<h4 className="cartTitles">Nombre</h4>
				<h4 className="cartTitles">Precio</h4>
				<h4 className="cartTitles">Cantidad</h4>
			</div>
				{test.cartList.length > 0 ? (
					cartElements
				) : (
					<div className="emptyCartContainer">
						<h2 className="cartTitle">El carrito esta vacio</h2>
					</div>
				)}
				<div>
					<button onClick={test.clear}>
						Borrar todo
					</button>
					<div className="totalSection">
						<span className="cartTotalPrice">Total: ${test.TotalPrice}</span>
						<button>Comprar</button>
					</div>
				</div>
			</div>
	);
};

export default Cart;