import React, {MutableRefObject, useEffect} from 'react';
import CardMedia from '@mui/material/CardMedia';
import style from './movieCard.module.css'

type MovieImgType = {
    height: string
    image: string
    ref: any
    inView: any
}

export const MovieImg = (props: MovieImgType) => {
    useEffect(() => {
        debugger
    }, [props.inView])
    console.log(props.inView)
    return (
        <img
            ref={props.ref}
            className={`${style.cardImg} ${style.dataSrc}`}

            alt="green iguana"
            height={props.height}
            // data-src={props.image}
            src={props.image}
        />

    );
};

