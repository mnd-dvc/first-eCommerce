import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./pages/about-us";
import Home from "./pages/home";
import Contact from "./pages/contact";
import ProductList from "./pages/products";

function Router() {
  return (
    <div style={{ minHeight: "82.6vh" }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<ProductList />} />
      </Routes>
    </div>
  );
}

export default Router;
