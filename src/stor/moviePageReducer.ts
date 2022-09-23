import {AppDispatch, AppThunk} from './store';
import {api, DataImageMovieType, DataMovieResponseType, DataYuTubeResponseType} from '../api/api';
import {sortData} from '../common/utils/sortData';
import {setLoading} from './movieGalleryReducer';


let initialState = {
    movieData: {} as MovieDataType
}


export const MoviePageReducer = (state = initialState, action: ActionMoviePageReducer): InitialStateType => {
    switch (action.type) {
        case 'SET_INFO_MOVIES':
            return {
                ...state,
                movieData: action.payload
            }
        default:
            return state
    }
}
const SET_INFO_MOVIES = 'SET_INFO_MOVIES'

//action
export const setInfoMovies = (payload: MovieDataType) => ({
    type: SET_INFO_MOVIES,
    payload
}) as const
//thunk
export const fetchInfoMovie = (id: string): AppThunk => async (dispatch: AppDispatch) => {
    try {
        dispatch(setLoading(true))
        const response = await Promise.allSettled([api.fetchInfoMovie(id), api.fetchYouTubeTrailer(id), api.fetchImageMovie(id)])
        let sortResponse = sortData(response)
        dispatch(setInfoMovies(sortResponse))
    } catch (e) {

    } finally {
        dispatch(setLoading(false))
    }
}
//type
export type ActionMoviePageReducer = ReturnType<typeof setInfoMovies>
type InitialStateType = typeof initialState
export type MovieDataType = DataMovieResponseType & DataYuTubeResponseType & DataImageMovieType
