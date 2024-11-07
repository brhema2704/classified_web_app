// src/components/AddProduct.js

import React, { useState } from 'react';

const AddProduct = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [isUsed, setIsUsed] = useState(false); // New state for condition

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ id: Date.now(), name, description, price: parseFloat(price), isUsed, sold: false });
    setName('');
    setDescription('');
    setPrice('');
    setIsUsed(false); // Reset the condition
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a New Product</h2>
      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <label>
        <input placeholder='Used Product'
          type="checkbox"
          checked={isUsed}
          onChange={(e) => setIsUsed(e.target.checked)}/> Used Product 
        
      </label>

    
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProduct;

