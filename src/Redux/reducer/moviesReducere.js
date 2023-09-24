import { ALLMOVIES } from "../types/typesMovies";



const initialState = { initState: [] , pageCount : 0 }

export const moviesReducer = (state = initialState , action) => {

    switch (action.type) {
        case ALLMOVIES:
            
        return {initState : action.data , pageCount : action.pages}  
    
        default:
            return state;
    }
}