import { useParams } from 'react-router-dom';
function ProductDetails() {
    const { name } = useParams();
    return (
        <section className="product-details">
            <h1>this is {name} product</h1>
        </section>
    );
}

export default ProductDetails;