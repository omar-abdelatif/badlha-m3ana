import React from 'react';
import Navbar from './component/navbar/nav';
import Slogan from './component/slogan';
import Categories from './component/categories';
import Footer from './component/footer';
function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Slogan />
      <Categories />
      <Footer />
    </React.Fragment>
  );
}
export default App;
