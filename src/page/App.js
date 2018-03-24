import React, {Component} from 'react';
import '../style/App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import AboutPage from "./AboutPage";
import HomePage from "./HomePage";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/about" component={AboutPage}/>

          <Route path="/" component={HomePage}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
