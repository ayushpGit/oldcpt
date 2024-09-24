import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const menuItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Works",
      link: "/works",
    },
    // {
    //   name: "Case Studies",
    //   link: "/",
    // },
    // {
    //   name: "Expertise",
    //   link: "/",
    // },
    // {
    //   name: "About",
    //   link: "/",
    // },
    {
      name: "Contact",
      link: "/contact",
    },
  ];
  return (
    <nav>
      <Link to="/" className="col nav-logo">
        <p className="nav-crocus">crocus pearl</p>
        <p className="nav-tech">technologies</p>
      </Link>
      <div className="nav-right">
        <Link className="nav-works" to="/works">
          Works
        </Link>
        <input type="checkbox" id="ham-menu" />
        <label htmlFor="ham-menu">
          <div id="menu-icon">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </label>
        <div className="ham-menu">
          <div className="overlay__content">
            <div className="nav-container-1 black">
              <p>menu</p>
            </div>

            <div className="nav-container-2">
              {menuItems.map((menuItem) => (
                <Link className="menu-items" to={menuItem.link}>
                  {menuItem.name}
                </Link>
              ))}
            </div>

            <div className="nav-container-3">
              <a
                href="https://goo.gl/maps/wU61HnMv2ZzbipiNA"
                target="_blank"
                rel="noreferrer"
              >
                <p className="nav-address sub-heading">nepal</p>
                <p className="nav-address">khusibun, kathmandu</p>
              </a>
              <Link to="mailto:info@crocuspearl.com" className="nav-email">
                info@crocuspearl.com
              </Link>
              <Link to="/" className="nav-privacy">
                Privacy Policy
              </Link>
              <div className="nav-socials">
                <p className="sub-heading">Social</p>
                <Link
                  to="https://www.facebook.com/people/Crocus-Pearl-Technologies-Pvt-Ltd/100088528600904/?mibextid=ZbWKwL"
                  // className="link-button"
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  Facebook
                </Link>
                <Link
                  to="https://www.instagram.com/crocus.pearl/"
                  // className="link-button"
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  Instagram
                </Link>
                <Link
                  to="https://www.linkedin.com/company/crocus-pearl-technologies-pvt-ltd/mycompany/"
                  // className="link-button"
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  Linkedin
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
