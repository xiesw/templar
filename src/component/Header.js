/**
 * Created by pain on 2018/3/24.
 */

import React, {Component} from 'react';
import '../style/Header.css';

export default class Header extends Component {

  componentDidMount() {
    this.count = 0;
    this.show = false
  }

  onClickImg() {
    //this.props.history.push('/about');
    //window.location.href = "https://segmentfault.com/q/1010000010581469";
    if (!this.show) {
      if (this.count >= 4) {
        let VConsole = require('../util/log/vconsole.min.js');
        let vConsole = new VConsole;
        this.show = true;
      } else {
        this.count++
      }
    }
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

