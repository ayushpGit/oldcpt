import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

const Cards = ({ workItems }) => {
  return (
    <div className="works-cards row">
      {workItems.map((workItem) => (
        <Link to={`/works/${workItem.id}`} className="col-md-6">
          <div className="works-card">
            <img
              className="works-card-img"
              src={require("../../assets/images/" + workItem.img + "-small.jpg")}
              alt=""
            />
            <div className="works-card-content">
              <p className="sub-heading">{workItem.date}</p>
              <h1 className="heading capital mt-3">
                {workItem.title} - {workItem.titleDesc}
              </h1>
              <p className="works-card-learn sub-heading mt-4">
                Learn More
                <AiOutlineArrowRight />
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Cards;
