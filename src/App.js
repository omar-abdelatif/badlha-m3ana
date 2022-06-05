import React, { useEffect } from 'react';
import Navbar from './component/header/navbar/nav';
import Index from './component/index/index';
import ProductDetails from './component/index/product/productdetails';
import CategoriesData from './component/index/categories/categoriesdata';
import Footer from './component/footer';
import Data from './component/data/data.json';
import { Routes, Route } from 'react-router-dom';
function App() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/js/custom.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Index data={Data} />} />
        <Route path="/product/:name" element={<ProductDetails />} />
        <Route path="/categories/:catname" element={<CategoriesData />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
}
export default App;
