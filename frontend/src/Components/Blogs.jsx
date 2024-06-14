import React, { useEffect, useState } from "react";
import "../Style/Blogs.css";
import blogbannerimage from "../images/blogbannerimage.svg";
import ourblogimg1 from "../images/ourblogimg1.svg";
import ourblogimg2 from "../images/ourblogimg2.svg";
import ourblogimg3 from "../images/ourblogimg3.svg";
import zikzakourblogvector from "../images/zikzakourblogvector.svg";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Blogs = () => {
  const [blogData, setBlogData] = useState([]);
  const apiUrl = process.env.REACT_APP_URL;
  const domain = process.env.REACT_APP_DOMAIN;

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

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blogs | Flonix Technology</title>
        <meta
          name="description"
          content="Explore our comprehensive blog on the latest trends, tips, and innovations in the RO industry. From water purification technologies to maintenance guides, our blogs provide valuable insights for you. Stay informed and ensure the best water quality with expert advice from industry leaders"
        />
        <link rel="canonical" href={`${domain}/Blogs`} />
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
                        <p>Blogs</p>
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
              <div>
                <p
                  className="all-heading"
                  style={{ padding: "0", margin: "0 0 50px 0" }}
                >
                  Our Blogs
                </p>
                <div className="d-flex-blog">
                  {/* <div className="blog-box">
                    <img className="blog-imge" src={ourblogimg1} alt="" />
                    <div className="blog-box-contents">
                      <div className="blog-under-box">
                        <p className="blog-heading">
                          The average cost for water
                        </p>
                        <p className="blog-service">
                          {" "}
                          <span>|</span> Service
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
                              <i class="fa-solid fa-user"></i>By Flonix
                            </p>
                          </div>
                          <div className="blog-icon-div">
                            <p>
                              <i class="fa-solid fa-calendar"></i>March 27, 2024
                            </p>
                          </div>
                        </div>
                        <div className="blog-people-clander">
                          <div className="blog-icon-div">
                            <p>
                              <i class="fa-solid fa-message"></i>3 Comments
                            </p>
                          </div>
                          <div className="blog-icon-div">
                            <p>
                              <i class="fa-solid fa-bookmark"></i>Sticky post
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
                  </div> */}
                  {blogData.map((item) => (
                    <div className="blog-box">
                      <img
                        className="blog-imge"
                        src={`${apiUrl}/blog/${item?.banner_image}`}
                        alt=""
                      />
                      <div className="blog-box-contents">
                        <div className="blog-under-box">
                          <p className="blog-heading">{item.name}</p>
                          <p className="blog-service">
                            {" "}
                            <span>|</span> {item.category.name}
                          </p>

                          {/* <p className="blog-pera"
                          dangerouslySetInnerHTML={{ __html: blog.text1 }}>
                          </p> */}
                        </div>
                        <div className="blog-stuff">
                          <img src={zikzakourblogvector} alt="" />
                          <div className="blog-people-clander">
                            <div className="blog-icon-div">
                              <p>
                                <i class="fa-solid fa-user"></i>By Flonix
                              </p>
                            </div>
                            <div className="blog-icon-div">
                              <p>
                                <i class="fa-solid fa-calendar"></i>
                                {new Date(item.createdAt).toLocaleDateString()}
                              </p>
                            </div>
                          </div>
                          {/* <div className="blog-people-clander">
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
                          </div> */}
                        </div>
                        <div className="blog-button">
                          <Link
                            style={{ textDecoration: "none" }}
                            to={`/Blog/${item.slug}`}
                          >
                            <button
                              className="banner-inquery-button"
                              // style={{ marginTop: "40px" }}
                            >
                              <span class="text">READ MORE</span>
                              <div class="wave"></div>
                            </button>
                          </Link>
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

export default Blogs;
