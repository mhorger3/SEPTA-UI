import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TrainAPI from './trainAPI';
import Header from './header'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Header/>, document.getElementById('main'));
ReactDOM.render(<TrainAPI/>, document.getElementById('content'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
