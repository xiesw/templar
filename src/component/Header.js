/**
 * Created by pain on 2018/3/24.
 */


import React, {Component} from 'react';
import '../style/Header.css';

export default class Header extends Component {

  onClickImg() {
    this.props.router.push('test');
  }

  render() {
    return (
      <div className="header">
        <img
          src={require('../image/title_image.png')}
          className="App-logo"
          alt="logo"
          onClick={() => this.onClickImg()}
        />
      </div>
    );
  }
}

