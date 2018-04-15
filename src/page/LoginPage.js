/**
 * Created by pain on 2018/4/15.
 */

import React, {Component} from 'react';
import '../style/LoginPage.css';
import {Button, Input, message} from 'antd';
import Api from "../net/Api";

export default class LoginPage extends Component {

  componentDidMount() {
    this.data = this.props.location.params;
  }

  onRegister() {
    if(this.validate()) {
      localStorage.setItem('id', this.mobile);
      Api.onEvent(this.mobile, this.data.code);
      window.location.href = this.data.applyUrl;
    }
  }

  onBlur() {
    this.validate()
  }

  validate() {
    this.mobile = document.getElementById("myInput").value;
    let reg = /^1[3|4|5|6|7|8|9][0-9]\d{8}$/;
    if(this.mobile) {
      let result = reg.test(this.mobile);
      if(result) {
        return true;
      } else {
        message.warning('请输入正确的手机号码');
      }
    } else {
      message.warning('请输入手机号');
    }
    return false;
  }

  render() {
    return (
      <div className="loginPage">
        <Input
          id="myInput"
          className="input"
          placeholder="请输入手机号码"
          onBlur={() => this.onBlur()}
        />
        <Button
          className="button"
          size="large"
          onClick={() => this.onRegister()}
        >登记</Button>
      </div>
    );
  }
}

