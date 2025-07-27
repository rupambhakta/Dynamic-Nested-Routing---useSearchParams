import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/:categoryId" element={<Products />} />
        <Route path="/:categoryId/:productId" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
