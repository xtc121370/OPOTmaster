// pages/camera/camera.js
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
    tempFilePaths: '',
    mode: null,

  },
  takePhoto(e) {
    var that= this;
    that.data.mode = e.currentTarget.dataset.mode
    console.log('打印测试' + that.data.mode)
    const ctx = wx.createCameraContext()
    ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        app.globalData.tempFilePath = res.tempImagePath
        console.log(app.globalData.tempFilePath)
        wx.navigateTo({
          url: '../cropper/cropper',
        })
    
       
      }
    })
  },
  error(e) {

    console.log(e.detail)
  },
  //拍照片截图

  photo:function(e){
    var that = this;
    that.data.mode = e.currentTarget.dataset.mode
    console.log('打印测试' + that.data.mode)
    wx.chooseImage({
      count: 1,
      sizeType: ['original'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album'],// 可以指定来源是相册还是相机，默认二者都有
      success(res) {
        app.globalData.tempFilePath = res.tempFilePaths[0]
        console.log(app.globalData.tempFilePath)

        // 将选取图片传入cropper，并显示cropper
        // mode=rectangle 返回图片path
        // mode=quadrangle 返回4个点的坐标，并不返回图片。这个模式需要配合后台使用，用于perspective correction
        // let modes = ["rectangle", "quadrangle"]
        // let mode = modes[1]   //rectangle, quadrangle
      
      wx.navigateTo({
        url: '../cropper/cropper',
      })
      
      }
    })


  },
  close:function(){

wx.switchTab({
  url: '../index/index',
})


  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    cropper.init.apply(that, [W, H]);

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