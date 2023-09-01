import React, { useState } from "react";
import { data } from "../Data/Data.js";

const Food = () => {
  //* importing data so we can map through its items
  const [foods, setFoods] = useState(data);

  //* Filter Type burgers/pizza/salad/chicken...
  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  //* Filter by Price
  const filterPrice = (price) => {
    setFoods(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };

  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Top Rated Menu Items
      </h1>

      {/* Filter Row */}
      <div className="flex flex-col lg:flex-row justify-between">
        {/* Filter Type */}
        <div>
          <p className="font-bold text-gray-700">Filter Type</p>
          <div className="flex justify-between flex-wrap">
            <button
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white "
              onClick={() => setFoods(data)}
            >
              All
            </button>

            <button
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white "
              onClick={() => filterType("burger")}
            >
              Burgers
            </button>

            <button
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
              onClick={() => filterType("pizza")}
            >
              Pizza
            </button>

            <button
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white "
              onClick={() => filterType("salad")}
            >
              Salads
            </button>

            <button
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white "
              onClick={() => filterType("chicken")}
            >
              Chicken
            </button>
          </div>
        </div>

        {/* Filter Price */}
        <div>
          <p className="font-bold text-gray-700">Filter Price</p>
          <div className="flex justify-between max-w-[390px] w-full">
            <button
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white "
              onClick={() => filterPrice("$")}
            >
              $
            </button>

            <button
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white "
              onClick={() => filterPrice("$$")}
            >
              $$
            </button>

            <button
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white "
              onClick={() => filterPrice("$$$")}
            >
              $$$
            </button>

            <button
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white "
              onClick={() => filterPrice("$$$$")}
            >
              $$$$
            </button>
          </div>
        </div>
      </div>

      {/* Display Foods */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {foods.map((item, index) => {
          return (
            <div
              key={index}
              className="border shadow-lg hover:scale-105 duration-300 rounded-lg"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-[200px] object-cover rounded-t-lg"
              />
              <div className="flex justify-between px-2 py-4">
                <p className="font-semibold text-sm sm:text-base">
                  {item.name}
                </p>
                <p>
                  <span className="bg-orange-500 text-white p-1 px-2 ml-1 rounded-full">
                    {item.price}
                  </span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Food;
