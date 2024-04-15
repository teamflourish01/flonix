import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Blogs from "./Components/Blogs";
import BlogsPage from "./Components/BlogsPage";
import NewsEvent from "./Components/NewsEvent";
import Footer from "./Components/Footer";
import NewsEventpage from "./Components/NewsEventpage";
import Product from "./Components/Product";
import ProductDetail from "./Components/Product-Details";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Blogs" element={<Blogs />} />
        <Route path="/BlogsPage" element={<BlogsPage />} />
        <Route path="/NewsEvent" element={<NewsEvent />} />
        <Route path="/NewsEventpage" element={<NewsEventpage />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Productdetail" element={<ProductDetail />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
