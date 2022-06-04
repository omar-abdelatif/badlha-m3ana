import React from 'react';
import Categories from './categories/categories';
import Slogan from './slogan';
import ProductList from './product/productlist';
function Index({ data }) {
    console.log(data);
    return (
        <React.Fragment>
            <Slogan />
            <Categories />
            <ProductList data={data} />
        </React.Fragment>
    );
}

export default Index;