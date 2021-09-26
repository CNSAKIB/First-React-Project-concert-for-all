import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props || {}
    const totalReducer = (prevValue, currentValue) => prevValue + currentValue.salary
    const total = cart.reduce(totalReducer, 0);
    return (
        <div className="cart-design">
            <h4><i class="fas fa-shopping-cart"></i> My-Cart</h4>
            <p>Total Bands: {cart.length}</p>
            <h4>Cost: ${total}</h4>
            <h5>Added Bands:</h5>
            <ul>
                {

                    cart.map(item => <li><b>{item.name}</b></li>)

                }
            </ul>
            <button className="btn-regular">Book your Show</button>
        </div >
    );
};

export default Cart;