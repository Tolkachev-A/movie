import {AppDispatch, AppThunk} from "./store";
import {api} from "../api/api";

type ItemsMostPopularMoviesType = {
    id: string
    rank: string
    rankUpDown: string
    title: string
    fullTitle: string
    year: string
    image: string
    crew: string
    imDbRating: string
    imDbRatingCount: string
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

export const fetchMoviesThank = (): AppThunk => async (dispatch: AppDispatch) => {
    const response = await api.fetchMovies()
    dispatch(setMostPopularMovies(response))
}