import { Dispatch } from "@reduxjs/toolkit";
import { catsActions } from "./cats-slice";

import { format } from "date-fns";

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

export const fetchCats = () => {
    // Once I build a backend I'll replace the dummy data with stored cat data

    const DUMMY_LIST = {
        cats: [
        {
            id: 'c1',
            name: 'Andromeda',
            image: '',
            description: '',
            location: '',
            dateFound: new Date(2023, 1, 12),
            status: '',
            contact: '',
            longDescription: '',
        },
        {
            id: 'c2',
            name: 'Yuki',
            image: '',
            description: '',
            location: '',
            dateFound: new Date(2022, 1, 5),
            status: '',
            contact: '',
            longDescription: '',
        },
        {
            id: 'c3',
            name: 'Leah',
            image: '',
            description: '',
            location: '',
            dateFound: new Date(2021, 1, 7),
            status: '',
            contact: '',
            longDescription: '',
        }
        ]
    };

    // replace with async function to get cats from a DB once that's built
    return (dispatch: Dispatch) => {
        dispatch(catsActions.replaceCats(DUMMY_LIST));
    }
}