import {applyMiddleware, combineReducers, compose, legacy_createStore} from 'redux';
import {ActionMovieGalleryReducer, initialStateGallery, MovieGalleryReducer} from './movieGalleryReducer';
import thunk, {ThunkDispatch, ThunkAction} from 'redux-thunk';
import {ActionMoviePageReducer, MoviePageReducer} from './moviePageReducer';
import {loadStateGalleryStorage, saveState} from '../common/utils/local-utils';


const rootReducer = combineReducers({
    movieGallery: MovieGalleryReducer,
    moviePage: MoviePageReducer
})

const preloadedState = {
    movieGallery: {
        ...initialStateGallery,
        itemsMovie: loadStateGalleryStorage()
    }
}
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(rootReducer, preloadedState, composeEnhancers(applyMiddleware(thunk)))

store.subscribe(() => {
    saveState({
        movieGallery: {
            itemsMovie: store.getState().movieGallery.itemsMovie
        },
    });
});
//type
type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>
type AppActionsType = ActionMovieGalleryReducer | ActionMoviePageReducer
export type AppDispatch = ThunkDispatch<AppStateType, unknown, AppActionsType>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, AppActionsType>
