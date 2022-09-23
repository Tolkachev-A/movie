import {AppDispatch, AppThunk} from './store';
import {api, ItemsMostPopularMoviesType} from '../api/api';

export const initialStateGallery = {
    itemsMovie: [] as Array<ItemsMostPopularMoviesType>
}


export const MovieGalleryReducer = (state = initialStateGallery, action: ActionMovieGalleryReducer): InitialStateType => {
    switch (action.type) {
        case 'SET_POPULAR_MOVIES':
            return {
                ...state,
                itemsMovie: action.payload
            }
        default:
            return state
    }
}
const SET_POPULAR_MOVIES = 'SET_POPULAR_MOVIES'

//action
export const setMostPopularMovies = (payload: Array<ItemsMostPopularMoviesType>) =>
    ({type: SET_POPULAR_MOVIES, payload}) as const
//thunk
export const fetchMovies = (): AppThunk => async (dispatch: AppDispatch) => {
    const res = await api.fetchMovies()
    dispatch(setMostPopularMovies(res))
}
//type
export type ActionMovieGalleryReducer = ReturnType<typeof setMostPopularMovies>
type InitialStateType = typeof initialStateGallery
