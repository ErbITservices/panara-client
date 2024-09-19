import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import mainbackground from "../assets/download.jpg";
import background from "../assets/IMG_7600.PNG";
import React from "react";
import { Link } from "react-router-dom";

function Aboutus() {
  return (
    <>
      <div
        className="backimg"
        style={{ backgroundImage: `url(${mainbackground})` }}
      >
        <Navbar />
        <div className="main-container">
          <div className="info-container">
            {/* <h1>Abot Us</h1> */}
            <h3>Success of your Business is Our First Prespictive</h3>
            <p>
              We are Panara Enterprise Pvt LTD and our company has successfully
              completed many projects with Our Government Of India and also we
              have worked with our State Government that is the Government Of
              Gujarat. Our successfully completed Projects are like Library
              Automation, Data Retro Conversion, Captcha Entry, Documents
              Scanning, Copy Paste work from College Source.org , Website
              Development, Mobile Application Development.{" "}
            </p>
            <Link to="/Home">
              <button type="button" className="btn">
                Shop Now
              </button>
            </Link>
            <Link to="/Services">
              <button type="button" className="btn">
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
                <div className="first">
                  <h1>10+</h1>
                  <h3>Years of Experience</h3>
                </div>
                <div className="secound">
                  <h1>500+</h1>
                  <h3>Project Completed</h3>
                </div>
              </div>
              <div className="row2">
                <div className="third">
                  <h1>20+</h1>
                  <h3>Services Providing</h3>
                </div>
                <div className="fourth">
                  <h1>1000+</h1>
                  <h3>Happy and Satisfied Customers</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
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
        <Footer />
      </div>
    </>
  );
}
export default Aboutus;
