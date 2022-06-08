function NewsLetter() {
    return (
        <section className="newsletter">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="newsletter-content">
                            <h2 className="text-center">إشترك ليصلك كل جديد</h2>
                            <form className="newsletter-form">
                                <div className="form-group">
                                    <input type="email" className="form-control text-center" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="البريد الإلكتروني" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default NewsLetter;