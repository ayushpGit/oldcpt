import React from "react";

const footer = () => {
  let email = "info@crocuspearl.com";
  let number = "9802888836";
  let location = "khusibun, kathmandu, nepal";
  return (
    <>
      <div className="footer-div-top">
        <h1>
          <span className="font-bold">That idea you have,</span>
          <br></br>Let’s start working on it
        </h1>
      </div>
      <div className="footer-div-bottom">
        <a
          href="mailto:info@crocuspearl.com"
          style={{ fontSize: "27px", marginBottom: "20px" }}
        >
          {email}
        </a>
        <div className="row footer-row-middle">
          <div className="col-md-5">
            <a href="tel:9802888836">{number}</a>
            <br></br>
            <a
              href="https://goo.gl/maps/wU61HnMv2ZzbipiNA"
              target="_blank"
              rel="noreferrer"
            >
              {location}
            </a>
          </div>
          <a
            href="https://www.facebook.com/people/Crocus-Pearl-Technologies-Pvt-Ltd/100088528600904/?mibextid=ZbWKwL"
            className="link-button col-md-2"
            target={"_blank"}
            rel={"noreferrer"}
          >
            facebook
          </a>
          <a
            href="https://www.instagram.com/crocus.pearl/"
            className="link-button col-md-2"
            target={"_blank"}
            rel={"noreferrer"}
          >
            instagram
          </a>
          <a
            href="https://www.linkedin.com/company/crocus-pearl-technologies-pvt-ltd/mycompany/"
            className="link-button col-md-2"
            target={"_blank"}
            rel={"noreferrer"}
          >
            linkedin
          </a>
        </div>
        <div className="row footer-row-bottom">
          <div className="col-md-5">privacy policy</div>
          <div className="col-md-7">
            Copyright owned by Crocus Pearl Technologies. All Rights Reserved.
          </div>
        </div>
      </div>
    </>
  );
};

export default footer;
