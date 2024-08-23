import React, { useEffect, useState } from "react";
import "../Style/NewsEventPage.css";

import blogbannerimage from "../images/blogbannerimage.svg";
import newseventpageimg1 from "../images/newseventpageimg1.svg";
import newseventpageimg2 from "../images/newseventpageimg2.svg";
import newseventpageimg3 from "../images/newseventpageimg3.svg";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

const NewsEventpage = () => {
  const { slug } = useParams();
  const [newseventData, setNewseventData] = useState([]);
  const apiUrl = process.env.REACT_APP_URL;
  const domain=process.env.REACT_APP_DOMAIN;

  useEffect(() => {
    const getnewsevent = async () => {
      try {
        console.log(slug);
        const response = await fetch(`${apiUrl}/newsandevent/${slug}`);
        const data = await response.json();
        console.log(data.data, "data");
        setNewseventData(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getnewsevent();
  }, [slug]);
  return (
    <>
     <Helmet>
    <meta charSet="utf-8" />
                <title>{newseventData?.meta_title}</title>
                <meta name='description' content={newseventData?.meta_description}/>
                <link rel="canonical" href={`${domain}/NewsEventpage/${slug}`} />
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
                        <p className="drinking-waters">{newseventData?.cardheading}</p>
                      </div>
                    </div>
                    <div className="blogbannerimage">
                      <img
                        src={`${apiUrl}/newsAndevents/${newseventData?.cardimage}`}
                        alt={newseventData.cardimg_alt}
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
              <div className="news-event-heading-pera">
                <p className="news-event-heading">
                  {newseventData?.detailheading}
                </p>
                <p className="news-event-pera">{newseventData?.detailtext}</p>
                <div className="news-event-page-img-1">
                  <img src={`${apiUrl}/newsAndevents/${newseventData?.detailimage}`} alt={newseventData.detailimg_alt} />
                </div>
                <div className="news-event-page-display-flex">
                  <p className="news-event-heading">
                    {newseventData?.cardheading}
                  </p>
                  <div className="news-event-page-location-clander">
                    <div className="news-event-page-icon-div">
                      <p>
                        <i class="fa-solid fa-calendar"></i>
                        {new Date(newseventData.date).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="news-event-page-icon-div">
                      <p>
                        <i class="fa-solid fa-location-dot"></i>
                        {newseventData.place}
                      </p>
                    </div>
                  </div>
                </div>

                <p className="news-event-pera">{newseventData?.cardtext}</p>
              </div>
              <div
                className="news-event-page-img-3"
                style={{ margin: "50px 0" }}
              >
                {newseventData.video && (
                  <iframe
                    src={`https://www.youtube.com/embed/${newseventData.video}`}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="" style={{ margin: "50px 0 " }}>
        <div className="main-width">
          {/* <div className="newsevent-padding"> */}
          <div className="under1320width">
            <div className="all-page-padding">
              <div className="d-flex-newseventpage">
                {newseventData?.detailimages?.map((image, index) => (
                  <div className="news-event-page-img-2">
                    <img src={`${apiUrl}/newsAndevents/${image}`} alt="" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </section>
    </>
  );
};

export default NewsEventpage;
