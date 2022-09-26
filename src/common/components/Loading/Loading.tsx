import React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

export const Loading = () => {
    return (
        <Stack sx={{color: '#ff5860', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}
               spacing={2}
               direction="row">
            <CircularProgress color="secondary"/>
        </Stack>
    );
};


