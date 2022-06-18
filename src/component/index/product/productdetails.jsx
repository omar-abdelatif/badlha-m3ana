import { useParams } from 'react-router-dom';
// import { Link } from 'react-router-dom';

function ProductDetails({ data }) {
    console.log(data.ProductList);
    const { name } = useParams();
    const ProductList = data.ProductList;
    const [Product] = [...ProductList.filter((e) => {
        return e.name === name
    })]
    console.log(Product);
    return (
        <section className="product-details">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        {Product && (
                            <div className="content-section text-right">
                                <div className="share-section">
                                    <ul>
                                        <li>
                                            <a href="/">
                                                <i className="fab fa-facebook"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                <i className="fab fa-whatsapp"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                <i className="fas fa-link"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="bg-white">
                                    <div className="thumbnail">
                                        <img src={Product.img} alt={Product.name} />
                                    </div>
                                    <div className="text-data">
                                        <h1 className='title'>{Product.name}</h1>
                                        <p className='price'>{Product.description}</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProductDetails;