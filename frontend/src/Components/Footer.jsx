import React, { useEffect, useState } from 'react';
import "../Style/Footer.css";
import flonixlogowhite from "../images/flonixlogowhite.svg";
import whatsapp from "../images/whatsapp.svg";
import fb from "../images/fb.svg";
import insta from "../images/insta.svg";
import youtube from "../images/youtube.svg";

const Footer = () => {
  const [contectData, setContectData] = useState([]);
  const apiUrl = process.env.REACT_APP_URL; // Backend API URL

  useEffect(() => {
    const getContect = async() => {
      try {
        const response = await fetch(`${apiUrl}/contect`);
        const data = await response.json();
        setContectData(data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    getContect();
  },[]);
  return (
    <>
      <footer className="footer-bg">
        <div className="main-width">
          <div>
            <div className="under1320width">
              <div className="footer-space" >  
                <div className="d-flex-footer">
                  <div className="part-1-width">
                    <div className="flonix-white-logo">
                      <img src={flonixlogowhite} alt="" />
                    </div>
                    <div className="footer-pera">
                      <p>
                        Uaques Drinking water gives five steps of water
                        purification. Promising quality and ensuring the latest
                        technology and serving the water with labelled bottles
                        with trust and honesty.
                      </p>
                    </div>
                    <div className="footer-icon-width">
                      <div className="footer-icon-flex">
                      {contectData.map((item) => (
                        <>
                        
                      <a href={`https://wa.me/${item.whatsapplink}`} target="_blank" rel="noopener noreferrer"><img src={whatsapp} alt="whatsapp" /></a>
                    <a href={item.fblink} target="_blank" rel="noopener noreferrer"><img src={fb} alt="Facebook" /></a>
            <a href={item.instalink} target="_blank" rel="noopener noreferrer"><img src={insta} alt="Instagram" /></a>
            <a href={item.ytlink} target="_blank" rel="noopener noreferrer"><img src={youtube} alt="ytlink" /></a>
            </>
           ))}
                      </div>
                    </div>
                  </div>
                  <div className="part-2-width">
                    <div className="quick-padding">
                    <p className="quick-link-heading">Quick Links</p>
                    <hr style={{width:"31px", border:"1px solid #0096EA",margin:"5px 0 0 0"}}/>
                    </div>
                    <div className="links-policy">
                    
                    <p className="under-hover">Products</p>
                    <p className="under-hover">About Us</p>
                    <p className="under-hover">Certificate</p>
                    <p className="under-hover">Career</p>
                    </div>
                  </div>
                  <div className="part-3-width">
                  <div className="quick-padding">
                    <p className="quick-link-heading">Policy</p>
                    <hr style={{width:"31px", border:"1px solid #0096EA",margin:"5px 0 0 0"}}/>
                    </div>
                    <div className="our-product">
                    <p className="under-hover"><a style={{textDecoration:"none"}} href="/PrivacyPolicy">Privacy Policy </a></p>
                    <p className="under-hover"> <a style={{textDecoration:"none"}}  href="/ReturnPolicy"> Return Policy </a> </p>
                    <p className="under-hover"> <a style={{textDecoration:"none"}}  href="/TermsAndCondition">Terms & Conditions </a></p>
                    </div>
                  </div>
                  <div className="part-4-width">
                  <div className="quick-padding">
                    <p className="quick-link-heading">Contact Us</p>
                    <hr style={{width:"31px", border:"1px solid #0096EA",margin:"5px 0 0 0"}}/>
                    </div>
                    {contectData.map((item) => (
                    <div className="our-product">
                    <p><a  href={item.addresslink} target="_blank" rel="noopener noreferrer">
                  {item.officeaddress} </a></p>
                    <p>Call Us: <a href={`tel:${item.officenumber}`}>{item.officenumber}</a></p>
                    <p>E-mail: <a href={`mailto:${item.email}`}>{item.email}</a></p>
                    </div>
                     ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright" >
            <p>Copyrights © 2024 Flonix All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
