import React, { useEffect, useState } from "react";
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
import { Link, useParams } from "react-router-dom";

const Blog = () => {
  // const { id } = useParams();
  const { slug } = useParams(); // Get the slug from the URL
  const [blogData, setBlogData] = useState([]);
  const [blogCategory, setBlogCategory] = useState([]);
  
  const apiUrl = process.env.REACT_APP_URL;

  // useEffect(() => {
  //   const getBlogData = async () => {
  //     try {
  //       const response = await fetch(`${apiUrl}/blog/${id}`);
  //       const data = await response.json();
  //       setBlogData(data.data);
        

  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };
  //   getBlogData();
  // }, []);
  useEffect(() => {
    const getBlogData = async () => {
      try {
        const response = await fetch(`${apiUrl}/blog/${slug}`); // Fetch blog by slug
        const data = await response.json();
        setBlogData(data.data);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };
    getBlogData();
  }, [slug]); // Add slug to dependency array

  useEffect(() => {
    const getBlogCategoryData = async () => {
      try {
        const response = await fetch(`${apiUrl}/blogcategory`);
        const data = await response.json();
        setBlogCategory(data.data);
        

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getBlogCategoryData();
  }, []);

  

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
                        <p>{blogData.name}</p>
                      </div>
                    </div>
                    <div className="blogbannerimage">
                      <img
                        src={`${apiUrl}/blog/${blogData?.banner_image}`}
                        alt=""
                      />
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
          <div className="under1320width">
            <div className="all-page-padding">
              <div className="d-flex-blogpage">
                <div className="blogs-page-width-854">
                  <div
                    className={`blog-layout ${
                      blogData.first_toggle ? "column-reverse" : ""
                    }`}
                  >
                    <div className="blog-page-imges-1">
                      <img
                        src={`${apiUrl}/blog/${blogData?.first_image}`}
                        alt=""
                      />
                    </div>
                    <div>
                      <p
                        className="blogs-page-all-pera"
                        dangerouslySetInnerHTML={{ __html: blogData.text1 }}
                      ></p>
                    </div>
                  </div>
                  <div
                    className={`blog-layout ${
                      blogData.second_toggle ? "column-reverse" : ""
                    }`}
                  >
                    <div className="blog-page-imges-1">
                      <img
                        src={`${apiUrl}/blog/${blogData?.second_image}`}
                        alt=""
                      />
                    </div>
                    <div>
                      <p
                        className="blogs-page-all-pera"
                        dangerouslySetInnerHTML={{ __html: blogData.text2 }}
                      ></p>
                    </div>
                  </div>

                  <div
                    className={`blog-layout ${
                      blogData.third_toggle ? "column-reverse" : ""
                    }`}
                  >
                    {blogData?.third_image && (
                      <div className="blog-page-imges-1">
                        <img
                          src={`${apiUrl}/blog/${blogData?.third_image}`}
                          alt=""
                        />
                      </div>
                    )}
                    {blogData.text3 && (
                      <div>
                        <p
                          className="blogs-page-all-pera"
                          dangerouslySetInnerHTML={{ __html: blogData.text3 }}
                        ></p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="blogs-page-width-405">
                  <div className="blogs-page-catogery-width-1">
                    <div className="blogs-page-under-catogery-width">
                      
                      <div>
                        <div className="search-catgories-margin">
                          <p>categories</p>
                        </div>
                       
                        {/* <div className="search-status-text">
      {blogCategory.map((category, index) => (
        <Link key={index} to={`/category/${category._id}`}>
          <p>{category.name}</p>
         </Link>
      ))}
    </div> */}
    <div className="search-status-text">
                          {blogCategory.map((category, index) => (
                            <Link key={index} to={`/blogcategory/${category.slug}`}>
                              <p>{category.name}</p>
                            </Link>
                          ))}
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
                              <p className="blog-recent-heading">
                                water Purifier
                              </p>
                              <p className="blog-recent-pera">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                              </p>
                            </div>
                          </div>
                          <div className="blogs-img-flex-text">
                            <div className="recent-blog-img">
                              <img src={blogrecentimg2} alt="" />
                            </div>
                            <div className="blog-text-recent-width-box">
                              <p className="blog-recent-heading">
                                water Purifier
                              </p>
                              <p className="blog-recent-pera">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                              </p>
                            </div>
                          </div>
                          <div className="blogs-img-flex-text">
                            <div className="recent-blog-img">
                              <img src={blogrecentimg3} alt="" />
                            </div>
                            <div className="blog-text-recent-width-box">
                              <p className="blog-recent-heading">
                                water Purifier
                              </p>
                              <p className="blog-recent-pera">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                              </p>
                            </div>
                          </div>
                          <div className="blogs-img-flex-text">
                            <div className="recent-blog-img">
                              <img src={blogrecentimg4} alt="" />
                            </div>
                            <div className="blog-text-recent-width-box">
                              <p className="blog-recent-heading">
                                water Purifier
                              </p>
                              <p className="blog-recent-pera">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                              </p>
                            </div>
                          </div>
                          <div className="blogs-img-flex-text">
                            <div className="recent-blog-img">
                              <img src={blogrecentimg5} alt="" />
                            </div>
                            <div className="blog-text-recent-width-box">
                              <p className="blog-recent-heading">
                                water Purifier
                              </p>
                              <p className="blog-recent-pera">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                              </p>
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

export default Blog;
