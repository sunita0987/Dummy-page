import { useState } from "react";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Products from "./components/Products";
import ProductDetail from "./components/ProductDetail";
import Contact from "./components/Contact";
import Form from "./components/Form";
import Link2 from "./components/Link-2";
import NotFound from "./components/NotFound";
function App() {
  return (
    <Router>
      <Layout></Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path="/contact" element={<Contact />} />
            <Route path="form" element={<Form />} />
            <Route path="link2" element={<Link2 />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </Router>
  );
}
export default App;
