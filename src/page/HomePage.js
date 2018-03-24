/**
 * Created by pain on 2018/3/24.
 */

import React, {Component} from 'react';
import '../style/HomePage.css';
import Api from "../net/Api";
import Global from "../common/Global";
import Header from "../component/Header";
import Item from "../component/Item";

export default class HomePage extends Component {

  constructor() {
    super();
    Global.init();
    this.state = {
      dataSource: []
    }
  }

  componentDidMount() {
    Api.getLoanList().then((response) => {
      if (response) {
        this.setState({
          dataSource: response.resultList.rows
        });
        console.log('pain.xie', this.state.dataSource);
      }
    }).catch(error => {
      console.log('pain.xie', error);
    })
  }

  renderItem() {
    return this.state.dataSource.map((item, index, arr) => {
      return (
        <Item
          key={index}
          itemData={item}
        />
      );
    })
  }

  render() {
    console.log('pain.xie', this.props);
    return (
      <div className="App">
        <Header  {...this.props}/>
        {this.renderItem()}
      </div>
    );
  }
}

