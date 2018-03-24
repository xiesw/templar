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

  render() {
    return (
      <div className="itemContainer">
        <img src={this.data.imagepath} className="itemIcon"/>
        <div className="contentContainer">
          <div className="textName">{this.data.name}</div>
          <div className="textDesc">{this.data.recommendDesc}</div>
          <div className="textApply" >{`申请人数:`}
            <div className="applyNumber">{`${this.data.joincount}`}</div>
          </div>
        </div>
        <img src={require('../image/rightarrow_.png')} className="itemArrow"/>
      </div>
    );
  }
}

