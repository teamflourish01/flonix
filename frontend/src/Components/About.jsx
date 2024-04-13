import React from "react";
import "../Style/About.css";
import blogbannerimage from "../images/blogbannerimage.svg";
import aboutfourproduct from "../images/aboutfourproduct.svg";
import aboutimg1 from "../images/aboutimg1.svg";
import aboutimg2 from "../images/aboutimg2.svg";
import aboutimg3 from "../images/aboutimg3.svg";
import aboutimg4 from "../images/aboutimg4.svg";

const About = () => {
  return (
    <>
      <section>
        <div className="wavebgbanner">
          <div className="main-width">
            <div>
              <div className="under1320width">
                <div style={{ padding: "50px 0" }}>
                  <div className="d-flex">
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
              <div className="about-page-heading-pera">
                <p className="about-page-heading">
                  The standard Lorem Ipsum passage, used since the 1500s
                </p>
                <p className="about-page-pera">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum. <br />{" "}
                  <br />
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="gradient-bg" style={{ margin: "50px 0" }}>
        <div className="main-width">
          <div>
            <div className="under1320width">
              <div className="about-top-4-product">
                <img src={aboutfourproduct} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="" style={{ margin: "50px 0" }}>
        <div className="main-width">
          <div>
            <div className="under1320width">
              <div className="about-page-heading-pera">
                <p className="about-page-heading">
                  The standard Lorem Ipsum passage, used since the 1500s
                </p>
                <p className="about-page-pera">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more obscure Latin words, consectetur,
                  from a Lorem Ipsum passage, and going through the cites of the
                  word in classical literature, discovered the undoubtable
                  source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of
                  "de Finibus Bonorum et Malorum" (The Extremes of Good and
                  Evil) by Cicero, written in 45 BC. This book is a treatise on
                  the theory of ethics, very popular during the Renaissance. The
                  first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                  comes from a line in section 1.10.32. <br />
                  The standard chunk of Lorem Ipsum used since the 1500s is
                  reproduced below for those interested. Sections 1.10.32 and
                  1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are
                  also reproduced in their exact original form, accompanied by
                  English versions from the 1914 translation by H. Rackham.
                  <br /> <br />
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg" style={{ margin: "50px 0" }}>
        <div className="main-width">
          <div style={{ padding: "84px 0" }}>
            <div className="under1320width">
              <div className="d-flex">
                <div className="about-quality-img">
                  <img src={aboutimg1} alt="" />
                </div>
                <div className="about-quality-img">
                  <img src={aboutimg2} alt="" />
                </div>
                <div className="about-quality-img">
                  <img src={aboutimg3} alt="" />
                </div>
                <div className="about-quality-img">
                  <img src={aboutimg4} alt="" />
                </div>
              </div>
              <div className="d-flex" style={{ padding: "50px 0" }}>
                <div className="about-quality-img">
                  <img src={aboutimg1} alt="" />
                </div>
                <div className="about-quality-img">
                  <img src={aboutimg2} alt="" />
                </div>
                <div className="about-quality-img">
                  <img src={aboutimg3} alt="" />
                </div>
                <div className="about-quality-img">
                  <img src={aboutimg4} alt="" />
                </div>
              </div>
              <div className="d-flex">
                <div className="about-quality-img">
                  <img src={aboutimg1} alt="" />
                </div>
                <div className="about-quality-img">
                  <img src={aboutimg2} alt="" />
                </div>
                <div className="about-quality-img">
                  <img src={aboutimg3} alt="" />
                </div>
                <div className="about-quality-img">
                  <img src={aboutimg4} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="" style={{ margin: "50px 0" }}>
        <div className="main-width">
          <div style={{ padding: "15px 0" }}>
            <div className="under1320width ">
            <p
                  className="all-heading"
                  style={{ padding: "0", margin: "0 0 50px 0" }}
                >
                  Company Timeline
                </p>
              <div className="d-flex">
                <div className="globalbg">
                  <div className="steps-timeline-second text-center">
                    <div className="step-one widths">
                      <div class="inverted-pane-warp-2 ">
                        <div class="inverted-steps-pane">
                          <p>Company Timeline</p>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="step-two widths"></div>
                    <div className="step-three widths">
                      <div class="inverted-pane-warp-2 ">
                        <div class="inverted-steps-pane">
                          <p>Company Timeline</p>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="step-four widths"></div>
                    <div className="step-five widths">
                      <div class="inverted-pane-warp-2 ">
                        <div class="inverted-steps-pane">
                          <p>Company Timeline</p>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="steps-timeline text-center">
                    <div class="steps-one">
                      {/* <h3>Step 1</h3> */}
                      <div class="end-circle "></div>
                      <div class="step-wrap">
                        <div class="steps-stops">
                          2000
                          <div class="verticle-line-up back-orange">
                            <div className=" dots-orange-dots dot-orange"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="steps-two">
                      <div class="step-wrap">
                        <div class="steps-stops">
                          2003
                          <div class="verticle-line back-orange">
                          <div className=" dots-orange-dots-down dot-orange"></div> 
                          </div>
                        </div>
                      </div>

                      <div class="inverted-pane-warp ">
                        <div class="inverted-steps-pane">
                          <p>Company Timeline</p>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.{" "}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="steps-three">
                      <div class="step-wrap">
                        <div class="steps-stops">
                          2007
                          <div class="verticle-line-up back-orange">
                          <div className=" dots-orange-dots dot-orange"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="steps-four">
                      <div class="step-wrap">
                        <div class="steps-stops">
                          2011
                          <div class="verticle-line back-orange">
                          <div className=" dots-orange-dots-down dot-orange"></div>
                          </div>
                        </div>
                      </div>

                      <div class="inverted-pane-warp ">
                        <div class="inverted-steps-pane">
                          <p>Company Timeline</p>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.{" "}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="steps-five">
                      <div class="inverted-end-circle back-orange"></div>
                      <div class="step-wrap">
                        <div class="steps-stops">
                          2015
                          <div class="verticle-line-up back-orange">
                          <div className=" dots-orange-dots dot-orange"></div>
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
    </>
  );
};

export default About;
