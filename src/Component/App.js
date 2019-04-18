import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./Routes";
import Header from "./Header";
import Footer from "./Footer";


class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Header />
        <Routes />
        <Footer />
      </Router>
    );
  }
}

export default App;