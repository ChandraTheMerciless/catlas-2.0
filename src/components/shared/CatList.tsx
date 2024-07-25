import { Link } from "react-router-dom";
import { CatListState } from "@store/types";

const CatList = ({cats}: CatListState) => {
    return (
        <>
            <h2>cat list!</h2>

            {cats.map((cat, idx) => (
                <Link key={`${cat.name}-${idx}`} to={`/cat-finder/${cat.id}`}>
                    <div>
                        <h3>{cat.name}</h3>
                    </div>
                </Link>
            ))}
        </>
    )
}

export default CatList;