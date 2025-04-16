import React, { useContext } from 'react';
import { ItemContext } from '../context/ItemContext.js';

const ProductItem = ({ product }) => {
    const { addItemToCart, removeItemFromCart } = useContext(ItemContext);

    return (
        <div className='card'>
            <img className='card-img-top' src={product.image} alt={product.name} />
            <div className='card-body'>
                <h3 className="card-title">{product.name}</h3>
                <p className="card-text">{product.description}</p>
                <p className="card-text">Price: {product.price} Rs</p>
                <button onClick={() => addItemToCart(product)  } className="btn btn-primary" >Add to Cart</button>
                <button onClick={() => removeItemFromCart(product)} className="btn btn-primary">-</button>
            </div>
        </div>
    );
};

export default ProductItem;
