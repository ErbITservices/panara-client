import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import mainbackground from "../assets/download.jpg";
import background from "../assets/IMG_7600.PNG";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Scale } from "@mui/icons-material";
import Certificateslider from "../components/Certificateslider";

function Aboutus() {
  const [corsorx, setcorsorx] = useState();
  const [corsory, setcorsory] = useState();
  const [corsorsize, setcorsorsize] = useState(1);

  window.addEventListener("mousemove", (e) => {
    setcorsory(e.pageY);
    setcorsorx(e.pageX);
  });

  return (
    <>
      <div
        className="backimg"
        style={{ backgroundImage: `url(${mainbackground})` }}
      >
        <div
          className="cursor"
          style={{
            left: corsorx - 6.5 + "px",
            top: corsory - 3 + "px",

            transform: `scale(${corsorsize})`,
          }}
        ></div>
        <Navbar />
        <section>
          <div className="main-container">
            <div className="info-container">
              {/* <h1>Abot Us</h1> */}
              <h3
                onMouseEnter={() => {
                  setcorsorsize(5);
                }}
                onMouseLeave={() => {
                  setcorsorsize(1);
                }}
                className="abouttext"
              >
                <span>Success </span>of your Business is Our First Prespictive
              </h3>
              <p>
                We are Panara Enterprise Pvt LTD and our company has
                successfully completed many projects with Our Government Of
                India and also we have worked with our State Government that is
                the Government Of Gujarat. Our successfully completed Projects
                are like Library Automation, Data Retro Conversion, Captcha
                Entry, Documents Scanning, Copy Paste work from College
                Source.org , Website Development, Mobile Application
                Development.{" "}
              </p>
              <Link to="/Home">
                <button
                  onMouseEnter={() => {
                    setcorsorsize(5);
                  }}
                  onMouseLeave={() => {
                    setcorsorsize(1);
                  }}
                  type="button"
                  className="btn"
                >
                  Shop Now
                </button>
              </Link>
              <Link to="/Services">
                <button
                  onMouseEnter={() => {
                    setcorsorsize(5);
                  }}
                  onMouseLeave={() => {
                    setcorsorsize(1);
                  }}
                  type="button"
                  className="btn"
                >
                  Services
                </button>
              </Link>
            </div>
            <div className="second-container">
              <div className="profile">
                <div
                  className="image"
                  style={{ backgroundImage: `url(${background})` }}
                ></div>
              </div>
              <div className="experience-container">
                <div className="row1">
                  <div
                    onMouseEnter={() => {
                      setcorsorsize(5);
                    }}
                    onMouseLeave={() => {
                      setcorsorsize(1);
                    }}
                    className="first"
                  >
                    <h1>19+</h1>
                    <h3>Years of Experience</h3>
                  </div>
                  <div
                    onMouseEnter={() => {
                      setcorsorsize(5);
                    }}
                    onMouseLeave={() => {
                      setcorsorsize(1);
                    }}
                    className="secound"
                  >
                    <h1>450+</h1>
                    <h3>Project Completed</h3>
                  </div>
                </div>
                <div className="row2">
                  <div
                    onMouseEnter={() => {
                      setcorsorsize(5);
                    }}
                    onMouseLeave={() => {
                      setcorsorsize(1);
                    }}
                    className="third"
                  >
                    <h1>25+</h1>
                    <h3>Services Providing</h3>
                  </div>
                  <div
                    onMouseEnter={() => {
                      setcorsorsize(5);
                    }}
                    onMouseLeave={() => {
                      setcorsorsize(1);
                    }}
                    className="fourth"
                  >
                    <h1>400+</h1>
                    <h3>Happy and Satisfied Customers</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className=" chooseus-containe">
            <h1>
              {" "}
              Why Choose <span>Panara IT</span>
            </h1>
            <ul>
              <li>
                <p>We Are Creative Team</p>
              </li>
              <li>
                <p>Honest and Dependable</p>
              </li>
              <li>
                <p>Out of the box thinking</p>
              </li>
              <li>
                <p>Awareness of the latest market trends</p>
              </li>
              <li>
                <p>Quality Commitment</p>
              </li>
              <li>
                <p>We Are Always Improving</p>
              </li>
              <li>
                <p>World-Class Quality Services</p>
              </li>
              <li>
                <p>User friendly support</p>
              </li>
            </ul>
          </div>
        </section>
        <Certificateslider />
        <Footer />
      </div>
    </>
  );
}
export default Aboutus;
