import {AppDispatch, AppThunk} from './store';
import {api, DataMovieResponseType, DataYuTubeResponseType} from '../api/api';
import {sortData} from '../common/sortData';


export type ActionMoviePageReducer = ReturnType<typeof setInfoMovies>
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
    const response = await Promise.allSettled([api.fetchInfoMovie(id), api.fetchYouTubeTrailer(id)])
    let sortResponse = sortData(response)
    dispatch(setInfoMovies(sortResponse))
}
//type
type InitialStateType = typeof initialState
export type MovieDataType = DataMovieResponseType & DataYuTubeResponseType
