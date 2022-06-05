import React from 'react';
import ScrollBtn from './scrollbtn';
import Categories from './categories/categories';
import Slogan from './slogan';
import ProductList from './product/productlist';
function Index({ data }) {
    console.log(data);
    return (
        <React.Fragment>
            <ScrollBtn />
            <Slogan />
            <Categories data={data} />
            <ProductList data={data} />
        </React.Fragment>
    );
}
export default Index;