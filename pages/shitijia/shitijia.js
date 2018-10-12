// pages/shitijia/shitijia.js

var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shijuanjia:null,
    sessionId:null
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  var that=this;
   
    that.setData({


      sessionId: app.globalData.sessionId,
      shijuanjia: app.globalData.shijuanjia,

    })
    console.log('本页变量'+that.data.shijuanjia)
    console.log('ID'+that.data.sessionId)
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