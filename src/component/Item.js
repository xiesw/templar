/**
 * Created by pain on 2018/3/24.
 */

/**
 * Created by pain on 2018/3/24.
 */

import React, {Component} from 'react';
import '../style/Item.css';
import Api from "../net/Api";
import {getImage} from "../net/data";

export default class Item extends Component {

  constructor(props) {
    super();
    this.data = props.itemData;
    this.image = getImage(this.data.code);
  }

  onClickItem() {
    Api.onEvent(this.data.code)
      .then(response => {
        console.log('pain.xie', response);
      })
      .catch(error => {
        console.log('pain.xie', error)
      });
    window.location.href = this.data.applyUrl;
  }

  render() {
    return (
      <div
        className="itemContainer"
        onClick={() => this.onClickItem()}
      >
        <img src={this.image} className="itemIcon" alt="icon"/>
        <div className="contentContainer">
          <div className="textName">{this.data.name}</div>
          <div className="textDesc">{this.data.recommendDesc}</div>
          <div className="textApply">{`申请人数:`}
            <div className="applyNumber">{`${this.data.joincount}`}</div>
          </div>
        </div>
        <img src={require('../image/rightarrow.png')} className="itemArrow" alt="arrow"/>
      </div>
    );
  }
}

