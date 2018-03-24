import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from "./page/App";
import HomePage from "./page/HomePage";

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
