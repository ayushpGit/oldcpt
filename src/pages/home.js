import React from "react";
import Nav from "../components/nav";
// import { Carousel } from "@trendyol-js/react-carousel";
import Landing from "../components/home/landing";
import Mission from "../components/home/mission";
import Carousel from "../components/home/carousel";
import Footer from "../components/footer";

const home = ({ dragEnter, dragLeave }) => {
  return (
    <>
      <div className="white">
        <Nav />
      </div>

      {/* top section */}
      <Landing />

      {/* services section */}
      <section
        id="services"
        className="mx-auto"
        onMouseEnter={dragEnter}
        onMouseLeave={dragLeave}
      >
        <Carousel />
      </section>

      {/* mission section */}
      <section id="mission">
        <Mission />
      </section>

      {/* footer section */}
      <section id="footer">
        <Footer />
      </section>
    </>
  );
};

export default home;
