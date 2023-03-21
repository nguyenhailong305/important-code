import React from "react";
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch
} from "react-router-dom";
import * as pages from '../pages'

export default function ItemRouter() {
    return (
        <div>
            <Router>
                <Switch>
                    <Redirect exact from="/" to="/home" />
                    <Route index path="/home" component={pages.HomePage} />
                    <Route index path="/about" component={pages.About} />
                    <Route index path="/product" component={pages.Product} />
                </Switch>
            </Router>
        </div>
    );
}
