/**
 * Created by pain on 2018/3/24.
 */

import React, {Component} from 'react';
import '../style/HomePage.css';
import Api from "../net/Api";
import Global from "../common/Global";
import Header from "../component/Header";
import Item from "../component/Item";
import {Icon, Modal, Button, Input, message} from 'antd';

export default class HomePage extends Component {

  constructor() {
    super();
    Global.init();
    this.state = {
      dataSource: [],
      modalVisible: false
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

  onRegister() {
    if (this.validate()) {
      this.setModalVisible(false);
      localStorage.setItem('id', this.mobile);
      Api.onEvent(this.mobile, this.onClickData.code);
      window.location.href = this.onClickData.applyUrl;
    }
  }

  validate() {
    this.mobile = document.getElementById("myInput").value;
    let reg = /^1[3|4|5|6|7|8|9][0-9]\d{8}$/;
    if (this.mobile) {
      let result = reg.test(this.mobile);
      if (result) {
        return true;
      } else {
        message.warning('请输入正确的手机号码');
      }
    } else {
      message.warning('请输入手机号');
    }
    return false;
  }


  onClickItem(data) {
    let id = localStorage.getItem('id');
    this.onClickData = data;
    if (id) {
      Api.onEvent(id, data.code);
      window.location.href = data.applyUrl;
    } else {
      this.setModalVisible(true);
    }
  }

  setModalVisible(visible) {
    this.setState({
      modalVisible: visible,
    });
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

  renderModal() {
    return (
      <Modal
        ref="modal"
        title="输入手机号"
        visible={this.state.modalVisible}
        maskClosable='true'
        onCancel={() => {
          this.setModalVisible(false)
        }}
        footer={null}
      >
        <div className="inputContainer">
          <Input
            id="myInput"
            prefix={<Icon type="phone" style={{color: 'rgba(0,0,0,.25)'}}/>}
            className="homepage_input"
            placeholder="请输入手机号码"
            type="numberOfLines"
          />
          <Button
            className='homepage_btn'
            size="large"
            type="primary"
            onClick={() => this.onRegister()}
          >登记</Button>
        </div>
      </Modal>
    )
  }

  render() {
    return (
      <div className="App">
        <Header  {...this.props}/>
        {this.renderItem()}
        {this.renderModal()}
      </div>
    );
  }
}

