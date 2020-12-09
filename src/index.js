import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Router, Route, IndexRoute, route} from "react-router-3";
import hashHistory from "react-router-3/lib/hashHistory";
import MyGoogleMap from "./components/googlemap/mygooglemap";
import {Provider} from "react-redux";
import store from "./app/store";
import MyRouter from "./myrouter";


ReactDOM.render(
    (
        <Provider store={store}>
           <MyRouter />
        </Provider>

    ),
  document.getElementById('root')
);


