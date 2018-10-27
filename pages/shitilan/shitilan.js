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
    isPopping: true,//是否已经弹出

    animPlus: {},//旋转动画
    animshengcheng: {},//旋转动画
    animCollect: {},//item位移,透明度

    animTranspond: {},//item位移,透明度

    animInput: {},//item位移,透明度
 
  sessionId:null,
 
  title:null,
    shitilan:null,




  },
  plus: function () {

    if (this.data.isPopping) {

      //缩回动画

      this.popp();

      this.setData({

        isPopping: false

      })

    } else if (!this.data.isPopping) {

      //弹出动画

      this.takeback();

      this.setData({

        isPopping: true

      })

    }

  },
 





  //弹出动画

  popp: function () {

    //plus顺时针旋转

    var animationPlus = wx.createAnimation({

      duration: 500,

      timingFunction: 'ease-out'

    })
    var animationshengcheng = wx.createAnimation({

      duration: 400,

      timingFunction: 'ease-out'

    })
    var animationcollect = wx.createAnimation({

      duration: 200,

      timingFunction: 'ease-out'

    })

    var animationTranspond = wx.createAnimation({

      duration: 500,

      timingFunction: 'ease-out'

    })

    var animationInput = wx.createAnimation({

      duration: 800,

      timingFunction: 'ease-out'

    })
 
    animationPlus.rotateZ(540).step();

    animationcollect.translate(0, 50).rotateZ(180).opacity(1).step();

    animationshengcheng.translate(0, 175).rotateZ(0).opacity(1).step();
    animationTranspond.translate(0, 100).rotateZ(180).opacity(1).step();

    animationInput.translate(0, 150).rotateZ(180).opacity(1).step();

    this.setData({

      animPlus: animationPlus.export(),
      animshengcheng: animationshengcheng.export(),
      animCollect: animationcollect.export(),

      animTranspond: animationTranspond.export(),

      animInput: animationInput.export(),

    })

  },

  //收回动画

  takeback: function () {

    //plus逆时针旋转

    var animationPlus = wx.createAnimation({

      duration: 500,

      timingFunction: 'ease-out'

    })   
     var animationshengcheng = wx.createAnimation({

      duration: 500,

      timingFunction: 'ease-out'

    })

    var animationcollect = wx.createAnimation({

      duration: 250,

      timingFunction: 'ease-out'

    })

    var animationTranspond = wx.createAnimation({

      duration: 500,

      timingFunction: 'ease-out'

    })

    var animationInput = wx.createAnimation({

      duration: 500,

      timingFunction: 'ease-out'

    })

    animationPlus.rotateZ(0).step();
    animationshengcheng.rotateZ(0).step();
    animationcollect.translate(0, 0).rotateZ(0).opacity(0).step();
    animationshengcheng.translate(0, 0).rotateZ(0).opacity(0).step();
    animationTranspond.translate(0, 0).rotateZ(0).opacity(0).step();

    animationInput.translate(0, 0).rotateZ(0).opacity(0).step();

    this.setData({

      animPlus: animationPlus.export(),
      animshengcheng: animationshengcheng.export(),
      animCollect: animationcollect.export(),

      animTranspond: animationTranspond.export(),

      animInput: animationInput.export(),

    })

  },

  goindex: function () {

    wx.navigateTo({
      url: '../index/index',
    })
  },
  goshitilan: function () {

    wx.navigateTo({
      url: '../shitilan/shitilan',
    })
  },
  gomine: function () {

    wx.navigateTo({
      url: '../mine/mine',
    })
  },





  onShareAppMessage: function () {

    // 用户点击右上角分享

    return {

      title: 'title', // 分享标题

      desc: 'desc', // 分享描述

      path: 'path' // 分享路径

    }

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
      url: 'http://39.105.56.207/OPOT1/servlet/wGetBasketServlet',
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