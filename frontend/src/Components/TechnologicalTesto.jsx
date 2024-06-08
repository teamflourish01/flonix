import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import certificate1 from "../images/certificate1.svg";
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
        className="arrow-forward"
        // style={{
        //   position: "absolute",
        //   top: "43%",
        //   right: "-6%",
        //   borderRadius: "50%",
        //   boxShadow: "rgba(39, 170, 243, 0.35) 0px 5px 15px",
        //   width: "56px",
        //   height: "56px",
        //   padding: "10px",
        //   zIndex: "1000",
        //   cursor:"pointer"
        // }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <IoIosArrowBack
        className="arrow-back"
        // style={{
        //   position: "absolute",
        //   top: "43%",
        //   left: "-6%",
        //   borderRadius: "50%",
        //   boxShadow: "rgba(39, 170, 243, 0.35) 0px 5px 15px",
        //   width: "56px",
        //   height: "56px",
        //   padding: "10px",
        //   zIndex: "1000",
        //   cursor:"pointer"
        // }}
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
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [aboutCerificate, setAboutCertificate] = useState([]);
  const apiUrl = process.env.REACT_APP_URL;
  useEffect(() => {
    const getAboutCertificate = async () => {
      try {
        const response = await fetch(`${apiUrl}/certificate`);
        const data = await response.json();
        console.log(data.data);
        setAboutCertificate(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getAboutCertificate();
  }, []);
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {aboutCerificate.map((item) => (
          <div key={item._id} className="under-testo-single-card">
            <div className="certificate-img">
              <img
                src={`${apiUrl}/certificates/${item?.image}`}
                alt={item.image}
              />
            </div>
            <div className="certificate-pera">
              <p>{item?.imgdescription}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TechnologicalTesto;
