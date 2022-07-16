import React, {FC} from 'react';
import ImageListItem from "@mui/material/ImageListItem";
import style from './photos.module.css'


type PhotosType = {
    height?: string
    width?: string
    borderRadius?: string
    text?: string
}
export const Photos: FC<PhotosType> = ({height = 100, width = 100, borderRadius = 15, text}) => {
    return (
        <div className={style.photoBloc}>
            <ImageListItem>
                < img
                    src={` https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_Ratio0.6800_AL_.jpg`
                    }
                    style={{height: `${height}px`, width: `${width}px`, borderRadius: `${borderRadius}px`}}
                    srcSet={` w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    alt={'item.title'}
                    loading="lazy"
                />
            </ImageListItem>
            {text && <span>{text}.</span>}
        </div>
    );
};

