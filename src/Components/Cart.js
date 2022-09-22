import { collection, doc, increment, serverTimestamp, setDoc, updateDoc } from "firebase/firestore";
import React from "react";
import { useContext } from "react";
import {CartContext} from "./CartContext";
import CartItem from "./CartItem";
import  {db}  from "./utils/firebaseConfig";

const Cart = () => {
	const test = useContext(CartContext);
	
	const createOrder = () => {
		let itemForDB = test.cartList.map(item =>({
			id: item.id,
			title: item.title,
			price: item.price,
			qty: item.quantity
		}))
		let order = {
			buyer: {
				name:"James Cameron",
				email:"James@cameron.com",
				phone:"23456789",
			},
			date: serverTimestamp(),
			items: itemForDB,
			total: test.TotalPrice
		}

		const createOrderInFirestore = async() => {
			const newOrderRef = doc(collection(db, "orders"))
			await setDoc(newOrderRef, order)
			return newOrderRef
		}

		createOrderInFirestore()
		.then(result => {
			alert("Su pedido fue creado con exito. Su numero de referencia es " + result.id)
			test.cartList.forEach(async(item)=>{
				const itemRef = doc(db, "products", item.id);
				await updateDoc(itemRef, {
					stock: increment(-item.quantity)
				})
			})
			test.clear()
		})
		.catch(err => console.log(err))


	}


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
						<button onClick={createOrder}>Comprar</button>
					</div>
				</div>
			</div>
	);
};

export default Cart;