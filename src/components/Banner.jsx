import React from "react";

const Banner = () => {
  return (
    <div className="section-container bg-gradient-to-r from-[#FAFAFA] froom-0% to-[#FCFCFC] to-[100%]">
      <div className=" py-24 flex flex-col-reverse md:flex-row justify-between items-center gap-8">
        <div className="md:w-1/2 space-y-7 px-4">
          <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
            Divine into Delights of Delactabe{" "}
            <span className="text-green">Food</span>
          </h2>

          <p className="text-xl text-[#4A4A4A]">
            Where Each Plate weaves a story of culinary Mastery and Passionate
            Cratftmanships
          </p>
          <button className="btn bg-green px-8 py-3 rounded-full text-white font-semibold">
            Order Now
          </button>
        </div>
        <div className="md:w-1/2">
          <img
            src="/images/banner-cartoon.jpg"
            alt=""
            className="h-[20rem] md:ml-20"
          />

          <div className="flex flex-col md:flex-row justify-around -mt-14 gap-4 ">
            {/* noodles */}
            <div className="hidden md:flex bg-white py-2 px-3 rounded-2xl items-center gap-3 shadow-md w-64">
              <img
                src="/images/banner-noodles.jpg"
                alt=""
                className="rounded-2xl h-[4rem] w-[4rem]"
              />

              <div className="">
                <h5 className=" font-medium mb-1">Spicy Noodles</h5>
                <div className="rating rating-sm">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
                <p className="text-red">₹ 120</p>
              </div>
            </div>

            <div className="flex bg-white py-2 px-3 rounded-2xl items-center gap-3 shadow-md w-64">
              <img
                src="/images/banner-biryani.jpg"
                alt=""
                className="rounded-2xl h-[4rem] w-[4rem]"
              />

              <div className="">
                <h5 className=" font-medium mb-1">Biryani</h5>
                <div className="rating rating-sm">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
                <p className="text-red">₹ 320</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Banner;
