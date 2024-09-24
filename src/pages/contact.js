import React from "react";
import Nav from "../components/nav";
// import Footer from "../components/footer";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

import { useRef } from "react";
import emailjs from "@emailjs/browser";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_5g4j7lt",
        "template_jknjdtb",
        form.current,
        "CSmTA7RDEO-rPSCX3"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message Received!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        },
        (error) => {
          console.log(error.text);
          toast.error("Error Occured, Try again.", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      );
    e.target.reset();
  };
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Nav />
      <div className="container">
        <div className="contact-spacing row">
          <div className="col-lg-8 contact-left">
            <h1>
              <span className="font-bold">That idea you have,</span>
              <br></br>
              Let’s start working on it
            </h1>
            <a href="mailto:info@crocuspearl.com" className="sub-heading ">
              info@crocuspearl.com
            </a>
            <div className="row socials d-lg-block d-none">
              {/* find us */}
              <div className="col-md-4">
                <b className="heading pt-3"> Find us</b>
                <br></br>
                <a
                  href="https://www.facebook.com/people/Crocus-Pearl-Technologies-Pvt-Ltd/100088528600904/?mibextid=ZbWKwL"
                  className="contact-icon"
                  style={{
                    paddingLeft: "0",
                  }}
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://www.instagram.com/crocus.pearl/"
                  className="contact-icon"
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  <GrInstagram />
                </a>
                <a
                  href="https://www.linkedin.com/company/crocus-pearl-technologies-pvt-ltd/mycompany/"
                  className="contact-icon"
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  <FaLinkedinIn />
                </a>
              </div>
              {/* address */}
              <div className="col-md-6">
                <a
                  className="heading"
                  href="https://goo.gl/maps/wU61HnMv2ZzbipiNA"
                  target="_blank"
                  rel="noreferrer"
                >
                  khusibun, kathmandu, nepal
                </a>
                <br></br>
                <a href="tel:9802888836">9802888836</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 contact-right">
            <h1 className="d-lg-block d-none">Say hello</h1>

            <form
              ref={form}
              onSubmit={sendEmail}
              action=""
              className="container"
            >
              <div className="row">
                <div className="input-field col-md-6">
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    placeholder=" "
                    required
                  />
                  <label className="form-label" htmlFor="name">
                    Your name
                  </label>
                </div>
                <div className="input-field col-md-6">
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    placeholder=" "
                    required
                  />
                  <label className="form-label" htmlFor="email">
                    Email
                  </label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col-12">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder=" "
                    required
                  />
                  <label className="form-label" htmlFor="subject">
                    Subject
                  </label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col-12">
                  <textarea
                    type="text"
                    id="message"
                    name="message"
                    rows="1"
                    placeholder=" "
                    required
                  />
                  <label className="form-label" htmlFor="message">
                    Message
                  </label>
                </div>
              </div>
              <button type="submit" className="btn-cpt link-button mt-5">
                Submit
              </button>
            </form>
          </div>
          <div className="row socials socials-sm d-lg-none d-block">
            {/* find us */}
            <div className="col-md-4">
              <b className="heading pt-3"> Find us</b>
              <br></br>
              <a
                href="https://www.facebook.com/people/Crocus-Pearl-Technologies-Pvt-Ltd/100088528600904/?mibextid=ZbWKwL"
                className="contact-icon"
                style={{
                  paddingLeft: "0",
                }}
                target={"_blank"}
                rel={"noreferrer"}
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/crocus.pearl/"
                className="contact-icon"
                target={"_blank"}
                rel={"noreferrer"}
              >
                <GrInstagram />
              </a>
              <a
                href="https://www.linkedin.com/company/crocus-pearl-technologies-pvt-ltd/mycompany/"
                className="contact-icon"
                target={"_blank"}
                rel={"noreferrer"}
              >
                <FaLinkedinIn />
              </a>
            </div>
            <hr />
            {/* address */}
            <div className="col-12">
              <a
                className="heading"
                href="https://goo.gl/maps/wU61HnMv2ZzbipiNA"
                target="_blank"
                rel="noreferrer"
              >
                khusibun, kathmandu, nepal
              </a>
              <br></br>
              <a href="tel:9802888836">9802888836</a>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Contact;
