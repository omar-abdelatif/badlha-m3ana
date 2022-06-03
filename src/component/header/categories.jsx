import { Link } from 'react-router-dom';
function Categories() {
    const catArr = [
        {
            id: 1,
            icon: 'fad fa-car-alt',
            class: 'cat-item-icon bg-primary',
            title: 'سيارات',
        },
        {
            id: 2,
            icon: 'fad fa-house',
            class: 'cat-item-icon bg-warning',
            title: 'عقارات',
        },
        {
            id: 3,
            icon: 'fad fa-tshirt',
            class: 'cat-item-icon bg-success',
            title: 'ملابس',
        },
        {
            id: 4,
            icon: 'fad fa-gamepad',
            class: 'cat-item-icon bg-danger',
            title: 'ألعاب',
        },
        {
            id: 5,
            icon: 'fad fa-mobile-alt',
            class: 'cat-item-icon bg-info',
            title: 'موبيلات',
        },
        {
            id: 6,
            icon: 'fad fa-dumbbell',
            class: 'cat-item-icon bg-dark',
            title: 'رياضة',
        },
        {
            id: 7,
            icon: 'fad fa-dog-leashed',
            class: 'cat-item-icon bg-secondary',
            title: 'حيوانات',
        },
        {
            id: 8,
            icon: 'fad fa-tools',
            class: 'cat-item-icon bg-primary bg-gradient',
            title: 'ادوات',
        },
        {
            id: 9,
            icon: 'fad fa-laptop',
            class: 'cat-item-icon bg-warning bg-gradient',
            title: 'إلكترونيات',
        },
        {
            id: 10,
            icon: 'fad fa-baby-carriage',
            class: 'cat-item-icon bg-success bg-gradient',
            title: 'أطفال',
        },
        {
            id: 11,
            icon: 'fad fa-couch',
            class: 'cat-item-icon bg-danger bg-gradient',
            title: 'أثاث',
        },
    ]
    return (
        <section className="categories">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="row">
                            {catArr.map(item => (
                                <div className="col" key={item.id}>
                                    <div className="cat-item">
                                        <Link className='btn' to={`/categories/${item.id}`}>
                                            <div className={item.class}>
                                                <i className={item.icon}></i>
                                            </div>
                                            <h6>{item.title}</h6>
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