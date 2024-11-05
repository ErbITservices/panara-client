import { TextField } from "@material-ui/core";
import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import mainbackground from "../assets/download.jpg";

import { userRequest } from "../axiosReqMethods";

function Contact() {
  const [data, setdata] = useState({
    Name: "",
    Email: "",
    Number: "",
    Descr: "",
  });
  const handleinput = async (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setdata({
      ...data,
      [name]: value,
    });
  };
  const handlesubmit = async () => {
    try {
      console.log("mihir1");
      const res = await userRequest.post("/api/Contact/", {
        data,
      });
      // setcheck("true")

      setdata({
        Name: "",
        Email: "",
        Number: "",
        Descr: "",
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      className="backimg"
      style={{ backgroundImage: `url(${mainbackground})` }}
    >
      <Navbar />
      <div className="conetctform">
        <h1>Contact Us</h1>
        <section>
          <div>
            <label>Name </label>
            <input
              label="Enter your name"
              name="Name"
              type="text"
              onChange={handleinput}
              value={data.Name}
              required
            ></input>
          </div>

          <div>
            <label>Email </label>
            <input
              name="Email"
              type="text"
              onChange={handleinput}
              value={data.Email}
              required
            ></input>
          </div>
          <div>
            <label>Mobile Number</label>
            <input
              name="Number"
              type="number"
              onChange={handleinput}
              value={data.Number}
              required
            ></input>
          </div>
          <div>
            <label>Description </label>
            <textarea
              name="Descr"
              type="text"
              onChange={handleinput}
              value={data.Descr}
            ></textarea>
          </div>
        </section>
        <button className="btn" onClick={handlesubmit}>
          {" "}
          Submit
        </button>
      </div>
      <Footer />
    </div>
  );
}
export default Contact;
