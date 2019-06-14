// pages/shitilan/shitilan.js


/**
* 生命周期函数--监听页面加载
*/

var WxParse = require('../../wxParse/wxParse.js');
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:null,
   StatusBar: app.globalData.StatusBar,
  CustomBar: app.globalData.CustomBar,
  sessionId:null,
  title:null,
  shitilan:null,
    modalName: null,
  status:'1',
  pid:null,
  pque:null,
  title:null

  },
 
gobangding:function(){

  wx.navigateTo({
    url: '../denglu/denglu',
  })
},




  onShareAppMessage: function (res) {

    // 用户点击右上角分享
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }

    return {

      title: '123456', // 分享标题

      desc: '7789', // 分享描
      path: '/pages/index/index?id=3' ,// 分享路径
      
success: function (res) {
        console.log( '成功');
        // 转发成功
      },
      fail:function(res){

console.log('fail')


      }
    }

  },

  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  hideModal(e) {
    this.setData({
      modalName1: null
    })
  },
//根据id获取试卷
gopid:function(e){
var that=this;
  var o = e.currentTarget.dataset.pid
  that.setData({
modalName1: e.currentTarget.dataset.target,
pid:that.data.list[o].id,
title :that.data.list[o].title
  })
  console.log(that.data.pid)
  wx.request({
    url: app.globalData.Url + '/paper/getPaper',
    data: {
      sessionId: that.data.sessionId,
      pid: that.data.pid
    },
    method: 'POST',
    header: {
      'content-type': 'application/x-www-form-urlencoded;charset=utf-8;',
      'Cookie': 'JSESSIONID=' + that.data.sessionId,
    },
    success: function (res) {
   that.data.pque = res.data.data.que;
 
      var que = []
      var b=[]
      var a=[]
      for (let i = 0; i < that.data.pque.length; i++) {
        a='第',
        a+=i+1
        a +='题:<br><br>'
        b=a.concat(that.data.pque[i].question)
        que.push(b)
      }
  
      console.log('题号：' +a )
      console.log('显示题目' + que)
      var replyArr = que;
      for (let i = 0; i < replyArr.length; i++) {
        WxParse.wxParse('reply' + i, 'html', replyArr[i], that);
        if (i === replyArr.length - 1) {
          WxParse.wxParseTemArray("replyTemArray", 'reply', replyArr.length, that)
        }
      }




   
    }
  })

},



  onLoad: function (options) {
    
  var that = this;
  that.setData({
    sessionId: app.globalData.sessionId,
    shitilan: app.globalData.shitilan,

  })
  console.log(that.data.sessionId)
  /*  if(that.data.status==0)
    {
      var that = this;
      var flag='ture';
that.setData({
  modalName:flag

})

    }
    else{
      var that = this;
      var flag=null;
that.setData({
  modalName: flag

  
})
    }
*/
  

  //获取试卷列表
    wx.request({
      url: app.globalData.Url+'/paper/getList',
      data: {
        sessionId: that.data.sessionId
      },
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8;',
         'Cookie': 'JSESSIONID=' + that.data.sessionId,
      },
      success: function (res) {

      

     that.setData({
       list:res.data.data
     })

        console.log('我的试卷列表:' + that.data.list)
 
      },
      fail: function (res) {


        console.log('服务器请求失败')
      }
    })

/*console.log(that.data.modalName)
    console.log('全局试题篮图片'+that.data.shitilan)
 
  
    var test1 = that.data.result;
    var a = []
    for (let i = 0; i < test1.length; i++) {
      a.push(test1[i].question)

    }
  console.log('测试测试' + a)
    var replyArr = a;
    for (let i = 0; i < replyArr.length; i++) {
      WxParse.wxParse('reply' + i, 'html', replyArr[i], that);
      if (i === replyArr.length - 1) {
        WxParse.wxParseTemArray("replyTemArray", 'reply', replyArr.length, that)
      }
    }
*/


  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */


  /**
   * 生命周期函数--监听页面隐藏
   */


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
   
  },

  onShow: function () {
    this.app = getApp()
    this.app.slideupshow(this, 'slide_up1', -0, 1)

    setTimeout(function () {
      this.app.slideupshow(this, 'slide_up2', -0, 1)
    }.bind(this),80);
  },


  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    this.app = getApp()
    //你可以看到，动画参数的200,0与渐入时的-200,1刚好是相反的，其实也就做到了页面还原的作用，使页面重新打开时重新展示动画
    this.app.slideupshow(this, 'slide_up1', 80, 0)
    //延时展现容器2，做到瀑布流的效果，见上面预览图
    setTimeout(function () {
      this.app.slideupshow(this, 'slide_up2', 80, 0)
    }.bind(this), 80);
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    

  },

  /**
   * 用户点击右上角分享
   */

})