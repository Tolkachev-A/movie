import * as React from 'react';
import Box from "@mui/material/Box";
import {Grid} from "@mui/material";
import {MovieCard} from "./movieCard/MovieCard";
import '../App.css'
import {useAppSelector} from "../hooks/appHooks";

export const Movie = () => {
    const itemsMovie = useAppSelector(state => state.movieGallery.itemsMovie)


    return (

        <Grid container spacing={4} className={'movie'}>
            {itemsMovie.map(item => {
                return <MovieCard image={item.image}
                                  title={item.title}
                                  imDbRating={item.imDbRating}
                                  key={item.id}
                />
            })}


        </Grid>

    )
        ;
}

