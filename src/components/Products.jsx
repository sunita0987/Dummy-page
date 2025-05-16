import { Link } from "react-router-dom";
import React from "react";

function Product() {
  const products = [
    { id: 1, name: "Product 1", image: "src/assets/images/like.webp" },
    { id: 2, name: "Product 2", image: " src/assets/images/india.webp" },
    { id: 3, name: "Product 3", image: "src/assets/images/amazon.webp" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold text-indigo-700 mb-6 text-center">
        Products
      </h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <li key={product.id} className="border rounded-xl p-4 hover:shadow-lg transition ">
            <Link to={`/products/${product.id}`}>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h2 className="text-lg font-semibold text-gray-800 hover:text-indigo-600">
                {product.name}
              </h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Product;
