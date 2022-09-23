import React, {useEffect} from 'react';
import '../App.css'
import Typography from '@mui/material/Typography';
import {RatingMove} from '../components/Rating';
import {Descriptions} from '../components/Descriptions';
import {Photos} from '../components/photos/Photos';
import {Video} from '../components/Video';
import {useAppDispatch, useAppSelector} from '../common/hooks/appHooks';
import {fetchInfoMovie} from '../stor/moviePageReducer';
import {useParams} from 'react-router';
import Box from '@mui/material/Box';

export const MoviePage = () => {

    const {id} = useParams()

    const movieData = useAppSelector(state => state.moviePage.movieData)
    const dispatch = useAppDispatch()

    useEffect(() => {
        id && dispatch(fetchInfoMovie(id))
    }, [])

    if (Object.keys(movieData).length === 0) {
        return <div>loading</div>
    }

    return (
        <div className={'containerBody movieBloc'}>
            <div className={'infoContainer'}>
                <div className={'infoBloc'}>
                    <Typography variant="h2" component="div"
                                sx={{
                                    color: 'white',
                                    textAlign: 'center',
                                    marginBottom: '50px'
                                }}>
                        {movieData.title}
                    </Typography>

                    <RatingMove rating={+movieData.imDbRating}/>
                    <Descriptions description={movieData.wikipedia.plainText}/>
                    <div className={'boxContainer'}>
                        <Typography component="span">
                            PHOTOS
                        </Typography>
                        <div className={'borderBox'}/>
                        <div className={'imagesList'}>
                            {movieData.actorList.map((item) => <Photos key={item.id} src={item.image}/>)}
                        </div>
                    </div>
                    <Box className={'boxContainer'} sx={{display: 'flex',}}>
                        <Typography component="span">
                            CAST
                        </Typography>
                        <div className={'borderBox'}/>
                        {movieData.actorList.map((item) => <Photos key={item.id}
                                                                   width={'50'}
                                                                   borderRadius={'5'}
                                                                   height={'50'}
                                                                   src={item.image}
                                                                   text={item.name}/>)}
                    </Box>
                    <div className={'boxContainer'}>
                        <Typography component="span">
                            VIDEOS
                        </Typography>
                        <div className={'borderBox'}/>
                        <Video/>
                    </div>
                </div>
            </div>
        </div>
    );
};
