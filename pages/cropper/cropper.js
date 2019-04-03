// pages/cropper/cropper.js
var app=getApp()
var app = getApp();
const device = wx.getSystemInfoSync()
const W = device.windowWidth
const H = device.windowHeight - 50

let cropper = require('../../welCropper/welCropper.js');

console.log(device)

Page({

  /**
   * 页面的初始数据
   */
  data: {
  tempFilePath:null,
    mode:'rectangle',
    tempFilePaths:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    cropper.init.apply(that, [W, H]);
    that.data.tempFilePath=app.globalData.tempFilePath,
    console.log('测试：'+that.data.mode)
    console.log(that.data.tempFilePath)
    that.showCropper({
      src: that.data.tempFilePath,
      mode: that.data.mode,
      sizeType: ['original'], //'original'(default) | 'compressed'
      callback: (res) => {
        if (that.data.mode == 'rectangle') {
          console.log("crop callback:" + res)
          app.globalData.tempFilePaths=res;
          that.setData({

            tempFilePaths: res,

          })
          console.log('本地返回' + that.data.tempFilePaths)
          console.log('全局' + app.globalData.tempFilePaths)
          console.log(res)
        }
        wx.showLoading({
          title: '加载中,请稍等',
          success: function () {
            /*wx.switchTab({
              url: '../result/result',
            })
            */
            wx.uploadFile({
              url:'https://47.94.215.104:8088/wxSearch/pictureSearch',//app.globalData.Url + 'pictureSearch',
              filePath: that.data.tempFilePaths,
              name: 'image',
              header: {
                'content-type': 'application/x-www-form-urlencoded;charset=utf-8;',
                'Cookie': 'JSESSIONID=' + that.data.sessionId,
              },

              success: function (res) {
                setTimeout(function () {
                  wx.hideLoading()
                }, 0)

                console.log('服务器返回' + res.data);
                var jsonStr = res.data;
                jsonStr = jsonStr.replace(" ", "");
                if (typeof jsonStr != 'object') {
                  jsonStr = jsonStr.replace(/\ufeff/g, ""); //重点
                  var jj = JSON.parse(jsonStr);
                  res.data = jj;
                  //app.globalData.result = res.data; //测试先注释掉
                  app.globalData.queUrl = res.data.queUrl//测试先注释掉
                }

                wx.switchTab({
                  url: '../result/result',
                })
                console.log('返回搜索结果' + res.data)
                console.log('全局搜索结果' + app.globalData.result)
                console.log('问题URL' + app.globalData.queUrl)
                
              },

              fail: function (res) {
                console.log(res)
                wx.showLoading({
                  title: '推荐失败，请联系管理员',
                })

                setTimeout(function () {
                  wx.hideLoading()
                }, 3000)



              },

            })
            

         

          }
        })
        setTimeout(function () {
          wx.hideLoading()
        }, 3000)
        //隐藏，我在项目里是点击完成就上传，所以如果回调是上传，那么隐藏掉就行了，不用previewImage
      }
    })

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