const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

class Request {
  constructor (baseURL = "https://easy-mock.com/mock/5bd149fab36f2c5eac3a9274/QM_magazine") {
    this.baseURL = baseURL;
  }
  fetchData ({url, method = "GET", data = {}}) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: this.baseURL + url,
        method,
        data,
        success: (res) => {
          if (res.data.code === 0) {
            resolve(res.data.data);
          } else {
            this._showError();
          }
         
        },
        fail: (err) => {
          this._showError();
          reject(err);
        }
      })
    })
  }

  _showError () {
    wx.showToast({
      title: '请求错误',
      icon: 'none'
    })
  }

}

function randomStr (n=10) {
  let res = '';
  for(var i = 0; i < n; i++) {
    res += String.fromCharCode(Math.floor(65 + Math.random() * 58));
  }
  return res;
}

function getDateInChinese () {
  const monthEnum = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'];
  const date = new Date();
  const m = date.getMonth();
  const d = date.getDate() + '';
  const month = monthEnum[m];
  let day;
  if (!d[1]) {
    day = monthEnum[d - 1];
  } else {
    if (d[0] == 1) {
      console.log('a')
      day = d[1] == 0 ? monthEnum[d - 1] : monthEnum[9] + monthEnum[d[1] - 1];
    } else {
      if (d[1] == 0) {
        day = monthEnum[d[0] - 1] + monthEnum[9];
      } else {
        day = monthEnum[d[0] - 1] +  monthEnum[9] + monthEnum[d[1] - 1];
      }
    }
  }
  return month + '月' + day + '日';
}

module.exports = {
  formatTime: formatTime,
  Request,
  randomStr,
  getDateInChinese
}
