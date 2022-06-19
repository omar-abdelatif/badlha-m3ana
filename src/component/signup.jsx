// import { Link } from 'react-router-dom';
function Signup({ data }) {
    return (
        <section className="signup">
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <div className="form-text">
                            <h2>تسجيل حساب جديد</h2>
                            <p>أنشأ حسابك الآن في منصة بدلها معايا واضف السلع والخدمات التي ترغب في تبادلها مع العديد من الأشخاص حول جمهورية مصر العربية.</p>
                        </div>

                    </div>
                    <div className="col-8">
                        <div className="signup-form">
                            <form action='' method='post'>
                                <div className="d-flex">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="الاسم" />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control" placeholder="البريد الإلكتروني" />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control" placeholder="كلمة المرور" />
                                    </div>
                                    <div className="form-group">
                                        <select name="" id="" className="form-control">
                                            {data.Area.map(item => (
                                                <option key={item.name} value={item.name}>{item.name}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input type="number" className="form-control text-center w-100" placeholder="التلفون المحمول" />
                                </div>
                                <div className="form-group d-block">
                                    <button type="submit" className="btn btn-primary text-center w-100">تسجيل</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Signup;