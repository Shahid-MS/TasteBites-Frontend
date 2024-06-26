import React from "react";
import { FaStar } from "react-icons/fa";

const serviceLists = [
  {
    id: 1,
    title: "Catering",
    des: "Delight your guests with our flavours and presentation",
    image: "/images/services/icon1.png",
  },
  {
    id: 2,
    title: "Fast Delivery",
    des: "We deliver your order promptly to your door",
    image: "/images/services/icon2.png",
  },
  {
    id: 3,
    title: "Online Ordering",
    des: "Explore menu & Order with ease using our Online Ordering",
    image: "/images/services/icon3.png",
  },
  {
    id: 4,
    title: "Gift cards",
    des: "Give the gifts of exceptional dining with TasteBites gift cards",
    image: "/images/services/icon4.png",
  },
];

const Services = () => {
  return (
    <div className="section-container py-16">
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/2">
          <div className="text-left">
            <p className="subtitle">Our Story and Services</p>
            <div className="title">Our culinary Journey and Services</div>
            <p className="my-5 text-secondary leading-6">
              Rooted in passion, we curate unforgettable dining experience and
              offer exceptional services, blending culinary artistry with warm
              hospitality
            </p>
            <button className="btn bg-green rounded-full py-3 px-8 text-white">
              Explore more
            </button>
          </div>
        </div>

        <div className="md:w-1/2">
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-8 ">
            {serviceLists.map((item) => {
              return (
                <div
                  key={item.id}
                  className="shadow-md rounded-sm py-5 px-4 text-center space-y-2 text-green cursor-pointer hover:border-indigo-600 transition-all duration-200 hover:border"
                >
                  <img src={item.image} alt="" className="mx-auto" />
                  <h5 className="pt-3 font-semibold">{item.title}</h5>
                  <p className="text-[#90BD95]">{item.des}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
