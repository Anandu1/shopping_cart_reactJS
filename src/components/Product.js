import React from 'react';

export default function Product(props) {
  const { product, onAdd } = props;
  return (
    <div className="productBox">
      <img className="small" src={product.image} alt={product.name} />
      <h3 >{product.name}</h3>
      <div>₹{product.price}</div>
      <div className="storeName">{product.store}</div>
      <div>
        <button className='addToCart'
         onClick={() => onAdd(product)}>Add To Cart</button>
      </div>
    </div>
  );
}
