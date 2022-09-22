import React from 'react';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';


export const RatingMove = (props: RatingMoveParams) => {
    return (
        <div className={'rating'}>
            <Typography variant="h6" component="span"
                        sx={{color: 'white', marginRight: '15px'}}>
                Rating This Movie:
            </Typography>
            <Stack spacing={2}>
                <Rating name="half-rating-read" value={props.rating} precision={0.5} max={10} readOnly
                        sx={{color: 'red !important', borderColor: 'white'}}/>
            </Stack>
        </div>

    );
};
//type
type RatingMoveParams = {
    rating: number
}
