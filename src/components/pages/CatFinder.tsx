import { useSelector } from "react-redux";
import { RootState } from "@store/index";

import CatList from "components/shared/CatList";

const CatFinder = () => {
    const cats = useSelector((state: RootState) => state.cats.cats )

    return (
        <>
            <h1>CatFinder</h1>

            <CatList cats={cats} />
        </>
    )
}

export default CatFinder;