import {AppDispatch, AppThunk} from "./store";
import {api} from "../api/api";
import {sortData} from "../common/sortData";

export type MovieDataType = {
    id: string | null
    image: string | null
    title: string | null
    year: string | null
    releaseDate: string | null
    runtimeStr: string | null
    plot: string | null
    stars: string | null
    actorList: {
        id: string | null
        image: string | null
        name: string | null
        asCharacter: string | null
    }
    genres: string | null
    countries: string | null
    imDbRating: string | null
    wikipedia: { imDbId: string | null, plainText: string | null }
    videoId: string | null
}
export type ActionMoviePageReducer = ReturnType<typeof setInfoMovies>
let initialState = {
    movieData: {
        id: null,
        image: null,
        title: null,
        year: null,
        releaseDate: null,
        runtimeStr: null,
        plot: null,
        stars: null,
        actorList: {
            id: null,
            image: null,
            name: null,
            asCharacter: null,
        },
        genres: null,
        countries: null,
        imDbRating: null,
        wikipedia: {imDbId: null, plainText: null},
        videoId: null,
    } as MovieDataType
}

type InitialStateType = typeof initialState

export const MoviePageReducer = (state = initialState, action: ActionMoviePageReducer): InitialStateType => {
    switch (action.type) {
        case "SET_INFO_MOVIES":
            return {
                ...state,
                movieData: action.payload
            }
        default:
            return state
    }
}
const SET_INFO_MOVIES = 'SET_INFO_MOVIES'


export const setInfoMovies = (payload: MovieDataType) => ({
    type: SET_INFO_MOVIES,
    payload
}) as const


export const fetchInfoMovie = (id: string): AppThunk => async (dispatch: AppDispatch) => {

    const response = await Promise.allSettled([api.fetchInfoMovie(id), api.fetchYouTubeTrailer(id)])
    let sortResponse = sortData(response, Object.keys(initialState.movieData))
    dispatch(setInfoMovies(sortResponse))
}