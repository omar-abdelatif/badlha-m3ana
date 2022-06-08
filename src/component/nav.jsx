import { Link, NavLink } from 'react-router-dom';
function Navbar() {
    return (
        <nav>
            <div className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <Link className="navbar-brand" to="/">بدلها معايا</Link>
                    <button className="btn btn-primary menu" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">
                        <i className="fad fa-bars"></i>
                    </button>
                    <div className="offcanvas offcanvas-top" tabIndex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
                        <div className="offcanvas-header">
                            <h5 id="offcanvasTopLabel">Offcanvas top</h5>
                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
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
                                    <option value="">الواحات</option>
                                    <option value="">الوادي الجديد</option>
                                </select>
                            </div>
                            <form className="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            </form>
                            <div className="login">
                                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    تسجيل الدخول
                                </button>

                            </div>
                            <div className="sell">
                                <NavLink to="/sell" className="btn btn-outline-warning">بدل</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            ...
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

    );
}

export default Navbar;