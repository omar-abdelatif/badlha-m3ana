import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

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
                    {Product && (
                        <div className="content-section">
                            <div className="share-section"></div>
                            <div className="thumbnail"></div>
                            <div className="text-data"></div>
                        </div>
                    )}
                </div>
            </div>
            <h1>this is {name} product</h1>

        </section>
    );
}

export default ProductDetails;