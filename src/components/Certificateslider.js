import React from "react";
import Carousel from "react-multi-carousel";
import "react-slideshow-image/dist/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const sliderImageUrl = [
  //First image url
  {
    url: "https://sycd.gujarat.gov.in/writereaddata/images/azadi_ka_amrit_mahotsav.png",
  },
  {
    url: "https://sycd.gujarat.gov.in/writereaddata/images/ministry-of-culture.jpg",
  },
  //Second image url
  {
    url: "https://sycd.gujarat.gov.in/writereaddata/images/ministry-of-youth-affairs-and-sports.jpg",
  },
  //Third image url
  {
    url: "https://sycd.gujarat.gov.in/writereaddata/Portal/Images/150-years-gandhiji-janma-jayanti.png",
  },

  //Fourth image url

  {
    url: "https://sycd.gujarat.gov.in/writereaddata/images/gujarat-state-portal.jpg",
  },
  {
    url: "https://sycd.gujarat.gov.in/writereaddata/Portal/Images/CEO_logo_12072022.jpg",
  },
  {
    url: "https://sycd.gujarat.gov.in/writereaddata/Portal/Images/fit_india_logo.png",
  },
  {
    url: "https://sycd.gujarat.gov.in/writereaddata/images/azadi_ka_amrit_mahotsav.png",
  },

  //   extra
];

const Certificateslider = () => {
  return (
    <div>
     
    </div>
  );
};
export default Certificateslider;
