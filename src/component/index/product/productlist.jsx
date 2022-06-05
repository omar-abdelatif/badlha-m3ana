import { Link } from 'react-router-dom';
function ProductList({ data }) {
    return (
        <section className="product-list">
            <div className="container">
                <div className="row justify-content-center">
                    {data.ProductList.map(list => (
                        <div className="col-xl-3 col-md-4 col-sm-6 col-xs-12" key={list.name}>
                            <div className="product-item">
                                <div className="product-thumb text-center">
                                    <Link to={`/product/${list.name}`}>
                                        <img src={list.img} alt={list.name} />
                                    </Link>
                                </div>
                                <div className="product-info">
                                    <div className="product-texts text-center">
                                        <div className="time">
                                            <span className="time-text">{list.date}</span>
                                            <i className="fad fa-clock"></i>
                                        </div>
                                        <div className="location">
                                            <span className="location-text">{list.city}</span>
                                            <i className="fad fa-map-marker-alt"></i>
                                        </div>
                                    </div>
                                    <h3 className="text-center product-title">
                                        <Link className='btn' to={`/product/${list.name}`}>{list.name}</Link>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section >
    );
}

export default ProductList;