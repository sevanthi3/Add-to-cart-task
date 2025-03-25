import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import CartModal from './components/CartModal';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  const addToCart = (product) => {
    if (cart.some(item => item.id === product.id)) {
      alert('Item already added to the cart');
    } else {
      setCart([...cart, product]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  return (
    <>
      <Navbar cartCount={cart.length} openCart={() => setModalOpen(true)} />
      <ProductList products={products} addToCart={addToCart} />
      <CartModal
        isOpen={isModalOpen}
        cartItems={cart}
        removeFromCart={removeFromCart}
        closeModal={() => setModalOpen(false)}
      />
    </>
  );
};

export default App;
