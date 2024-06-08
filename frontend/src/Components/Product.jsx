


import React, { useEffect, useState } from 'react';
import "../Style/Product.css";
import blogbannerimage from "../images/blogbannerimage.svg";
import axios from 'axios';
import { Link } from 'react-router-dom';

const Product = () => {
  // Set default active category to "All Products"
  const [activeCategory, setActiveCategory] = useState("Our Products");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12; // Number of products per page
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const apiUrl = process.env.REACT_APP_URL; // Backend API URL

  // Fetch categories
  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${apiUrl}/category`);
      // Add "All Products" category to the beginning of the categories list
      const categoriesWithAllProducts = [{ slug: "all", name: "Our Products" }, ...response.data.data];
      setCategories(categoriesWithAllProducts);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  // Fetch products
  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${apiUrl}/product`);
      setProducts(response.data.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  


  // Filter products based on the selected category
  useEffect(() => {
    let filtered;
    if (activeCategory === "Our Products") {
      filtered = products; // Display all products when "All Products" is selected
    } else {
      filtered = products.filter(product =>
        product.category.name === activeCategory
      ); 
      // Reset current page to 1 when active category changes
        setCurrentPage(1);

    }
    setFilteredProducts(filtered);
  }, [activeCategory, products]);

  // Fetch categories and products when the component mounts
  useEffect(() => {
    fetchCategories();
    fetchProducts();
  }, []);

  // Calculate the range of products to display on the current page
  const startIdx = (currentPage - 1) * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;
  const productsToDisplay = filteredProducts.slice(startIdx, endIdx);

  // Calculate the total number of pages
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  function handlePageChange(page) {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  }

  return (
    <>
      {/* Header Section */}
      <section>
        <div className="wavebgbanner">
          <div className="main-width">
            <div className="under1320width">
              <div className="all-page-padding">
                <div style={{ padding: "50px 0" }}>
                  <div className="d-flex">
                    <div className="pure">
                      <div className="blogsbannerpera">
                        <p>Products</p>
                      </div>
                    </div>
                    <div className="blogbannerimage">
                      <img src={blogbannerimage} alt="Product Banner" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Selector Section */}
      <section className="product-sticky" style={{ margin: "50px 0" }}>
        <div className="main-width">
          <div className="under1320width">
            <div className="all-page-padding">
              <div className="product-selecter">
                {categories.map(category => (
                  <div
                    key={category.slug}
                    className={`rectengle-all ${activeCategory === category.name ? "active" : ""}`}
                    onClick={() => setActiveCategory(category.name)}
                  >
                    <p>{category.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product List Section */}
      <section style={{ margin: "50px 0" }}>
        <div className="main-width">
          <div className="under1320width">
            <div className="all-page-padding">
              <div className="card-flex">
                {productsToDisplay.map(product => (
                  <div className="card" key={product.slug}>
                    <Link className="link-style-none" to={`/product-detail/${product.slug}`}>
                      <img src={`${apiUrl}/product/${product?.image[0]}`} alt={product.image_alt[0]} />
                      <p>{product.name}</p>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pagination Section */}
      <section style={{ margin: "50px 0" }}>
        <div className="main-width">
          <div class="under1320width">
            <div className="all-page-padding">
              <div className="pagination">
                <span
                  className={`page-arrow ${currentPage === 1 ? "disabled" : ""}`}
                  onClick={() => handlePageChange(currentPage - 1)}
                >
                  <i className="fa-solid fa-chevron-left"></i>
                </span>
                {Array.from({ length: totalPages }, (_, i) => (
                  <span
                    key={i}
                    className={`page-number ${currentPage === i + 1 ? "current" : ""}`}
                    onClick={() => setCurrentPage(i + 1)}
                  >
                    {i + 1}
                  </span>
                ))}
                <span
                  className={`page-arrow ${currentPage === totalPages ? "disabled" : ""}`}
                  onClick={() => handlePageChange(currentPage + 1)}
                >
                  <i className="fa-solid fa-chevron-right"></i>
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
