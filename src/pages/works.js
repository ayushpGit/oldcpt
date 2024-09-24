import React from "react";
import Nav from "../components/nav";
import Footer from "../components/footer";
import Cards from "../components/works/cards";
import useFetch from "../utils/useFetch";

const Works = () => {
  // const { data: workItems, error } = useFetch("http://localhost:8001/works");
  const { data: workItems, error } = useFetch(
    "https://cpt-web.ryuuzu.xyz/works"
  );

  return (
    <>
      <Nav />
      <div className="container pt-5">
        <p className="sub-heading">SELECTED PROJECTS</p>
        <h1 className="heading large" style={{ fontSize: "6rem" }}>
          Digital Portfolio
        </h1>

        {/* displaying work items but if theres an error it renders the error and if it is loading it renders loading */}

        {workItems ? (
          <Cards workItems={workItems} />
        ) : error ? (
          <div>{error}</div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Works;
