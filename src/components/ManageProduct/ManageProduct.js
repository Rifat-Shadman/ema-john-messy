import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const ManageProduct = (props) => {

    const [products, setProducts] = useState([]);

    useEffect (() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    
    const prods= props;
    
    console.log(prods);
    return (
        <div>
<Table striped bordered hover variant="light"  className="m-4 p-4" style={{paddingRight:'4px'}}>
            <thead>
                <tr>
                    
                    <th>Product Name</th>
                    <th>Unit Price</th>
                    <th>Quantity</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map(pd => 
                    <tr>
                        <td >{pd.name}</td>
                        <td>{pd.price}</td>
                        <td>{pd.quantity}</td>
                      </tr>

                    )

                    
                }
            </tbody>
        </Table>
        </div>
        
    );
};

export default ManageProduct;