import React, { useEffect, useState } from 'react';
// import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { Link } from 'react-router-dom';
import ManageProduct from '../ManageProduct/ManageProduct';
const Shop = () => {

    // const first10 = fakeData.slice(0,10);
    const [products, setProducts] = useState([]);
    // const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data =>{
                 setProducts(data);
                console.log(data);     
            })
    }, [])




    return (
        <div >
            <div className="row my-container">
                {
                    products.map(pd => <Product
                        key={pd._id}
                        showAddToCart={true}
                        handleAddProduct={handleAddProduct}
                        product={pd}></Product>) 
                }


            </div>
        </div>
    );
};

export default Shop;