import React from 'react'
import "../Style/Contact.css";
import blogbannerimage from '../images/blogbannerimage.svg';
import inquiryicone1 from "../images/inquiryicone1.svg";
import inquiryicone2 from "../images/inquiryicone2.svg";
import inquiryicone3 from "../images/inquiryicone3.svg";

const Contact = () => {
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
                        <p>Contact Us</p>
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
    

      
      <section className="" style={{ margin: "50px 0 " }}>
        <div className="main-width">
          <div style={{ padding: "50px 0" }}>
            <div className="under1320width">
              <div className=' contact-page-padding'>
                <p
                  className="all-heading"
                  style={{ padding: "0", margin: "0 0 50px 0" }}
                >
                  Inquiry Here
                </p>
                <div className="d-grid-contact">
                  <div className="inquiry-icon-width">
                    <div className="" >
                      <div
                      className="inquiry-icon-flex"
                       
                      >
                        <div>
                          <img
                            style={{ width: "46px" }}
                            src={inquiryicone1}
                            alt=""
                          />
                        </div>
                        <div className="form-address">
                          <p className="form-heading">Address</p>
                          <p className="form-pera">Godown NO: 707, Chitrakut, Saniya Hemad, Taluka: Chorasi, Dist: Surat</p>
                        </div>
                      </div>
                      <div
                       className="inquiry-icon-flex-up-down-margin"
                      >
                        <div>
                          <img
                            style={{ width: "46px" }}
                            src={inquiryicone2}
                            alt=""
                          />
                        </div>
                        <div className="form-address" >
                          <p className="form-heading">Email</p>
                          <p className="form-pera">zoe.miller@mydomain.com</p>
                        </div>
                      </div>
                      <div
                       className="inquiry-icon-flex"
                        
                      >
                        <div>
                          <img
                            style={{ width: "46px" }}
                            src={inquiryicone3}
                            alt=""
                          />
                        </div>
                        <div className="form-address">
                          <p className="form-heading">Phone</p>
                          <p className="form-pera">+91 9909332099 | <span>+91 9909332099 |</span> <span>+91 9909332099</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <form className="form-width">
                    <div className="">
                      <div
                      className="form-flex"
                      >
                        <div className="form-label-input">
                          <label className="form-label">Your name</label>
                          <input
                          className="form-inputs"
                            
                            type="text"
                          />
                        </div>
                        <div className="form-label-input">
                          <label className="form-label">Email address</label>
                          <input
                          className="form-inputs"
                            
                            type="text"
                          />
                        </div>
                      </div>
                      <div
                      className="form-flex-up-down-margin"
                        
                      >
                        
                        <div className="form-label-input">
                          <label className="form-label">City</label>
                          <input
                          className="form-inputs"
                            
                            type="text"
                          />
                        </div>
                        <div className="form-label-input">
                          <label className="form-label">Mobile number</label>
                          <input
                          className="form-inputs"
                            
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="form-label-textarea" style={{ textAlign: "left" }}>
                        <label className="form-label">Message</label>
                        <textarea
                        className="form-textarea"
                          
                        />
                      </div>
                    </div>
                    <div className="form-button" >
                  <button >SUBMIT NOW</button>
                </div>
                  </form>
                  
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="" style={{margin:"50px 0"}}>
        <div className="main-width">
          <div >
            <div className="under1320width">
              <div className="contact-page-padding">
                
                  <div className='contact-map'>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.2992906750073!2d72.87904167471952!3d21.219977281184562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be045a6df94f859%3A0x1507b9b519aa5868!2sFlonix%20Technology!5e0!3m2!1sen!2sin!4v1712822237314!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                  </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="" style={{margin:"50px 0"}}>
        <div className="main-width">
          <div >
          <p
                  className="all-heading"
                  style={{ padding: "0", margin: "0 0 50px 0" }}
                >
                  Find Our Location
                </p>
            <div className="under1320width">
              <div className="d-flex">
                <div className='contact-location-box'>
                    <div className='contact-location-box-padding'>
                        <div className='contact-main-icon'>
                            <img src={inquiryicone1} alt="" />
                        </div>
                        <div className='location-icon-heading'>
                        <p>Our Office</p>
                        </div>
                        <div className='location-icon-pera'>
                            <p>Godown NO: 707, Chitrakut, Saniya Hemad, Taluka: Chorasi, District: Surat</p>
                        </div>
                    </div>
                </div>
                <div className='contact-location-box'>
                    <div className='contact-location-box-padding'>
                        <div className='contact-main-icon'>
                            <img src={inquiryicone2} alt="" />
                        </div>
                        <div className='location-icon-heading'>
                        <p>Email Us</p>
                        </div>
                        <div className='location-icon-pera'>
                            <p>sales@flonix.in</p>
                        </div>
                    </div>
                </div>
                <div className='contact-location-box'>
                    <div className='contact-location-box-padding'>
                        <div className='contact-main-icon'>
                            <img src={inquiryicone3} alt="" />
                        </div>
                        <div className='location-icon-heading'>
                        <p>Call Us </p>
                        </div>
                        <div className='location-icon-pera'>
                            <p>+91 9909332099</p>
                            <p>+91 9909332099</p>
                            <p>+91 9909332099</p>
                        </div>
                    </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="" style={{margin:"50px 0"}}>
        <div className="main-width">
          <div className='contact-page-padding' >
            <div className='contact-our-network' >
            <p
                  className="all-heading"
                  style={{ padding: "0" }}
                >
                  Our Network
                </p>
                <p className='conatact-our-network-heading'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
            </div>
            <div className="under1320width">
              <div >
              <div className="d-grid-contact-oue-network">
                <div className='contact-our-network-box'>
                    <div className='contact-why-box'>
                        <p className='why-flonix-filteration-heading'>Why Flonix Filtration?</p>
                        <div style={{paddingTop:"21px"}}>
                        <div className='contact-location-and-mobile-icon-text'>
                           <div className='contact-form-icon-addres-location'>
                            <img src={inquiryicone1} alt="" />
                           </div>
                           <div className='contact-addres-location-pera'>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                           </div>
                        </div>
                        <div className='contact-location-and-mobile-icon-text create-padding' >
                           <div className='contact-form-icon-addres-location'>
                            <img src={inquiryicone3} alt="" />
                           </div>
                           <div className='contact-addres-location-pera'>
                            <p>+911000200000</p>
                           </div>
                        </div>
                        </div>

                    </div>


                </div>
                <div className='contact-our-network-box'>
                    <div className='contact-why-box'>
                        <p className='why-flonix-filteration-heading'>Why Flonix Filtration?</p>
                        <div style={{paddingTop:"21px"}}>
                        <div className='contact-location-and-mobile-icon-text'>
                           <div className='contact-form-icon-addres-location'>
                            <img src={inquiryicone1} alt="" />
                           </div>
                           <div className='contact-addres-location-pera'>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                           </div>
                        </div>
                        <div className='contact-location-and-mobile-icon-text create-padding' >
                           <div className='contact-form-icon-addres-location'>
                            <img src={inquiryicone3} alt="" />
                           </div>
                           <div className='contact-addres-location-pera'>
                            <p>+911000200000</p>
                           </div>
                        </div>
                        </div>

                    </div>


                </div>
                <div className='contact-our-network-box'>
                    <div className='contact-why-box'>
                        <p className='why-flonix-filteration-heading'>Why Flonix Filtration?</p>
                        <div style={{paddingTop:"21px"}}>
                        <div className='contact-location-and-mobile-icon-text'>
                           <div className='contact-form-icon-addres-location'>
                            <img src={inquiryicone1} alt="" />
                           </div>
                           <div className='contact-addres-location-pera'>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                           </div>
                        </div>
                        <div className='contact-location-and-mobile-icon-text create-padding' >
                           <div className='contact-form-icon-addres-location'>
                            <img src={inquiryicone3} alt="" />
                           </div>
                           <div className='contact-addres-location-pera'>
                            <p>+911000200000</p>
                           </div>
                        </div>
                        </div>

                    </div>


                </div>
                <div className='contact-our-network-box'>
                    <div className='contact-why-box'>
                        <p className='why-flonix-filteration-heading'>Why Flonix Filtration?</p>
                        <div style={{paddingTop:"21px"}}>
                        <div className='contact-location-and-mobile-icon-text'>
                           <div className='contact-form-icon-addres-location'>
                            <img src={inquiryicone1} alt="" />
                           </div>
                           <div className='contact-addres-location-pera'>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                           </div>
                        </div>
                        <div className='contact-location-and-mobile-icon-text create-padding' >
                           <div className='contact-form-icon-addres-location'>
                            <img src={inquiryicone3} alt="" />
                           </div>
                           <div className='contact-addres-location-pera'>
                            <p>+911000200000</p>
                           </div>
                        </div>
                        </div>

                    </div>


                </div>
                <div className='contact-our-network-box'>
                    <div className='contact-why-box'>
                        <p className='why-flonix-filteration-heading'>Why Flonix Filtration?</p>
                        <div style={{paddingTop:"21px"}}>
                        <div className='contact-location-and-mobile-icon-text'>
                           <div className='contact-form-icon-addres-location'>
                            <img src={inquiryicone1} alt="" />
                           </div>
                           <div className='contact-addres-location-pera'>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                           </div>
                        </div>
                        <div className='contact-location-and-mobile-icon-text create-padding' >
                           <div className='contact-form-icon-addres-location'>
                            <img src={inquiryicone3} alt="" />
                           </div>
                           <div className='contact-addres-location-pera'>
                            <p>+911000200000</p>
                           </div>
                        </div>
                        </div>

                    </div>


                </div>
                <div className='contact-our-network-box'>
                    <div className='contact-why-box'>
                        <p className='why-flonix-filteration-heading'>Why Flonix Filtration?</p>
                        <div style={{paddingTop:"21px"}}>
                        <div className='contact-location-and-mobile-icon-text'>
                           <div className='contact-form-icon-addres-location'>
                            <img src={inquiryicone1} alt="" />
                           </div>
                           <div className='contact-addres-location-pera'>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                           </div>
                        </div>
                        <div className='contact-location-and-mobile-icon-text create-padding' >
                           <div className='contact-form-icon-addres-location'>
                            <img src={inquiryicone3} alt="" />
                           </div>
                           <div className='contact-addres-location-pera'>
                            <p>+911000200000</p>
                           </div>
                        </div>
                        </div>

                    </div>


                </div>
                <div className='contact-our-network-box'>
                    <div className='contact-why-box'>
                        <p className='why-flonix-filteration-heading'>Why Flonix Filtration?</p>
                        <div style={{paddingTop:"21px"}}>
                        <div className='contact-location-and-mobile-icon-text'>
                           <div className='contact-form-icon-addres-location'>
                            <img src={inquiryicone1} alt="" />
                           </div>
                           <div className='contact-addres-location-pera'>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                           </div>
                        </div>
                        <div className='contact-location-and-mobile-icon-text create-padding' >
                           <div className='contact-form-icon-addres-location'>
                            <img src={inquiryicone3} alt="" />
                           </div>
                           <div className='contact-addres-location-pera'>
                            <p>+911000200000</p>
                           </div>
                        </div>
                        </div>

                    </div>


                </div>
                <div className='contact-our-network-box'>
                    <div className='contact-why-box'>
                        <p className='why-flonix-filteration-heading'>Why Flonix Filtration?</p>
                        <div style={{paddingTop:"21px"}}>
                        <div className='contact-location-and-mobile-icon-text'>
                           <div className='contact-form-icon-addres-location'>
                            <img src={inquiryicone1} alt="" />
                           </div>
                           <div className='contact-addres-location-pera'>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                           </div>
                        </div>
                        <div className='contact-location-and-mobile-icon-text create-padding' >
                           <div className='contact-form-icon-addres-location'>
                            <img src={inquiryicone3} alt="" />
                           </div>
                           <div className='contact-addres-location-pera'>
                            <p>+911000200000</p>
                           </div>
                        </div>
                        </div>

                    </div>


                </div>
                <div className='contact-our-network-box'>
                    <div className='contact-why-box'>
                        <p className='why-flonix-filteration-heading'>Why Flonix Filtration?</p>
                        <div style={{paddingTop:"21px"}}>
                        <div className='contact-location-and-mobile-icon-text'>
                           <div className='contact-form-icon-addres-location'>
                            <img src={inquiryicone1} alt="" />
                           </div>
                           <div className='contact-addres-location-pera'>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                           </div>
                        </div>
                        <div className='contact-location-and-mobile-icon-text create-padding' >
                           <div className='contact-form-icon-addres-location'>
                            <img src={inquiryicone3} alt="" />
                           </div>
                           <div className='contact-addres-location-pera'>
                            <p>+911000200000</p>
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
  )
}

export default Contact