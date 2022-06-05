import ReactPaginate from 'react-paginate';

function ProductList({ displayproducts, pagecount, changePage }) {
    return (
        <section className="product-list">
            <div className="container">
                <div className="row justify-content-center">
                    {displayproducts}
                    <ReactPaginate
                        previousLabel={'السابق'}
                        nextLabel={'التالي'}
                        breakLabel={'...'}
                        breakClassName={'break-me'}
                        pageCount={pagecount}
                        pageRangeDisplayed={5}
                        onPageChange={changePage}
                        containerClassName={'pagination'}
                        subContainerClassName={'pages pagination'}
                        // activeClassName={'activePagination'}
                        previousLinkClassName={'previousBttn'}
                        nextLinkClassName={'nextBttn'}
                        disabledClassName={'disabledPagination'}
                        activeLinkClassName={'activePagination'}
                        // pageLinkClassName={'pageBttn'}
                        pageClassName={'pageBttn'}
                    />
                </div>
            </div>
        </section >
    );
}

export default ProductList;