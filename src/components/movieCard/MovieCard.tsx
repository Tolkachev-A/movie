import React, {FC, useCallback, useEffect, useRef, useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import style from './movieCard.module.css'
import Box from '@mui/material/Box';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import IconButton from '@mui/material/IconButton';
import StarIcon from '@mui/icons-material/Star';
import {NavLink} from 'react-router-dom';
import {useInView} from 'react-intersection-observer';

type MovieCardType = {
    id: string
    title: string
    imDbRating: string
    image: string
    year: string
}

export const MovieCard: FC<MovieCardType> = (props) => {
    const {ref, inView, entry} = useInView({
        threshold: 0,
    });
    const [src, setSrc] = useState('')


    useEffect(() => {
        if (inView && src === '') {
            setSrc(props.image)
        }
    }, [inView])
    return (
        <Card className={style.movieBloc}>
            <NavLink to={`/movie/${props.id}`}>
                <Box className={style.movieImg}>
                    <img
                        ref={ref}
                        className={`${style.cardImg} ${style.dataSrc}`}

                        alt="green iguana"
                        data-src={props.image}
                        src={src}
                    />
                    <div className={style.play}>
                        <IconButton size={'large'}
                        >
                            <PlayCircleOutlineIcon/>
                        </IconButton>
                    </div>
                </Box>
            </NavLink>
            <CardContent className={style.movieBody}>
                <Typography gutterBottom variant="h5" component="div" className={style.movieName}>
                    {props.title} <><br/>{props.year.match(/\d/g)} год</>
                </Typography>
                <Typography gutterBottom variant="h6" component="div" className={style.movieRating}>
                    <StarIcon/>
                    <Box component={'span'}>
                        {props.imDbRating}
                    </Box>
                </Typography>
            </CardContent>
        </Card>
    );
};

