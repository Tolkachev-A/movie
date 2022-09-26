import React, {useEffect, useState} from 'react';
import '../App.css'
import Typography from '@mui/material/Typography';
import {RatingMove} from '../components/Rating';
import {Descriptions} from '../components/Descriptions';
import {Photos} from '../components/photos/Photos';
import {Video} from '../components/Video';
import {useAppDispatch, useAppSelector} from '../common/hooks/appHooks';
import {fetchInfoMovie,} from '../stor/moviePageReducer';
import {useParams} from 'react-router';
import Box from '@mui/material/Box';
import {Loading} from '../common/components/Loading/Loading';
import Button from '@mui/material/Button';
import {BasicModal} from '../common/components/Modal/Modal';
import {Btn} from '../common/components/Button/Button';


export const MoviePage = () => {
    const [itemsImage, setItemsImage] = useState<{ title: string; image: string; }[]>()

    const {id} = useParams()

    const loading = useAppSelector(state => state.movieGallery.loading)
    const movieData = useAppSelector(state => state.moviePage.movieData)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (movieData.items && movieData.items.length > 0) {
            setItemsImage([movieData.items[0], movieData.items[1], movieData.items[2], movieData.items[3]])
        }
    }, [movieData.items])

    useEffect(() => {
        id && dispatch(fetchInfoMovie(id))
    }, [])


    if (loading || Object.keys(movieData).length === 0) {
        return <Loading/>
    }

    return (
        <div className={'containerBody movieBloc'}>

            <div className={'infoContainer'}>
                <div className={'posterBlock'}>
                    <div className={'poster'}>
                        <Photos src={movieData.image} borderRadius={'0'}/>
                        <BasicModal
                            childrenBtn={<Btn title={'WATCH TRAILER'}/>}>
                            <Video videoId={movieData.videoId}/>
                        </BasicModal>

                    </div>
                </div>
                <Box sx={{width: '100%', display: 'flex', justifyContent: 'center'}}>
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
                                {itemsImage && itemsImage.map((item, key) => <Photos key={key} src={item.image}/>)}
                            </div>
                        </div>
                        <Box className={'boxContainer castItems'}>
                            <Typography component="span">
                                CAST
                            </Typography>
                            <span className={'borderBox '}/>
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
                            <Video videoId={movieData.videoId}/>
                        </div>
                    </div>
                </Box>
            </div>
        </div>
    );
};
