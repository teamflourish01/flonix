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
                <div style={{padding:"50px 0"}}>
                <div className="d-flex">
                  <div className=" pure">
                    <div className="blogsbannerpera">
                      <p>Contact Us</p>
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
          <div >
            <div className="under1320width">
              <div className="d-flex">
                <div className='contact-form-box'>
                    <p className='contact-form-heading' >Contact us for Water solution</p>
              <form className="">
                    <div className="form-width">
                      <div
                      className="contact-flex"
                      >
                        <div className="form-label-input">
                          <label className="form-label">Your name</label>
                          <input
                          className="contact-form-inputs"
                            
                            type="text"
                          />
                        </div>
                        <div className="form-label-input">
                          <label className="form-label">Email address</label>
                          <input
                          className="contact-form-inputs"
                            
                            type="text"
                          />
                        </div>
                      </div>
                      <div
                      className="contact-flex-up-down-margin"
                        
                      >
                        <div className="form-label-input">
                          <label className="form-label">City</label>
                          <input
                          className="contact-form-inputs"
                            
                            type="text"
                          />
                        </div>
                        <div className="form-label-input">
                          <label className="form-label">Mobile number</label>
                          <input
                          className="contact-form-inputs"
                            
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="contact-form-label-textarea" style={{ textAlign: "left" }}>
                        <label className="contact-form-label">Message</label>
                        <textarea
                        className="contact-form-textarea"
                          
                        />
                      </div>
                    </div>
                    <div className="contact-form-button" >
                  <button >SUBMIT NOW</button>
                </div>
                  </form>
                  </div>
                  <div className='contact-map'>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.2992906750073!2d72.87904167471952!3d21.219977281184562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be045a6df94f859%3A0x1507b9b519aa5868!2sFlonix%20Technology!5e0!3m2!1sen!2sin!4v1712822237314!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                  </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="" style={{margin:"50px 0"}}>
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
      </section>

      <section className="" style={{margin:"50px 0"}}>
        <div className="main-width">
          <div >
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
              <div className="d-flex">
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
              <div className="d-flex" style={{margin:"40px 0"}}>
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
              <div className="d-flex">
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
      </section>


    </>
  )
}

export default Contact