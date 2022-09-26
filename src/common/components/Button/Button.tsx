import React from 'react';
import Button from '@mui/material/Button';
import '../../../App.css'


export const Btn = (props: BtnType) => {
    return (
        <Button variant={'contained'} color={'secondary'} className={'btn'}>
            {props.title}
        </Button>
    );
};
//type
type BtnType = {
    title: string
};

