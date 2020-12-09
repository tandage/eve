import hashHistory from "react-router-3/lib/hashHistory";
import {IndexRoute, Route, Router} from "react-router-3";
import App from "./App";
import MyGoogleMap from "./components/googlemap/mygooglemap";
import React from "react";

const MyRouter = ()=>{
    return(<Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={MyGoogleMap}/>
            {/*<Route path="new/:id" component={NewDetail} />*/}
            {/*<Route path="favorite" component={Favorite} />*/}
            {/*<Route path="about" component={About}/>*/}
        </Route>
    </Router>)
}
export  default  MyRouter