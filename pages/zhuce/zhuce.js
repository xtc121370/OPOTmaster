// pages/zhuce/zhuce.js
var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
  username:null,
  password:null,
  phone:null
  },

  /**
   * 生命周期函数--监听页面加载
   * 
   */
  usernameinput: function (e) {

    this.data.username = e.detail.value;


  },
  nameinput: function (e) {

    this.data.name = e.detail.value;


  },
  phoneinput: function (e) {

    this.data.phone = e.detail.value;


  },
  quxiao:function(){

wx.navigateTo({
  url: '../denglu/denglu',
})


  },
  passwordinput: function (e) {

    this.data.password = e.detail.value;


  },
  upload: function () {
    var that = this;
    console.log('账户名：' + this.data.username)

    console.log('手机号：' + this.data.phone)
    console.log('密码：' + this.data.password)

    wx.request({
      url: app.globalData.Url +'wRegisterServlet',//注册接口
      data: {
        username: that.data.username,
        phone:that.data.phone,
        password:that.data.password

      },
      method: 'POST',
      header: {
      'content-type': 'application/x-www-form-urlencoded;charset=utf-8;', 'Cookie': 'JSESSIONID=' + that.data.sessionId,
      },
      success: function (res) {

        console.log('服务器返回' + res.data)
        console.log('提示'+res.data.message)
        console.log('存在'+res.data.status)
        if(res.data.status==0){
          wx.showToast({
            title: '用户名或手机号已存在',
            icon: 'none',
            duration: 2000
          })

        }
        else if(res.data.status==null){


          wx.showToast({
            title: '注册成功',
            icon: 'success',
            duration: 2000
          })
          wx.navigateTo({
            url: '../denglu/denglu',
          })
        }
        
      },
    })
  },
  onLoad: function (options) {
  
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