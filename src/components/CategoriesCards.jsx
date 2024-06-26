/* eslint-disable react/prop-types */
import React from "react";

const CategoriesCards = ({ item }) => {
  return (
    <div
      className="shadow-lg rounded-md bg-white
   py-6 px-5 w-60 mx-auto text-center cursor-pointer hover:-translate-y-4 duration-300 transition-all"
    >
      <div className="flex w-full mx-auto items-center justify-center">
        <img
          src={item.image}
          alt={item.title}
          className="bg-[#C1F1C6] p-5 rounded-full w-28 h-28"
        />
      </div>

      <div className="mt-5 space-y-1">
        <h5 className="font-bold">{item.title}</h5>
        <p>{item.description}</p>
      </div>
    </div>
  );
};

export default CategoriesCards;
