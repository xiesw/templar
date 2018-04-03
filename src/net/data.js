/**
 * Created by pain on 2018/4/3.
 */

export const data = [
  {
    "joincount": "2123620",
    "imagepath": "fubaba.png",
    "name": "富爸爸闪贷",
    "recommendDesc": "5分钟放款，通过率90%",
    "applyUrl": "http://588.sourcecodefinance.com/origin/register?model%253D5%2526eid%253D204%2526c%253D246",
    "code": "fubaba"
  },
  {
    "joincount": "2323421",
    "imagepath": "jiujiujie.png",
    "name": "久久借",
    "recommendDesc": "还款灵活，审批迅速",
    "applyUrl": "http://www.wanrendai.top/?befrom=tg66",
    "code": "jiujiujie"
  },
  {
    "joincount": "932890",
    "imagepath": "tongyuansudai.png",
    "name": "通源速贷",
    "recommendDesc": "实名秒到，一键借款",
    "applyUrl": "https://tongyuansudai.fanzhoutech.com/mobile/applyform?par=45968AD65BACA8AA8CE1B42A4071194C",
    "code": "tongyuansudai"
  },
  {
    "joincount": "1723421",
    "imagepath": "miaobaitiao.png",
    "name": "秒白条",
    "recommendDesc": "全自动审批，18秒到账",
    "applyUrl": "https://m.miaobt.com/wap/w/login/tg1/channel/jieyoubang",
    "code": "miaobaitiao"
  },
  {
    "joincount": "690321",
    "imagepath": "woaika.png",
    "name": "我爱卡",
    "recommendDesc": "万元额度，7天免息",
    "applyUrl": "http://m.51credit.com/promote/wt20170918.html?tf=wt34",
    "code": "woaika"
  },
];

export const getImage = (code) => {
  switch(code) {
    case 'fubaba':
      return require('../image/fubaba.png');
    case 'jiujiujie':
      return require('../image/jiujiujie.png');
    case 'tongyuansudai':
      return require('../image/tongyuansudai.png');
    case 'miaobaitiao':
      return require('../image/miaobaitiao.png');
    case 'woaika':
      return require('../image/woaika.png');
  }
};
