import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
console.log('base url:', baseUrl);

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter basename={baseUrl}>
            <App/>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
