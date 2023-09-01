import React, { createFactory, useState } from "react";

//* Importing categories so we can map trough its items
import { categories } from "../Data/Data";

const Category = () => {
  return (
    <div className="max-w-[1640px] px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Top Rated Menu Items
      </h1>

      {/* Categories */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6">
        {categories.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-gray-100 rounded-lg p-4 flex justify-between items-center hover:scale-105 duration-300 cursor-pointer"
            >
              <h2 className="font-bold sm:text-xl">{item.name}</h2>

              <img src={item.image} alt="img" className="w-20" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
