// pages/shopcart/shopcart.js
var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
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
    selectedFlag: [false, false, false, false],

   index:[0,1,2,3,4,5]
           
  },
  goshitilan:function(){

wx.switchTab({
  url: '../shitilan/shitilan',
})

  },
  imgbig:function(event){


    var src = event.currentTarget.dataset.src;//获取data-src
    var imgList = [event.currentTarget.dataset.list]
    
    //获取data-list
    console.log()
    console.log(src )
    console.log(imgList)
    wx.previewImage({
      current: src, // 当前显示图片的http链接
      urls: imgList // 需要预览的图片http链接列表
    })
  }, 
  imgbig1:function(event){

    var src = event.currentTarget.dataset.src;//获取data-src
    var imgList1 = [event.currentTarget.dataset.list]

    //获取data-list
    console.log()
    console.log(src)
    console.log(imgList1)
    wx.previewImage({
      current: src, // 当前显示图片的http链接
      urls: imgList1 // 需要预览的图片http链接列表
    })

  },
  imgbig2:function(event){


    var src = event.currentTarget.dataset.src;//获取data-src
    var imgList2 = [event.currentTarget.dataset.list]

    //获取data-list
    console.log()
    console.log(src)
    console.log(imgList2)
    wx.previewImage({
      current: src, // 当前显示图片的http链接
      urls: imgList2 // 需要预览的图片http链接列表
    })
  },
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


  goindex:function(){

wx.switchTab({
  url: '../index/index',
})
  },
  upload: function (options) {
    var that = this;
    

    wx.showLoading({
      title: '添加中,请稍等',
    })

    setTimeout(function () {
      wx.hideLoading()
    }, 7000)
    console.log('dayin:'+that.data.sessionId)
wx.request({
  url: app.globalData.Url +'wAddQueServlet',//服务器
       
       data: {
        md5: that.data.values,
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
      url: app.globalData.Url +'wGetBasketServlet',
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

    })
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

  },

  /**
   * 计算商品总数
   */
  calculateTotal: function () {
    var goodList = this.data.goodList;
    var totalCount = 0;
    var totalPrice = 0;
    for (var i = 0; i < goodList.length; i++) {
      var good = goodList[i];
      if (good.checked) {
        totalCount += good.count;
        totalPrice += good.count * good.price;
      }
    }
    totalPrice = totalPrice.toFixed(2);
    this.setData({
      'totalCount': totalCount,
      'totalPrice': totalPrice
    })
  },

  /**
   * 用户点击商品减1
   */
  

  /**
   * 用户点击商品加1
   */
 
  /**
   * 用户选择购物车商品
   */
  checkboxChange: function (e) {
    var that = this;
    console.log('用户选中题目ID：' + e.detail.value);
    var checkboxItems = this.data.result;
    var values = e.detail.value;
    that.setData({

      values: e.detail.value,
    })
    console.log('ID值' + that.data.values)
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
    this.calculateTotal();
  },

  /**
   * 用户点击全选
   */
  selectalltap: function (e) {
    console.log('用户点击全选，携带value值为：', e.detail.value);
    var value = e.detail.value;
    var checkAll = false;
    if (value && value[0]) {
      checkAll = true;
    }

    var goodList = this.data.goodList;
    for (var i = 0; i < result.length; i++) {
      var good = result[i];
      good['checked'] = checkAll;
    }

    this.setData({
      'checkAll': checkAll,
      'result': result
    });
    this.calculateTotal();
  }


})

