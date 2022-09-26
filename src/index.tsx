import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {HashRouter} from 'react-router-dom';
import {createTheme, ThemeProvider} from '@mui/material';
import {Provider} from 'react-redux';
import {store} from './stor/store';


const theme = createTheme({
    palette: {
        primary: {
            main: '#41484f'
        },
        secondary: {
            main: '#ff5860'
        }
    },
});

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <HashRouter>
            <ThemeProvider theme={theme}>
                <App/>
            </ThemeProvider>
        </HashRouter>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
