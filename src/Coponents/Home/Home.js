import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Home = () => {
    const [products, setProduct] = useState([])
    const [cart, setCart] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])

    const handleProduct = (product) => {
        console.log('product added' , product)
        
        const newCart = [...cart, product]
        setCart(newCart);
        
        localStorage.setItem("pd", JSON.stringify(newCart))
        
    }

    return (
        <div className="row ml-5 ">

        
           
           <div className="w-75" style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr "}} >
           {
                products.map(product => <Product 
                    product={product}
                    handleProduct={handleProduct}
                
                
                ></Product>)
            }

           </div>
                <div>
                <Cart cart={cart}></Cart>
                </div>
            
        </div>
    );
};

export default Home;