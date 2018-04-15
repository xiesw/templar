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
    // let dataSource = Api.getLoanList();
    // this.setState({
    //   dataSource: dataSource
    // });
  }

  renderItem() {
    return this.state.dataSource.map((item, index, arr) => {
      return (
        <Item
          key={index}
          itemData={item}
          history={this.props.history}
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

