import React from 'react';

const CartModal = ({ isOpen, cartItems, removeFromCart, closeModal }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-xl font-bold">Cart Items</h2>
        {cartItems.length === 0 ? (
          <p>No items in the cart</p>
        ) : (
          cartItems.map(item => (
            <div key={item.id} className="flex justify-between items-center py-2">
              <span>{item.title}</span>
              <button onClick={() => removeFromCart(item.id)} className="bg-red-500 text-white px-2 rounded">
                Remove from Cart
              </button>
            </div>
          ))
        )}
        <button onClick={closeModal} className="mt-4 bg-gray-300 px-4 py-2 rounded">Close</button>
      </div>
    </div>
  );
};

export default CartModal;

