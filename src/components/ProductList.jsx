import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

const ProductList = ({ addToCart, cart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 w-full">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} cart={cart} />
      ))}
    </div>
  );
};

export default ProductList;
