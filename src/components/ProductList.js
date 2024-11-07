import React from 'react';

const ProductList = ({ products, onDelete, onBuy }) => {
  return (
    <div>
      <h2>Products for Sale</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>${product.price.toFixed(2)}</p>
            <p><strong>Condition:</strong> {product.isUsed ? 'Used' : 'New'}</p>
            {product.sold ? (
              <p style={{ color: 'red' }}>Sold</p>
            ) : (
              <button onClick={() => onBuy(product.id)}>Buy</button>
            )}
            <button onClick={() => onDelete(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;


