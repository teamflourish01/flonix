import React, { useEffect, useState } from 'react';
import "../Style/About.css";
import blogbannerimage from "../images/blogbannerimage.svg";
import aboutfourproduct from "../images/aboutfourproduct.svg";
import aboutimg1 from "../images/aboutimg1.svg";
import aboutimg2 from "../images/aboutimg2.svg";
import aboutimg3 from "../images/aboutimg3.svg";
import aboutimg4 from "../images/aboutimg4.svg";
import mission from "../images/mission.svg";
import vision from "../images/vision.svg";
import goals from "../images/goals.svg";
import Vectorarrow from "../images/Vectorarrow.svg";
import downarrowvector from "../images/downarrowvector.svg";
import TechnologicalTesto from "./TechnologicalTesto";


const About = () => {
  const  [aboutData , setAboutData ] = useState({});
  const apiUrl = process.env.REACT_APP_URL; 
  useEffect(() => {
    const getAbout = async() =>{
      try {
        const response = await fetch(`${apiUrl}/aboutus`)
        const data = await response.json();
        console.log(data.data)
        setAboutData(data.data[0])

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    getAbout();
  },[]);
  return (
    <>
      <section>
        <div className="wavebgbanner">
          <div className="main-width">
            <div>
              <div className="under1320width">
                <div className="blog-banner-padding">
                  <div className="d-grid-blog-banner">
                    <div className=" pure">
                      <div className="blogsbannerpera">
                        <p>About Us</p>
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
      <section className="" style={{ margin: "50px 0" }}>
        <div className="main-width">
          <div>
            <div className="under1320width">
              <div className="all-page-padding">
              
                <div className="about-page-heading-pera">
                  <p className="about-page-heading">
                    {aboutData.heading}
                  </p>
                  <p className="about-page-pera">
                    {aboutData.description}
                  </p>
                </div>
             
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="gradient-bg" style={{ margin: "50px 0" }}>
        <div className="main-width">
          <div>
            <div className="under1320width">
              <div className="all-page-padding">
             
                <div className="about-top-4-product " >
                  <img src={`${apiUrl}/aboutus/${aboutData.banner}`} alt={aboutData.banner} />
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
              
                <div className="about-page-heading-pera">
                  <p className="about-page-heading">
                    {aboutData.bannerheading}
                  </p>
                  <p className="about-page-pera">
                    {aboutData.bannerdescription}
                  </p>
                </div>
            
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg" style={{ margin: "50px 0" }}>
        <div className="main-width">
          <div style={{ padding: "84px 0" }}>
            <div className="under1320width">
              <div className="all-page-padding">
              
                <div className="d-grid-auality-img">
                  {aboutData?.logoimages?.map((image, index) => (
                  <div className="about-quality-img">
                    <img src={`${apiUrl}/aboutus/${image}`} alt="" />
                  </div>
                    ))}
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="display-none-769" style={{ margin: "50px 0" }}>
        <div className="main-width">
          <div style={{ padding: "15px 0" }}>
            <div className="under1320width ">
              <div className="all-page-padding">
                <p
                  className="all-heading"
                  style={{ padding: "0", margin: "0 0 50px 0" }}
                >
                  Company Timeline
                </p>
                <div className="d-flex">
                  <div className="globalbg">
                    <div className="about-steps-timeline-second text-center">
                      <div className="about-step-one widths">
                        <div class="about-inverted-pane-warp-2 ">
                          <div class="about-inverted-steps-pane">
                            <p className="company-timeline-heading">Company Timeline</p>
                            <p className="company-timeline-pera">
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry.{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="about-step-two widths"></div>
                      <div className="about-step-three widths">
                        <div class="about-inverted-pane-warp-2 ">
                          <div class="about-inverted-steps-pane">
                          <p className="company-timeline-heading">Company Timeline</p>
                            <p className="company-timeline-pera">
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry.{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="about-step-four widths"></div>
                      <div className="about-step-five widths">
                        <div class="about-inverted-pane-warp-2 ">
                          <div class="about-inverted-steps-pane">
                          <p className="company-timeline-heading">Company Timeline</p>
                            <p className="company-timeline-pera">
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry.{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="about-steps-timeline text-center">
                      <div class="about-steps-one">
                        <div class="about-end-circle "></div>
                        <div class="about-step-wrap">
                          <div class="about-steps-stops">
                            <p className="timeline-year">2000</p>
                            <div class="about-verticle-line-up about-back-orange">
                              <div className=" about-dots-orange-dots about-dot-orange"></div>
                            </div>
                          </div>
                        </div>
                        <div class="about-pane-warp ">
                          <div class="about-steps-pane">
                            <img src={Vectorarrow} alt="" />
                          </div>
                        </div>
                      </div>

                      <div class="about-steps-two">
                        <div class="about-step-wrap">
                          <div class="about-steps-stops">
                            <p className="timeline-year">2003</p>
                            <div class="about-verticle-line about-back-orange">
                              <div className=" about-dots-orange-dots-down about-dot-orange"></div>
                            </div>
                          </div>
                        </div>
                        <div class="about-pane-warp ">
                          <div class="about-steps-pane">
                            <img src={Vectorarrow} alt="" />
                          </div>
                        </div>

                        <div class="about-inverted-pane-warp ">
                          <div class="about-inverted-steps-pane">
                          <p className="company-timeline-heading">Company Timeline</p>
                            <p className="company-timeline-pera">
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry.{" "}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div class="about-steps-three">
                        <div class="about-step-wrap">
                          <div class="about-steps-stops">
                            <p className="timeline-year">2007</p>
                            <div class="about-verticle-line-up about-back-orange">
                              <div className=" about-dots-orange-dots about-dot-orange"></div>
                            </div>
                          </div>
                        </div>
                        <div class="about-pane-warp ">
                          <div class="about-steps-pane">
                            <img src={Vectorarrow} alt="" />
                          </div>
                        </div>
                      </div>

                      <div class="about-steps-four">
                        <div class="about-step-wrap">
                          <div class="about-steps-stops">
                            <p className="timeline-year">2011</p>
                            <div class="about-verticle-line about-back-orange">
                              <div className=" about-dots-orange-dots-down about-dot-orange"></div>
                            </div>
                          </div>
                        </div>
                        <div class="about-pane-warp ">
                          <div class="about-steps-pane">
                            <img src={Vectorarrow} alt="" />
                          </div>
                        </div>

                        <div class="about-inverted-pane-warp ">
                          <div class="about-inverted-steps-pane">
                          <p className="company-timeline-heading">Company Timeline</p>
                            <p className="company-timeline-pera">
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry.{" "}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div class="about-steps-five">
                        <div class="about-inverted-end-circle about-back-orange"></div>
                        <div class="about-step-wrap">
                          <div class="about-steps-stops">
                            <p className="timeline-year">2015</p>
                            <div class="about-verticle-line-up about-back-orange">
                              <div className=" about-dots-orange-dots about-dot-orange"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="process" className="display-unset-769" style={{ margin: "50px 0" }}>
        <div className="main-width">
          <div style={{ padding: "15px 0" }}>
            <div className="under1320width ">
              <div className="all-page-padding">
                <p
                  className="all-heading"
                  style={{ padding: "0", margin: "0 0 50px 0" }}
                >
                  Company Timeline
                </p>
                <div>
                <div class="container-fluid">
                   <div className="globalbg">
          <div class="row">
            <div class="steps-timeline text-center">
              <div class="steps-one">
                
                {/* <div class="end-circle back-orange"></div> */}
                <div class="step-wrap">
                  <div class="steps-stops">
                    <p className="timeline-year">2000</p>
                    <div class="verticle-line back-orange">
                      <div className="back-orange-dot"></div>
                    </div>
                  </div>
                  <div >
                    <img style={{paddingTop:"26px"}} src={downarrowvector} alt="" />
                  </div>
                </div>
                
                <div class="pane-warp back-blue">
                  <div class="steps-pane">
                    {/* <img src="https://imgur.com/5U7IJvy.png"/> */}
                  </div>
                </div>
                <div class="inverted-pane-warp back-blue">
                  
                  <div class="inverted-steps-pane">
                  <p className="company-timeline-heading">Company Timeline</p>
                            <p className="company-timeline-pera">
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry.{" "}
                            </p>
                  </div>
                  
                </div>
              </div>
      
              <div class="steps-two">
               
                <div class="step-wrap">
                  <div class="steps-stops">
                  <p className="timeline-year">2003</p>
                    <div class="verticle-line back-orange">
                    <div className="back-orange-dot"></div>
                    </div>
                  </div>
                  <div >
                    <img style={{paddingTop:"26px"}} src={downarrowvector} alt="" />
                  </div>
                </div>
                <div class="pane-warp ">
                  <div class="steps-pane">
                    {/* <img src="https://imgur.com/ACjjJNm.png"/> */}
                  </div>
                </div>
                <div class="inverted-pane-warp ">
                  <div class="inverted-steps-pane">
                  <p className="company-timeline-heading">Company Timeline</p>
                            <p className="company-timeline-pera">
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry.{" "}
                            </p>
                  </div>
                </div>
              </div>
      
              <div class="steps-three">
                
                <div class="step-wrap">
                  <div class="steps-stops">
                  <p className="timeline-year">2007</p>
                    <div class="verticle-line back-orange">
                    <div className="back-orange-dot"></div>
                    </div>
                  </div>
                  <div >
                    <img style={{paddingTop:"26px"}} src={downarrowvector} alt="" />
                  </div>
                </div>
                <div class="pane-warp back-blue">
                  <div class="steps-pane">
                    {/* <img class="third" src="https://imgur.com/5U7IJvy.png"/> */}
                  </div>
                </div>
                <div class="inverted-pane-warp back-blue">
                  <div class="inverted-steps-pane">
                  <p className="company-timeline-heading">Company Timeline</p>
                            <p className="company-timeline-pera">
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry.{" "}
                            </p>
                  </div>
                </div>
              </div>
      
              <div class="steps-four">
                
                <div class="step-wrap">
                  <div class="steps-stops">
                  <p className="timeline-year">2011</p>
                    <div class="verticle-line back-orange">
                    <div className="back-orange-dot"></div>
                    </div>
                  </div>
                  <div >
                    <img style={{paddingTop:"26px"}} src={downarrowvector} alt="" />
                  </div>
                </div>
                <div class="pane-warp ">
                  <div class="steps-pane">
                    {/* <img src="https://imgur.com/ACjjJNm.png"/> */}
                  </div>
                </div>
                <div class="inverted-pane-warp ">
                  <div class="inverted-steps-pane">
                  <p className="company-timeline-heading">Company Timeline</p>
                            <p className="company-timeline-pera">
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry.{" "}
                            </p>
                  </div>
                </div>
              </div>
      
              <div class="steps-five">
                
                {/* <div class="inverted-end-circle back-orange"></div> */}
                <div class="step-wrap">
                  <div class="steps-stops">
                  <p className="timeline-year">2015</p>
                    <div class="verticle-line back-orange">
                    <div className="back-orange-dot"></div>
                    </div>
                  </div>
                </div>
                <div class="pane-warp back-blue">
                  <div class="steps-pane">
                    {/* <img src="https://imgur.com/5U7IJvy.png"/> */}
                  </div>
                </div>
                <div class="inverted-pane-warp back-blue">
                  <div class="inverted-steps-pane">
                  <p className="company-timeline-heading">Company Timeline</p>
                            <p className="company-timeline-pera">
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry.{" "}
                            </p>
                  </div>
                </div>
              </div>
      
            </div>
            
          </div>
          </div>
        </div>
                </div>
                </div>
                </div>
                </div>
                </div>
                </section>
      

      <section className="bg" style={{ margin: "50px 0 " }}>
        <div className="main-width">
          <div style={{ padding: "50px 0" }}>
            <div className="under1320width">
              <div className="all-page-padding">
                <div className="d-grid-mission-box">
                  <div class="mission-box">
                    <div class="under-mission-box">
                      <div class="about-mission-box-icon">
                        <img src={mission} alt="" />
                      </div>
                      <div class="features-info">
                        <h4 class="title">Mission</h4>
                        <p className="about-pera-heading">
                          {aboutData.mission}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="mission-box">
                    <div class="under-mission-box">
                      <div class="about-mission-box-icon">
                        <img src={vision} alt="" />
                      </div>
                      <div class="features-info">
                        <h4 class="title">vision</h4>
                        <p className="about-pera-heading">
                          {aboutData.vision}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="mission-box">
                    <div class="under-mission-box">
                      <div class="about-mission-box-icon">
                        <img src={goals} alt="" />
                      </div>
                      <div class="features-info">
                        <h4 class="title">goals</h4>
                        <p className="about-pera-heading">
                          {aboutData.goals}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="" style={{ margin: "50px 0 70px 0" }}>
        <div className="main-width">
          <div>
            <div className="under1320width">
              <div className="all-page-padding">
              <p
                className="all-heading"
                style={{ padding: "0", margin: "0 0 50px 0" }}
              >
                Technological Achievement
              </p>
              <div className="under-widt-testo">
                <TechnologicalTesto />
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
