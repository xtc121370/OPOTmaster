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
  title:null,
    papertitle:null,
    md5:null

  },
  deleteQue:function(e){
var that=this;
console.log(that.data.pid)
var c=e.currentTarget.dataset.del
console.log(c)
console.log(that.data.pque)
that.setData({
md5:that.data.pque[c].md5

})
console.log(that.data.md5)
wx.request({
  url: app.globalData.Url + '/paper/deleteQue',
  data: {
    sessionId: that.data.sessionId,
    pid:that.data.pid,
    md5:that.data.md5
  },
  method: 'POST',
  header: {
    'content-type': 'application/x-www-form-urlencoded;charset=utf-8;',
    'Cookie': 'JSESSIONID=' + that.data.sessionId,
  },
  success:function(res){


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
        that.setData({
          pque: res.data.data.que

        })

        if (that.data.pque.length == 0) {

          that.setData({
            replyTemArray: null
          })

        }
        else {
          var que = []
          var b = []
          var a = []
          for (let i = 0; i < that.data.pque.length; i++) {
            a = '第',
              a += i + 1
            a += '题:<br><br>'
            b = a.concat(that.data.pque[i].question)
            que.push(b)
          }

          console.log('题号：' + a)
          console.log('显示题目' + que)

          var replyArr = que;
          for (let i = 0; i < replyArr.length; i++) {
            WxParse.wxParse('reply' + i, 'html', replyArr[i], that);
            if (i === replyArr.length - 1) {
              WxParse.wxParseTemArray("replyTemArray", 'reply', replyArr.length, that)
            }
          }

        }



      }
    })

  }

})



  },
  papertitle:function(e){
var that=this;
that.setData({

  papertitle:e.detail.value
})
  },
  create:function(){
    var that=this;

wx.request({
  url: app.globalData.Url + '/paper/create',
  data: {
    sessionId: that.data.sessionId,
    title: that.data.papertitle
  },
  method: 'POST',
  header: {
    'content-type': 'application/x-www-form-urlencoded;charset=utf-8;',
    'Cookie': 'JSESSIONID=' + that.data.sessionId,
  },
  success:function(res){

    that.setData({
      list: res.data.data,
      modalNameAdd: null
    })
    console.log('渲染列表' + that.data.list)
  }
})
  },
  showmode:function(e){

var that=this;
that.setData({
  modalNameAdd: e.currentTarget.dataset.target,
})

  },
 delpaper:function(e){

var that=this;
var p=e.currentTarget.dataset.del
   that.setData({
    
     pid: that.data.list[p].id,
   })
console.log('删除'+that.data.pid)
wx.request({
  url: app.globalData.Url +'/paper/deletePaper',
  data: {
    sessionId: that.data.sessionId,
    pid: that.data.pid
  },
  method: 'POST',
  header: {
    'content-type': 'application/x-www-form-urlencoded;charset=utf-8;',
    'Cookie': 'JSESSIONID=' + that.data.sessionId,
  },
success:function(res){

 
  that.setData({
    list: res.data.data
  })
  console.log('渲染列表' +that.data.list)
}
})
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
      modalName1: null,
      modalName:null,
      modalNameAdd:null
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
      that.setData({
        pque : res.data.data.que

      })
  
 if(that.data.pque.length==0){

that.setData({
  replyTemArray:null
})

 }
 else{
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
 if(app.globalData.status==0)
    {
      var that = this;
      var flag='ture';
that.setData({
  modalName:flag

})
    }
    else{
      var flag=null;
that.setData({
  modalName: flag

  
})
    }

  

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
    var that=this;
    that.setData({
sessionId:app.globalData.sessionId

    })
    wx.request({
      url: app.globalData.Url + '/paper/getList',
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
          list: res.data.data
        })

        console.log('我的试卷列表:' + that.data.list)

      },
      fail: function (res) {


        console.log('服务器请求失败')
      }
    })
  },


  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    var that = this;
    that.setData({
      modalName1: null,
      modalNameAdd: null
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

})