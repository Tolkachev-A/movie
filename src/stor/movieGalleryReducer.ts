import {AppDispatch, AppThunk} from './store';
import {api, ItemsMostPopularMoviesType} from '../api/api';

export const initialStateGallery = {
    itemsMovie: [] as Array<ItemsMostPopularMoviesType>,
    isInitialized: false,
    loading: false
}


export const MovieGalleryReducer = (state = initialStateGallery, action: ActionMovieGalleryReducer): InitialStateType => {
    switch (action.type) {
        case 'SET_POPULAR_MOVIES':
            return {
                ...state,
                itemsMovie: action.payload
            }
        case 'SET_LOADING':
            return {
                ...state,
                loading: action.payload
            }
        case 'SET_INITIALIZED':
            return {
                ...state,
                isInitialized: action.payload
            }
        default:
            return state
    }
}

//action
export const setMostPopularMovies = (payload: Array<ItemsMostPopularMoviesType>) =>
    ({type: 'SET_POPULAR_MOVIES', payload} as const)
export const setLoading = (payload: boolean) =>
    ({type: 'SET_LOADING', payload} as const)
export const setInitialized = (payload: boolean) =>
    ({type: 'SET_INITIALIZED', payload} as const)
//thunk
export const fetchMovies = (): AppThunk => async (dispatch: AppDispatch) => {
    try {
        dispatch(setLoading(true))
        const res = await api.fetchMovies()
        dispatch(setMostPopularMovies(res))
    } catch (e) {

    } finally {
        dispatch(setLoading(false))
        dispatch(setInitialized(true))
    }

}
//type
export type ActionMovieGalleryReducer =
    ReturnType<typeof setMostPopularMovies>
    | ReturnType<typeof setLoading>
    | ReturnType<typeof setInitialized>
type InitialStateType = typeof initialStateGallery
