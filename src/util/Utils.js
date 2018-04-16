/**
 * Created by pain on 2018/4/5.
 */

export default class Utils {

  static getId() {
    let url = location.search;
    let theRequest = {};

    if (url.indexOf("?") !== -1) {
      let str = url.substr(1);
      let staArr = str.split("&");
      for (let i = 0; i < staArr.length; i++) {
        theRequest[staArr[i].split("=")[0]] = encodeURIComponent(staArr[i].split("=")[1]);
      }
    }
    return theRequest.id || '';
  }

  static getPlatform() {
    let url = location.search;
    let theRequest = {};

    if (url.indexOf("?") !== -1) {
      let str = url.substr(1);
      let staArr = str.split("&");
      for (let i = 0; i < staArr.length; i++) {
        theRequest[staArr[i].split("=")[0]] = encodeURIComponent(staArr[i].split("=")[1]);
      }
    }
    return theRequest.platform || '';
  }

}