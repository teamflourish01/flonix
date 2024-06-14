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
import border1 from "../images/border1.svg";
// import whyuseimage1 from "../images/whyuseimage1.svg";
// import whyuseimage2 from "../images/whyuseimage2.svg";
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
import { useState, useEffect } from "react";
import HomeTopProductCarousel from "./HomeTopProductCarousel";
import HomeOurProductsCarousel from "./HomeOurProductsCarousel";
import { Link } from "react-router-dom";
import {Helmet} from "react-helmet"

const Home = () => {
  const [bannerImages, setBannerImages] = useState([]);
  const [bannerImageAlts, setBannerImageAlts] = useState([]);
  const [homeData, setHomeData] = useState({});
  const [roData, setRoData] = useState({});
  const [contectData, setContectData] = useState([]);
  const [ourProducts, setOurProducts] = useState([]);
  const [topProducts, setTopProducts] = useState([]);
  const [blogData, setBlogData] = useState([]);
  const apiUrl = process.env.REACT_APP_URL;
  const domain=process.env.REACT_APP_DOMAIN
  useEffect(() => {
    const getBlogData = async () => {
      try {
        const response = await fetch(`${apiUrl}/blog`);
        const data = await response.json();
        setBlogData(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getBlogData();
  }, []);
  useEffect(() => {
    const getHome = async () => {
      try {
        const response = await fetch(`${apiUrl}/home`);
        const data = await response.json();
        // Assuming `data.data` is an array of banner image URLs
        setBannerImages(data.data[0].banner_images);
        setBannerImageAlts(data.data[0].bannerimg_alt);
        setHomeData(data.data[0]);
        setOurProducts(data.data[0].our_products);
        setTopProducts(data.data[0].top_product);
        console.log(data.data[0].top_product);
      } catch (error) {
        console.error("Error fetching banner images:", error);
      }
    };
    getHome();
  }, []);
  useEffect(() => {
    const getRobenefits = async () => {
      try {
        const response = await fetch(`${apiUrl}/robenefits`);
        const data = await response.json();
        setRoData(data.data[0]);
        console.log(data.data[0]);
      } catch (error) {
        console.error("Error fetching banner images:", error);
      }
    };
    getRobenefits();
  }, []);
  useEffect(() => {
    const getContect = async () => {
      try {
        const response = await fetch(`${apiUrl}/contect`);
        const data = await response.json();
        setContectData(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getContect();
  }, []);

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
        setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
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
  }, [bannerImages.length]);

  return (
    <>
    <Helmet>
    <meta charSet="utf-8" />
                <title>{homeData?.meta_title}</title>
                <meta name='description' content={homeData?.meta_description}/>
                <link rel="canonical" href={`${domain}/`} />
    </Helmet>
      <section style={{ overflow: "hidden" }}>
        <div className="wavebgbanner">
          <div className="main-width">
            <div>
              <div className="under1320width">
                <div className="d-grid-home-banner">
                  <div
                    className=" pure"
                    data-aos="fade-right"
                    data-aos-duration="2000"
                  >
                    <div className="health">
                      <p className="under-impo">
                        ~ Understand the importance of life
                      </p>
                      <p className="drinking-water">
                        {homeData?.banner_heading}
                      </p>
                      <a href="#inquiry" style={{textDecoration:"none"}}>
                      <button
                        className="banner-inquery-button"
                        style={{ marginTop: "40px" }}
                      >
                        <span class="text">INQUIRY NOW</span>
                        <div class="wave"></div>
                      </button>
                      </a>
                    </div>
                  </div>
                  <div
                    className="bannerimage"
                    data-aos="fade-left"
                    data-aos-duration="2000"
                  >
                    <img
                      className={`image ${!isFading ? "fade-in" : ""}`}
                      src={`${apiUrl}/home/${bannerImages[currentIndex]}`}
                      alt={`${bannerImageAlts[currentIndex]}`}
                    />
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
              <div className="all-page-padding">
                <p className="all-heading">About Flonix</p>
                <div className="d-grid-homa-bout">
                  <div className="about-choosing">
                    <div className="filter-flonix">
                      <p className="filter-heading">
                        {homeData?.about_heading}
                      </p>
                      <p className="filter-peragraph">{homeData?.about_pera}</p>

                      <div className="benifts">
                        {homeData.about_points &&
                          homeData.about_points.map((point, index) => (
                            <li key={index}>{point}</li>
                          ))}
                      </div>
                    </div>
                    <Link to={`/About`} style={{textDecoration:"none"}}>
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
                    </Link>
                  </div>
                  <div className="aboutimage">
                    <iframe
                      src={`https://www.youtube.com/embed/${homeData.about_video}`}
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
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
              <div className="all-page-padding">
                <p className="all-heading">Top Product</p>
                <div>
                  <HomeTopProductCarousel topProducts={topProducts} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg" style={{ margin: " 70px 0 40px 0" }}>
        <div className="border-1"></div>
        <div className="main-width" style={{ padding: "0 0 10px 0" }}>
          <div className="under1213width">
            <div className="all-page-padding">
              <div style={{ margin: " 0 0 40px 0" }}>
                <p
                  className="all-heading"
                  style={{ padding: "0", margin: " 0 0 30px 0" }}
                >
                  {roData?.main_heading}
                </p>

                <div className="d-flex-water-purefier">
                  <div className="why-use-water-purifier item1">
                    <div className="why-use">
                      <div className="water-puri-container">
                        <p className="water-heading">{roData?.left_heading1}</p>
                        <p className="water-pera">{roData?.left_text1}</p>
                      </div>
                      <div className="water-puri-slash">
                        <p>///////////</p>
                      </div>
                    </div>
                    <div className="why-use">
                      <div className="water-puri-container">
                        <p className="water-heading">{roData?.left_heading2}</p>
                        <p className="water-pera">{roData?.left_text2}</p>
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
                        data-aos-duration="2000"
                        src={`${apiUrl}/robenefits/${roData?.first_image}`}
                        alt=""
                      />
                      <img
                        data-aos="fade-up"
                        data-aos-duration="2000"
                        className="water-ro"
                        src={`${apiUrl}/robenefits/${roData?.seconed_image}`}
                        alt=""
                      />
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
                        <p className="water-heading">
                          {roData?.right_heading1}
                        </p>
                        <p className="water-pera">{roData?.right_text1}</p>
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
                        <p className="water-heading">
                          {roData?.right_heading2}
                        </p>
                        <p className="water-pera">{roData?.right_text2}</p>
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
                        <p className="water-heading">
                          {roData?.bottom_heading1}
                        </p>
                        <p className="water-pera">{roData?.bottom_text1}</p>
                      </div>
                      <div className="tilu">
                        <img src={tilu} alt="" />
                      </div>
                    </div>

                    <div className="water-under-flex-line">
                      <div>
                        <p className="water-heading">
                          {roData?.bottom_heading2}
                        </p>
                        <p className="water-pera">{roData?.bottom_text2}</p>
                      </div>
                      <div className="tilu">
                        <img src={tilu} alt="" />
                      </div>
                    </div>

                    <div className="water-under-flex-line">
                      <div>
                        <p className="water-heading">
                          {roData?.bottom_heading3}
                        </p>
                        <p className="water-pera">{roData?.bottom_text3}</p>
                      </div>
                      <div className="tilu">
                        <img src={tilu} alt="" />
                      </div>
                    </div>

                    <div>
                      <p className="water-heading">{roData?.bottom_heading4}</p>
                      <p className="water-pera">{roData?.bottom_text4}</p>
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
            <div className="all-page-padding">
              <div style={{ margin: " 50px 0" }}>
                <p
                  className="all-heading"
                  style={{ padding: "0", margin: " 50px 0" }}
                >
                  Trust Factor
                </p>
                <div className="d-flex-hexagoan-box">
                  {/* <div className="hexagon-box">
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
                  </div> */}
                  {homeData.trust_factor_images &&
                    homeData.trust_factor_images.map((image, index) => (
                      <div className="hexagon-box" key={index}>
                        <span className="hexagon-wrap">
                          <div className="hexagon-rectangle">
                            <div className="inner-rectangle">
                              <img
                                className="vert-move"
                                src={`${apiUrl}/home/${image}`}
                                alt={`Trust Factor ${index}`}
                              />
                            </div>
                          </div>
                        </span>
                        <div className="hexagon-box-pera">
                          <p>
                            {homeData.trust_factor_text &&
                              homeData.trust_factor_text[index]}
                          </p>
                        </div>
                      </div>
                    ))}
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
              <div className="all-page-padding">
                <div>
                  <HomeOurProductsCarousel ourProducts={ourProducts} />
                </div>

                {/* <div className="our-product-button">
                  <button>MORE PRODUCTS</button>
                </div> */}
                <div className="more-product-button">
                <Link style={{textDecoration:"none"}} to={`/product`}>
                  <button
                    className="banner-inquery-button"
                    style={{ marginTop: "40px" }}
                  >
                    <span class="text">MORE PRODUCTS</span>
                    <div class="wave"></div>
                  </button>
                  </Link>
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
              <div className="all-page-padding">
                <p
                  className="all-heading"
                  style={{ padding: "0", margin: "0 0 50px 0" }}
                >
                  Our Distributor
                </p>
                <div className="our-distributor-main-heading">
                  <p>{homeData?.our_distributor_text}</p>
                </div>

                <div className="d-flex-circle-box">
                  {/* <div className="shadow-circle-box">
                    <div className="circle-box">
                      <div class="inner-circle">
                        <img src={ourdistributer1} alt="" />
                      </div>
                    </div>
                  </div> */}
                  {homeData.our_distributor_logo &&
                    homeData.our_distributor_logo.map((logo, index) => (
                      <div className="shadow-circle-box" key={index}>
                        <div className="circle-box">
                          <div className="inner-circle">
                            <img
                              src={`${apiUrl}/home/${logo}`}
                              alt={`Distributor Logo ${index}`}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
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
              <div className="all-page-padding">
                <p
                  className="all-heading"
                  style={{ padding: "0", margin: "0 0 50px 0" }}
                >
                  Testimonials
                </p>
                <div style={{ zIndex: "-999" }}>
                  <Testimonial />
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
              {/* <div className="all-page-padding"> */}
              <div>
                <p
                  className="all-heading"
                  style={{ padding: "0", margin: "0 0 50px 0" }}
                >
                  Our Blogs
                </p>
                <div className="d-flex-blog">
                  {blogData
                    .slice()
                    .reverse()
                    .slice(0, 3)
                    .map((item) => (
                      <div className="blog-box" key={item.slug}>
                        <img
                          className="blog-imge"
                          src={`${apiUrl}/blog/${item?.banner_image}`}
                          alt=""
                        />
                        <div className="blog-box-contents">
                          <div className="blog-under-box">
                            <p className="blog-heading">{item.name}</p>
                            <p className="blog-service">
                              <span>|</span> {item.category.name}
                            </p>
                          </div>
                          <div className="blog-stuff">
                            <img src={zikzakourblogvector} alt="" />
                            <div className="blog-people-clander">
                              <div className="blog-icon-div">
                                <p>
                                  <i className="fa-solid fa-user"></i>By Flonix
                                </p>
                              </div>
                              <div className="blog-icon-div">
                                <p>
                                  <i className="fa-solid fa-calendar"></i>March
                                  27, 2024
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="blog-button">
                            <Link
                              style={{ textDecoration: "none" }}
                              to={`/BlogsPage/${item.slug}`}
                            >
                              <button
                                className="banner-inquery-button"
                                // style={{ marginTop: "40px" }}
                              >
                                <span class="text">READ MORE</span>
                                <div class="wave"></div>
                              </button>
                              {/* <button>READ MORE</button> */}
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              {/* </div> */}
            </div>
          </div>
        </div>
      </section>

      <section className="bg" style={{ margin: "50px 0 0 0 " }}  id="inquiry">
        <div className="main-width">
          <div style={{ padding: "50px 0" }}>
            <div className="under1320width">
              <div className="all-page-padding">
                <p
                  className="all-heading"
                  style={{ padding: "0", margin: "0 0 50px 0" }}
                >
                  Inquiry Here
                </p>
                <div className="d-grid-contact">
                  {contectData.map((item) => (
                    <div className="inquiry-icon-width">
                      <div className="">
                        <div className="inquiry-icon-flex">
                          <div>
                            <img
                              style={{ width: "46px" }}
                              src={inquiryicone1}
                              alt=""
                            />
                          </div>
                          <div className="form-address">
                            <p className="form-heading">Address</p>
                            <p className="form-pera">
                              <a
                                href={item.officeaddress_url}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {item.officeaddress}{" "}
                              </a>
                            </p>
                          </div>
                        </div>
                        <div className="inquiry-icon-flex-up-down-margin">
                          <div>
                            <img
                              style={{ width: "46px" }}
                              src={inquiryicone2}
                              alt=""
                            />
                          </div>
                          <div className="form-address">
                            <p className="form-heading">Email</p>
                            <p className="form-pera">
                              <a href={`mailto:${item.email}`}>{item.email}</a>
                            </p>
                          </div>
                        </div>
                        <div className="inquiry-icon-flex">
                          <div>
                            <img
                              style={{ width: "46px" }}
                              src={inquiryicone3}
                              alt=""
                            />
                          </div>
                          <div className="form-address">
                            <p className="form-heading">Phone</p>
                            <p className="form-pera">
                              <a href={`tel:${item.officenumber}`}>
                                {item.officenumber}
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  <form className="form-width">
                    <div className="">
                      <div className="form-flex">
                        <div className="form-label-input">
                          <label className="form-label">Your name</label>
                          <input className="form-inputs" type="text" />
                        </div>
                        <div className="form-label-input">
                          <label className="form-label">Email address</label>
                          <input className="form-inputs" type="text" />
                        </div>
                      </div>
                      <div className="form-flex-up-down-margin">
                        <div className="form-label-input">
                          <label className="form-label">City</label>
                          <input className="form-inputs" type="text" />
                        </div>
                        <div className="form-label-input">
                          <label className="form-label">Mobile number</label>
                          <input className="form-inputs" type="text" />
                        </div>
                      </div>
                      <div
                        className="form-label-textarea"
                        style={{ textAlign: "left" }}
                      >
                        <label className="form-label">Message</label>
                        <textarea className="form-textarea" />
                      </div>
                    </div>
                  </form>
                  <div className="form-button">
                    <button
                      className="banner-inquery-button"
                      // style={{ marginTop: "40px" }}
                    >
                      <span class="text">SUBMIT NOW</span>
                      <div class="wave"></div>
                    </button>
                  </div>
                  {/* <div className="form-button">
                    <button>SUBMIT NOW</button>
                  </div> */}
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
