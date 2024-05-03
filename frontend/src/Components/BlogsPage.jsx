import React from "react";
import "../Style/BlogsPage.css";

import blogbannerimage from "../images/blogbannerimage.svg";
import blogspageimg1 from "../images/blogspageimg1.svg";
import blogpagewaterimg from "../images/blogpagewaterimg.svg";
import blogrecentimg1 from "../images/blogrecentimg1.svg";
import blogrecentimg2 from "../images/blogrecentimg2.svg";
import blogrecentimg3 from "../images/blogrecentimg3.svg";
import blogrecentimg4 from "../images/blogrecentimg4.svg";
import blogrecentimg5 from "../images/blogrecentimg5.svg";
import blogrecentimg6 from "../images/blogrecentimg6.svg";
import blogrecentimg7 from "../images/blogrecentimg7.svg";

const BlogsPage = () => {
  return (
    <>
      <section>
        <div className="wavebgbanner">
          <div className="main-width">
            <div>
              <div className="under1320width">
                <div className='blog-banner-padding' >
                <div className="d-grid-blog-banner">
                  <div className=" pure">
                    <div className="blogsbannerpera">
                      <p >Blogs</p>
                    </div>
                  </div>
                  <div className="blogbannerimage">
                    <img  src={blogbannerimage} alt="" />
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="" style={{margin:"50px 0"}}>
        <div className="main-width">
          
            <div className="under1320width">
            <div className="blogpage-padding" >
              <div className="d-flex-blogpage">
                <div className="blogs-page-width-854">
                  <div className="blog-page-imges-1">
                    <img src={blogspageimg1} alt="" />
                  </div>
                  <div>
                    <p className="blogs-page-all-heading">
                      The average cost for water
                    </p>
                    <p className="blogs-page-all-pera">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged.
                    </p>
                    <p className="blogs-page-all-heading">
                      The average cost for water
                    </p>
                    <p className="blogs-page-all-pera">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. <br /> Lorem Ipsum is
                      simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard
                      dummy text ever since the 1500s, when an unknown printer
                      took a galley of type and scrambled it to make a type
                      specimen book. It has survived not only five centuries,
                      but also the leap into electronic typesetting, remaining
                      essentially unchanged.{" "}
                    </p>
                  </div>
                  <div className="blog-page-imges-2">
                    <img src={blogpagewaterimg} alt="" />
                  </div>
                  <div>
                    <p className="blogs-page-all-heading">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been
                    </p>
                    <p className="blogs-page-all-pera">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. <br />
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. <br />
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged.
                    </p>
                  </div>
                </div>

                <div className="blogs-page-width-405">
                  <div className="blogs-page-catogery-width-1">
                    <div className="blogs-page-under-catogery-width">
                      {/* <div class="container">
                        
                        <div class="blogsearchbox">
                          <div class="iconContainer">
                            <svg
                              viewBox="0 0 512 512"
                              height="1em"
                              xmlns="http://www.w3.org/2000/svg"
                              class="blog-search-icon"
                            >
                              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path>
                            </svg>
                          </div>
                          <input
                            class="search_input"
                            placeholder="Search Topic..."
                            type="text"
                          />
                        </div>
                      </div> */}
                      <div>
                        <div className="search-catgories-margin">
                            <p>categories</p>
                        </div>
                        <div className="search-status-text">
                            <p>Water Purifier</p>
                            <p>Pump</p>
                            <p>Water Purifier</p>
                            <p>Pump</p>
                            <p>Water Purifier</p>
                            <p>Pump</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="blogs-page-catogery-width-2">

                    <div className="recnts-blogs">
                        <div className="recent-blogs-pera">
                        <p>Recent Blogs</p>
                        </div>
                        <div className="blogs-ing-texr-top-margin">
                        <div className="blogs-image-and-text">
                            <div className="blogs-img-flex-text">
                                <div className="recent-blog-img">
                                    <img src={blogrecentimg1} alt="" />
                                </div>
                                <div className="blog-text-recent-width-box">
                                    <p className="blog-recent-heading">water Purifier</p>
                                    <p className="blog-recent-pera">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                            </div>
                            <div className="blogs-img-flex-text">
                                <div className="recent-blog-img">
                                    <img src={blogrecentimg2} alt="" />
                                </div>
                                <div className="blog-text-recent-width-box">
                                    <p className="blog-recent-heading">water Purifier</p>
                                    <p className="blog-recent-pera">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                            </div>
                            <div className="blogs-img-flex-text">
                                <div className="recent-blog-img">
                                    <img src={blogrecentimg3} alt="" />
                                </div>
                                <div className="blog-text-recent-width-box">
                                    <p className="blog-recent-heading">water Purifier</p>
                                    <p className="blog-recent-pera">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                            </div>
                            <div className="blogs-img-flex-text">
                                <div className="recent-blog-img">
                                    <img src={blogrecentimg4} alt="" />
                                </div>
                                <div className="blog-text-recent-width-box">
                                    <p className="blog-recent-heading">water Purifier</p>
                                    <p className="blog-recent-pera">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                            </div>
                            <div className="blogs-img-flex-text">
                                <div className="recent-blog-img">
                                    <img src={blogrecentimg5} alt="" />
                                </div>
                                <div className="blog-text-recent-width-box">
                                    <p className="blog-recent-heading">water Purifier</p>
                                    <p className="blog-recent-pera">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                            </div>
                            <div className="blog-recent-last-img-1">
                                <img src={blogrecentimg6} alt="" />
                            </div>
                            <div className="blog-recent-last-img-1">
                                <img src={blogrecentimg7} alt="" />
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

export default BlogsPage;
