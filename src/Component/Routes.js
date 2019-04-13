import React from 'react';
import { Route } from "react-router-dom";
import Style from "../Styles/App.module.css";
import Ask from "./Stories/Ask";
import Best from "./Stories/Best";
import Job from "./Stories/Job";
import New from "./Stories/New";
import Show from "./Stories/Show";
import Top from "./Stories/Top";
// import PageNotFound from "./PageNotFound";

export const Routes = () => (
    <div className={Style.content}>
        <Route exact path="/" component={Top} />
        <Route path="/ask" component={Ask} />
        <Route path="/job" component={Job} />
        <Route path="/newest" component={New} />
        <Route path="/best" component={Best} />
        <Route path="/show" component={Show} />
        {/* <Route component={PageNotFound} /> */}
    </div>
)