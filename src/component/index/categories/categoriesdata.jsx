import { useParams } from 'react-router-dom';
function CategoriesData() {
    const { catname } = useParams();
    return (
        <div className="categories-data">
            <h1>This Is {catname}</h1>
        </div>
    );
}

export default CategoriesData;