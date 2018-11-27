// pages/mine/mine.js
var app=getApp();


Page({

  /**
   * 页面的初始数据
   */
  data: {
  phone:null,
  name:null,
    username: null, 
    avatarUrl: null,
    nickName: null,

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
console.log(that.data.avatarUrl)
console.log(that.data.nickName)
console.log(that.data.phone)
    console.log(that.data.name)
    console.log(that.data.username)
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
    this.app.slideupshow(this, 'slide_up1', -0, 1)

    setTimeout(function () {
      this.app.slideupshow(this, 'slide_up2', -0, 1)
    }.bind(this), 200);
  },


  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    //你可以看到，动画参数的200,0与渐入时的-200,1刚好是相反的，其实也就做到了页面还原的作用，使页面重新打开时重新展示动画
    this.app.slideupshow(this, 'slide_up1', 200, 0)
    //延时展现容器2，做到瀑布流的效果，见上面预览图
    setTimeout(function () {
      this.app.slideupshow(this, 'slide_up2', 200, 0)
    }.bind(this), 200);
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
    var that = this;
    that.setData({


      phone: app.globalData.phone,
      name: app.globalData.name,
      username: app.globalData.username

    })
    console.log(that.data.phone)
    console.log(that.data.name)
    console.log(that.data.username)
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