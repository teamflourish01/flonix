import React, { useEffect, useState } from "react";
import "../Style/Ebrochure.css";
import blogbannerimage from "../images/blogbannerimage.svg";
import pdficon from "../images/pdficon.svg";

const Ebrochure = () => {
  const [ebrochureData, setEbrochureData] = useState([]);
  const apiUrl = process.env.REACT_APP_URL; // Backend API URL
  useEffect(() => {
    const getEbrochure = async () => {
      try {
        const response = await fetch(`${apiUrl}/ebrochure`);
        const data = await response.json();
        setEbrochureData(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getEbrochure();
  }, []);
  const handleDownload = async (fileUrl, fileName) => {
    try {
      const response = await fetch(fileUrl);
      const blob = await response.blob();

      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", fileName);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Open the downloaded file in a new tab
      window.open(url, "_blank");
    } catch (error) {
      console.error("Error downloading file:", error);
    }
  };
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
                        <p>E-Brochure</p>
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

      <section style={{ margin: "50px 0" }}>
        <div className="">
          <div className="main-width">
            <div>
              <div className="under1320width">
                <div className="all-page-padding">
                  <div className="d-grid-brochure">
                  {ebrochureData.map((item, index)  => (
                    <div className="brochure">
                      <div className="pdficon">
                        <img src={pdficon} alt="" />
                       
                      </div>
                      <div className="broucher-pdf-name">
                        <p>{item?.filename}</p>
                      </div>
                      <div
                        className="brochure-button"
                        style={{margin:"30px 0"}}
                      >
                        <button onClick={() => handleDownload(`${apiUrl}/ebrochure/${item.doc}`, item.doc)}>Download</button>
                      </div>
                    </div>
                  ))}
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

export default Ebrochure;
