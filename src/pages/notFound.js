import React from "react";
import { Link } from "react-router-dom";

const notFound = () => {
  return (
    <>
      <div className="notFound">
        <h1>404</h1>
        <p>That page doesnt exist.</p>
        <Link to="/" className="link-button">
          {/* <BsFillArrowLeftCircleFill />&nbsp; */}
          Go Back
        </Link>
      </div>
    </>
  );
};

export default notFound;
