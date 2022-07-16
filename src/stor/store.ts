import {applyMiddleware, combineReducers, compose, legacy_createStore} from "redux";
import {ActionMovieGalleryReducer, MovieGalleryReducer} from "./movieGalleryReducer";
import thunk, {ThunkDispatch, ThunkAction} from "redux-thunk";


const rootReducer = combineReducers({
    movieGallery: MovieGalleryReducer
})
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

type AppActionsType = ActionMovieGalleryReducer
// export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ThunkDispatch<AppStateType, unknown, AppActionsType>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, AppActionsType>
