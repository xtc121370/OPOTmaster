var WxParse = require('../../wxParse/wxParse.js');
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    paperlist:null,
    search:null,
    name: 'name1',
    answer:null,
    grade:null,
    md5:null,
    loadingHidden: true,
    'totalCount': 0,
    'totalPrice': 0,
    answerUrl:null,
    id: null,
    image: null,
    values:null,
    sessionId:null,
    result: null ,
nianji: [{ name: '七上', value: '七年级上' },
      { name: '七下', value: '七年级下',  },
      { name: '八上', value: '八年级上' },
      { name: '八下', value: '八年级下' },
      { name: '九上', value: '九年级上' },
      { name: '九下', value: '九年级下' },
],
banbenshuzu:[
  { name: '人教', value: '人教版' },
  { name: '苏教', value: '苏教版', },
  { name: '人教实验', value: '人教实验版' },
  { name: '北师', value: '北师版' }

],
    leixing: [{ name: '选择', value: '选择题' },
      { name: '填空', value: '填空题', },
      { name: '解答', value: '解答题' }
     
],
    analysis:null,
    md5:null,
    papertitle:null
           
  },
  papertitle: function (e) {
    var that = this;
    that.setData({
      papertitle: e.detail.value
    })
  },
  create: function () {
    var that = this;
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
      success: function (res) {
       
        that.setData({
          paperlist: res.data.data,
          modalNameAdd: null
        })
        console.log('渲染列表' + that.data.paperlist)
      }
    })
  },

showmode:function(e){
var that=this;
that.setData({
  modalNameAdd: e.currentTarget.dataset.target,
})


  },
search:function(e){
var that=this;
that.data.search=e.detail.value;
console.log(that.data.search)

  },

 
goworld:function(){
    var that=this;
//文字搜索
wx.showLoading({
  title: '搜索中',
})
    wx.request({
      url: app.globalData.Url+'/wxSearch/wordSearch',
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8;',
        'Cookie': 'JSESSIONID=' + that.data.sessionId,
      },
      data:{
   page:'1',
   question:that.data.search

      },
      success:function(res){
        console.log(res)
          wx.hideLoading() 
        if(res.data=="")
        {
          wx.showToast({
            title: '推荐失败请重新搜索',
            icon: 'none'

          })
          setTimeout(function () {
            wx.hideLoading()
          }, 1500)

        }
        
else{
that.setData({
  result:res.data.data,
})
      app.globalData.result= res.data.data
        var test1 = res.data.data;
        var que= []
        var a=[]
        var b=[]
        for (let i = 0; i < test1.length; i++) {
          a = '第',
          a += i + 1
          a += '题:<br><br>'
          b = a.concat(that.data.result[i].question)
          que.push(b)
        }

    
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
//页面数据；

/* 筛选用js
 checkboxChange1(e) {
    var that=this;
    var grades = e.detail.value
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
that.setData({
grade:grades
 
}) 
console.log('用户选择年级：'+that.data.grade)
  },

  //用户选择年级


  checkboxChange2(e) {
    var that = this;
    var banbens = e.detail.value
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
    that.setData({
      banben: banbens

    })
    console.log('用户选择版本：' + that.data.banben)
  },
  //用户选择版本


  checkboxChange3(e) {
    var that = this;
    var types = e.detail.value
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
    that.setData({
     type: types

    })
    console.log('用户选择类型：' + that.data.type)
  },
*/
  //用户选择类型

  //添加组卷MD5
  getmd5(e) {

    var that = this;
    if(app.globalData.status==0){

      wx.showToast({
        title: '请去我的页面绑定账号后操作',
        icon:'none'
      })
      setTimeout(function () {
        wx.hideLoading()
      }, 1500)
    }
    else{
    this.setData({
      modalName2: e.currentTarget.dataset.target
    })
    var m5= e.currentTarget.dataset.md5;
    if (that.data.result[m5].md5!=null){
      that.data.md5 = that.data.result[m5].md5
      console.log(that.data.md5)
    }
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
          paperlist: res.data.data
        })

        console.log('我的试卷列表:' + that.data.paperlist)

      },
      fail: function (res) {


        console.log('服务器请求失败')
      }
    })
    }
  
  
  },
addQue:function(e){
var that=this
    var j = e.currentTarget.dataset.addque
    that.data.pid=that.data.paperlist[j].id
    console.log(that.data.pid)
    if(that.data.md5==null){
      wx.showToast({
        title: '请搜索后添加',
        icon:'none'

      })
      setTimeout(function () {
        wx.hideLoading()
      }, 1000)
      
    }
    else{
wx.request({
  url:app.globalData.Url+'/paper/addQue',
  data: {
    sessionId: that.data.sessionId,
    md5: that.data.md5,
    pid: that.data.pid
  },
  method: 'POST',
  header: {
    'content-type': 'application/x-www-form-urlencoded;charset=utf-8;',
    'Cookie': 'JSESSIONID=' + that.data.sessionId,
  },
  success: function (res) {
that.setData({
  modalName2: null
})
if(res.data.code==0){
  wx.showToast({
    title: '题目已存在此试卷中',
    icon:'none'

  })
  setTimeout(function () {
    wx.hideLoading()
  }, 500)

}
else{
    console.log(res)
    wx.showToast({
      title: '添加成功',

    })
    setTimeout(function () {
      wx.hideLoading()
    }, 500)
}
  }


})
    }

  },
  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },

  showModal1(e) {
    var that=this;
    var index=e.currentTarget.dataset.number;
    console.log(index)
    var x=[];
      x.push(that.data.result[index].question)
      x.push(that.data.result[index].analysis)
      x.push(that.data.result[index].answer)
    this.setData({
      answer:x,
      modalName: e.currentTarget.dataset.target
    })
   
    var replyArr = x;
    for (let i = 0; i < replyArr.length; i++) {
      WxParse.wxParse('jx' + i, 'html', replyArr[i], that);
      if (i === replyArr.length - 1) {
        WxParse.wxParseTemArray("jxTemArray", 'jx', replyArr.length, that)
      }
    }

  },
  hidemodeAdd(e){
var that=this;
that.setData({
  modalNameAdd: null
})

  },
  hideModal(e) {
    this.setData({
      modalName: null,
      modalName1: null,
      modalName2: null,
    
    })
  },


gotuijian:function(){
  var that=this;
console.log(that.data.grade)
console.log(that.data.type)
console.log(that.data.banben)


//写服务器对接的接口就行
},


  containerTap: function (res) {
    console.log(res.touches[0]);
    var x = res.touches[0].pageX;
    var y = res.touches[0].pageY + 85;
    this.setData({
      rippleStyle: ''
    });
    this.setData({
      rippleStyle: 'top:' + y + 'px;left:' + x + 'px;-webkit-animation: ripple 0.4s linear;animation:ripple 0.4s linear;'
    });
  },
  //x,y轴截图数据

 
 
  /**
   * 生命周期函数--监听页面加载
   */
camera:function(){

 wx.navigateTo({
   url: '../camera/camera',
 })
},
//点击图片跳转返回拍照页面
  onLoad: function (options) {
    var that = this;
    that.setData({
      image: app.globalData.tempFilePath,
      result: app.globalData.result,
sessionId:app.globalData.sessionId,
     
  })
    var test1 = that.data.result;
    
    var que = []
    var a= []
    var b =[]

    for (let i = 0; i < test1.length; i++) {

      a = '第',
      a += i + 1
      a += '题:<br><br>'
      b = a.concat(that.data.result[i].question)
      que.push(b)

    }


    var replyArr = que;
    for (let i = 0; i < replyArr.length; i++) {
      WxParse.wxParse('reply' + i, 'html', replyArr[i], that);
      if (i === replyArr.length - 1) {
        WxParse.wxParseTemArray("replyTemArray", 'reply', replyArr.length, that)
      }
    }

 },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var that=this;
    that.setData({


      image: app.globalData.tempFilePath,
      result: app.globalData.result,
      sessionId: app.globalData.sessionId,

    })//页面数据初始化
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this;
    that.setData({
      image: app.globalData.tempFilePath,
      result: app.globalData.result,
      sessionId: app.globalData.sessionId,

    }) 
     
     wx.pageScrollTo({
      scrollTop:230,
      duration:150
    })

var test1=that.data.result
    var que = []
    var a = []
    var b = []

    for (let i = 0; i < test1.length; i++) {

      a = '第',
        a += i + 1
      a += '题:<br><br>'
      b = a.concat(that.data.result[i].question)
      que.push(b)

    }

    console.log('显示题目' + que)
    var replyArr = que;
    for (let i = 0; i < replyArr.length; i++) {
      WxParse.wxParse('reply' + i, 'html', replyArr[i], that);
      if (i === replyArr.length - 1) {
        WxParse.wxParseTemArray("replyTemArray", 'reply', replyArr.length, that)
      }
    }
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
   
   var that=this;
   that.setData({

     modalName: null,
     modalName1: null,
     modalName2: null,
     modalNameAdd: null,
   })

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

  },


 
 


})

