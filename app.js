//app.js
App({
  
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
      //大苏打
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },

 
  globalData: {
    tempFilePaths:null,
    userInfo: null,
    result:null,
    answerUrl:null,
    queUrl:null,
    sessionId:null,
    header:null,
    shitilan: [
      {
        'url': 'http://r.photo.store.qq.com/psb?/V12EzWWJ3J1Roh/oBi1EAzSswJfQB7bc*Ldog*ykjFC4VW9n0yQLmPUBa8!/r/dDUBAAAAAAAA',
        'id': 0
      }



    ],
    shijuanjia:null,
    name:'未找到，请下拉刷新重试',
    username: '未找到，请下拉刷新重试',
    phone: '未找到，请下拉刷新重试'


  
  }
})