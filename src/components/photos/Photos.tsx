import React, {FC} from 'react';
import ImageListItem from '@mui/material/ImageListItem';
import style from './photos.module.css'

export const Photos: FC<PhotosType> = ({height = 100, width = 100, borderRadius = 15, text, src}) => {
    return (
        <div className={style.photoBloc}>
            <ImageListItem>
                < img
                    src={src}
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
//type
type PhotosType = {
    height?: string
    width?: string
    borderRadius?: string
    text?: string
    src?: string
}

