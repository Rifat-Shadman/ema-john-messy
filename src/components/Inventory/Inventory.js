import React from 'react';
// import fakeData from '../../fakeData';
const Inventory = () => {
    const handleAddProducts = () => {
        const product = {};
        fetch('https://cherry-surprise-20492.herokuapp.com/addProduct', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
    }

    return (
        <div>
            <form action="">
                <p><span>Name</span><input type="text"/></p>
                <p><span>price: </span><input type="text"/></p>
                <p><span>Quantity: </span><input type="text"/></p>
                <p><span>Product Image: </span><input type="file"/></p>


                <button onClick={() => handleAddProducts()}>
                    Add Product
                </button>
            </form>

        </div>
    );
};

export default Inventory;