// pages/shopcart/shopcart.js
var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: 'name1',
    garde:null,
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    isChecked: false,
    md5:null,
    loadingHidden: true,
    'checkAll': false,
    'totalCount': 0,
    'totalPrice': 0,
    answerUrl:null,
    id: null,
    image: null,
    values:null,
    sessionId:null,
    result: null ,
    selectedFlag: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
   index:[0,1,2,3,4,5],
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
     
]
           
  },
//页面数据；
  checkboxChange1(e) {
    var that=this;
    var grades = e.detail.value
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
that.setData({
grade:grades
 
})
console.log('用户选择年级：'+that.data.grade)
  },
  checkboxChange2(e) {
    var that = this;
    var banbens = e.detail.value
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
    that.setData({
      banben: banbens

    })
    console.log('用户选择版本：' + that.data.banben)
  },
  
  checkboxChange3(e) {
    var that = this;
    var types = e.detail.value
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
    that.setData({
     type: types

    })
    console.log('用户选择版本：' + that.data.type)
  },
  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  hideModal(e) {
    this.setData({
      modalName: null
    })
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
  
 
  changeToggle: function (e) {
    var index = e.currentTarget.dataset.index;
    if (this.data.selectedFlag[index]) {
      this.data.selectedFlag[index] = false;
    } else {
      this.data.selectedFlag[index] = true;
    }

    this.setData({
      selectedFlag: this.data.selectedFlag
    })
  },
//选中隐藏数据

 
 //上传图片
  upload: function (e) {
    var that = this;
    that.data.md5 = e.currentTarget.dataset.lockerid;
    console.log('md5=' + that.data.md5)
    wx.showLoading({
      title: '添加中,请稍等',
    })

    setTimeout(function () {
      wx.hideLoading()
    }, 7000)
    console.log('sessionId:'+that.data.sessionId)
wx.request({
  url: app.globalData.Url+'wAddQueServlet',//服务器
       
       data: {
        md5: that.data.md5,
          sessionId:that.data.sessionId,
       },
     method: 'POST',
        header: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8;',
'Cookie': 'JSESSIONID=' +that.data.sessionId,
   },
       success: function (res) {
         console.log('返回题目' + res.data)
   },
    
        fail: function (res) {

         console.log('服务器请求失败'+res.data)
         
        }

     })
    wx.request({
      url: app.globalData.Url+'wGetBasketServlet',
      data: {

        sessionId: that.data.sessionId
      },
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8;', 'Cookie': 'JSESSIONID=' + that.data.sessionId,
      },
      success: function (res) {


        wx.showToast({
          title: '添加成功，请返回主页试题篮查看',
          icon: 'none',
          duration: 1500,
        })

        console.log('试题蓝返回题目:' + res.data)
        app.globalData.shitilan = res.data;
        console.log('全局变量' + app.globalData.shitilan)



      },
      fail:function(res){
        console.log('服务器请求失败')
      }
    })
 
 },
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


      image: app.globalData.tempFilePaths,

      result: app.globalData.result,
sessionId:app.globalData.sessionId,
     
  })
   console.log('图片路径：' + that.data.image)
   console.log('试题内容'+that.data.result)
   console.log('sessionId:'+that.data.sessionId)
console.log('测试'+that.data.answerUrl)
console.log('que'+that.data.que)






 },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var that=this;
    that.setData({


      image: app.globalData.tempFilePaths,
     
      sessionId: app.globalData.sessionId,

    })//页面数据初始化
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this;
    this.app = getApp()
    this.app.slideupshow(this, 'slide_up1', -0, 1)

    setTimeout(function () {
      this.app.slideupshow(this, 'slide_up2', -0, 1)
    }.bind(this), 80);

    that.setData({


      image: app.globalData.tempFilePaths,

      result: app.globalData.result,
      sessionId: app.globalData.sessionId,

    })
    console.log('图片路径：' + that.data.image)
    console.log('试题内容' + that.data.result)
    console.log('sessionId:' + that.data.sessionId)
    console.log('测试' + that.data.answerUrl)
    console.log('que' + that.data.que)
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

  /**
   * 计算商品总数

  onShareAppMessage: function () {

    // 用户点击右上角分享

    return {

      title: 'title', // 分享标题

      desc: 'desc', // 分享描述

      path: 'path' // 分享路径

    }

  },
  /**
   * 用户点击商品减1
   */
  

  
  value:function(e){

  },
  checkboxChange: function (e) {
    var that = this;
    var checkboxItems = this.data.result;
    var values = e.detail.value;
    that.setData({

      values: e.detail.value,
    })
    for (var i = 0; i < checkboxItems.length; ++i) {
      checkboxItems[i].checked = false;
      for (var j = 0; j < values.length; ++j) {
        if (checkboxItems[i].unique == values[j]) {
          checkboxItems[i].checked = true;
          break;
        }
      }
    }

    var checkAll = false;
    if (checkboxItems.length == values.length) {
      checkAll = true;
    }
    this.setData({
      'result': checkboxItems,
      'checkAll': checkAll
    });
 
  },

  //查看解析隐藏
  /**
   * 用户点击全选
   */
 


})

