// pages/shitilan/shitilan.js


/**
* 生命周期函数--监听页面加载
*/

var app=getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
  sessionId:null,
  title:null,
  shitilan:null,

  },
 
 



  onShareAppMessage: function () {

    // 用户点击右上角分享

    return {

      title: 'title', // 分享标题

      desc: 'desc', // 分享描述

      path: 'path' // 分享路径

    }

  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;

  that.setData({


    sessionId: app.globalData.sessionId,

    shitilan: app.globalData.shitilan,



  })
    

    console.log('全局试题篮图片'+that.data.shitilan)
 
  
 

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
  
    var that=this;
    wx.request({
      url: app.globalData.Url +'wGetBasketServlet',
      data: {
        sessionId: that.data.sessionId
      },
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8;', 'Cookie': 'JSESSIONID=' + that.data.sessionId, },
      success: function (res) {

        console.log('试题蓝返回题目:' + res.data)
        app.globalData.shitilan = res.data;
        console.log('全局变量' + app.globalData.shitilan)
        wx.stopPullDownRefresh();
        that.setData({

          sessionId: app.globalData.sessionId,

          shitilan: app.globalData.shitilan,

        })

        console.log('试题蓝返回题目:' + res.data)

        console.log('试题篮内容' + that.data.shitilan)

        console.log('sessionId:' + that.data.sessionId)

     
       
        console.log('全局变量' + app.globalData.shitilan)



      },
      fail: function (res) {


        console.log('服务器请求失败')
      }
    })
    
  },

  onShow: function () {
    this.app = getApp()
    this.app.slideupshow(this, 'slide_up1', -0, 1)

    setTimeout(function () {
      this.app.slideupshow(this, 'slide_up2', -0, 1)
    }.bind(this), 200);
  },


  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    this.app = getApp()
    //你可以看到，动画参数的200,0与渐入时的-200,1刚好是相反的，其实也就做到了页面还原的作用，使页面重新打开时重新展示动画
    this.app.slideupshow(this, 'slide_up1', 200, 0)
    //延时展现容器2，做到瀑布流的效果，见上面预览图
    setTimeout(function () {
      this.app.slideupshow(this, 'slide_up2', 200, 0)
    }.bind(this), 200);
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