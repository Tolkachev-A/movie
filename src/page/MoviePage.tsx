import React from 'react';
import {MovieImg} from "../components/movieCard/MovieImg";
import '../App.css'
import Typography from "@mui/material/Typography";
import {RatingMove} from "../components/Rating";
import {Descriptions} from "../components/Descriptions";
import {Photos} from "../components/photos/Photos";
import {Video} from "../components/Video";

export const MoviePage = () => {
    return (
        <div className={'containerBody movieBloc'}>
            {/*<MovieImg height={'550'}/>*/}
            <div className={'infoContainer'}>
                <div className={'infoBloc'}>
                    <Typography variant="h2" component="div"
                                sx={{
                                    color: 'white',
                                    textAlign: 'center',
                                    marginBottom: '50px'
                                }}>
                        Lizard
                    </Typography>

                    <RatingMove/>
                    <Descriptions/>
                    <div className={'boxContainer'}>
                        <Typography component="span">
                            PHOTOS
                        </Typography>
                        <div className={'borderBox'}>
                        </div>
                        <div className={'imagesList'}>
                            <Photos/>
                            <Photos/>
                            <Photos/>
                            <Photos/>
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
