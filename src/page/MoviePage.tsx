import React, {useEffect} from 'react';
import '../App.css'
import Typography from '@mui/material/Typography';
import {RatingMove} from '../components/Rating';
import {Descriptions} from '../components/Descriptions';
import {Photos} from '../components/photos/Photos';
import {Video} from '../components/Video';
import {useAppDispatch, useAppSelector} from '../hooks/appHooks';
import {fetchInfoMovie} from '../stor/moviePageReducer';
import {useParams} from 'react-router';

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
                        <div className={'borderBox'}>
                        </div>
                        <div className={'imagesList'}>
                            <Photos src={movieData.image}/>
                            <Photos src={movieData.image}/>
                            <Photos src={movieData.image}/>
                            <Photos src={movieData.image}/>
                            <Photos src={movieData.image}/>
                        </div>
                    </div>
                    <div className={'boxContainer'}>
                        <Typography component="span">
                            CAST
                        </Typography>
                        <div className={'borderBox'}>
                        </div>
                        <Photos height={'50'} width={'50'} borderRadius={'5'} text={'Robert Downey Jr'}/>
                    </div>
                    <div className={'boxContainer'}>
                        <Typography component="span">
                            VIDEOS
                        </Typography>
                        <div className={'borderBox'}>
                        </div>
                        <Video/>
                    </div>
                </div>
            </div>
        </div>
    );
};
