import axios from "axios";
import { ALLMOVIES, APIURL , apiKey } from "../types/typesMovies"

export const getAllMovie = () => {
    return async (dispatch) => {
      try {
        const res = await axios.get(APIURL);
        dispatch({ type: ALLMOVIES, data: res.data.results, pages: res.data.total_pages });

      } catch (error) {
        console.log(error);
      }
    };
  };

export const getSearchMovies = (word) => {
    return async (dispatch) => {
    try {
        const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${word}&language=en`);
        dispatch({ type: ALLMOVIES, data: res.data.results, pages: res.data.total_pages });
    } catch (error) {
        console.log(error);
    }
    };
};
    

export const getPaginahMovies = (page) => {
    return async (dispatch) => {
    try {
        const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${page}&language=en`);
        dispatch({ type: ALLMOVIES, data: res.data.results, pages: res.data.total_pages });
    } catch (error) {
        console.log(error);
    }
    };
};