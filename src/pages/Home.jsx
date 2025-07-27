import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const categories = [
  {
    categoryId: "laptop",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    categoryId: "phone",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    categoryId: "camera",
    image:
      "https://plus.unsplash.com/premium_photo-1663134149019-284682ece04c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Home = () => {
  const [item, setItem] = useState(categories);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCategories = categories.filter((category) =>
    category.categoryId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    setItem(filteredCategories);
  }, [searchTerm]);

  return (
    <div>
      <div className="max-w-md mx-auto">
        <input
        className="border-2 rounded-2xl m-6 p-3"
          type="search"
          placeholder="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {item.map((category) => {
          const { categoryId, image } = category;
          return (
            <Link
              to={categoryId}
              key={categoryId}
              className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition duration-300 cursor-pointer"
            >
              <img
                src={image}
                alt={categoryId}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h1 className="text-lg font-bold text-blue-800">
                  {categoryId}
                </h1>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
