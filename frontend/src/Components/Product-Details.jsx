import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import ReactImageMagnify from "react-image-magnify";
import "../Style/ProductDetails.css";
import img56 from "../images/image56.svg";
import img57 from "../images/image57.svg";
import img58 from "../images/image58.svg";
import { Helmet } from "react-helmet";

const ProductDetail = () => {
  const { slug } = useParams(); 
  const [product, setProduct] = useState(null);
  const [openFAQ, setOpenFAQ] = useState(0); 
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const apiUrl = process.env.REACT_APP_URL;
  const domain=process.env.REACT_APP_DOMAIN;


  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  const faqs = [
    {
      heading: "Specifications",
      data: product?.specification || {},
    },
    {
      heading: "Details",
      data: product?.details || {},
    },
    {
      heading: "Performance",
      data: product?.performance || {},
    },
  ].filter(faq => Object.keys(faq.data).length > 0);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${apiUrl}/product/${slug}`);
        setProduct(response.data.data);
      } catch (error) {
        setError("Error fetching product details.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [slug, apiUrl]);

  useEffect(() => {
    if (product) {
      const fetchRelatedProducts = async () => {
        try {
          const response = await axios.get(`${apiUrl}/product`);
          const allProducts = response.data.data;
          const related = allProducts.filter(
            (prod) =>
              prod.category.name === product.category.name && prod.slug !== slug
          ).slice(0, 3); // Exclude current product and limit to 3 products
          setRelatedProducts(related);
        } catch (error) {
          setError("Error fetching related products.");
        }
      };

      fetchRelatedProducts();
    }
  }, [product, slug, apiUrl]);

  const handleClick = (index) => {
    setOpenFAQ((prevOpenFAQ) => (prevOpenFAQ === index ? null : index));
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
     {/* Meta Section */}
     <Helmet>
        <meta charSet="utf-8" />
        <title>{product?.meta_title||"Flonix Technology"} </title>
        <meta name="description" content={product?.meta_description} />
        <link
          rel="canonical"
          href={`${domain}/Product/${slug}`}
        />
      </Helmet>
      <section style={{ margin: "50px 0" }}>
        <div className="main-width">
          <div>
            <div className="under1320width">
              <div className="all-page-padding">
                <div className="product-d-flex">
                  <div className="Detail-Image xt5y">
                    <ReactImageMagnify
                      {...{
                        smallImage: {
                          isFluidWidth: true,
                          src: `${apiUrl}/product/${product?.image[selectedImageIndex]}`,
                          alt: product.image_alt[selectedImageIndex] || product.name,
                        },
                        largeImage: {
                          src: `${apiUrl}/product/${product?.image[selectedImageIndex]}`,
                          alt: product.image_alt[selectedImageIndex] || product.name,
                          width: 1200,
                          height: 1800,
                        },
                        lensStyle: { backgroundColor: "rgba(0,0,0,.6)" },
                      }}
                    />
                    <div className="detail4img">
                      {product?.image.map((imageSrc, index) => (
                        <img
                          key={index}
                          className={`smallimg ${index === selectedImageIndex ? "selected" : ""}`}
                          src={`${apiUrl}/product/${imageSrc}`}
                          alt={product.image_alt[index] || `Small ${index + 1}`}
                          onMouseOver={() => handleImageClick(index)}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="Detail-content">
                  <div className="product-detail">
                      <div className="hader">
                        <h2>{product.name}</h2>
                        <p className="text" style={{ color: "black" }}>
                          {product.description}
                        </p>
                      </div>
                      <div className="keyfeature">
                        <h2>Key Feature</h2>
                        <ul className="tikicone">
                          {product.key_features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="btndiv">
                        <Link to="/contact/#inquirys" style={{ textDecoration: "none" }}>
                        <button
                          className="banner-inquery-button"
                          style={{ marginTop: "40px" }}
                        >
                          <span class="text">INQUIRY NOW</span>
                          <div class="wave"></div>
                        </button>
                      </Link>
                      </div>
                      </div>
                      {product.mark && product.mark_text && product.mark.length > 0 && product.mark_text.length > 0 && (
                      <div className="threeicon">
                          <div className="iconediv" >
                          {product.mark.map((mark, index) => (
                            <div className="firsticone" key={index}>
                              <div className="iconeimages">
                                <img src={`${apiUrl}/product/${mark}`} alt={product.mark_text[index]} />
                              </div>
                              <p>{product.mark_text[index]}</p>
                            </div>
                             ))}
                          </div>
                      </div>
                    )}
                    {faqs.length > 0 && (
                      <div className="faq-container">
                        {faqs.map((faq, index) => (
                          <div key={index} className="faq-section">
                            <div
                              className="faq-question"
                              onClick={() => handleClick(index)}
                              role="button"
                              aria-expanded={openFAQ === index}
                            >
                              {faq.heading}
                              <span className={`arrow-icon ${openFAQ === index ? "open" : ""}`}>
                                <i className="fa-solid fa-angle-down"></i>
                              </span>
                            </div>
                            {openFAQ === index && faq.data && (
                              <div className="faq-answer">
                                {Object.entries(faq.data).map(([key, value]) => (
                                  <div key={key} className="faq-answer-space">
                                    <li>{key}:</li>
                                    <p>{value}</p>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  
                    {/* <div className="faq-container">
                      {faqs.map((faq, index) => (
                        <div key={index} className="faq-section">
                          <div
                            className="faq-question"
                            onClick={() => handleClick(index)}
                            role="button"
                            aria-expanded={openFAQ === index}
                          >
                            {faq.heading}
                            <span className={`arrow-icon ${openFAQ === index ? "open" : ""}`}>
                              <i className="fa-solid fa-angle-down"></i>
                            </span>
                          </div>
                          {openFAQ === index && faq.data && (
                            <div className="faq-answer">
                              {Object.entries(faq.data).map(([key, value]) => (
                                <div key={key} className="faq-answer-space">
                                  <li>{key}:</li>
                                  <p>{value}</p>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {relatedProducts.length > 0 && (
      <section className="" style={{ margin: "50px 0" }}>
        <div className="main-width">
          <div>
            <div className="under1320width">
              <div className="all-page-padding">
                <div className="relatedproducts" >
                  <p className="all-heading" style={{ padding: "0", margin: " 0 0 50px 0" }}>
                    Related Products
                  </p>
                  <div className="card-flex" onClick={()=>window.scrollTo(0,0)}>
                    {relatedProducts.map((relatedProduct) => (
                      <Link to={`/Product/${relatedProduct.slug}`} key={relatedProduct.slug} style={{textDecoration:"none",color:"black"}}>
                        <div className="card">
                          <img src={`${apiUrl}/product/${relatedProduct.image[0]}`} alt={relatedProduct.image_alt[0]} />
                          <p>{relatedProduct.name}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      )}
    </>
  );
};

export default ProductDetail;
