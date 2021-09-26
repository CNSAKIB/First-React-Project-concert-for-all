import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props || {}
    return (
        <div className="cart-design">
            <h4>My-Cart</h4>
            <p>Added Items: {cart.length}</p>
            <h5>Added Bands:</h5>
            <ul>
                {

                    cart.map(item => <li><b>{item.name}</b></li>)

                }
            </ul>
        </div>
    );
};

export default Cart;