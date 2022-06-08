function UpperFooter() {
    return (
        <section className="upper-footer" dir="ltr">
            <div className="container">
                <div className="row justify-content-center footer-content">
                    <div className="col-lg-4">
                        <div className="follow">
                            <h5 className="text-center footer-title">تابعنا</h5>
                            <div className="list-unstyled text-center social-links">
                                <a className="btn" href="https://www.facebook.com/">
                                    <i className="fab fa-facebook"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="info">
                            <h5 className="text-center footer-title">معلومات</h5>
                            <ul className="list-unstyled text-center">
                                <li>
                                    <a className="btn" href="/">الشروط والأحكام</a>
                                </li>
                                <li>
                                    <a className="btn" href="/">الخصوصية</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="links">
                            <h5 className="text-center footer-title">روابط</h5>
                            <ul className="list-unstyled text-center">
                                <li>
                                    <a className="btn" href="/">من نحن</a>
                                </li>
                                <li>
                                    <a className="btn" href="/">اتصل بنا</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default UpperFooter;