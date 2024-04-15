import React from "react";
import "../Style/Navbar.css";
import flonixlogoblack from "../images/flonixlogoblack.svg";
import mail from "../images/mail.svg";
import twitter from "../images/twitter.svg";
import fb from "../images/fb.svg";
import insta from "../images/insta.svg";
import youtube from "../images/youtube.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleclick = () => {
    setClicked(!clicked);
  };
  return (
    <>
      <section className="bg">
        <div className="main-width">
          <div style={{ padding: "15px 0" }}>
            <div className="under1320width">
              <div className="d-flex">
                <div
                  className="under-d-flex social-icon"
                  style={{ padding: "0 0 0 5px" }}
                >
                  <img src={mail} alt="" />
                  <p className="infoexamplemail">Info@example.com</p>
                </div>
                <div className="social-icon under-d-flex">
                  <img src={twitter} alt="" />
                  <img src={fb} alt="" />
                  <img src={insta} alt="" />
                  <img src={youtube} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <nav className="sticky-top nav2 no-copy-text">
        <div className="nav under1320width">
          <a href="/">
            <img className="desi-logo" src={flonixlogoblack} alt="" />
          </a>

          <div>
            <ul
              id="navbar"
              onClick={() => {
                setClicked(!clicked);
                window.scrollTo(0, 0);
              }}
              className={clicked ? "#navbar active" : "#navbar"}
            >
              <li className="naves">
                <Link className="  under active " to="/">
                  <span className="do">Home</span>
                </Link>
              </li>
              <li className="naves">
                <Link className="under" to="/About">
                  <span className="do">About Us</span>
                </Link>
              </li>

              <li className="naves">
                <Link className="under" to="/Product">
                  <span className="do">Products</span>
                </Link>
              </li>

              <li className="naves">
                <Link className="under" to="/Blogs">
                  <span className="do">Blogs</span>
                </Link>
              </li>
              <li className="naves">
                <Link className="under" to="/NewsEvent">
                  <span className="do">News & Events</span>
                </Link>
              </li>
              <li className="naves">
                <Link className="under" to="/Contact">
                  <span className="do">Contact Us</span>
                </Link>
              </li>
              <li className="naves">
                <Link className="under" to="/Event">
                  <span className="do">E- Brochure</span>
                </Link>
              </li>
            </ul>
          </div>

          <div class="container">
            {/* <input checked="" class="checkbox" type="checkbox"/>  */}
            <div class="mainbox">
              <div class="iconContainer">
                <svg
                  viewBox="0 0 512 512"
                  height="1em"
                  xmlns="http://www.w3.org/2000/svg"
                  class="search_icon"
                >
                  <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path>
                </svg>
              </div>
              <input
                class="search_input"
                placeholder="Search Bar..."
                type="text"
              />
            </div>
          </div>

          <div id="mobile" onClick={handleclick}>
            <i
              id="bar"
              className={clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
