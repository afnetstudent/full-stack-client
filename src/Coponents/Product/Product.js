import React from 'react';
import { Link } from 'react-router-dom';
const Product = (props) => {
   console.log(props)
    const {price, imageUrl,name,stock, _id} = props.product;
    
    
    return (
        <div>
            <img src={imageUrl} alt="" />
            <h6> <Link to={"/product/"+_id}>{name} <span>{price} TK</span> <span> stock{stock}</span></Link> </h6>
            <button className="bg-success" onClick={ ()=> props.handleProduct (props.product)} > Add To Cart</button>
            
        </div>
    );
};

export default Product;