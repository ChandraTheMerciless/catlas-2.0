import { useSelector } from "react-redux";
import { RootState } from "@store/index";

import CatList from "components/shared/CatList";


// Some object details that Cody generated. Holding on to this for later in case it has something I don't think of.
// {
//     id: 'c1',
//     name: 'Cat 1',
//     image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
//     description: 'This is a description of Cat 1',
//     location: 'This is a location of Cat 1',
//     date: 'This is a date of Cat 1',
//     status: 'This is a status of Cat 1',
//     contact: 'This is a contact of Cat 1',
//     notes: 'This is a notes of Cat 1',
//     createdAt: 'This is a createdAt of Cat 1',
//     updatedAt: 'This is a updatedAt of Cat 1',
// }

// To be moved to redux storage

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