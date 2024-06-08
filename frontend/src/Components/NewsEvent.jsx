import React, { useEffect, useState } from "react";
import "../Style/NewsEvent.css";

import blogbannerimage from "../images/blogbannerimage.svg";
import { Link } from "react-router-dom";

const NewsEvent = () => {
  const [newseventData, setNewseventData] = useState([]);
  const [newsheadingData, setNewsheadingData] = useState({});
  const apiUrl = process.env.REACT_APP_URL;

  useEffect(() => {
    const getnewseventheading = async () => {
      try {
        const response = await fetch(`${apiUrl}/newsheading`);
        const data = await response.json();
        setNewsheadingData(data.data[0]);
        console.log(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getnewseventheading();
  }, []);

  useEffect(() => {
    const getnewsevent = async () => {
      try {
        const response = await fetch(`${apiUrl}/newsandevent`);
        const data = await response.json();
        setNewseventData(data.data);
        console.log(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getnewsevent();
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
                    <div className="pure">
                      <div className="blogsbannerpera">
                        <p>News & Events</p>
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
          <div className="newsevent-padding">
            <div className="under1320width">
              <div className="all-page-padding">
                <div className="news-event-heading-pera">
                  <p className="news-event-heading">
                    {newsheadingData?.heading}
                  </p>
                  <p className="news-event-pera">
                    {newsheadingData?.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="" style={{ margin: "50px 0" }}>
        <div className="main-width">
          <div className="newsevent-padding">
            <div className="under1320width">
              <div className="all-page-padding">
                <div className="d-flex-newsevent">
                  {newseventData.map((item) => (
                    <div className="news-and-event-box" key={item.slug}>
                      <div className="news-event-img">
                        <img
                          src={`${apiUrl}/newsAndevents/${item?.cardimage}`}
                          alt={item?.cardimg_alt}
                        />
                      </div>
                      <div className="news-event-text-box">
                        <p className="news-event-box-heading">
                          {item?.cardheading}
                        </p>

                        <div className="event-location-clander">
                          <div className="event-icon-div">
                            <p>
                              <i className="fa-solid fa-calendar"></i>
                              {new Date(item.date).toLocaleDateString()}
                            </p>
                          </div>
                          <div className="event-icon-div">
                            <p>
                              <i className="fa-solid fa-location-dot"></i>
                              {item.place}
                            </p>
                          </div>
                        </div>

                        <p className="news-event-box-pera">
                          {item.cardtext}
                        </p>

                        <div className="news-event-button">
                          <Link style={{textDecoration:"none"}} to={`/NewsEventpage/${item.slug}`}>
                          <button
                        className="banner-inquery-button"
                        // style={{ marginTop: "40px" }}
                      >
                        <span class="text">KNOW MORE</span>
                        <div class="wave"></div>
                      </button>
                            {/* <button>KNOW MORE</button> */}
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

export default NewsEvent;
