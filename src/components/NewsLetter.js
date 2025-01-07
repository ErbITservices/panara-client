import AppRegistrationRoundedIcon from "@mui/icons-material/AppRegistrationRounded";
import React from "react";
import styled from "styled-components";
import { mobile } from "../Responsive";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  height: 60vh;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(9.5px);
  -webkit-backdrop-filter: blur(9.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px 0px;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 25px;
  text-align: center;
  @media only screen and (max-width: 500px) {
    font-size: 50px;
  }
`;
const Description = styled.div`
  font-size: 1.6rem;
  margin-bottom: 1.6rem;
  margin: 1.6rem 5%;
  text-align: center;
  @media only screen and (max-width: 500px) {
    font-size: 17px;
  }
  ${mobile({
    fontSize: "1rem",
  })}
`;
const InputContainer = styled.div`
  height: 7%;
  width: 50%;
  background-color: transperent;
  display: flex;
  justify-content: center;
  align-items: center;
  ${mobile({
    width: "80%",
  })}
`;

const Button = styled.button`
  padding: 10px 20px;
  font-weight: 600;
  max-width: 150px;
  border-radius: 10px;
  // font-size: 50px
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  flex: 1;
  color: #fff;
  background-color: #0039a6;
  cursor: pointer;
  &:hover {
    transform: scale(1);
    background-color: #0039a6;
  }
`;

function NewsLetter() {
  const navigator = useNavigate();
  return (
    <Container>
      <Title>Register Your Complains Here</Title>
      <Description>
        and feel free our support team Contact you in few days
      </Description>
      <InputContainer>
        <Button onClick={() => navigator("/ComplainRegister")}>
          Register <AppRegistrationRoundedIcon />
        </Button>
      </InputContainer>
    </Container>
  );
}

export default NewsLetter;
