import ReactPaginate from 'react-paginate';
function ProductList({ displayproducts, pagecount, changePage, data }) {
    return (
        <section className="product-list">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="areas">
                            <select name="" id="" className="form-control">
                                {data.Area.map(item => (
                                    <option key={item.name} value={item.name}>{item.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>
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
                        previousLinkClassName={'previousBttn'}
                        nextLinkClassName={'nextBttn'}
                        disabledClassName={'disabledPagination'}
                        activeLinkClassName={'activePagination'}
                        pageClassName={'pageBttn'}
                        pageLinkClassName={'pageLink'}
                    />
                </div>
            </div>
        </section>
    );
}

export default ProductList;