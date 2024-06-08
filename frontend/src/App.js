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


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Blogs" element={<Blogs/>} />

 
        <Route path="/BlogsPage" element={<BlogsPage />} />
        <Route path="/NewsEvent" element={<NewsEvent />} />
        <Route path="/NewsEventpage" element={<NewsEventpage />} />

        <Route path="/Contact" element={<Contact/>} />

        

        <Route path="/Product" element={<Product />} />
<<<<<<<<< Temporary merge branch 1

=========
        <Route path="/Productdetail" element={<ProductDetail />} />
>>>>>>>>> Temporary merge branch 2
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
