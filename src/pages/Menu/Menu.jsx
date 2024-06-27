import React, { useEffect, useState } from "react";
import Cards from "../../components/Cards";

import Select from "react-select";
import { customStyles, options } from "./helper";

const Menu = () => {
  const [menu, setmenu] = useState([]);
  const [filterItems, setFilterItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOption, setSortoption] = useState("default");

  const [currPage, setCurrPage] = useState(1);
  const [itemsPerPage] = useState(6);

  //loading data
  useEffect(() => {
    fetch("/data/menu.json")
      .then((res) => res.json())
      .then((data) => {
        setmenu(data);
        setFilterItems(data);
      });
  }, []);

  //filter based on category
  const filterItemsCategory = (category) => {
    const filtered =
      category === "all"
        ? menu
        : menu.filter((item) => item.category === category);
    setFilterItems(filtered);
    setSelectedCategory(category);
    setCurrPage(1);
  };

  const showsAll = () => {
    setFilterItems(menu);
    setSelectedCategory("all");
    setCurrPage(1);
  };

  //sorting
  const handleSorting = (option) => {
    setSortoption(option);
    let sortedItems = [...filterItems];

    switch (option) {
      case "A-Z":
        sortedItems.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "Z-A":
        sortedItems.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "low-to-high":
        sortedItems.sort((a, b) => a.price - b.price);
        break;
      case "high-to-low":
        sortedItems.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }
    setFilterItems(sortedItems);
    setCurrPage(1);
  };
  // pagination
  const idxOfLastItem = currPage * itemsPerPage;
  const idxOfFirstItem = idxOfLastItem - itemsPerPage;

  const currItems = filterItems.slice(idxOfFirstItem, idxOfLastItem);
  const paginate = (pageNo) => {
    setCurrPage(pageNo);
  };

  return (
    <div className="">
      {/* Banner */}
      <div className="flex justify-center items-center xl:px-24 bg-gradient-to-r from-[#FAFAFA] froom-0% to-[#FCFCFC] to-[100%]">
        <div className=" py-48 flex flex-col justify-between items-center gap-8">
          <div className=" text-center space-y-7 px-4">
            <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
              For the Love of Delicious
              <span className="text-green"> Food</span>
            </h2>

            <p className="text-xl text-[#4A4A4A] md:4/5 mx-auto">
              Come with family & feel the joy of mouthwatering food such as
              Greek salad, Lasagne, Butternut pumpkin, Tokusen wagyu, Olivas
              Relienas and more for a moderate cost
            </p>
            <button className="btn bg-green px-8 py-3 rounded-full text-white font-semibold">
              Order Now
            </button>
          </div>
        </div>
        <div></div>
      </div>

      {/* menu shop section */}
      <div className="section-container">
        <div className="flex flex-col md:flex-row flex-wrap md:justify-between items-center space-y-3 mb-8">
          {/*filter and sorting */}
          <div className="my-8 mx-2">
            <div className="flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap">
              <button
                onClick={showsAll}
                className={selectedCategory === "all" ? "active" : ""}
              >
                All
              </button>
              <button
                onClick={() => filterItemsCategory("salad")}
                className={selectedCategory === "salad" ? "active" : ""}
              >
                Salad
              </button>
              <button
                onClick={() => filterItemsCategory("pizza")}
                className={selectedCategory === "pizza" ? "active" : ""}
              >
                Pizza
              </button>
              <button
                onClick={() => filterItemsCategory("soup")}
                className={selectedCategory === "soup" ? "active" : ""}
              >
                Soup
              </button>
              <button
                onClick={() => filterItemsCategory("dessert")}
                className={selectedCategory === "dessert" ? "active" : ""}
              >
                Dessert
              </button>
              <button
                onClick={() => filterItemsCategory("drinks")}
                className={selectedCategory === "drinks" ? "active" : ""}
              >
                Drinks
              </button>
            </div>
          </div>
          {/* sorting and filtering */}
          <div className="flex justify-end mb-4 rounded-sm">
            {/* sorting options */}

            <Select
              options={options}
              onChange={(selectedOption) => handleSorting(selectedOption.value)}
              value={options.find((option) => option.value === sortOption)}
              styles={customStyles}
            />
          </div>

          {/* products cards */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
            {currItems.map((item) => (
              <Cards key={item._id} item={item} />
            ))}
          </div>
        </div>
      </div>

      {/* pagination section */}
      <div className="flex justify-center">
        {Array.from({
          length: Math.ceil(filterItems.length / itemsPerPage),
        }).map((_, idx) => {
          return (
            <>
              <button
                className={`mx-1 my-8 py-1 px-3 ${
                  currPage === idx + 1 ? "bg-green text-white" : "bg-gray-200"
                } rounded-full`}
                key={idx + 1}
                onClick={() => paginate(idx + 1)}
              >
                {idx + 1}
              </button>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
