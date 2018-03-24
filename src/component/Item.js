/**
 * Created by pain on 2018/3/24.
 */

/**
 * Created by pain on 2018/3/24.
 */

import React, {Component} from 'react';
import '../style/Item.css';

export default class Item extends Component {

  constructor(props) {
    super();
    this.data = props.itemData;
  }

  onClickItem() {
    console.log('pain.xie', 'haha');
  }

  render() {
    return (
      <div
        className="itemContainer"
        onClick={() => this.onClickItem()}
      >
        <img src={this.data.imagepath} className="itemIcon" alt="icon"/>
        <div className="contentContainer">
          <div className="textName">{this.data.name}</div>
          <div className="textDesc">{this.data.recommendDesc}</div>
          <div className="textApply" >{`申请人数:`}
            <div className="applyNumber">{`${this.data.joincount}`}</div>
          </div>
        </div>
        <img src={require('../image/rightarrow_.png')} className="itemArrow" alt="arrow"/>
      </div>
    );
  }
}

