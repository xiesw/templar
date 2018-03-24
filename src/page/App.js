import React, {Component} from 'react';
import '../style/App.css';
import {BrowserRouter, Router, Route, Switch} from 'react-router-dom';
import TestPage from "./TestPage";
import HomePage from "./HomePage";

class App extends Component {
  render() {
    return (
      <BrowserRouter component={HomePage}>
        <Switch>
          <Route path="home" component={HomePage}/>
          <Route path="test" component={TestPage}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
