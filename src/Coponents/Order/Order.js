import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { UserContex } from '../../App';



const Order = () => {
    const cart = JSON.parse(localStorage.getItem("pd"))
    // console.log(cart)
    const [logginUser, setLoggingUser] = useContext(UserContex)
    const [cartProduct, setCartProduct] = useState([])


    useEffect(() => {
        setCartProduct(cart)
    }, [])
    console.log(cartProduct)
    const handlOrder = () => {
        const cusTomerOrder = {
            userName: logginUser.name,
            userEmail: logginUser.email,
            cartProduct,
            date: new Date()
        };
        fetch('https://quiet-springs-25301.herokuapp.com/order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cusTomerOrder)
        })
            .then(res => res.json())
            .then(data => console.log(data))



    }


    return (
        <div style={{ textAlign: 'center', display: 'flex' }} >
            
            <h6>User Name : {logginUser.name} Lets Compleate Your Order</h6>
            {
                cart.map(product => (
                    <div className="m-2">
                        <img src={product.imageUrl} alt="" />
                        <h6>Produt Name : {product.name}</h6>
                    </div>
                ))
            }
            
            <button style={{ width: '100px', height: '50px', color: 'white' }} className="m-4 bg-success" onClick={handlOrder}> Procced TO Order </button>
        </div>
    );
};

export default Order;