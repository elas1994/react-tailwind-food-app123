import React from "react";

const HedlineCards = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      {/* Card */}
      <div className="rounded-xl relative">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">Healty Meals</p>

          <p className="px-2">Organic Ingredients</p>

          <button className="border-white font-semibold bg-white text-black mx-2 absolute bottom-4 hover:scale-105 duration-300">
            Order Now
          </button>
        </div>

        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="images/eggs1.avif"
          alt="img"
        />
      </div>

      {/* Card */}
      <div className="rounded-xl relative">
        {/* Overlay */}
        <div className=" absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">New Restaurants</p>

          <p className="px-2">Added Daily</p>

          <button className="border-white font-semibold  bg-white text-black mx-2 absolute bottom-4 hover:scale-105 duration-300">
            Order Now
          </button>
        </div>

        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="images/kebab.avif"
          alt="img"
        />
      </div>

      {/* Card */}
      <div className="rounded-xl relative">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">Delicious Deserts</p>

          <p className="px-2">Real Treats</p>

          <button className="border-white font-semibold bg-white text-black mx-2 absolute bottom-4 hover:scale-105 duration-300">
            Order Now
          </button>
        </div>

        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="images/strawberry1.avif"
          alt="img"
        />
      </div>
    </div>
  );
};

export default HedlineCards;
