import React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

export const Loading = () => {
    return (
        <Stack sx={{color: '#ff5860'}} spacing={2} direction="row">
            <CircularProgress color="secondary"/>
        </Stack>
    );
};


