import React from 'react';
import Typography from '@mui/material/Typography';


export const Descriptions = (props: DescriptionsType) => {
    return (
        <Typography component="div"
                    className={'descriptions'}>
            {props.description}
        </Typography>
    );
};
//type
type DescriptionsType = {
    description: string
}