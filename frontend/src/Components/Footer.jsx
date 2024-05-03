import React from "react";
import "../Style/Footer.css";
import flonixlogowhite from "../images/flonixlogowhite.svg";
import twitter from "../images/twitter.svg";
import fb from "../images/fb.svg";
import insta from "../images/insta.svg";
import printrest from "../images/printrest.svg";

const Footer = () => {
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
                        <img src={twitter} alt="" />
                        <img src={fb} alt="" />
                        <img src={insta} alt="" />
                        <img src={printrest} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="part-2-width">
                    <div className="quick-padding">
                    <p className="quick-link-heading">Quick Links</p>
                    <hr style={{width:"31px", border:"1px solid #0096EA",margin:"5px 0 0 0"}}/>
                    </div>
                    <div className="links-policy">
                    <p><a style={{textDecoration:"none",color:"white"}} href="/PrivacyPolicy">Privacy Policy </a></p>
                    <p> <a style={{textDecoration:"none",color:"white"}}  href="/ReturnPolicy"> Return Policy </a> </p>
                    <p> <a style={{textDecoration:"none",color:"white"}}  href="/TermsAndCondition">Terms & Conditions </a></p>
                    <p>Products</p>
                    <p>About Us</p>
                    <p>Certificate</p>
                    <p>Career</p>
                    </div>
                  </div>
                  <div className="part-3-width">
                  <div className="quick-padding">
                    <p className="quick-link-heading">Our Products</p>
                    <hr style={{width:"31px", border:"1px solid #0096EA",margin:"5px 0 0 0"}}/>
                    </div>
                    <div className="our-product">
                    <p>Pump</p>
                    <p>Membrane</p>
                    <p>Inline Filters</p>
                    <p>Ro Smps</p>
                    <p>Membrane Housing</p>
                    <p>PP Filter</p>
                    <p>PP Spun Cartridge</p>
                    </div>
                  </div>
                  <div className="part-4-width">
                  <div className="quick-padding">
                    <p className="quick-link-heading">Contact Us</p>
                    <hr style={{width:"31px", border:"1px solid #0096EA",margin:"5px 0 0 0"}}/>
                    </div>
                    <div className="our-product">
                    <p>3065 Upton Avenue, Guilford Maine 04443 USA</p>
                    <p>Call Us +1 207-876-1059</p>
                    <p>E-mail: info@example.com</p>
                    </div>
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
