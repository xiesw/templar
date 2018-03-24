import React, {Component} from 'react';
import '../style/App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import AboutPage from "./AboutPage";
import HomePage from "./HomePage";

class App extends Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <Switch>
            <Route path="/about" component={AboutPage}/>

            <Route path="/" component={HomePage}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
