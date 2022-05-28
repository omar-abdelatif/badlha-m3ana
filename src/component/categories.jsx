function Categories() {
    const catArr = [
        {
            id: 1,
            icon: 'fa fa-home',
        },
        {
            id: 2,
            icon: 'fa fa-home',
        },
        {
            id: 3,
            icon: 'fa fa-home',
        },
        {
            id: 4,
            icon: 'fa fa-home',
        },
        {
            id: 5,
            icon: 'fa fa-home',
        },
        {
            id: 6,
            icon: 'fa fa-home',
        },
        {
            id: 7,
            icon: 'fa fa-home',
        },
        {
            id: 8,
            icon: 'fa fa-home',
        },
        {
            id: 9,
            icon: 'fa fa-home',
        },
        {
            id: 10,
            icon: 'fa fa-home',
        },
        {
            id: 11,
            icon: 'fa fa-home',
        },
        {
            id: 12,
            icon: 'fa fa-home',
        },
        {
            id: 13,
            icon: 'fa fa-home',
        },
        {
            id: 14,
            icon: 'fa fa-home',
        },
        {
            id: 15,
            icon: 'fa fa-home',
        },
        {
            id: 16,
            icon: 'fa fa-home',
        }
    ]
    return (
        <section className="categories">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="row">
                            {catArr.map(item => (
                                <div className="col" key={item.id}>
                                    <div className="cat-item">
                                        <div className="cat-item-icon">
                                            <i className={item.icon}></i>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Categories;