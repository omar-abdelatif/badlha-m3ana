function Footer() {
    return (
        <footer dir="ltr">
            <div className="container">
                <div className="row justify-content-center footer-content">
                    <div className="col-lg-4">
                        <div className="follow">
                            <h5 className="text-center">تابعنا</h5>
                            <div className="social-links">
                                <a href="https://www.facebook.com/">
                                    <i className="fab fa-facebook"></i>
                                </a>
                                <a href="https://twitter.com/">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="https://www.instagram.com/">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="https://www.linkedin.com/">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="info">
                            <h5 className="text-center">معلومات</h5>
                            <ul className="list-unstyled">
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
                            <h5 className="text-center">روابط</h5>
                            <ul className="list-unstyled">
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
                <div className="copyright-footer">
                        Designed and Developed By
                    <a className="btn" href="https://www.facebook.com/omar.elmalek.5">Omar Abdelatif</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;