import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";

// icon
// import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

// cursor
import { motion } from "framer-motion";

// importing pages
import Nav from "../components/nav";
import Foot from "../components/footer";
import Play from "../pages/playground/playground";

import Home from "../pages/home";
import Works from "../pages/works";
import SubWorks from "../pages/subWorks";
import Contact from "../pages/contact";
import NotFound from "../pages/notFound";

import ToTop from "../utils/scrollToTop";

const Routing = () => {
  const path = window.location.pathname;

  // CURSOR THINGS__________________________________________________________

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (e) => {
      // console.log(e);
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    links: {
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
      height: 80,
      width: 80,
    },
    drag: {
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      padding: 32,
      paddingTop: 60,
      height: 150,
      width: 150,
    },
  };
  const [cursorVariant, setCursorVariant] = useState("default");

  // link cursor variant
  // let linkCursor = document.querySelectorAll("a");
  // const linkEnter = () => {
  //   setCursorVariant("drag");
  // };

  // linkCursor.addEventListener("mouseover", function () {
  //   setCursorVariant("drag");
  // });
  // linkCursor.addEventListener("mouseout", setCursorVariant("default"));

  // drag cursor variant
  const dragEnter = () => {
    setCursorVariant("drag");
    document.querySelector(".cursor").textContent = "< DRAG >";
  };
  const defaultLeave = () => {
    setCursorVariant("default");
    document.querySelector(".cursor").textContent = "";
  };
  return (
    <Router>
      <ToTop />
      {/* body: */}
      <div className="body">
        {/* cursor */}
        <motion.div
          className="cursor"
          variants={variants}
          animate={cursorVariant}
        ></motion.div>

        <Routes>
          {/* essentials */}
          <Route exact path="/nav" element={<Nav />} />
          <Route exact path="/foot" element={<Foot />} />
          <Route exact path="/playground" element={<Play />} />

          {/* home */}
          <Route
            exact
            path="/"
            element={<Home dragEnter={dragEnter} dragLeave={defaultLeave} />}
          />

          {/* works */}
          <Route exact path="/works" element={<Works />} />
          <Route exact path="/works/:id" element={<SubWorks />} />
          {/* <Route exact path="/subworks" element={<SubWorks />} /> */}

          {/* Contact */}
          <Route exact path="/contact" element={<Contact />} />

          {/* default routes for invalid links */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Routing;
