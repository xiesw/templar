/**
 * Created by pain on 2018/3/24.
 */
import {Host} from "../common/Constants";

export default class Http {

  static getUrl(url) {
    return Host + url
  }

  static get (url) {
    return this.asyncGet(url);
  }

  static post(url, data) {
    return this.asyncP('POST', url, data);
  }

  static patch(url, data) {
    return this.asyncP('PATCH', url, data);
  }

  static put(url, data) {
    return this.asyncP('PUT', url, data);
  }

  static delete(url) {
    return this.asyncP('DELETE', url, {});
  }

  static asyncGet(url) {
    return fetch(url, {method: 'GET', headers: this.getHeaders()})
      .then(response => Http.processResponse(response));
  }

  static asyncP(method, url, data) {
    return fetch(url, {method: method, headers: Http.getHeaders(), body: JSON.stringify(data)})
      .then((response) => Http.processResponse(response))
  }

  /**
   * 统一的消息处理
   * @param response
   * @returns {Promise}
   */
  static processResponse(response) {
    return new Promise((resolve, reject) => {
      let {status = 0} = response;
      if (status >= 200 && status < 400) {
        resolve(response.json());
      } else if (status >= 500) {
        reject({'status': status, 'message': status + ' 服务器异常'});
      } else {
        // 会话过期统一处理
        reject({'status': status, 'message': status + ' 网络错误'});
      }
    })
  }

  /**
   * 统一的消息头
   */
  static getHeaders() {
    return Http.getHeadersWithoutToken();
  }

  /**
   * 不带token的消息头
   */
  static getHeadersWithoutToken() {
    return {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  }

}