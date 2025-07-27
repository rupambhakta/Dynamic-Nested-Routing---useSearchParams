import React, { useEffect, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import data from "../data.json";

const Products = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const model = searchParams.get("model");

  useEffect(() => {
    if (model) {
      setProducts(
        data.filter(
          (product) => product.name.toLowerCase() === model.toLowerCase()
        )
      );
    } else {
      setProducts(data.filter((product) => product.categoryId === categoryId));
    }
  }, [searchParams, categoryId]);

  const handleChange = () => {};

  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <input
          onChange={(e) => {
            setSearchParams({ model: e.target.value });
          }}
          className="border-2 rounded-lg p-1 m-1"
          type="text"
          placeholder="Search a perticular phone"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
          {products.map((product) => {
            const { id, image, name } = product;
            return (
              <Link
                to={`/${categoryId}/${id}`}
                key={id}
                className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition duration-300 cursor-pointer"
              >
                <img
                  src={image}
                  alt={name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 text-center">
                  <h1 className="text-lg font-bold text-blue-800">
                    {name.toUpperCase()}
                  </h1>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Products;
