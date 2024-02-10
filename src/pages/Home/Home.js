/** @format */

import React from "react";
import Hero from "../../components/home-component/Hero-Section/Hero";
import About from "../../components/home-component/About/About";
import BannerDir from "../../components/home-component/banner/BannerDir";
import Events from "../../components/home-component/Events/Events";
import Partners from "../../components/home-component/partners/Partners";
import Donate from "../../components/home-component/Donate/Donate";
import Branch from "../../components/home-component/Branch/Branch";

const Home = () => {
  return (
    <>
      <Hero />
      <Branch />
      <About />
      <BannerDir />
      <Events />
      <Partners />
      <Donate />
    </>
  );
};

export default Home;
