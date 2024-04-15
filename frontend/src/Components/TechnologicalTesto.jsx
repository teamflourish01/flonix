import React from "react";
import Slider from "react-slick";
import certificate1 from "../images/certificate1.svg"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Style/Home.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
const TechnologicalTesto = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <IoIosArrowForward
        style={{
          position: "absolute",
          top: "43%",
          right: "-6%",
          borderRadius: "50%",
          boxShadow: "rgba(39, 170, 243, 0.35) 0px 5px 15px",
          width: "56px",
          height: "56px",
          padding: "10px",
          zIndex: "1000",
          cursor:"pointer"
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <IoIosArrowBack
        style={{
          position: "absolute",
          top: "43%",
          left: "-6%",
          borderRadius: "50%",
          boxShadow: "rgba(39, 170, 243, 0.35) 0px 5px 15px",
          width: "56px",
          height: "56px",
          padding: "10px",
          zIndex: "1000",
          cursor:"pointer"
        }}
        onClick={onClick}
      />
    );
  }
  const settings = {
    className: "center",
    centerPadding: "0px",
    speed: 500,
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    centerMode: true, // Enable center mode
    gap: "50px",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };
  return (
    <div className="slider-container"   >
      <Slider {...settings}  >
        
      {/* <div className="under-width-testo">
              <div className="d-flex"> */}
                <div className="under-testo-single-card">
                  <div className="certificate-img">
                    <img src={certificate1} alt="" />
                  </div>
                  <div className="certificate-pera">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
                  </div>
                </div>
                <div className="under-testo-single-card">
                  <div className="certificate-img">
                    <img src={certificate1} alt="" />
                  </div>
                  <div className="certificate-pera">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
                  </div>
                </div>
                <div className="under-testo-single-card">
                  <div className="certificate-img">
                    <img src={certificate1} alt="" />
                  </div>
                  <div className="certificate-pera">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
                  </div>
                </div>
                <div className="under-testo-single-card">
                  <div className="certificate-img">
                    <img src={certificate1} alt="" />
                  </div>
                  <div className="certificate-pera">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
                  </div>
                </div>
                <div className="under-testo-single-card">
                  <div className="certificate-img">
                    <img src={certificate1} alt="" />
                  </div>
                  <div className="certificate-pera">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
                  </div>
                </div>
                <div className="under-testo-single-card">
                  <div className="certificate-img">
                    <img src={certificate1} alt="" />
                  </div>
                  <div className="certificate-pera">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
                  </div>
                </div>
                
              {/* </div>
              </div> */}
        
        
        
      </Slider>
      </div>
  );
};

export default TechnologicalTesto;
