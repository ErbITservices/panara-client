import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import mainbackground from "../assets/download.jpg";
import background from "../assets/IMG_7600.PNG";
import pic1 from "../assets/pic1.jpg"
import pic2 from "../assets/pic2.jpg"
import pic3 from "../assets/pic3.jpg"
import pic4 from "../assets/pic4.jpg"
import pic6 from "../assets/pic6.jpg"
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Scale } from "@mui/icons-material";
import Certificateslider from "../components/Certificateslider";
import  NewsLetter  from "../components/NewsLetter";

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
      <div className="backimg">
        <div
          className="cursor"
          style={{
            left: corsorx - 6.5 + "px",
            top: corsory - 3 + "px",

            transform: `scale(${corsorsize})`,
          }}
        ></div>
        <section
          className="backimg"
          style={{ backgroundImage: `url(${mainbackground})` }}
        >
          <Navbar />
          <div className="main-container ">
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
          <div className="infocards">
            <div className="icard">
              <div
                className="cardimg"
                style={{ backgroundImage: `url(${pic4})` }}
              ></div>
              <div className="cardtext">
                {/* <h3 className="heading">About</h3> */}
                <p>
                  The Shri Gandhi Library in Mansa, originally established by
                  the esteemed grandfather of Honorable Home Minister Shri
                  Arvindbhai Shah, has recently undergone a comprehensive
                  renovation and modernization. This remarkable transformation,
                  inaugurated by Honorable Home Minister of India, Shri Amitbhai
                  Shah, brings new life to the library, enhancing its role as a
                  beacon of knowledge and learning in the community. The updated
                  facilities and welcoming environment now offer readers a
                  vibrant space to explore books and ideas, promoting a renewed
                  passion for literature and education. As a historic and
                  educational landmark, the library continues to serve as a
                  lasting legacy, inspiring future generations.
                </p>
              </div>
            </div>

            <div className="icard">
              <div className="cardtext">
                {/* <h3 className="heading">About</h3> */}
                <p>
                  The Government District Library in Sector 21, Gandhinagar,
                  recently hosted a notable event attended by Honorable Minister
                  Shri Mulubhai Bera. The library’s staff played an instrumental
                  role in ensuring the event’s success, showcasing their
                  commitment to public service and literacy promotion. Through
                  meticulous planning and unwavering dedication, the team
                  prepared the space, managed logistics, and created a welcoming
                  environment for all attendees. Their efforts reflect a
                  deep-rooted passion for fostering knowledge and supporting
                  community education. This dedication by the library staff
                  underlines their invaluable contribution to making the library
                  a thriving center for learning and engagement.
                </p>
              </div>
              <div
                className="cardimg"
                style={{ backgroundImage: `url(${pic2})` }}
              ></div>
            </div>
            <div className="icard">
              <div
                className="cardimg"
                style={{ backgroundImage: `url(${pic6})` }}
              ></div>
              <div className="cardtext">
                <p>
                  At the inauguration of the Jamnagar Smart Library, the launch
                  of e-books was conducted by Shri Poonamben Madam, Member of
                  Parliament. This event highlighted the objectives of the Smart
                  Library and emphasized the benefits of e-books, which cater to
                  contemporary needs and support the youth in
                  gaining more knowledge.
                </p>
              </div>
            </div>
            <div className="icard">
              <div className="cardtext">
                {/* <h3 className="heading">About</h3> */}
                <p>
                  At the inauguration of the Jamnagar Smart Library, the launch
                  of e-books was conducted by Shri Rivaba Jadeja, Member of the
                  Legislative Assembly, and Shri Poonamben Madam, Member of
                  Parliament. This event highlighted the objectives of the Smart
                  Library and emphasized the benefits of e-books, which cater to
                  contemporary needs and support the youth in gaining more
                  knowledge.
                </p>
              </div>
              <div
                className="cardimg"
                style={{ backgroundImage: `url(${pic1})` }}
              ></div>
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

        <NewsLetter />
        <Footer />
      </div>
    </>
  );
}
export default Aboutus;
