import React, { useState } from "react";
import "../Style/Product.css";
import blogbannerimage from "../images/blogbannerimage.svg";
import rectangale159 from "../images/Rectangle159.svg";
import rectangale160 from "../images/Rectangle160.svg";
import rectangale161 from "../images/Rectangle161.svg";

const Product = () => {
  const [activeItem, setActiveItem] = useState("OUR PRODUCTS");
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;
  const maxPagesToShow = 5;

  const menuItems = [
    "OUR PRODUCTS",
    "BRANDED SYSTEM",
    "PUMP",
    "MEMBRANE",
    "INLINE FILTERS",
    "RO SMPS",
    "MEMBRANE HOUSING",
    "PP FILTER",
    "PP SPUN CARTRIDGE",
  ];

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const getPageNumbers = () => {
    let startPage = Math.max(currentPage, 1);
    let endPage = startPage + maxPagesToShow - 1;

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(endPage - maxPagesToShow + 1, 1);
    }

    return Array.from({ length: (endPage - startPage) + 1 }, (_, i) => startPage + i);
  };
  return (
    <>
      <section>
        <div className="wavebgbanner">
          <div className="main-width">
            <div>
              <div className="under1320width">
                <div style={{ padding: "50px 0" }}>
                  <div className="d-flex">
                    <div className=" pure">
                      <div className="blogsbannerpera">
                        <p>Product</p>
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
        <div className="main-width">
          <div>
            <div className="under1320width">
              <div className="product-flex">
                <div className="product-selecter">
                  {menuItems.map((item, index) => (
                    <div
                      key={index}
                      className={`rectengle-all ${
                        activeItem === item ? "active" : ""
                      }`}
                      onClick={() => setActiveItem(item)}
                    >
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
                <div className="product-card">
                  <div className="card-flex">
                    <div className="card">
                      <img src={rectangale159} alt="rectangle159" />
                      <p>Lorem Ipsum is simply dummy text of</p>
                    </div>
                    <div className="card">
                      <img src={rectangale160} alt="rectangle160" />
                      <p>Lorem Ipsum is simply dummy text of</p>
                    </div>
                    <div className="card">
                      <img src={rectangale161} alt="rectangle161" />
                      <p>Lorem Ipsum is simply dummy text of</p>
                    </div>
                    <div className="card">
                      <img src={rectangale159} alt="rectangle159" />
                      <p>Lorem Ipsum is simply dummy text of</p>
                    </div>
                    <div className="card">
                      <img src={rectangale160} alt="rectangle160" />
                      <p>Lorem Ipsum is simply dummy text of</p>
                    </div>
                    <div className="card">
                      <img src={rectangale161} alt="rectangle161" />
                      <p>Lorem Ipsum is simply dummy text of</p>
                    </div>
                    <div className="card">
                      <img src={rectangale159} alt="rectangle159" />
                      <p>Lorem Ipsum is simply dummy text of</p>
                    </div>
                    <div className="card">
                      <img src={rectangale160} alt="rectangle160" />
                      <p>Lorem Ipsum is simply dummy text of</p>
                    </div>
                    <div className="card">
                      <img src={rectangale161} alt="rectangle161" />
                      <p>Lorem Ipsum is simply dummy text of</p>
                    </div>
                    <div className="card">
                      <img src={rectangale159} alt="rectangle159" />
                      <p>Lorem Ipsum is simply dummy text of</p>
                    </div>
                    <div className="card">
                      <img src={rectangale160} alt="rectangle160" />
                      <p>Lorem Ipsum is simply dummy text of</p>
                    </div>
                    <div className="card">
                      <img src={rectangale161} alt="rectangle161" />
                      <p>Lorem Ipsum is simply dummy text of</p>
                    </div>
                    <div className="card">
                      <img src={rectangale159} alt="rectangle159" />
                      <p>Lorem Ipsum is simply dummy text of</p>
                    </div>
                    <div className="card">
                      <img src={rectangale160} alt="rectangle160" />
                      <p>Lorem Ipsum is simply dummy text of</p>
                    </div>
                    <div className="card">
                      <img src={rectangale161} alt="rectangle161" />
                      <p>Lorem Ipsum is simply dummy text of</p>
                    </div>
                    <div className="card">
                      <img src={rectangale159} alt="rectangle159" />
                      <p>Lorem Ipsum is simply dummy text of</p>
                    </div>
                    <div className="card">
                      <img src={rectangale160} alt="rectangle160" />
                      <p>Lorem Ipsum is simply dummy text of</p>
                    </div>
                    <div className="card">
                      <img src={rectangale161} alt="rectangle161" />
                      <p>Lorem Ipsum is simply dummy text of</p>
                    </div>
                    <div className="card">
                      <img src={rectangale159} alt="rectangle159" />
                      <p>Lorem Ipsum is simply dummy text of</p>
                    </div>
                    <div className="card">
                      <img src={rectangale160} alt="rectangle160" />
                      <p>Lorem Ipsum is simply dummy text of</p>
                    </div>
                    <div className="card">
                      <img src={rectangale161} alt="rectangle161" />
                      <p>Lorem Ipsum is simply dummy text of</p>
                    </div>
                    <div className="card">
                      <img src={rectangale159} alt="rectangle159" />
                      <p>Lorem Ipsum is simply dummy text of</p>
                    </div>
                    <div className="card">
                      <img src={rectangale160} alt="rectangle160" />
                      <p>Lorem Ipsum is simply dummy text of</p>
                    </div>
                    <div className="card">
                      <img src={rectangale161} alt="rectangle161" />
                      <p>Lorem Ipsum is simply dummy text of</p>
                    </div>
                    <div className="card">
                      <img src={rectangale159} alt="rectangle159" />
                      <p>Lorem Ipsum is simply dummy text of</p>
                    </div>
                    <div className="card">
                      <img src={rectangale160} alt="rectangle160" />
                      <p>Lorem Ipsum is simply dummy text of</p>
                    </div>
                    <div className="card">
                      <img src={rectangale161} alt="rectangle161" />
                      <p>Lorem Ipsum is simply dummy text of</p>
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
          <div>
            <div className="under1320width">
              <div class="pagination">
                <span
                  className={`page-arrow ${
                    currentPage === 1 ? "disabled" : ""
                  }`}
                  onClick={() => handlePageChange(currentPage - 1)}
                >
                  <i class="fa-solid fa-chevron-left"></i>
                </span>
                {getPageNumbers().map((number) => (
                  <span
                    key={number}
                    className={`page-number ${
                      currentPage === number ? "current" : ""
                    }`}
                    onClick={() => handlePageChange(number)}
                  >
                    {number}
                  </span>
                ))}
                <span
                  className={`page-arrow ${
                    currentPage === totalPages ? "disabled" : ""
                  }`}
                  onClick={() => handlePageChange(currentPage + 1)}
                >
                  <i class="fa-solid fa-chevron-right"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
