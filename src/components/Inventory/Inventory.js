import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './Inventory.css'
// import fakeData from '../../fakeData';
const Inventory = () => {

    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const onSubmit = data => {
        console.log(data);
        const product = {
            name: data.name,
            price: data.price,
            quantity: data.quantity,
            imageURL: imageURL
        };
        fetch('http://localhost:5000/addProduct', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        .then(
            alert('Your product is added to the database')
        )
    }


    const handleImageUpload = event => {
        console.log(event.target);
        const imageData = new FormData();
        imageData.set('key', 'f3c8081683b538b662d1ccfee9b6540c');
        imageData.append('image', event.target.files[0]);


        axios.post(`https://api.imgbb.com/1/upload`, imageData)
        .then(function(response){
            console.log(response.data.data.display_url);
            setImageURL(response.data.data.display_url);
        })
        .catch(function(error){
            console.log('kaaj hoynai')
            console.log(error);
        })
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit(onSubmit)} >
                <label htmlFor="name">Product Name</label>
                <input name="name" defaultValue="New Product" ref={register} />
                
                <label htmlFor="price">Unit Price</label>
                <input name="price" defaultValue="0.00" ref={register} />
                
                <label htmlFor="quantity">In Stock:</label>
                <input name="quantity" defaultValue="0" ref={register} />
                
                <label htmlFor="productImage">Upload an image: </label>
                <input name="productImage" type="file" onChange={handleImageUpload} />
                
                {errors.exampleRequired && <span>This field is required</span>}

                <input type="submit" />
                {/* <p><span>price: </span><input type="text"/></p>
                <p><span>Quantity: </span><input type="text"/></p>
                <p><span>Product Image: </span><input type="file"/></p>


                <button onClick={() => handleAddProducts()}>
                    Add Product
                </button> */}
            </form>

        </div>
    );
};

export default Inventory;