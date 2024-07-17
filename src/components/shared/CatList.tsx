import { Link } from "react-router-dom";

interface CatProps {
    id: string;
    name: string;
}

interface CatListProps {
    items: CatProps[];
}

const CatList = ({items}: CatListProps) => {
    return (
        <>
            <h2>cat list!</h2>

            {items.map(cat => (
                <Link to={`/cat-finder/${cat.id}`}>
                    <div key={cat.id}>
                        <h3>{cat.name}</h3>
                    </div>
                </Link>
            ))}
        </>
    )
}

export default CatList;