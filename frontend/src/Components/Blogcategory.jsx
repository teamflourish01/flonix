import React, { useEffect, useState } from "react";
import "../Style/Blogs.css";
import blogbannerimage from "../images/blogbannerimage.svg";
import zikzakourblogvector from "../images/zikzakourblogvector.svg";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

const Blogcategory = () => {
  const { slug } = useParams();
  const [blogCategory, setBlogCategory] = useState(null);
  const apiUrl = process.env.REACT_APP_URL;
  const domain=process.env.REACT_APP_DOMAIN;

  useEffect(() => {
    const getBlogData = async () => {
      try {
        const response = await fetch(`${apiUrl}/blogcategory/${slug}`);
        const data = await response.json();
        setBlogCategory(data.data[0]); // Assuming data.data[0] is the category with blog posts
        console.log(data.data[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getBlogData();
  }, [slug]); // Add slug to dependency array

  if (!blogCategory) {
    return <p>Loading...</p>;
  }

  return (
    <>
     <Helmet>
    <meta charSet="utf-8" />
                <title>{blogCategory?.name} | Flonix Technology</title>
                <meta name='description' content={blogCategory?.meta_description}/>
                <link rel="canonical" href={`${domain}/Blogcategory/${blogCategory?.slug}`} />
    </Helmet>
      <section>
        <div className="wavebgbanner">
          <div className="main-width">
            <div>
              <div className="under1320width">
                <div className="blog-banner-padding">
                  <div className="d-grid-blog-banner">
                    <div className="pure">
                      <div className="blogsbannerpera">
                        <p>Blogs</p>
                      </div>
                    </div>
                    <div className="blogbannerimage">
                      <img src={blogbannerimage} alt="Blog Banner" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ margin: "50px 0" }}>
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
                  {blogCategory.blogs.map((item) => (
                    <div className="blog-box" key={item.slug}>
                      <img
                        className="blog-imge"
                        src={`${apiUrl}/blog/${item?.banner_image}`}
                        alt={item.name}
                      />
                      <div className="blog-box-contents">
                        <div className="blog-under-box">
                          <p className="blog-heading">{item.name}</p>
                          <p className="blog-service">
                            {" "}
                            <span>|</span> {blogCategory.name}
                          </p>
                        </div>
                        <div className="blog-stuff">
                          <img src={zikzakourblogvector} alt="Vector" />
                          <div className="blog-people-clander">
                            <div className="blog-icon-div">
                              <p>
                                <i className="fa-solid fa-user"></i> By Flonix
                              </p>
                            </div>
                            <div className="blog-icon-div">
                              <p>
                                <i className="fa-solid fa-calendar"></i>{new Date(item.createdAt).toLocaleDateString()}
                              </p>
                            </div>
                          </div>
                        </div>
                        {/* <div className="blog-button">
                          <Link to={`/Blog/${item.slug}`}>
                            <button>READ MORE</button>
                          </Link>
                        </div> */}
                        <div className="blog-button">
                            <Link style={{textDecoration:"none"}} to={`/Blog/${item.slug}`}>
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

export default Blogcategory;
