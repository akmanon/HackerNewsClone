import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from "react-router-dom";
import Header from "./Header";
import Ask from "./Stories/Ask";
import Best from "./Stories/Best";
import Job from "./Stories/Job";
import New from "./Stories/New";
import Show from "./Stories/Show";
import Top from "./Stories/Top";

class App extends Component {
  render() {
    return (
        <Router>
          <Header />
          <Route exact path="/" component={Best} />
          <Route path="/ask" component={Ask} />
          <Route path="/job" component={Job} />
          <Route path="/newest" component={New} />
          <Route path="/show" component={Show} />
          <Route path="/top" component={Top} />
        </Router>
    );
  }
}

export default App;