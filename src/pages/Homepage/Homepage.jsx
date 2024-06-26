import React from "react";
import Banner from "../../components/Banner";
import Categories from "./Categories";
import Specialmenu from "./Specialmenu";
import Testimonials from "./Testimonials";
import Services from "./Services";

const Homepage = () => {
  return (
    <>
      <Banner />
      <Categories />
      <Specialmenu />
      <Testimonials />
      <Services />
    </>
  );
};

export default Homepage;
