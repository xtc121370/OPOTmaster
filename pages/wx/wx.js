// pages/wx/wx.js
var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    openid:null,

  },
  onGotUserInfo: function (e) {
    var that = this;
    wx.getUserInfo({
      success: function (res) {
        console.log(e.detail.errMsg)
        console.log(e.detail.userInfo)
        console.log(e.detail.rawData)
        app.globalData.avatarUrl = e.detail.userInfo.avatarUrl,
          app.globalData.nickName = e.detail.userInfo.nickName,
          console.log('头像url:' + app.globalData.avatarUrl)
        console.log('昵称：' + app.globalData.nickName)

        wx.login({
          success: function (res) {

            console.log(res);
            if (res.code) {
              wx.request({
                url: 'https://api.weixin.qq.com/sns/jscode2session?appid=wx950aeac16a5192d6&secret=1e1e2fb3b4b19325f9f7179a57322d92&js_code=' + res.code + '&grant_type=authorization_code',
                data: {
                  code: res.code
                },
                method: 'POST',
                header: { 'content-type': 'application/x-www-form-urlencoded;charset=utf-8;', },
                success: function (res) {
                  that.data.openid = res.data.openid,
                    app.globalData.openid = res.data.openid,
                    console.log('服务器返回key:' + res.data.session_key)
                  console.log('openid' + app.globalData.openid)

                  wx.showLoading({
                    title: '授权中,请稍等',
                  })

                  wx.request({
                    url: app.globalData.Url + '/wxUser/checkBinding', //服务器接口地址
                    data: {

                      openid: that.data.openid,

                    },
                    method: 'POST',
                    header: {
                      'content-type': 'application/x-www-form-urlencoded;charset=utf-8;',

                    },
                    success: function (res) {
                      if(res.data.code==1){
                      console.log('后台返回' + res);
      
                      app.globalData.sessionId = res.data.data.sessionId;
                        app.globalData.status = res.data.code;
                      app.globalData.phone = +res.data.data.phone;
                        console.log('全局变量status:' + app.globalData.status)
                      console.log('全局变量sessionId:' + app.globalData.sessionId)
                      console.log('全局变量phone:' + app.globalData.phone)
                      wx.switchTab({
                        url: '../index/index',
                      })

                      }
                      else {
                        console.log('未绑定微信返回：' + res.data.code);
                        app.globalData.status = res.data.code
                        console.log('全局变量status:' + app.globalData.status)
                        wx.switchTab({
                          url: '../index/index',
                        })

                      }
                    }
                  })

              
           
         }
              })
              // 使用wx.getUserInfo获取用户信息


            }
            else {
              console.log('获取用户登录态失败！' + res.errMsg)
            }
          },
          fail: function () {
            console.log("启用wx.login函数，失败！");
          },
          complete: function () {
            console.log("已启用wx.login函数");
          }
        });


      },

      fail: function () {


      }
    })

  },

shouquan:function(){
var that=this;
    wx.getUserInfo({
      success: function (res) {
        app.globalData.avatarUrl = res.userInfo.avatarUrl,
          app.globalData.nickName = res.userInfo.nickName,
          console.log('头像url:' + app.globalData.avatarUrl)
        console.log('昵称：' + app.globalData.nickName)
      },

      fail: function () {
        console.log("启用app.getUserInfo函数，失败！");
      },

    });


  

 


},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;   
   wx.getSetting({
     withCredentials: true,
            success: function (res) {
                if (res.authSetting['scope.userInfo']) {
                    wx.getUserInfo({
                        success: function (res) {
              
                          app.globalData.avatarUrl = res.userInfo.avatarUrl,
                            app.globalData.nickName = res.userInfo.nickName,
                            console.log('头像url:' + app.globalData.avatarUrl)
                          console.log('昵称：' + app.globalData.nickName)
                          wx.login({
                            success: function (res) {

                              console.log(res);
                              if (res.code) {
                                wx.request({
                                  url: 'https://api.weixin.qq.com/sns/jscode2session?appid=wx950aeac16a5192d6&secret=1e1e2fb3b4b19325f9f7179a57322d92&js_code=' + res.code + '&grant_type=authorization_code',
                                  data: {
                                    code: res.code
                                  },
                                  method: 'POST',
                                  header: { 'content-type': 'application/x-www-form-urlencoded;charset=utf-8;', },
                                  success: function (res) {
                                    that.data.openid = res.data.openid,
                                      app.globalData.openid = res.data.openid,
                                      console.log('服务器返回key:' + res.data.session_key)
                                    console.log('openid' + app.globalData.openid)
                              
                                    wx.request({
                                      url: app.globalData.Url+'/wxUser/checkBinding', //服务器接口地址
                                      data: {

                                        openid: that.data.openid, //绑定好后更改这里

                                      },
                                      method: 'POST',
                                      header: {
                                        'content-type': 'application/x-www-form-urlencoded;charset=utf-8;',

                                      },
      success: function (res) {
        if(res.data.code==1){
                        console.log('绑定微信返回：' + res);
                  
                               app.globalData.sessionId = res.data.data.sessionId;
                                app.globalData.status=res.data.code
                                app.globalData.phone = +res.data.data.phone;
          console.log('全局变量status:' + app.globalData.status)
        console.log('全局变量sessionId:' + app.globalData.sessionId)
        console.log('全局变量phone:' + app.globalData.phone)
                             wx.switchTab({
                             url: '../index/index',
                                        })
        }
        else{
          console.log('未绑定微信返回：' + res.data.code);
          app.globalData.status = res.data.code
          console.log('全局变量status:' + app.globalData.status)
          wx.switchTab({
            url: '../index/index',
          })

        }

                                      }
                                    })

                                  }
                                })
                                // 使用wx.getUserInfo获取用户信息


                              }
                              else {
                                console.log('获取用户登录态失败！' + res.errMsg)
                              }
                            },
                            fail: function () {
                              console.log("启用wx.login函数，失败！");
                            },
                            complete: function () {
                              console.log("已启用wx.login函数");
                            }
                          });

                     

                          //服务器好后把跳转删掉
                        
                         
                            //用户已经授权过
                        },
            fail:function(res){//用户未授权跳转
              wx.showModal({
                title: '警告', 
                content: '尚未进行授权，请点击确定跳转到授权页面进行授权。',
                 success: function (res) {
                  if (res.confirm) {
                    console.log('用户点击确定')          
                      wx.navigateTo({ url: '../wx/wx', })
                  }
                 }
                 })
              


            },
                    })
                }
            }
        }) 
 




    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})