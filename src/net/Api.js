/**
 * Created by pain on 2018/3/24.
 */
import Http from "./Http";
import {data} from "./data";

export default class Api {

  static getLoanList() {
    //let url = 'https://www.easy-mock.com/mock/5ab5bb961a094046dab2caba/example/loanlist';
    //return Http.get(url);
    return new Promise(resolve => {
        resolve(data);
      }
    )
  }

  static onEvent(id, eventId) {
    let url = Http.getUrl('loan/api/log') + `?id=${id}&code=${eventId}`;
    console.log('pain.xie', url);
    return Http.get(url);
  }

}