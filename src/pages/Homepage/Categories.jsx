import React from "react";
import CategoriesCards from "../../components/CategoriesCards";

const categoryItems = [
  {
    id: 1,
    title: "Main Dish",
    description: "(86 dish)",
    image: "/images/home/category/img1.png",
  },
  {
    id: 2,
    title: "Breakfast",
    description: "(112 Break fast)",
    image: "/images/home/category/img2.png",
  },
  {
    id: 3,
    title: "Dessert",
    description: "(80 Dessert)",
    image: "/images/home/category/img3.png",
  },
  {
    id: 4,
    title: "Browse All",
    description: "(255 dish)",
    image: "/images/home/category/img4.png",
  },
];

const Categories = () => {
  return (
    <>
      <div className="section-container py-10">
        <div className="text-center">
          <p className="subtitle">Customer Favorites</p>
          <h2 className="title">Popular Categories</h2>
        </div>

        {/* categories cards */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-around items-center mt-12 rounded-lg gap-8">
          {categoryItems.map((item) => {
            return <CategoriesCards key={item.id} item={item} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Categories;
