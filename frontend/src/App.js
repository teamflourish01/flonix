import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Blogs from "./Components/Blogs";
import Blog from "./Components/BlogsPage";
import Blogcategory from "./Components/Blogcategory";
import NewsEvent from "./Components/NewsEvent";
import Footer from "./Components/Footer";
import NewsEventpage from "./Components/NewsEventpage";
import Contact from "./Components/Contact";
import About from "./Components/About";

import Product from "./Components/Product";
import ProductDetail from "./Components/Product-Details";
import Ebrochure from "./Components/Ebrochure";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import TermsAndCondition from "./Components/TermsAndCondition";
import ReturnPolicy from "./Components/ReturnPolicy";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />

        <Route path="/Blogs" element={<Blogs />} />
        <Route path="/Blog/:slug" element={<Blog />} />
        <Route path ="/Blogcategory/:slug" element={<Blogcategory />} />

        <Route path="/NewsEvent" element={<NewsEvent />} />
        <Route path="/NewsEventpage/:slug" element={<NewsEventpage />} />

        <Route path="/Contact" element={<Contact />} />

        <Route path="/Product" element={<Product />} />
        <Route path="/product-detail/:slug" element={<ProductDetail />} />

        <Route path="/Ebrochure" element={<Ebrochure />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/TermsAndCondition" element={<TermsAndCondition />} />
        <Route path="/ReturnPolicy" element={<ReturnPolicy />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
