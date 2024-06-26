/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "../../components/Cards";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
const Specialmenu = () => {
  const [recipes, setRecipes] = useState([]);
  const slider = React.useRef(null);
  useEffect(() => {
    fetch("/data/menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popular = data.filter((item) => item.category === "popular");
        setRecipes(popular);
      });
  }, []);

  const next = (props) => {
    const { className, style, onClick } = props;

    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      >
        Next
      </div>
    );
  };

  const prev = (props) => {
    const { className, style, onClick } = props;

    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      >
        prev
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024, // Adjust for medium screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600, // Adjust for small screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],

    nextArrow: <next />,
    prevArrow: <prev />,
  };

  return (
    <div className="section-container my-28 relative">
      <div className="text-left">
        <p className="subtitle">Special Dishes</p>
        <h2 className="title md:w-[520px]">Standout Dishes From Our Menu</h2>
      </div>

      <div className="md:absolute right-3 top-8 mb-10 md:mr-24">
        <button
          onClick={() => slider?.current?.slickPrev()}
          className="btn rounded-full p-2 ml-5"
        >
          <MdKeyboardArrowLeft className="h-8 w-8 p-1" />
        </button>
        <button
          onClick={() => slider?.current?.slickNext()}
          className="btn rounded-full p-2 ml-5 bg-green"
        >
          <MdKeyboardArrowRight className="h-8 w-8 p-1 text-white" />
        </button>
      </div>

      <Slider
        ref={slider}
        {...settings}
        className="overflow-hidden mt-10 space-x-5"
      >
        {recipes.map((item) => (
          <Cards key={item._id} item={item} />
        ))}
      </Slider>
    </div>
  );
};

export default Specialmenu;
