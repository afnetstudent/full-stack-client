import axios from 'axios';
import React, { useState } from 'react';
import { appendErrors, useForm } from "react-hook-form";

const Admin = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imageUrl, setImageUrl] = useState(null)
   
   
    const onSubmit = data => {  
    const productData = {
      name:data.name,
      price:+(data.price),
      stock:+(data.stock),
      imageUrl:imageUrl
    };
    console.log(productData)
    const url = `http://localhost:5000/addProduct`;

    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(productData)
    })
    .then(res => console.log('server side ', res))
    
    };

    const hadleImageUpload = event =>{
        console.log(event.target.files[0])
        const productImage = new FormData()
       
        productImage.set('key', 'a470f239a5953c0b486f912d96d4c230')
        
        productImage.append('image', event.target.files[0])

        console.log(productImage)
        
        axios.post('https://api.imgbb.com/1/upload',
        productImage 
       )
     
          .then(function (response) {
            setImageUrl(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
       
    }
    return (
        <div>
    <form  onSubmit={handleSubmit(onSubmit)}>
    <label className="mr-2"> Product Name </label>
    <input className="mb-3 mr-3 w-25 " name="name" defaultValue="name" {...register("name")} />
    <label className="mr-2"> Product Stock </label>
    <input  className="mr-3 w-25" name="stock" type="number" {...register("stock")} />
 
    <br  />
    <label className="mr-2"> Product Price </label>
    <input className="mr-3 w-25" name="price" type="number" {...register("price")}/>
    <label className="mr-2"> Product Image </label>
    <input className="mr-3 w-25" name="image-load" type="file" onChange={hadleImageUpload} />
     
     {errors.exampleRequired && <span>This field is required</span>}
      <br />
      <input  type="submit" />
        </form>
    </div>
    );
};

export default Admin;