const app = getApp();
const device = wx.getSystemInfoSync()
const W = device.windowWidth
const H = device.windowHeight - 50


console.log(device)

Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    tempFilePaths: '',
    sessionId: null,
    isChecked: false,
    mode:null,
    search:null
  }, 
  search: function (e) {
    var that = this;
    that.data.search = e.detail.value;
    console.log(that.data.search)

  },
  goworld: function () {
    var that = this;
    
    //文字搜索

    wx.showLoading({
      title: '搜索中',
      success:function(){

        wx.request({
          url: app.globalData.Url + '/wxSearch/wordSearch',
          method: 'POST',
          header: {
            'content-type': 'application/x-www-form-urlencoded;charset=utf-8;',
            'Cookie': 'JSESSIONID=' + that.data.sessionId,
          },
          data: {
            page: '1',
            question: that.data.search

          },

          success: function (res) {
            if (res.data == "") {
              wx.showToast({
                title: '推荐失败请重新搜索',
                icon: 'none'

              })
              setTimeout(function () {
                wx.hideLoading()
              }, 1500)

            }
            else{
            console.log(res)
            app.globalData.result = res.data.data;
            console.log('全局变量结果' + app.globalData.result)
            setTimeout(function () {
              wx.hideLoading()
            }, 1000)
            wx.switchTab({
              url: '../result/result',
            })
            }
          },
          fail: function () {
            wx.showToast({
              title: '推荐失败联系管理员',
              icon: 'none'

            })
            setTimeout(function () {
              wx.hideLoading()
            }, 1000)

          }
        })

      },

     
    })
   
   
  },

  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  hideModal(e) {
    this.setData({
      modalName: null
    })
  },

  onLoad: function () {

    var that = this
    // 初始化组件数据和绑定事件
    that.setData({
      sessionId: app.globalData.sessionId
    })
    // console.log(usertype)  
  },
 

  selectTap:function() {
    let that = this
    wx.navigateTo({
      url: '../camera/camera',
    })

  },


  //上传图片



  onShow: function () {
  },


  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
 
  },

  onShareAppMessage: function () {

    // 用户点击右上角分享

    return {

      title: 'title', // 分享标题

      desc: 'desc', // 分享描述

      path: 'path' // 分享路径

    }

  }

})