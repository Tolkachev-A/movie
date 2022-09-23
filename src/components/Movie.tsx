import * as React from 'react';
import {MovieCard} from './movieCard/MovieCard';
import '../App.css'
import {useAppDispatch, useAppSelector} from '../common/hooks/appHooks';
import {fetchInfoMovie} from '../stor/moviePageReducer';


export const Movie = () => {
    const dispatch = useAppDispatch()
    const itemsMovie = useAppSelector(state => state.movieGallery.itemsMovie)


    return (
        <div className={'movie'}>
            {itemsMovie.map(item => {
                return <MovieCard key={item.id}
                                  id={item.id}
                                  image={item.image}
                                  title={item.title}
                                  imDbRating={item.imDbRating}
                                  year={item.description}
                />
            })}
        </div>

    )
        ;
}

