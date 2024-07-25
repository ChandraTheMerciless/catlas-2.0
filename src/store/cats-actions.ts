import { Dispatch } from "@reduxjs/toolkit";
import { catsActions } from "./cats-slice";

export const fetchCats = () => {
    // Once I build a backend I'll replace the dummy data with stored cat data

    const DUMMY_LIST = {
        cats: [
        {
            id: 'c1',
            name: 'Andromeda'
        },
        {
            id: 'c2',
            name: 'Yuki'
        },
        {
            id: 'c3',
            name: 'Leah'
        }
        ]
    };

    // replace with async function to get cats from a DB once that's built
    return (dispatch: Dispatch) => {
        dispatch(catsActions.replaceCats(DUMMY_LIST));
    }
}