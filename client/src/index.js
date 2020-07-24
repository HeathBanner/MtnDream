import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';

import { MediaProvider } from './Context/MediaQuery';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <BrowserRouter>
        <MediaProvider>
            <App /> 
        </MediaProvider>
    </BrowserRouter>,
document.getElementById('root'));

serviceWorker.unregister();
