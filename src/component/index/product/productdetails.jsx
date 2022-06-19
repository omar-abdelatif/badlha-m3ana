import React from 'react';
import { useParams } from 'react-router-dom';
import RelatedItems from './related';

function ProductDetails({ data }) {
    console.log(data.ProductList);
    const { name } = useParams();
    const ProductList = data.ProductList;
    const [Product] = [...ProductList.filter((e) => {
        return e.name === name
    })]
    console.log(Product);
    return (
        <React.Fragment>
            <section className="product-details">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            {Product && (
                                <React.Fragment>
                                    <div className="container">
                                        <div className="crumbs">
                                            <div className="right-crumbs">
                                                <nav dir='rtl'>
                                                    <ol className="breadcrumb" dir='rtl'>
                                                        <li className="breadcrumb-item">
                                                            <a href="/">الرئيسية</a>
                                                        </li>
                                                        <li className="breadcrumb-item"></li>
                                                        <li className="breadcrumb-item">{Product.name}</li>
                                                    </ol>
                                                </nav>
                                            </div>
                                            <div className="left-crumbs">
                                                <ul className="breadcrumb" dir='rtl'>
                                                    <li className="breadcrumb-item">
                                                        <a href="/">العودة الي المنتجات</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

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
                                                        <i className="fab fa-facebook-messenger"></i>
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
                                                {/* <img src={Product.img} alt={Product.name} /> */}
                                                <div className='img-details' style={{
                                                    backgroundImage: `url(${Product.img})`,
                                                    backgroundSize: 'cover',
                                                    backgroundPosition: 'center',
                                                    height: '100%'
                                                }} />
                                            </div>
                                            <div className="text-data">
                                                <table className="table table-striped table-bordered text-center">
                                                    <tbody>
                                                        <tr>
                                                            <td>الإسم</td>
                                                            <td>{Product.name}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>المدينة</td>
                                                            <td>{Product.city}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>مالك السلعة</td>
                                                            <td>{Product.owner}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>رقم التلفون</td>
                                                            <td>
                                                                <a href={`tel:${Product.tel}`}>{Product.tel}</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>رغبة التبديل</td>
                                                            <td>{Product.withwhat}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>سمات المنتج</td>
                                                            <td>{Product.description}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>عجبك المنتج</td>
                                                            <td>
                                                                <button className='btn btn-primary'>
                                                                    <i className="fas fa-exchange-alt"></i>
                                                                    أطلبه
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </React.Fragment>
                            )}
                        </div>
                    </div>
                </div>
            </section>
            <RelatedItems data={data} />
        </React.Fragment>

    );
}

export default ProductDetails;