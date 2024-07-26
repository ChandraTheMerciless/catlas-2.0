// user state
// Will be filled out later when I implement login stuff

// cats state
export interface CatState {
    id: string;
    name: string;
    image: string;
    description: string;
    location: string;
    dateFound: Date,
    status: string,
    contact?: string,
    longDescription?: string,
}

export interface CatListState {
    cats: CatState[];
}

// Action types
export const REPLACE_CATS = 'REPLACE_CATS';
export const ADD_CAT = 'ADD_CAT';
export const DELETE_CAT = 'DELETE_CAT';
export const UPDATE_CAT = 'UPDATE_CAT';

// Define action interfaces
interface ReplaceCatsAction {
    type: typeof REPLACE_CATS;
    payload: CatListState;
}

interface AddCatAction {
    type: typeof ADD_CAT;
    payload: CatState;
}

interface DeleteCatAction {
    type: typeof DELETE_CAT;
    payload: CatState; // might change to a string for the id
}

interface UpdateCatAction {
    type: typeof UPDATE_CAT;
    payload: CatState;
}

// Combine the action interfaces into a union type
export type AppActions = ReplaceCatsAction | AddCatAction | DeleteCatAction | UpdateCatAction;