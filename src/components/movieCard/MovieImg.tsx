import React from 'react';
import CardMedia from "@mui/material/CardMedia";
import style from './movieCard.module.css'

type MovieImgType = {
    height: string
    image: string
}

export const MovieImg = (props: MovieImgType) => {
    return (

        <CardMedia
            className={style.cardImg}
            component="img"
            alt="green iguana"
            height={props.height}
            image={props.image}
        />

    );
};

