import React, { useContext, useEffect, useState } from 'react';
import { UserContex } from '../../App';

const Myorders = () => {

    const [clientorders, setClientOrders] = useState([])
    const [logginUser, setLoggingUser] = useContext(UserContex)
    useEffect(()=>{
        fetch('http://localhost:5000/myorders?email'+logginUser.email)
        .then(res => res.json())
        .then(data => setClientOrders(data))
        
    },[])
   
    return (
        <div>
           
           {
               clientorders.map(order => <div>
                   <h6>name: {order.userName}, email {order.userEmail}</h6>
                   {order.cartProduct.map(item => <div>{item.name}</div>)}
               </div>)
           } 
           
        </div>
    );
};

export default Myorders;