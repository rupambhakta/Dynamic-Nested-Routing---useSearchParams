import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../data.json";

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = data.find((item) => item.id === Number(productId));
    setProduct(foundProduct);
  }, [productId]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        Product not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-xl">
        <h3 className="text-2xl font-bold text-black mb-6">
          Details of : <span className="text-blue-800">{product.name}</span>
        </h3>
        <div className="bg-blue-50 rounded-xl p-6 border border-blue-200 shadow">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover rounded-md mb-4"
          />
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            {product.name}
          </h2>
          <p className="text-gray-600 mb-2">{product.desc}</p>
          <p className="text-blue-700 font-bold text-lg">
            Price: ${product.price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
