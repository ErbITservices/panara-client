import {
  Call,
  Email,
  Facebook,
  Instagram,
  Map,
  WhatsApp,
} from "@material-ui/icons";
import { Google } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import { mobile } from "../Responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  width : 100%;
  height: fit-content;
  ${mobile({
    flexDirection: "column",
    width : "100%",
  })}
`;
const Left = styled.div`
  flex: 1;
  padding-top: 20px;
  padding-left: 40px;
  ${mobile({
    paddingLeft: "20px",
  })}
`;
const Logo = styled.h1``;
const Contain = styled.div`
background: rgba( 255, 255, 255, 0.2 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 20.5px );
-webkit-backdrop-filter: blur( 9.5px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );}
`;
const Description = styled.p`
  margin: 20px 0px;
`;
const Branding = styled.p`
  margin: 20px 0px;
  text-align: center;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcons = styled.a`
  text-decoration: none;
  width: 40px;
  height: 40px;
  color: white;
  background-color: #${(props) => props.color};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  transition: all 0.3s ease;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    filter: drop-shadow(0px 0px 4px #${(props) => props.color});
  }
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;

  ${mobile({
    marginTop: "20px",
  })}
`;
const Title = styled.h3`
  margin-bottom: 20px;
`;
const List = styled.ul`
  margin: 3px;
  padding: 0;
  list-style: none;
  // display: flex;
  // flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 100%;
  font-size: 15px;
  margin: 0 1vw ;
  margin-bottom: 20px;
  color: #0039a6;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
`;
const ContactItem = styled.p`
  margin-bottom: 20px;
  display: flex;
`;

function Footer() {
  return (
    <Contain>
      <Container>
        <Left>
          <Logo>PanaraIT.</Logo>
          <Description>
            We are Panara Enterprise Pvt LTD and our company has successfully
            completed many projects with Our Government Of India and also we
            have worked with our State Government. We are one of the leading
            ITService company in gujarat. we have many clients in all over
            India.
          </Description>
          <SocialContainer>
            <SocialIcons
              color="3b5998"
              // href="https://www.facebook.com/PANARAENTERPRISEPVTLTD/"
              target="_blank"
            >
              <Facebook />
            </SocialIcons>
            <SocialIcons
              color="bc2a8d"
              href="https://www.instagram.com/patelmihir_01/"
              target="_blank"
            >
              <Instagram />
            </SocialIcons>
            <SocialIcons color="075e54" href="8160628914" target="_blank">
              <WhatsApp />
            </SocialIcons>
            <SocialIcons
              color="4885ed"
              // href="https://www.google.com/search?q=Panara+Enterprise&stick=H4sIAAAAAAAA_-NgU1I1qDC2NE21MDa2MLBMBIEkK4OK5BTjJIOUVAPDNEPLZDMz40WsggGJeYlFiQqueSWpRQVFmcWpALyXqy09AAAA&hl=en-GB&mat=CYYX5mPWLFCuElYBEKoLaYt4EKypxMvfHJmKAN2jFAWtGn0xxLlNtwJFKIIWoLXt2IVSrlwjPFoL3pvPZESZc57VBAQneMmcEkdf0DlMwRJmDNvtLboYKU0q_9i4VuqcBA&authuser=0 "
              target="_blank"
            >
              <Google />
            </SocialIcons>
          </SocialContainer>
        </Left>
        <Center>
          <Title>Useful Links</Title>
          <List>
            <Link to={"https://dolib.gujarat.gov.in/index.htm"}>
              <ListItem>Director Of Library, Gujarat </ListItem>
            </Link>
            <Link to={"https://www.rrrlf.gov.in/Default.aspx"}>
              <ListItem>RRRLF, Kolkata </ListItem>
            </Link>
            <Link to={"https://indcat.inflibnet.ac.in/"}>
              <ListItem>Online Union Catalogue</ListItem>
            </Link>
            <Link to={"https://www.oclc.org/en/home.html"}>
              <ListItem>OCLC</ListItem>
            </Link>
          </List>
        </Center>
        <Right>
          <Title>Contact Us</Title>
          <ContactItem>
                MIHIRKUMAR KAMLESHBHAI PATEL 
                <br />
            <Map /> kotvadho madh,Upera,Unjha, Mahesana
            
            <br />
            City: Unjha
            <br />
            State/province/area: GUJARAT INDIA
            <br />
            Zip code 384170
            <br />
            Country India
          </ContactItem>
          <ContactItem>
            <Call />
            +91 8160628914
          </ContactItem>
          
          <ContactItem>
            <Email /> patelmihir2712005@gmail.com
          </ContactItem>
        </Right>
      </Container>
      <Branding>Powered by ERBIT SERVICES </Branding>
    </Contain>
  );
}

export default Footer;
