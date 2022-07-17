import {AppDispatch, AppThunk} from "./store";
import {api} from "../api/api";

type ItemsMostPopularMoviesType = {

    id: string
    image: string
    title: string
    description: string
    runtimeStr: string
    genres: string
    genreList: [key: string, value: string]
    contentRating: string
    imDbRating: string
    imDbRatingVotes: string
    metacriticRating: string
    plot: string
    stars: string
    starList: [id: string, name: string]
}
export type ActionMovieGalleryReducer = ReturnType<typeof setMostPopularMovies>
let initialState = {
    itemsMovie: [] as Array<ItemsMostPopularMoviesType>
}

type InitialStateType = typeof initialState

export const MovieGalleryReducer = (state = initialState, action: ActionMovieGalleryReducer): InitialStateType => {
    switch (action.type) {
        case "SET_POPULAR_MOVIES":
            return {
                ...state,
                itemsMovie: action.payload
            }
        default:
            return state
    }
}
const SET_POPULAR_MOVIES = 'SET_POPULAR_MOVIES'


export const setMostPopularMovies = (payload: Array<ItemsMostPopularMoviesType>) => ({
    type: SET_POPULAR_MOVIES,
    payload
}) as const

export const fetchMovies = (): AppThunk => async (dispatch: AppDispatch) => {
    const response = await api.fetchMovies()
    dispatch(setMostPopularMovies(response))
}