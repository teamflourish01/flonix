import React from 'react'
import "../Style/Ebrochure.css";
import blogbannerimage from "../images/blogbannerimage.svg";
import pdficon from "../images/pdficon.svg";

const Ebrochure = () => {
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
                      <p>E-Brochure</p>
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

      <section style={{margin:"50px 0"}}>
        <div className="">
          <div className="main-width">
            <div>
              <div className="under1320width">
                <div  >
                <div className="d-grid-brochure">
                     <div className="brochure">
                        <div className="pdficon">
                            <img src={pdficon} alt="" />

                        </div>
                        <div className='brochure-button' style={{marginTop:"41px"}}>
                            <button>Download</button>
                        </div>

                     </div>
                     <div className="brochure">
                        <div className="pdficon">
                            <img src={pdficon} alt="" />

                        </div>
                        <div className='brochure-button' style={{marginTop:"41px"}}>
                            <button>Download</button>
                        </div>

                     </div>
                     <div className="brochure">
                        <div className="pdficon">
                            <img src={pdficon} alt="" />

                        </div>
                        <div className='brochure-button' style={{marginTop:"41px"}}>
                            <button>Download</button>
                        </div>

                     </div>
                     <div className="brochure">
                        <div className="pdficon">
                            <img src={pdficon} alt="" />

                        </div>
                        <div className='brochure-button' style={{marginTop:"41px"}}>
                            <button>Download</button>
                        </div>

                     </div>
                     <div className="brochure">
                        <div className="pdficon">
                            <img src={pdficon} alt="" />

                        </div>
                        <div className='brochure-button' style={{marginTop:"41px"}}>
                            <button>Download</button>
                        </div>

                     </div>
                     <div className="brochure">
                        <div className="pdficon">
                            <img src={pdficon} alt="" />

                        </div>
                        <div className='brochure-button' style={{marginTop:"41px"}}>
                            <button>Download</button>
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
  )
}

export default Ebrochure