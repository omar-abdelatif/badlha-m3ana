import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ScrollBtn from './scrollbtn';
import Categories from './categories/categories';
import Slogan from './slogan';
import ProductList from './product/productlist';
function Index({ data }) {
    // console.log(data);
    const [products] = useState(data.ProductList.slice(0, 30));
    const [pageNumber, setPageNumber] = useState(0);
    const productsPerPage = 10;
    const pageVisited = pageNumber * productsPerPage;
    const displayProducts = products.slice(pageVisited, pageVisited + productsPerPage).map(product => (
        <div className="col-xl-3 col-md-4 col-sm-6 col-xs-12" key={product.name}>
            <div className="product-item">
                <div className="product-thumb text-center">
                    <Link to={`/product/${product.name}`}>
                        <img width={270} height={270} src={product.img} alt={product.name} />
                    </Link>
                </div>
                <div className="product-info">
                    <div className="product-texts">
                        <div className="time">
                            <i className="fad fa-clock"></i>
                            <span className="time-text">{product.date}</span>
                        </div>
                        <div className="separator"></div>
                        <div className="location">
                            <i className="fad fa-map-marker-alt"></i>
                            <span className="location-text">{product.city}</span>
                        </div>
                    </div>
                    <h3 className="text-center product-title">
                        <Link className='btn' to={`/product/${product.name}`}>{product.name}</Link>
                    </h3>
                </div>
            </div>
        </div>
    ));
    const pageCount = Math.ceil(products.length / productsPerPage);
    function changepage({ selected }) {
        setPageNumber(selected);
    }
    return (
        <React.Fragment>
            <ScrollBtn />
            <Slogan />
            <Categories data={data} />
            <ProductList data={data} displayproducts={displayProducts} pagecount={pageCount} changePage={changepage} />
        </React.Fragment>
    );
}
export default Index;