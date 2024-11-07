
import React, { useState } from 'react';
import ProductList from './components/ProductList';
import AddProduct from './components/AddProduct';
import './App.css';

const App = () => {
  const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    setProducts((prevProducts) => [...prevProducts, product]);
  };

  const deleteProduct = (id) => {
    setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
  };

  const buyProduct = (id) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, sold: true } : product
      )
    );
  };

  return (
    <div className="app-container">
      <h1>Classified Web App for Products</h1>
      <AddProduct onAdd={addProduct} />
      <ProductList products={products} onDelete={deleteProduct} onBuy={buyProduct} />
    </div>
  );
};

export default App;

