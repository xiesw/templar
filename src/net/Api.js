/**
 * Created by pain on 2018/3/24.
 */
import Http from "./Http";
import {data} from "./data";

export default class Api {

  static getLoanList() {
    // todo 切换地址
    //let url = Http.getUrl('xxx');
    //let url = 'https://japi.wolaidai.com/jrocket2/api/v4/installments/base?type=APP-JDD';
    //let url = 'https://www.easy-mock.com/mock/5ab5bb961a094046dab2caba/example/loanlist';
    //return Http.get(url);
    return data;
  }

  static onEvent(eventId) {
    let url = Http.getUrl('loan/api/log') + `?code=${eventId}`;
    console.log('pain.xie', url);
    return Http.get(url);
  }

}