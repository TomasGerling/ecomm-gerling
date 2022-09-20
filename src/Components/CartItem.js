import React from "react";

const CartItem = (props) => {
    return(
        <div className="cartItem">
            <div class="row shoppingCartItem">
                <div class="col-6">
                    <div class="shopping-cart-item d-flex align-items-center border-bottom">
                    <img src={props.img} class="shoppingCartImage" alt="ItemCartIMG"></img>
                    <h6 class="shoppingCartItemTitle ">{props.title}</h6>
                    </div>
                </div>
            <div class="col-2">
                <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom">
                    <p class="item-price mb-0 shoppingCartItemPrice">${props.price}</p>
                </div>
            </div>
            <div class="col-4">
                <div
                class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom">
                <p>Cantidad:{props.quantity}</p>
                <button onClick={() => props.removeItem(props.id)}>Eliminar producto</button>
                </div>
            </div>
            </div>
        </div>
    )
}
export default CartItem;
