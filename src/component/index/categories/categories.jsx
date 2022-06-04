import { Link } from 'react-router-dom';
function Categories() {
    const catArr = [
        {
            id: 1,
            icon: 'fad fa-car-alt',
            class: 'cat-item-icon bg-primary',
            catname: 'سيارات',
        },
        {
            id: 3,
            icon: 'fad fa-tshirt',
            class: 'cat-item-icon bg-success',
            catname: 'ملابس',
        },
        {
            id: 4,
            icon: 'fad fa-gamepad',
            class: 'cat-item-icon bg-danger',
            catname: 'ألعاب',
        },
        {
            id: 5,
            icon: 'fad fa-mobile-alt',
            class: 'cat-item-icon bg-info',
            catname: 'موبيلات',
        },
        {
            id: 6,
            icon: 'fad fa-dumbbell',
            class: 'cat-item-icon bg-dark',
            catname: 'رياضة',
        },
        {
            id: 7,
            icon: 'fad fa-dog-leashed',
            class: 'cat-item-icon bg-secondary',
            catname: 'حيوانات',
        },
        {
            id: 8,
            icon: 'fad fa-tools',
            class: 'cat-item-icon bg-primary bg-gradient',
            catname: 'ادوات',
        },
        {
            id: 9,
            icon: 'fad fa-laptop',
            class: 'cat-item-icon bg-warning bg-gradient',
            catname: 'إلكترونيات',
        },
        {
            id: 10,
            icon: 'fad fa-baby-carriage',
            class: 'cat-item-icon bg-success bg-gradient',
            catname: 'أطفال',
        },
        {
            id: 11,
            icon: 'fad fa-couch',
            class: 'cat-item-icon bg-danger bg-gradient',
            catname: 'أثاث',
        },
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
                                        <Link className='btn' to={`/categories/${item.catname}`}>
                                            <div className={item.class}>
                                                <i className={item.icon}></i>
                                            </div>
                                            <h6>{item.catname}</h6>
                                        </Link>
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