import { Link } from 'react-router-dom';
function Categories({ data }) {
    return (
        <section className="categories">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="row">
                            {data.Categories.map(item => (
                                <div className="col" key={item.id}>
                                    <div className="cat-item">
                                        <Link className='btn' to={`/categories/${item.catname}`}>
                                            <div className={item.class}>
                                                <i className={item.icon}></i>
                                            </div>
                                            <h6>{item.catname}</h6>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                            <div className="col-12">
                                <div className="areas">
                                    <select name="" id="" className="form-control">
                                        {data.Area.map(item => (
                                            <option key={item.name} value={item.name}>{item.name}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Categories;