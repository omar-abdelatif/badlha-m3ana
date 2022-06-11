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
                                        <option value="">المنطقة</option>
                                        <option value="">القاهرة</option>
                                        <option value="">الجيزة</option>
                                        <option value="">الأسكندرية</option>
                                        <option value="">الدقهلية</option>
                                        <option value="">الشرقية</option>
                                        <option value="">المنوفية</option>
                                        <option value="">القليوبية</option>
                                        <option value="">البحيرة</option>
                                        <option value="">الغربية</option>
                                        <option value="">بور سعيد</option>
                                        <option value="">دمياط</option>
                                        <option value="">الإسماعلية</option>
                                        <option value="">السويس</option>
                                        <option value="">كفر الشيخ</option>
                                        <option value="">الفيوم</option>
                                        <option value="">بني سويف</option>
                                        <option value="">مطروح</option>
                                        <option value="">شمال سيناء</option>
                                        <option value="">جنوب سيناء</option>
                                        <option value="">المنيا</option>
                                        <option value="">أسيوط</option>
                                        <option value="">سوهاج</option>
                                        <option value="">قنا</option>
                                        <option value="">البحر الأحمر</option>
                                        <option value="">الأقصر</option>
                                        <option value="">أسوان</option>
                                        <option value="">الوادي الجديد</option>
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