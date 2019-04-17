import React from 'react';
import { Route } from "react-router-dom";
import Style from "../Styles/App.module.css";
import Best from "./Stories/Best";
import New from "./Stories/New";
import Top from "./Stories/Top";
// import PageNotFound from "./PageNotFound";

export const Routes = () => (
    <div className={Style.content}>
        <Route exact path="/" component={Top} />
        <Route path="/newest" component={New} />
        <Route path="/best" component={Best} />
        {/* <Route component={PageNotFound} /> */}
    </div>
)