import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
const SingleProductDetails = () => {
    const [singlProduct , setSinglProdut] = useState({})
    const {id} = useParams()
    const url = `https://quiet-springs-25301.herokuapp.com/singleproduct/${id}`
    // console.log(url)
    useEffect(()=> {
        fetch(url)
        .then(res => res.json())
        .then(data => setSinglProdut(data))
    },[])
    return (
        <div>
            <h2>Name: {singlProduct.name}</h2>
            <img src={singlProduct.imageUrl} alt="" />
        </div>
    );
};

export default SingleProductDetails;