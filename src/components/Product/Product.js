import React, { useState } from 'react';

import './Product.css';
import { useHistory } from 'react-router-dom';
import Shipment from '../Shipment/Shipment'
import { UserContext } from '../../App';
import { TakenBookContext } from '../../App';

const Product = (props) => {
    const history = useHistory();
    const [cart, setCart] = useState({});
    const [takenBook, setTakenBook] = UserContext(TakenBookContext)
    const handleProceedCheckout = (props) => {
        console.log(props);
        setTakenBook(props.product)
        console.log('Cart',takenBook);
        history.push('/shipment');  
    }
    // console.log(props);
    const {imageURL, name,price,quantity,_id} = props.product;
    console.log(props);
    return (
        
        <div className="col-md-4 p-3 prod">
            <img src={imageURL} alt=""/>
            <h5>{name}</h5>
            <br/>
            {/* <button onClick={()=>deleteEvent(event._id)}>Delete</button> */}

            {props.showAddToCart === true && <button 
                    className="main-button"
                    onClick={()=>handleProceedCheckout(props)}
                    > Buy Now
                </button>
            }
{/* {<Shipment style={{display:'none'} } props ={props}></Shipment>} */}
                
        </div>


        // <div className="col-d-3 product row">
        //     <div>
        //         <img src={imageURL} alt=""/>
        //     </div>
        //     <div>
        //         <h4 className="product-name"><Link to={"/product/"+_id}>{name}</Link></h4>
        //         <br/>
        //         <p> <small>by: {seller}</small></p>
        //         <p>${price}</p>
        //         <p> <small>Only {stock} left in stock--- Order now!</small> </p>

        //         {props.showAddToCart === true && <button 
        //             className="main-button"
        //             onClick={() => props.handleAddProduct(props.product)}
        //             > 
        //                 <FontAwesomeIcon icon={faShoppingCart} />  Add to cart
        //         </button>}
        //     </div>
            
            
        // </div>
    );
};

export default Product;