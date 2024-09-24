import React from "react";
import video from "../../assets/videos/video.mp4";
import { Link } from "react-router-dom";

const landing = () => {
  return (
    <section id="top" className="container">
      <video
        src={video}
        className="landing-video"
        muted
        autoPlay={true}
        loop
      ></video>
      <div className="landing-background"/>
      <span className="home-title">
        empower
        <br />
        your business
        <br />
        with our digital solutions
      </span>
      <div className="row link-div">
        <div className="col-md-6 text-md-center">
          <Link to="/works" className="link-button white">
            digital portfolio
          </Link>
        </div>
        <div className="col-md-6 text-md-center">
          <Link to="/contact" className="link-button white">
            contact us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default landing;
