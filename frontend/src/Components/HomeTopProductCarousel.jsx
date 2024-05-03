import React from "react";
import Slider from "react-slick";
import topproduct1 from "../images/topproduct1.svg";
import topproduct2 from "../images/topproduct2.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Style/Home.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
const HomeTopProductCarousel = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <IoIosArrowForward
      className="arrow-forward"
        style={{
          position: "absolute",
          top: "43%",
          right: "6%",
          borderRadius: "50%",
          boxShadow: "rgba(39, 170, 243, 0.35) 0px 5px 15px",
          width: "56px",
          height: "56px",
          padding: "10px",
          zIndex: "1000",
          cursor:"pointer",
          display: "none",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <IoIosArrowBack
      className="arrow-back"
        style={{
          position: "absolute",
          top: "43%",
          left: "6%",
          borderRadius: "50%",
          boxShadow: "rgba(39, 170, 243, 0.35) 0px 5px 15px",
          width: "56px",
          height: "56px",
          padding: "10px",
          zIndex: "1000",
          cursor:"pointer",
          display: "none",
        }}
        onClick={onClick}
      />
    );
  }
  const settings = {
    // className: "center",
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
          breakpoint: 1025,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
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
        
      
                <div className="card-3">
                  <div className="top-product">
                    <img className="imgs" src={topproduct1} alt="" />
                    <div>
                      <p>Lorem Ipsum simply dummy text of </p>
                      <button>INQUIRY NOW</button>
                    </div>
                  </div>
                </div>
                <div className="card-3">
                  <div className="top-product">
                    <img src={topproduct2} alt="" />
                    <p>Lorem Ipsu simply dummy text of </p>
                    <button>INQUIRY NOW</button>
                  </div>
                </div>
                <div className="card-3">
                  <div className="top-product">
                    <img src={topproduct2} alt="" />
                    <p>Lorem Ipsum simply dummy text of </p>
                    <button>INQUIRY NOW</button>
                  </div>
                </div>
              
        
        
        
      </Slider>
      </div>
  );
};

export default HomeTopProductCarousel;
