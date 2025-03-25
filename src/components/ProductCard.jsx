const ProductCard = ({ product, addToCart }) => {
    return (
        <div className="p-4 border rounded-lg">
            <img src={product.image} alt={product.title} className="h-40 mx-auto" />
            <h2 className="text-lg font-bold">{product.title}</h2>
            <p className="text-gray-600">${product.price}</p>
            <button 
              className="bg-blue-600 text-white px-3 py-2 mt-2 rounded"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
        </div>
    );
};

export default ProductCard;
