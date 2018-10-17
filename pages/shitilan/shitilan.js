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
  imgbig: function (event) {


    var src = event.currentTarget.dataset.src;//获取data-src
    var imgList = [event.currentTarget.dataset.list]

    //获取data-list
    console.log()
    console.log(src)
    console.log(imgList)
    wx.previewImage({
      current: src, // 当前显示图片的http链接
      urls: imgList // 需要预览的图片http链接列表
    })
  }, 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: app.globalData.Url +'wGetBasketServlet',
      data: {

        sessionId: that.data.sessionId
      },
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8;', 'Cookie': 'JSESSIONID=' + that.data.sessionId,
      },
      success: function (res) {



        console.log('试题蓝返回题目:' + res.data)
        app.globalData.shitilan = res.data;
        console.log('全局变量' + app.globalData.shitilan)



      },
      fail: function (res) {


        console.log('服务器请求失败')
      }
    })
    that.setData({


      sessionId: app.globalData.sessionId,

    shitilan:app.globalData.shitilan,

    })
    
 
  
   console.log('试题篮内容'+that.data.shitilan)

    console.log('sessionId:' + that.data.sessionId)

  },
titleinput:function(e){

  this.data.title = e.detail.value;


},
  upload: function () {
    var that = this;
console.log('试卷夹名称'+this.data.title)
    wx.showLoading({
      title: '添加中,请稍等',
    })

    setTimeout(function () {
      wx.hideLoading()
    }, 7000)
   wx.request({
     url: app.globalData.Url +'wAddPaperServlet',//生产试卷夹接口
     data: {
       title: that.data.title

     },
      method: 'POST',
      header: {
       'content-type': 'application/x-www-form-urlencoded;charset=utf-8;', 'Cookie': 'JSESSIONID=' + that.data.sessionId,
      },
      success:function(res){

console.log('服务器返回'+res.data)

        wx.showToast({
          title: '添加成功，请返回个人信息试题夹查看',
          icon: 'none',
      duration: 1500,
        })

      },
    })


   wx.request({
     url: app.globalData.Url +'wGetPaperServlet',//试卷夹接口

  method: 'POST',
   header: {
      'content-type': 'application/x-www-form-urlencoded;charset=utf-8;', 'Cookie': 'JSESSIONID=' + that.data.sessionId,
 },
     success: function (res) {

    console.log('服务器返回' + res.data)
       app.globalData.shijuanjia=res.data
        console.log('全局变量'+app.globalData.shijuanjia)
 
      },
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
  
    var that=this;
    wx.request({
      url: app.globalData.Url +'wGetBasketServlet',
      data: {

        sessionId: that.data.sessionId
      },
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8;', 'Cookie': 'JSESSIONID=' + that.data.sessionId,
      },
      success: function (res) {
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