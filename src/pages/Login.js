import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { mobile } from "../Responsive";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../redux/apiCalls";

import mainbackground from "../assets/download.jpg";
import { useDispatch, useSelector } from "react-redux";

//import { resetError } from '../redux/userRedux'

const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 58px); //60px of navbar
  display: flex;
  justify-content: center;
  align-items: center;

  background-size: cover;
`;
const Wrapper = styled.div`
  width: min(400px, 80%);
  padding: 40px 30px;
  background-color: transperent;
  display: flex;
  flex-direction: column;
  border-radius: 1vmax;
  box-shadow: 20px 20px 50px grey;
  ${mobile({
    padding: "20px 15px",
  })}
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 10px;
`;
const Form = styled.form`
  // width: 100%;
  display: flex;
  flex-wrap: wrap;
  // background: rgba(255, 255, 255, 0.2);
  // box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  // backdrop-filter: blur(9.5px);
  // -webkit-backdrop-filter: blur(9.5px);
  border-radius: 10px;
  // border: 1px solid rgba(255, 255, 255, 0.18);
`;

const Input = styled.input`
  min-width: 80%;
  padding: 10px;
  margin: 15px 0;
  flex: 1;
  display: flex;
  min-height: 40%;
  border-radius: 0.5vmax;
  ${mobile({
    margin: "15px 0px",
  })}
`;

const Button = styled.button`
  margin: 10px 0px;
  width: 40%;
  border: none;
  background-color: rgb(125, 0, 171);
  padding: 15px 20px;
  background-color: rgb(125, 0, 171);
  color: white;
  border-radius: 1vmin;
  margin-right: 60%;
  &:disabled {
    color: green;
    background-color: #e1e6ed;
    cursor: not-allowed;
  }
`;
const HelpLink = styled.a`
  margin: 5px 0px;
`;
const Error = styled.span`
  color: red;
`;

function Login(props) {
  //to change title as soon as component mounts
  useEffect(() => {
    document.title = `Panara - ${props.title}`;
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isFetching, isError, currentUser } = useSelector(
    (state) => state.user
  );
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const submit = async (e) => {
    e.preventDefault();
    login(dispatch, { email, password });
    if (login(dispatch, { email, password })) {
      navigator("/");
    }
  };

  return (
    <>
      <Navbar />
      <Container
        classname="backimg"
        style={{ backgroundImage: `url(${mainbackground})` }}
      >
        <Wrapper>
          <Title>Login</Title>
          <Form autoComplete="on">
            <Input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            ></Input>
            <Input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="off"
            ></Input>
            <HelpLink style={{ marginLeft: "auto", marginRight: "0" }}>
              <Link to="/forgotpassword">Forgot your password?</Link>
            </HelpLink>
            <Button onClick={submit} disabled={isFetching}>
              Login
            </Button>
          </Form>
          {isError && <Error>{isError.error}</Error>}

          {/* <HelpLink><Link to="/forgotpassword">Do note remember your Password?</Link></HelpLink> */}
          <HelpLink>
            <Link to="/signup">Create New Account</Link>
          </HelpLink>
        </Wrapper>
      </Container>
    </>
  );
}

export default Login;
