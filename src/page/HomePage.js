/**
 * Created by pain on 2018/3/24.
 */

import React, {Component} from 'react';
import '../style/HomePage.css';
import Api from "../net/Api";
import Global from "../common/Global";

export default class HomePage extends Component {

  constructor() {
    super();
    Global.init();
    this.state = {
      dataSource: []
    }
  }

  componentDidMount() {
    Api.getLoanList().
      then((response) => {
      if(response) {
        this.setState({
          dataSource: response.resultList.rows
          });
        console.log('pain.xie', this.state.dataSource);
      }
    }).catch(error => {
      console.log('pain.xie', error);
    })
  }

  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

