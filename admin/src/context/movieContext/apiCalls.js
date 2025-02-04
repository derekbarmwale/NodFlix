import axios from "axios"
import { getMoviesFailure, getMoviesStart, 
         getMoviesSuccess, deleteMovieStart, 
         deleteMovieSuccess, deleteMovieFailure, 
        createMovieStart, createMovieSuccess, createMovieFailure } from "./MovieActions"


export const getMovies = async (dispatch) => {
    dispatch(getMoviesStart())
    try {
        const res = await axios.get("/movies",{ headers:{
            token:"Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        }, 
        });

        dispatch(getMoviesSuccess(res.data));

    } catch (error) {
        dispatch(getMoviesFailure())
    }
}

export const createMovie = async (movie, dispatch) =>{
    dispatch(createMovieStart())
    try {
        const res = await axios.post("/movies", movie, {
            headers:{
                token:
                "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });
        dispatch(createMovieSuccess(res.data))

    } catch (error) {
        dispatch(createMovieFailure)
    }
}

// DELETE
export const deleteMovie = async (id,dispatch) => {
    dispatch(deleteMovieStart())
    try {
        await axios.delete("/movies/" + id, {
            headers:{
                token:
                "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
                }
            });
        dispatch(deleteMovieSuccess(id))
    } catch (error) {
        dispatch(deleteMovieFailure())
    }
} 