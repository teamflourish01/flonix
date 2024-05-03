import React from "react";
import "../Style/Home.css";
import bannerimage from "../images/bannerimage.svg";
import bannerimg1 from "../images/bannerimg1.svg";
import bannerimg2 from "../images/bannerimg2.svg";
import bannerimg3 from "../images/bannerimg3.svg";
import bannerimg4 from "../images/bannerimg4.svg";
import aboutimage from "../images/aboutimage.svg";
import topproduct1 from "../images/topproduct1.svg";
import topproduct2 from "../images/topproduct2.svg";
import whyuseimage from "../images/whyuseimage.svg";
import border1 from "../images/border1.svg"
import whyuseimage1 from "../images/whyuseimage1.svg";
import whyuseimage2 from "../images/whyuseimage2.svg";
import tilu from "../images/tilu.svg";
import tficon1 from "../images/tficon1.svg";
import tficon2 from "../images/tficon2.svg";
import tficon3 from "../images/tficon3.svg";
import tficon4 from "../images/tficon4.svg";
import tficon5 from "../images/tficon5.svg";
import ourproduct1 from "../images/ourproduct1.svg";
import ourproduct2 from "../images/ourproduct2.svg";
import ourproduct3 from "../images/ourproduct3.svg";
import ourdistributer1 from "../images/ourdistributer1.svg";
import ourdistributer2 from "../images/ourdistributer2.svg";
import ourdistributer3 from "../images/ourdistributer3.svg";
import ourdistributer4 from "../images/ourdistributer4.svg";
import ourdistributer5 from "../images/ourdistributer5.svg";
import testimonialimg from "../images/testimonialimg.svg";
import ourblogimg1 from "../images/ourblogimg1.svg";
import ourblogimg2 from "../images/ourblogimg2.svg";
import ourblogimg3 from "../images/ourblogimg3.svg";
import zikzakourblogvector from "../images/zikzakourblogvector.svg";
import inquiryicone1 from "../images/inquiryicone1.svg";
import inquiryicone2 from "../images/inquiryicone2.svg";
import inquiryicone3 from "../images/inquiryicone3.svg";
import Testimonial from "./Testimonial";
import { useState, useEffect } from 'react';
import HomeTopProductCarousel from "./HomeTopProductCarousel";
import HomeOurProductsCarousel from "./HomeOurProductsCarousel";



const Home = () => {
 
    // Image array with 4 image URLs
    const images = [bannerimg1, bannerimg2, bannerimg3, bannerimg4];
  
    // State to keep track of the current image index
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const [isFading, setIsFading] = useState(false);

    // Effect hook to change the image every 5 seconds
    useEffect(() => {
        // Function to change the image
        const changeImage = () => {
            // Set isFading to true to start fade-out transition
            setIsFading(true);
            
            // Delay the image change to allow fade-out transition
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
                // After changing the image, reset isFading to false for fade-in transition
                setIsFading(false);
            }, 1000); // Delay for the fade-out effect (1 second)
        };

        // Set interval to change image every 5 seconds
        const interval = setInterval(changeImage, 5000);

        // Cleanup function to clear interval when component unmounts
        return () => {
            clearInterval(interval);
        };
    }, [images.length]);
  
  
  return (
    <>
      <section>
        <div className="wavebgbanner">
          <div className="main-width">
            <div>
              <div className="under1320width">
                <div className="d-grid-home-banner">
                  <div className=" pure" data-aos="fade-right"
            data-aos-duration="2000">
                    <div className="health">
                      <p className="under-impo">
                        ~ Understand the importance of life
                      </p>
                      <p className="drinking-water">
                        Pure & Healthy Drinking Water
                      </p>
                      <div className="banner-inquery-button">
                        <button>INQUIRY NOW</button>
                      </div>
                    </div>
                  </div>
                  <div className="bannerimage" data-aos="fade-left"
            data-aos-duration="2000">
                  <img className={`image ${!isFading ? 'fade-in' : ''}`}   src={images[currentIndex]} alt="Changingimg"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="">
        <div className="main-width">
          <div style={{ paddingTop: "50px" }}>
            <div className="under1320width">
              <div className="home-page-padding">
              <p className="all-heading">About Flonix</p>
              <div className="d-grid-homa-bout">
                <div className="about-choosing" >
                  <div className="filter-flonix">
                    <p className="filter-heading">
                      Choosing the right Water Filter by Flonix
                    </p>
                    <p className="filter-peragraph">
                      Cras faucibus sodales ornare. In ac elit porttitor, tempor
                      mauris in, ullamcorper ex. Integer et vulputate felis.
                    </p>
                    <div className="benifts">
                      <li>How many people will be using filter?</li>
                      <li>How do you plan to use your filter?</li>
                      <li>Will you be using the system for pets?</li>
                    </div>
                  </div>
                  <button className="buttonclass">
                    <p>Read More</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </button>
                </div>
                <div className="aboutimage" >
                  <img src={aboutimage} alt="" />
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="" >
        <div className="main-width">
          <div style={{paddingTop:"50px"}}>
            <div className="under1320width">
            <div className="home-page-padding">
              <p className="all-heading">Top Product</p>
              <div>
              <HomeTopProductCarousel/>
              </div>

            
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg" style={{ margin: " 70px 0 40px 0" }}>
        <div className="border-1" >
          
        </div>
        <div className="main-width" style={{ padding: "0 0 10px 0" }}>
          <div
            className="under1213width"
            
          >
            <div className="home-page-padding">
            <div style={{ margin: " 0 0 40px 0" }}>
              <p
                className="all-heading"
                style={{ padding: "0", margin: " 0 0 30px 0" }}
              >
                Why Use Water Purifier
              </p>

              <div className="d-flex-water-purefier">
                <div className="why-use-water-purifier item1">
                  <div className="why-use">
                    <div className="water-puri-container">
                      <p className="water-heading">Lorem Ipsum is.</p>
                      <p className="water-pera">
                        Lorem Ipsum is simply dummy text of the printi
                      </p>
                    </div>
                    <div className="water-puri-slash">
                      <p>///////////</p>
                    </div>
                  </div>
                  <div className="why-use">
                    <div className="water-puri-container">
                      <p className="water-heading">Lorem Ipsum is.</p>
                      <p className="water-pera">
                        Lorem Ipsum is simply dummy text of the printi
                      </p>
                    </div>
                    <div className="water-puri-slash">
                      <p>///////////</p>
                    </div>
                  </div>
                </div>
                <div className="water-purefire-boxes">
                <div className="water-purefire item2">
                  <img
                  data-aos="fade-down"
                  // style={{height:"1000px"}}
                  data-aos-duration="2000"
                    src={whyuseimage1}
                    alt=""
                  />
                  <img data-aos="fade-up"
                  data-aos-duration="2000" className="water-ro" src={whyuseimage2} alt="" />
                </div>
                </div>
                <div className="why-use-water-purifier item3">
                  <div
                    className="why-use"
                    style={{
                      flexDirection: "row-reverse",
                    }}
                  >
                    <div
                      className="water-puri-container"
                      style={{
                        textAlign: "left",
                      }}
                    >
                      <p className="water-heading">Lorem Ipsum is.</p>
                      <p className="water-pera">
                        Lorem Ipsum is simply dummy text of the printi
                      </p>
                    </div>
                    <div className="water-puri-slash">
                      <p>///////////</p>
                    </div>
                  </div>
                  <div
                    className="why-use"
                    style={{
                      flexDirection: "row-reverse",
                    }}
                  >
                    <div
                      className="water-puri-container"
                      style={{
                        textAlign: "left",
                      }}
                    >
                      <p className="water-heading">Lorem Ipsum is.</p>
                      <p className="water-pera">
                        Lorem Ipsum is simply dummy text of the printi
                      </p>
                    </div>
                    <div className="water-puri-slash">
                      <p>///////////</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="water-one-line">
                <div className="water-flex-line">
                  <div className="water-under-flex-line">
                    <div>
                    <p className="water-heading">Lorem Ipsum is.</p>
                    <p className="water-pera">50.5</p>
                    </div>
                    <div className="tilu">
                    <img src={tilu} alt="" />
                  </div>
                  </div>
                  
                  <div className="water-under-flex-line">
                  <div>
                    <p className="water-heading">Lorem Ipsum is.</p>
                    <p className="water-pera">50.5</p>
                    </div>
                    <div className="tilu">
                    <img src={tilu} alt="" />
                  </div>
                  </div>
                  
                  <div className="water-under-flex-line">
                  <div>
                    <p className="water-heading">Lorem Ipsum is.</p>
                    <p className="water-pera">50.5</p>
                    </div>
                    <div className="tilu">
                    <img src={tilu} alt="" />
                  </div>
                  </div>
                  
                  <div>
                    <p className="water-heading">Lorem Ipsum is.</p>
                    <p className="water-pera">50.5</p>
                  </div>
                </div>
              </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className="" style={{ margin: "40px 0" }}>
        <div className="main-width">
          <div className="under1320width ">
          <div className="home-page-padding">
            <div style={{ margin: " 50px 0" }}>
              <p
                className="all-heading"
                style={{ padding: "0", margin: " 50px 0" }}
              >
                Trust Factor
              </p>
              <div className="d-flex-hexagoan-box">
                <div className="hexagon-box">
                  <span className="hexagon-wrap">
                    <div class="hexagon-rectangle">
                      <div class="inner-rectangle">
                        <img className="vert-move" src={tficon1} alt="" />
                      </div>
                    </div>
                  </span>
                  <div className="hexagon-box-pera">
                    <p>Water Proof</p>
                  </div>
                </div>
                <div className="hexagon-box">
                  <span className="hexagon-wrap">
                    <div class="hexagon-rectangle">
                      <div class="inner-rectangle">
                        <img className="vert-move"  src={tficon2} alt="" />
                      </div>
                    </div>
                  </span>
                  <div className="hexagon-box-pera">
                    <p>pressure pump</p>
                  </div>
                </div>
                <div className="hexagon-box">
                  <span className="hexagon-wrap">
                    <div class="hexagon-rectangle">
                      <div class="inner-rectangle">
                        <img className="vert-move"  src={tficon3} alt="" />
                      </div>
                    </div>
                  </span>
                  <div className="hexagon-box-pera">
                    <p>Best Quality</p>
                  </div>
                </div>
                <div className="hexagon-box">
                  <span className="hexagon-wrap">
                    <div class="hexagon-rectangle">
                      <div class="inner-rectangle">
                        <img className="vert-move"  src={tficon4} alt="" />
                      </div>
                    </div>
                  </span>
                  <div className="hexagon-box-pera">
                    <p>purity</p>
                  </div>
                </div>
                <div className="hexagon-box">
                  <span className="hexagon-wrap">
                    <div class="hexagon-rectangle">
                      <div class="inner-rectangle">
                        <img className="vert-move"  src={tficon5} alt="" />
                      </div>
                    </div>
                  </span>
                  <div className="hexagon-box-pera">
                    <p>Make In India</p>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg" style={{ paddingTop: "50px" }}>
        <div className="main-width">
          <div>
            <div className="under1320width">
              <p className="all-heading">Our Products</p>
              <div className="home-page-padding">
                <div>
                  <HomeOurProductsCarousel/>
                </div>

              
              <div className="our-product-button">
                <button>MORE PRODUCTS</button>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="" style={{ margin: "50px 0" }}>
        <div className="main-width">
          <div>
            <div className="under1320width">
              <div className="home-page-padding">
                <p
                  className="all-heading"
                  style={{ padding: "0", margin: "0 0 50px 0" }}
                >
                  Our Distributor
                </p>
                <div className="our-distributor-main-heading">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took{" "}
                  </p>
                </div>

                <div className="d-flex-circle-box">
                  <div className="shadow-circle-box">
                    <div className="circle-box">
                      <div class="inner-circle">
                        <img src={ourdistributer1} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="shadow-circle-box">
                    <div className="circle-box">
                      <div class="inner-circle">
                        <img src={ourdistributer2} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="shadow-circle-box">
                    <div className="circle-box">
                      <div class="inner-circle">
                        <img src={ourdistributer3} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="shadow-circle-box">
                    <div className="circle-box">
                      <div class="inner-circle">
                        <img src={ourdistributer4} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="shadow-circle-box">
                    <div className="circle-box">
                      <div class="inner-circle">
                        <img src={ourdistributer5} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="" style={{ margin: "50px 0" }}>
        <div className="main-width">
          <div>
            <div className="under1320width">

              <div className="home-page-padding">
              

                <p
                  className="all-heading"
                  style={{ padding: "0", margin: "0 0 50px 0" }}
                >
                  Testimonials
                </p>
                <div style={{zIndex:"-999"}}>

                <Testimonial/>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
                    
      
      <section className="" style={{ margin: "50px 0" }}>
        <div className="main-width">
          <div>
            <div className="under1320width">
              <div >
                <p
                  className="all-heading"
                  style={{ padding: "0", margin: "0 0 50px 0" }}
                >
                  Our Blogs
                </p>
                <div className="d-flex-blog">
                  
                    <div className="blog-box">
                      <img className="blog-imge" src={ourblogimg1} alt="" />
                      <div className="blog-box-contents">
                        <div className="blog-under-box">
                          <p className="blog-heading">
                            The average cost for water
                          </p>
                          <p className="blog-service">
                            {" "}
                            <span >|</span> Service
                          </p>

                          <p className="blog-pera">
                            The average cost for water supplied to a home in the
                            U.S. is about $2.00 for 1,000 gallons, which equals
                            about 5
                          </p>
                        </div>
                        <div className="blog-stuff">
                          <img src={zikzakourblogvector} alt="" />
                          <div className="blog-people-clander">
                            <div className="blog-icon-div">
                              <p>
                                <i  class="fa-solid fa-user"></i>By Flonix
                              </p>
                            </div>
                            <div className="blog-icon-div">
                              <p>
                                <i  class="fa-solid fa-calendar"></i>March 27,
                                2024
                              </p>
                            </div>
                          </div>
                          <div className="blog-people-clander">
                            <div className="blog-icon-div">
                              <p>
                                <i  class="fa-solid fa-message"></i>3 Comments
                              </p>
                            </div>
                            <div className="blog-icon-div">
                              <p>
                                <i  class="fa-solid fa-bookmark"></i>Sticky post
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="blog-button">
                          <a href="/BlogsPage">
                          <button>READ MORE</button>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="blog-box">
                      <img className="blog-imge" src={ourblogimg1} alt="" />
                      <div className="blog-box-contents">
                        <div className="blog-under-box">
                          <p className="blog-heading">
                            The average cost for water
                          </p>
                          <p className="blog-service">
                            {" "}
                            <span >|</span> Service
                          </p>

                          <p className="blog-pera">
                            The average cost for water supplied to a home in the
                            U.S. is about $2.00 for 1,000 gallons, which equals
                            about 5
                          </p>
                        </div>
                        <div className="blog-stuff">
                          <img src={zikzakourblogvector} alt="" />
                          <div className="blog-people-clander">
                            <div className="blog-icon-div">
                              <p>
                                <i  class="fa-solid fa-user"></i>By Flonix
                              </p>
                            </div>
                            <div className="blog-icon-div">
                              <p>
                                <i  class="fa-solid fa-calendar"></i>March 27,
                                2024
                              </p>
                            </div>
                          </div>
                          <div className="blog-people-clander">
                            <div className="blog-icon-div">
                              <p>
                                <i  class="fa-solid fa-message"></i>3 Comments
                              </p>
                            </div>
                            <div className="blog-icon-div">
                              <p>
                                <i  class="fa-solid fa-bookmark"></i>Sticky post
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="blog-button">
                          <a href="/BlogsPage">
                          <button>READ MORE</button>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="blog-box">
                      <img className="blog-imge" src={ourblogimg1} alt="" />
                      <div className="blog-box-contents">
                        <div className="blog-under-box">
                          <p className="blog-heading">
                            The average cost for water
                          </p>
                          <p className="blog-service">
                            {" "}
                            <span >|</span> Service
                          </p>

                          <p className="blog-pera">
                            The average cost for water supplied to a home in the
                            U.S. is about $2.00 for 1,000 gallons, which equals
                            about 5
                          </p>
                        </div>
                        <div className="blog-stuff">
                          <img src={zikzakourblogvector} alt="" />
                          <div className="blog-people-clander">
                            <div className="blog-icon-div">
                              <p>
                                <i  class="fa-solid fa-user"></i>By Flonix
                              </p>
                            </div>
                            <div className="blog-icon-div">
                              <p>
                                <i  class="fa-solid fa-calendar"></i>March 27,
                                2024
                              </p>
                            </div>
                          </div>
                          <div className="blog-people-clander">
                            <div className="blog-icon-div">
                              <p>
                                <i  class="fa-solid fa-message"></i>3 Comments
                              </p>
                            </div>
                            <div className="blog-icon-div">
                              <p>
                                <i  class="fa-solid fa-bookmark"></i>Sticky post
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="blog-button">
                          <a href="/BlogsPage">
                          <button>READ MORE</button>
                          </a>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="bg" style={{ margin: "50px 0 0 0 " }}>
        <div className="main-width">
          <div style={{ padding: "50px 0" }}>
            <div className="under1320width">
              <div className=' contact-page-padding'>
                <p
                  className="all-heading"
                  style={{ padding: "0", margin: "0 0 50px 0" }}
                >
                  Inquiry Here
                </p>
                <div className="d-grid-contact">
                  <div className="inquiry-icon-width">
                    <div className="" >
                      <div
                      className="inquiry-icon-flex"
                       
                      >
                        <div>
                          <img
                            style={{ width: "46px" }}
                            src={inquiryicone1}
                            alt=""
                          />
                        </div>
                        <div className="form-address">
                          <p className="form-heading">Address</p>
                          <p className="form-pera">Godown NO: 707, Chitrakut, Saniya Hemad, Taluka: Chorasi, Dist: Surat</p>
                        </div>
                      </div>
                      <div
                       className="inquiry-icon-flex-up-down-margin"
                      >
                        <div>
                          <img
                            style={{ width: "46px" }}
                            src={inquiryicone2}
                            alt=""
                          />
                        </div>
                        <div className="form-address" >
                          <p className="form-heading">Email</p>
                          <p className="form-pera">zoe.miller@mydomain.com</p>
                        </div>
                      </div>
                      <div
                       className="inquiry-icon-flex"
                        
                      >
                        <div>
                          <img
                            style={{ width: "46px" }}
                            src={inquiryicone3}
                            alt=""
                          />
                        </div>
                        <div className="form-address">
                          <p className="form-heading">Phone</p>
                          <p className="form-pera">+91 9909332099 | <span>+91 9909332099 |</span> <span>+91 9909332099</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <form className="form-width">
                    <div className="">
                      <div
                      className="form-flex"
                      >
                        <div className="form-label-input">
                          <label className="form-label">Your name</label>
                          <input
                          className="form-inputs"
                            
                            type="text"
                          />
                        </div>
                        <div className="form-label-input">
                          <label className="form-label">Email address</label>
                          <input
                          className="form-inputs"
                            
                            type="text"
                          />
                        </div>
                      </div>
                      <div
                      className="form-flex-up-down-margin"
                        
                      >
                        
                        <div className="form-label-input">
                          <label className="form-label">City</label>
                          <input
                          className="form-inputs"
                            
                            type="text"
                          />
                        </div>
                        <div className="form-label-input">
                          <label className="form-label">Mobile number</label>
                          <input
                          className="form-inputs"
                            
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="form-label-textarea" style={{ textAlign: "left" }}>
                        <label className="form-label">Message</label>
                        <textarea
                        className="form-textarea"
                          
                        />
                      </div>
                    </div>
                    <div className="form-button" >
                  <button >SUBMIT NOW</button>
                </div>
                  </form>
                  
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
