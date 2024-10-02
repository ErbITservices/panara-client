import { useState } from "react";
import mainbackground from "../assets/download.jpg";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AddIcon from "@mui/icons-material/Add";
import { mobile } from "../Responsive";
import { useSelector } from "react-redux";
import { userRequest } from "../axiosReqMethods";
import axios from "axios";
import ProductNotFound from "../components/ProductNotFound";
import styled from "styled-components";
import SingleComplainSection from "../components/SingleComplainSection";

const TopSection = styled.div`
  display: flex;
  margin-bottom: 20px;
`;
const Title = styled.h1`
  margin-left: 10px;
`;
const BottomSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 15px;
`;
function ComplainRegister() {
  const [status, setstatus] = useState("");
  const [complains, setcomplains] = useState(null);
  const [complainstaus, setcomplainstaus] = useState(false);
  

  const [library, setlibrary] = useState({
    region:"",
    lname: "",
    service: "",
    problemstatement: "",
    img: "",
      mobilenumber: "",
    email:"",
    name: "",
    status:"pending"
  });
    const [check, setcheck] = useState("false");
    const [Renew, setRenew] = useState(false);
    const [Renewcomplains, setRenewcomplains] = useState(false);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setlibrary({
      ...library,
      [name]: value,
    });
    if (name === "image") {
      const file = e.target.files[0];
      const filereader = new FileReader();
      filereader.readAsDataURL(file);
      filereader.onload = () => {
        console.log("image changed on " )
        setlibrary((p) => ({ ...p, img: filereader.result }));
      }
    }
    console.log(library);
  };

  const handleSubmit = async () => {
    console.log(library);
    setstatus("Please Wait...");
    if (Renew) {
      try {
        console.log("mihir1");
        const res = await userRequest.post("/api/request/", {
          library,
        });
        // setcheck("true")
        console.log("done");
        setstatus("Complain Submited");
        setcheck("false");
        setlibrary({
          lname: "",
          service: "",
          problemstatement: "",
          img: "",
          mobilenumber: "",
          email: "",
          name: "",
        });
        setRenew(false)
        setcomplainstaus(false)
        
      } catch (error) {
        setstatus("Sorry Try Again!");
        console.log(error);
      }
    }
    else{try {
      console.log("mihir1");
      const res = await userRequest.post("/api/complain", {
        library,
      });
      // setcheck("true")
      console.log("done");
      setstatus("Complain Submited");
      setcheck("false");
      setlibrary({
        lname: "",
        service: "",
        problemstatement: "",
        img: "",
        mobilenumber: "",
        email: "",
        name: "",
      });
    } catch (error) {
      setstatus("Sorry Try Again!");
      console.log(error);
    }}
    
  };
  async function getdata(){
    const allcomplains = await userRequest.get(`/api/ticket/region/${library.region}`);
    setcomplains(allcomplains.data);
    console.log(allcomplains,'l');
    console.log(`/api/ticket/region/${library.region}`);
    
    console.log(complains);

    if (complains) {
      setcomplainstaus(true);
    }
  }
  const handlecheck = async () => {
    console.log(library);
    const allcomplain = await userRequest.get(`/api/complain/${library.lname}`);
    
    
    
  
    try {
      console.log("mihir1");
      const res = await userRequest.get(`/api/ticket/${library.lname}`);
      console.log(res.data.enddate);
      
      // Date object
      const date = new Date();

      let currentDay = String(date.getDate()).padStart(2, "0");

      let currentMonth = String(date.getMonth() + 1).padStart(2, "0");

      let currentYear = date.getFullYear();

      // we will display the date as DD-MM-YYYY

      let currentDate = `${currentYear}-${currentMonth}-${currentDay}`;

      if (!res.data.length) {
        setstatus("Sorry No Data Found");
      }

      const a = new Date(currentDate).getTime();
      const b = new Date(res.data.enddate).getTime();
      console.log(a);
      console.log(b);

      if (b >= a) {
        console.log("hello");
        
        console.log("mihir " + complainstaus);
        setcheck("true");
        
        setcomplainstaus(true);
        
        setstatus("Your Amc End-Date is " + res.data.enddate);
        
      } else {
        setstatus("Sorry Your Amc is Expired Please Renew it Now");
        setRenew(true)
        setcheck( "true")
      }
      // setcheck("true")
    } catch (error) {
      console.log(error);
    }
  
    
  };
  return (
    <>
      <form
        className="container"
        style={{ backgroundImage: `url(${mainbackground})` }}
      >
        <Navbar />
        <div className="complain-container">
          <h1>Register Complain</h1>
          <h3 className="warnings">{status}</h3>
          <div className="inputfield">
        <select 
        name="region" 
        onChange={ (e)=>{
          getdata();
          handleInput(e);
        }}
        value={library.region}
        
        required
        type="text"
        >
          <option  >ahmedabad</option>
          <option>Adl mehsana</option>
          <option>Adl bhavnagar</option>
          <option>Adl surat</option>
          <option>Adl rajkot</option>
          <option>Adl vadodra</option>
          <option>Scl gandhinagar</option>
          <option>Scl vadodra</option>
        </select>
          </div>
          <div className="inputfield">
            <label>Enter Library Name </label>
            <select 
        name="region" 
        onChange={handleInput}
        value={library.lname}
        required
        type="text"
        >
          {/* {complains.map(i =>{

          })} */}
        </select>
            <input
              name="lname"
              onChange={handleInput}
              value={library.lname}
              required
              type="text"
            />
          </div>
          <div className="inputfield">
            <label>Enter Service name </label>
            <input
              name="service"
              onChange={handleInput}
              value={library.service}
              required
              type="text"
            />
          </div>
          
          {Renew  && (
            <>
              <h3>You Want Paid Visit</h3>
              <div className="inputfield">
                <button
                  type="button"
                  onClick={() => { setcomplainstaus(true); setRenew(false)}}
                  className="btn "
                >
                  Continue
                </button>
              </div>
            </>
          )}
          { complainstaus && (
            <>
              <div className="inputfield">
                <label>Enter Your Name </label>
                <input
                  name="name"
                  onChange={handleInput}
                  value={library.name}
                  required
                  type="text"
                />
              </div>
              <div className="inputfield">
                <label>Enter Your Mobile Number </label>
                <input
                  name="mobilenumber"
                  onChange={handleInput}
                  value={library.mobilenumber}
                  required
                  type="number"
                />
              </div>
              <div className="inputfield">
                <label>Enter Your Email </label>
                <input
                  name="email"
                  onChange={handleInput}
                  value={library.email}
                  required
                  type="email"
                />
              </div>
              <div className="inputfield">
                <label>Write Your problem </label>
                <input
                  name="problemstatement"
                  onChange={handleInput}
                  value={library.problemstatement}
                  required
                  type="text"
                />
              </div>
              
                <div className="inputfield">
                  <label>Upload Photo Of Error </label>
                  <input
                    accept="image/jpeg, image/png"
                    name="image"
                    onChange={handleInput}
                    value={library.img}
                    type="file"
                  />
                </div>
             

              <div className="inputfield">
                <button type="button" onClick={handleSubmit} className="btn ">
                  Submit
                </button>
              </div>
            </>
          )}

          {  (check === "false") &&  (
            <div className="inputfield">
              <button type="button" onClick={handlecheck} className="btn ">
                Check
              </button>
            </div>
          )}
        </div>
        {complains && (
          <div className="container">
            <TopSection>
              <Title>Your Registerd Complains</Title>
            </TopSection>
            <BottomSection>
              <SingleComplainSection key={complains._id} complain={complains} />
            </BottomSection>
          </div>
        )}

        <Footer />
      </form>
    </>
  );
}
export default ComplainRegister;
