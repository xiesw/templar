/**
 * Created by pain on 2018/4/15.
 */

import React, {Component} from 'react';
import '../style/LoginPage.css';

export default class LoginPage extends Component {

  componentDidMount() {
    this.data = this.props.location.params;
  }

  render() {
    return (
      <div className="loginPage">
      </div>
    );
  }
}

