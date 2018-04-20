/**
 * Created by pain on 2018/3/24.
 */

import React, {Component} from 'react';
import '../style/Item.css';
import Api from "../net/Api";
import Http from "../net/Http";

export default class Item extends Component {

  constructor(props) {
    super();
    this.data = props.itemData;
  }

  /**
   * 图片加载失败
   */
  onImgError() {
    this.refs.img.src = require('../image/black.png');
  }

  render() {
    return (
      <div
        className="itemContainer"
        onClick={() => this.props.onClickItem(this.data)}
      >
        <img
          ref='img'
          src={Http.getImagePath(this.data.imagepath)}
          onError={() => this.onImgError()}
          className="itemIcon"
          alt="icon"
        />
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

