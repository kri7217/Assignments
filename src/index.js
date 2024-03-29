import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import Reducer from './store/reducer/reducer'
import thunk from 'redux-thunk'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Appstore = createStore(Reducer,applyMiddleware(thunk))

ReactDOM.render(<Provider store={Appstore}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
