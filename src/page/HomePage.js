/**
 * Created by pain on 2018/3/24.
 */

import React, {Component} from 'react';
import '../style/HomePage.css';
import Api from "../net/Api";
import Global from "../common/Global";
import Header from "../component/Header";
import Item from "../component/Item";
import Utils from "../util/Utils";

export default class HomePage extends Component {

  constructor() {
    super();
    Global.init();
    this.state = {
      dataSource: [],
    };
  }

  componentDidMount() {
    Api.getLoanList().then((result) => {
      if (result) {
        this.setState({
          dataSource: result
        });
        console.log('pain.xie', this.state.dataSource);
      }
    }).catch(error => {
      console.log('pain.xie', error);
    })
  }

  onClickItem(data) {
    let id = Utils.getId();
    let platform = Utils.getPlatform();
    this.onClickData = data;
      Api.onEvent(id, platform, data.code)
        .then(result => {
          console.log('pain.xie:', result);
        })
        .catch(error => {
          console.log('pain.xie:', error.message)
        });
      window.location.href = data.applyUrl;
  }

  renderItem() {
    return this.state.dataSource.map((item, index, arr) => {
      return (
        <Item
          key={index}
          itemData={item}
          history={this.props.history}
          onClickItem={(data) => this.onClickItem(data)}
        />
      );
    })
  }

  render() {
    return (
      <div className="App">
        <Header  {...this.props}/>
        {this.renderItem()}
      </div>
    );
  }
}

