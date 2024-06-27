/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

const Cards = ({ item }) => {
  const [wishlist, setWishlist] = useState(false);
  const handleHeartClick = () => {
    setWishlist(!wishlist);
  };
  return (
    <div className="card bg-base-100 md:w-[21rem] md:h-[31rem] shadow-xl  relative">
      <div
        className={`rating  absolute right-2 top-2 p-4 heartStar bg-green ${
          wishlist ? "text-red" : "text-white"
        } `}
        onClick={handleHeartClick}
      >
        <FaHeart className="h-5 w-5 cursor-pointer" />
      </div>
      <Link to={`/menu/${item._id}`}>
        <figure>
          <img src={item.image} alt={item.name} className="h-[15rem]"/>
        </figure>
      </Link>
      <div className="card-body">
        <h2 className="card-title">{item.name}</h2>
        <p>{item.recipe}</p>
        <div className="card-actions justify-between items-center mt-2">
          <h5 className="font-medium">
            <span className="text-red mr-1">₹</span>
            {item.price}
          </h5>
          <button className="btn bg-green text-white">Buy now</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
