import { Link, NavLink } from 'react-router-dom';
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand" to="/">بدلها معانا</Link>
                <button className="btn btn-primary menu" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">
                    <i className="fad fa-bars"></i>
                </button>
                <div className="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
                    <div className="offcanvas-header">
                        <h5 id="offcanvasTopLabel">Offcanvas top</h5>
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <div className="areas">
                            <select name="" id="" className="form-control">
                                <option value="">المنطقة</option>
                                <option value="">الرياض</option>
                                <option value="">الجدة</option>
                                <option value="">الحائل</option>
                                <option value="">الحدود الشمالية</option>
                                <option value="">الخرطوم</option>
                                <option value="">المدينة المنورة</option>
                                <option value="">المنيا</option>
                                <option value="">المنيا الغربية</option>
                                <option value="">الوادي الجديد</option>
                                <option value="">الوادي الغربي</option>
                                <option value="">الوادي الغربي الجديد</option>
                                <option value="">الوادي الغربي الشمالي</option>
                                <option value="">الوادي الغربي الشمالي الجديد</option>
                                <option value="">الوادي الغربي الشمالي الجديد</option>
                                <option value="">الوادي الغربي الشمالي الجديد</option>
                            </select>
                        </div>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Link</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </NavLink>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><NavLink className="dropdown-item" to="/">Action</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="/">Another action</NavLink></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><NavLink className="dropdown-item" to="/">Something else here</NavLink></li>
                                </ul>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;