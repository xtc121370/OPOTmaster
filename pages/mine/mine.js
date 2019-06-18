// pages/mine/mine.js
var app=getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: {
  phone:null,
  flag:[],
  name:null,
  color:['bg-red'],
    username: null, 
    avatarUrl: null,
    nickName: null,
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,

  },
  login: function () {
wx.navigateTo({
  url: '../denglu/denglu',
})

   },
  time:function(){
wx.navigateTo({
  url: '../opotlog/opotlog',
})

  },
  fankui:function(){

    wx.navigateTo({
      url: '../pingfen/pingfen',
    })
  },
  about:function(){

    wx.navigateTo({
      url: '../fankui/fankui',
    })
  },
 
goshitilan:function(){

wx.switchTab({
  url: '../shitilan/shitilan',
})



},
  goguanyu: function () {
wx.navigateTo({
  url: '../guanyu/guanyu',
})

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  var that=this;
    this.app = getApp()
that.setData({

  avatarUrl: app.globalData.avatarUrl,
  nickName: app.globalData.nickName,
  phone:app.globalData.phone,
  name:app.globalData.name,
  username:app.globalData.username

})
if(app.globalData.status==0)
{
  var f=['未绑定']
  var a=['bg-red']
that.setData({
flag:f,
color:a

})

}
else {

  var t=['已绑定']
  var b=['bg-green']
  that.setData({
flag:t,
color:b
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
    var that = this;
    this.app = getApp()
    that.setData({

      avatarUrl: app.globalData.avatarUrl,
      nickName: app.globalData.nickName,
      phone: app.globalData.phone,
      name: app.globalData.name,
      username: app.globalData.username

    })
    if (app.globalData.status == 0) {
      var f = ['未绑定']
      var a = ['bg-red']
      that.setData({
        flag: f,
        color: a

      })

    }
    else {

      var t = ['已绑定']
      var b = ['bg-green']
      that.setData({
        flag: t,
        color: b
      })
    }
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