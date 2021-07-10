import { prettyDOM } from '@testing-library/react';
import React from 'react';
import { Link } from 'react-router-dom';


const Cart = (props) => {
    
   const cart = props.cart;
    console.log(cart)
   const total = cart.reduce((total, prd) => total+prd.price, 0)
  
    return (
        <div>
            <h2> Order summary {cart.length} </h2>
            <h2> total {total}</h2>
            <Link to="order"> <button className="bg-success">  Byu Now   </button> </Link>
        </div>
    );
};

export default Cart;