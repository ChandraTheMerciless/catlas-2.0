import { Link } from "react-router-dom";
import { CatListState } from "@store/types";

const CatList = ({cats}: CatListState) => {
    return (
        <>
            <h2>cat list!</h2>

            {cats.length > 0 && 
                <div className="cat-list">
                    {cats.map((cat, idx) => (
                        <div className="card-wrapper">
                            <Link key={`${cat.name}-${idx}`} to={`/cat-finder/${cat.id}`}>
                                <h3>{cat.name}</h3>
                                <img src={cat.image} alt="" aria-hidden />
                            </Link>
                        </div>
                    ))}
                </div>
            }
        </>
    )
}

export default CatList;