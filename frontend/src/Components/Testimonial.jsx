import React from "react";
import Slider from "react-slick";

import testimonialimg from "../images/testimonialimg.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Style/Home.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
const Testimonial = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <IoIosArrowForward
        style={{
          position: "absolute",
          top: "50%",
          right: "1%",
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
          top: "50%",
          left: "1%",
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
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="slider-container" style={{padding:"20px 8px"}}  >
      <Slider {...settings}  >
        <div className="testimonial-width"  >
          <div className="testimonial-under-width">
            <div className="testimonial-display-flex">
              <div className="testimonial-name-heading-pera-width">
                <p className="testimonial-name">Kevin Kevin</p>
                <p className="testimonial-degistion">
                  Distributer of xyz company
                </p>
                <div className="testimonial-review">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,{" "}
                  </p>
                </div>
              </div>
              <div>
                <div className="shadow-testimonial-box">
                  <div className="testimonial-box">
                    <div class="inner-testimonial">
                      <img src={testimonialimg} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="testimonial-width">
          <div className="testimonial-under-width">
            <div className="testimonial-display-flex">
              <div className="testimonial-name-heading-pera-width">
                <p className="testimonial-name">Kevin Kevin</p>
                <p className="testimonial-degistion">
                  Distributer of xyz company
                </p>
                <div className="testimonial-review">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,{" "}
                  </p>
                </div>
              </div>
              <div>
                <div className="shadow-testimonial-box">
                  <div className="testimonial-box">
                    <div class="inner-testimonial">
                      <img src={testimonialimg} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="testimonial-width">
          <div className="testimonial-under-width">
            <div className="testimonial-display-flex">
              <div className="testimonial-name-heading-pera-width">
                <p className="testimonial-name">Kevin Kevin</p>
                <p className="testimonial-degistion">
                  Distributer of xyz company
                </p>
                <div className="testimonial-review">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,{" "}
                  </p>
                </div>
              </div>
              <div>
                <div className="shadow-testimonial-box">
                  <div className="testimonial-box">
                    <div class="inner-testimonial">
                      <img src={testimonialimg} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="testimonial-width">
          <div className="testimonial-under-width">
            <div className="testimonial-display-flex">
              <div className="testimonial-name-heading-pera-width">
                <p className="testimonial-name">Kevin Kevin</p>
                <p className="testimonial-degistion">
                  Distributer of xyz company
                </p>
                <div className="testimonial-review">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,{" "}
                  </p>
                </div>
              </div>
              <div>
                <div className="shadow-testimonial-box">
                  <div className="testimonial-box">
                    <div class="inner-testimonial">
                      <img src={testimonialimg} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="testimonial-width">
          <div className="testimonial-under-width">
            <div className="testimonial-display-flex">
              <div className="testimonial-name-heading-pera-width">
                <p className="testimonial-name">Kevin Kevin</p>
                <p className="testimonial-degistion">
                  Distributer of xyz company
                </p>
                <div className="testimonial-review">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,{" "}
                  </p>
                </div>
              </div>
              <div>
                <div className="shadow-testimonial-box">
                  <div className="testimonial-box">
                    <div class="inner-testimonial">
                      <img src={testimonialimg} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
      </div>
  );
};

export default Testimonial;
