import React from 'react';
import Navbar from './component/header/navbar/nav';
import Slogan from './component/header/slogan';
import Categories from './component/header/categories';
import ProductDetails from './component/index/product/productdetails';
import Index from './component/index/product/index';
import Footer from './component/footer';
import { Routes, Route } from 'react-router-dom';
import Data from ''
function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Slogan />
      <Categories />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/product/:name" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
}
export default App;
