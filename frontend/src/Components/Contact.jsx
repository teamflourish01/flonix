import React, { useEffect, useState } from "react";
import "../Style/Contact.css";
import blogbannerimage from "../images/blogbannerimage.svg";
import inquiryicone1 from "../images/inquiryicone1.svg";
import inquiryicone2 from "../images/inquiryicone2.svg";
import inquiryicone3 from "../images/inquiryicone3.svg";
import { Helmet } from "react-helmet";

const Contact = () => {
  const [outletData, setOutletData] = useState([]);
  const [contectData, setContectData] = useState([]);
  const [heading,setHeading]=useState([]);

  const apiUrl = process.env.REACT_APP_URL; // Backend API URL
  const domain = process.env.REACT_APP_DOMAIN;

  const getHeading=async()=>{
    try {
      let data=await fetch(`${apiUrl}/contact`)
      data=await data.json();
      setHeading(data.data[0]?.text)
    } catch (error) {
      console.log(error);
    }
  }
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
    getHeading()
  }, []);

  useEffect(() => {
    // Fetch data from the backend API
    const getOulet = async () => {
      try {
        const response = await fetch(`${apiUrl}/outlet`);
        const data = await response.json();
        setOutletData(data.data); // Assuming data.data contains the array of network data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getOulet();
  }, []); // Empty dependency array ensures the effect runs only once on component mount
  return (
    <>
      {/* Meta Section */}
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact | Flonix Technology</title>
        <meta
          name="description"
          content="Get in touch with our team for expert advice and support. Whether you have questions about our products, need technical assistance, or want to discuss custom solutions, we're here to help."
        />
        <link rel="canonical" href={`${domain}/Contact`} />
      </Helmet>
      <section>
        <div className="wavebgbanner">
          <div className="main-width">
            <div>
              <div className="under1320width">
                <div className="blog-banner-padding">
                  <div className="d-grid-blog-banner">
                    <div className=" pure">
                      <div className="blogsbannerpera">
                        <p>Contact Us</p>
                      </div>
                    </div>
                    <div className="blogbannerimage">
                      <img src={blogbannerimage} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="" style={{ margin: "50px 0 " }}>
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
      <section className="" style={{ margin: "50px 0" }}>
        <div className="main-width">
          <div>
            <div className="under1320width">
              <div className="all-page-padding">
                <div className="contact-map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.2992906750073!2d72.87904167471952!3d21.219977281184562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be045a6df94f859%3A0x1507b9b519aa5868!2sFlonix%20Technology!5e0!3m2!1sen!2sin!4v1712822237314!5m2!1sen!2sin"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="" style={{ margin: "50px 0" }}>
        <div className="main-width">
          <div className="all-page-padding">
            <div className="contact-our-network">
              <p className="all-heading" style={{ padding: "0" }}>
                Our Network
              </p>
              <p className="conatact-our-network-heading">
                {heading}
              </p>
            </div>
            <div className="under1320width">
              <div>
                <div className="d-grid-contact-oue-network">
                  {outletData.map((item) => (
                    <div className="contact-our-network-box">
                      <div className="contact-why-box">
                        <p className="why-flonix-filteration-heading">
                          {item.name}
                        </p>
                        <div style={{ paddingTop: "21px" }}>
                          <div className="contact-location-and-mobile-icon-text">
                            <div className="contact-form-icon-addres-location">
                              <img src={inquiryicone1} alt="" />
                            </div>
                            <div className="contact-addres-location-pera">
                              <p>
                                <a
                                  href={item.address_url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {item.address}
                                </a>
                              </p>
                            </div>
                          </div>
                          <div className="contact-location-and-mobile-icon-text create-padding">
                            <div className="contact-form-icon-addres-location">
                              <img src={inquiryicone3} alt="" />
                            </div>
                            <div className="contact-addres-location-pera">
                              <p>
                                <a href={`tel:${item.mobile}`}>{item.mobile}</a>
                              </p>
                            </div>
                          </div>
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
    </>
  );
};

export default Contact;
