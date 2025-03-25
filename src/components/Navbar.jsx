import React from 'react';

const Navbar = ({ cartCount, openCart }) => {
  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between">
      <h1 className="text-2xl text-center w-full">Fake API Store </h1>
      <button onClick={openCart} className="bg-blue-500 px-4 py-2 rounded">
       Cart ({cartCount})
      </button>
    </nav>
  );
};

export default Navbar;
