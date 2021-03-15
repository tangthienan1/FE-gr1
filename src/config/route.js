import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";
import Base from '../components/Base/index'
import Home from '../pages/Homepage/index'


function RouteWay() {
    return (
        <Router>
            <div className="App">
                <Route path="/" exact component={Home} />
                <Route path="/dashboard/" component={Base} />
            </div>
        </Router>
    )
}

export default RouteWay
