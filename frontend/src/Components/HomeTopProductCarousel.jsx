import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import topproduct1 from "../images/topproduct1.svg";
import topproduct2 from "../images/topproduct2.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Style/Home.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import axios from "axios";
import { Link } from "react-router-dom";
const HomeTopProductCarousel = ({topProducts}) => {
  const [Topproducts, setTopProducts] = useState([]);
  const apiUrl = process.env.REACT_APP_URL; 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productDetailPromises = topProducts.map(slug => axios.get(`${apiUrl}/product/${slug}`));
        const productDetails = await Promise.all(productDetailPromises);
        const productsData = productDetails.map(detailResponse => detailResponse.data.data);
        setTopProducts(productsData);
      } catch (error) {
        console.error('Error fetching Top products:', error);
      }
    };

    fetchProducts();
  }, [topProducts]);
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
        
      {Topproducts.map(Topproducts => (
                <div className="card-3" key={Topproducts.slug} onClick={()=>window.scrollTo(0,0)}>
                  <Link to={`/Product/${Topproducts.slug}`} style={{textDecoration:"none"}}>
                  <div className="top-product">
                    <img className="imgs" src={`${apiUrl}/product/${Topproducts.image[0]}`} alt={Topproducts.name}   />
                    <div style={{padding:"20px 0"}}>
                      <p>{Topproducts.name} </p>
                      
                    </div>
                  </div>
                  </Link>
                </div>
                
              ))}
              
        
        
        
      </Slider>
      </div>
  );
};

export default HomeTopProductCarousel;
