import React, { useEffect, useState, useRef } from "react";
import "../Style/Navbar.css";
import flonixlogoblack from "../images/flonixlogoblack.svg";
import mail from "../images/mail.svg";
import whatsapp from "../images/whatsapp.svg";
import fb from "../images/fb.svg";
import insta from "../images/insta.svg";
import youtube from "../images/youtube.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const [contectData, setContectData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedResultIndex, setSelectedResultIndex] = useState(-1);

  const apiUrl = process.env.REACT_APP_URL;
  const searchRef = useRef(null);

  useEffect(() => {
    const getContect = async () => {
      try {
        const response = await fetch(`${apiUrl}/contect`);
        const data = await response.json();
        setContectData(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getContect();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchResults([]);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearchInputChange = async (event) => {
    const inputValue = event.target.value;
    setSearchInput(inputValue);

    if (!inputValue) {
      setSearchResults([]);
      return;
    }

    try {
      const response = await fetch(`${apiUrl}/product/search/${inputValue}`);
      const data = await response.json();
      setSearchResults(data.data);
      setSelectedResultIndex(-1);
    } catch (error) {
      console.error("Error fetching search results:", error);
      setSearchResults([]);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowUp") {
      event.preventDefault();
      setSelectedResultIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : searchResults.length - 1
      );
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      setSelectedResultIndex((prevIndex) =>
        prevIndex < searchResults.length - 1 ? prevIndex + 1 : 0
      );
    } else if (event.key === "Enter" && selectedResultIndex !== -1) {
      window.location.href = `/Product/${searchResults[selectedResultIndex].slug}`;
    }
  };

  const handleResultClick = (index) => {
    setSelectedResultIndex(index);
    setSearchInput("");
    setSearchResults([]);
  };

  const handleclick = () => {
    setClicked(!clicked);
  };
  return (
    <>
      <section className="screen-tablet-hidden">
        <div className="bg">
          <div className="main-width">
            <div style={{ padding: "15px 0" }}>
              <div className="under1320width">
                <div className="all-page-padding">
                  <div className="d-flex">
                    <div
                      className="under-d-flex social-icon"
                      // style={{ padding: "0 0 0 5px" }}
                    >
                      {contectData.map((item) => (
                        <>
                          <img src={mail} alt="" />
                          <p className="infoexamplemail">
                            <a href={`mailto:${item.email}`}>{item.email}</a>
                          </p>
                        </>
                      ))}
                    </div>
                    <div className="social-icon under-d-flex">
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
              </div>
            </div>
          </div>
        </div>
      </section>
      <nav className="sticky-top nav2 no-copy-text">
        <div className=" under1320width">
          <div className="all-page-padding">
            <div className="nav">
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
                  <div className="under-nav-flex">
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
                      <Link className="under" to="/Ebrochure">
                        <span className="do">E- Brochure</span>
                      </Link>
                    </li>
                    <div className="navs-main-icon">
                      <div className="navs-icon navs-d-flex">
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
                  <div class="search-bar" onKeyDown={handleKeyDown}>
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
                        value={searchInput}
                        onChange={handleSearchInputChange}
                      />
                    </div>

                    <ul className="search-results">
                      {searchResults &&
                        searchResults.map((result, index) => (
                          <Link
                            style={{ fontSize: "16px", textDecoration: "none" }}
                            to={`/Product/${result.slug}`}
                            // onClick={() => handleResultClick(index)}
                          >
                            <li
                              key={result.slug}
                              className={
                                index === selectedResultIndex ? "selected" : ""
                              }
                              onMouseEnter={() => setSelectedResultIndex(index)}
                              onMouseLeave={() => setSelectedResultIndex(-1)}
                              onClick={() => handleResultClick(index)}
                            >
                              {result.name}
                            </li>
                          </Link>
                        ))}
                    </ul>
                  </div>
                </ul>
              </div>

              <div id="mobile" onClick={handleclick}>
                <i
                  id="bar"
                  className={clicked ? "fas fa-times" : "fas fa-bars"}
                ></i>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
