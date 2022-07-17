import * as React from 'react';
import {Grid} from "@mui/material";
import {MovieCard} from "./movieCard/MovieCard";
import '../App.css'
import {useAppDispatch, useAppSelector} from "../hooks/appHooks";
import {fetchInfoMovie} from "../stor/moviePageReducer";


export const Movie = () => {
    const dispatch = useAppDispatch()
    const itemsMovie = useAppSelector(state => state.movieGallery.itemsMovie)

    function movieClickHandler(id: string) {
        dispatch(fetchInfoMovie(id))
    }

    return (
        <Grid container spacing={4} className={'movie'}>
            {itemsMovie.map(item => {
                return <MovieCard key={item.id}
                                  id={item.id}
                                  image={item.image}
                                  title={item.title}
                                  imDbRating={item.imDbRating}
                                  year={item.description}
                                  movieClickHandler={movieClickHandler}

                />
            })}


        </Grid>

    )
        ;
}

