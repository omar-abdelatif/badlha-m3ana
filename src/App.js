import React, { useEffect } from 'react';
import Navbar from './component/nav';
import Index from './component/index/index';
import ProductDetails from './component/index/product/productdetails';
import CategoriesData from './component/index/categories/categoriesdata';
import NewsLetter from './component/newsletter';
import UpperFooter from './component/footer/upperfooter';
import Footer from './component/footer/footer';
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
        <Route path="/product/:name" element={<ProductDetails data={Data} />} />
        <Route path="/categories/:catname" element={<CategoriesData />} />
      </Routes>
      <NewsLetter />
      <UpperFooter />
      <Footer />
    </React.Fragment>
  );
}
export default App;
