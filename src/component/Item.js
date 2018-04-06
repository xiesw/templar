/**
 * Created by pain on 2018/3/24.
 */

/**
 * Created by pain on 2018/3/24.
 */

import React, {Component} from 'react';
import '../style/Item.css';
import Api from "../net/Api";
import Utils from "../util/Utils";

export default class Item extends Component {

  constructor(props) {
    super();
    this.data = props.itemData;
  }

  onClickItem() {
    let id = Utils.getId();
    id = id ? id : '';
    Api.onEvent(id, this.data.code)
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
        <img src={require(`../image/${this.data.imagepath}`)} className="itemIcon" alt="icon"/>
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

