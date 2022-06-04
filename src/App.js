import React from 'react';
import Navbar from './component/header/navbar/nav';
import ProductDetails from './component/index/product/productdetails';
import Index from './component/index/index';
import CategoriesData from './component/index/categories/categoriesdata';
import Footer from './component/footer';
import Data from './component/data/data.json';
import { Routes, Route } from 'react-router-dom';
function App() {
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
