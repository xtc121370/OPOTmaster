var app = getApp();
Page({
  data: {
    src: '',
    width: 300,//宽度
    height: 150,//高度,
    test: null,
    tempFilePaths: null
  },
  no: function () {
var that=this;
    app.globalData.tempFilePath=null;
    wx.navigateTo({
      url: '../camera/camera',
    })
  },
  onLoad: function (options) {
    var that = this;
    console.log(app.globalData.tempFilePath)
    //获取到image-cropper对象
    this.cropper = this.selectComponent("#image-cropper");
    //开始裁剪
    that.setData({
      src: app.globalData.tempFilePath,
    });
    console.log(that.data.src)
    wx.showLoading({
      title: '加载中'
    })
  },
  cropperload(e) {
    console.log("cropper初始化完成");
  },
  loadimage(e) {
    console.log("图片加载完成", e.detail);
    wx.hideLoading();
    //重置图片角度、缩放、位置
    this.cropper.imgReset();
  },
  getImg() {
    var that = this;
    this.cropper.getImg((obj) => {
      that.data.tempFilePaths = obj.url;
      console.log(that.data.tempFilePaths)
      wx.showLoading({
        title: '推荐中',
      })
      wx.uploadFile({
        url: app.globalData.Url + '/wxSearch/pictureSearch',//app.globalData.Url + 'pictureSearch',
        filePath: that.data.tempFilePaths,
        name: 'image',
        header: {
          'content-type': 'application/x-www-form-urlencoded;charset=utf-8;',
          'Cookie': 'JSESSIONID=' + that.data.sessionId,
        },

        success: function (res) {
         
            wx.hideLoading()
         
          if (res.statusCode==500){
            wx.showLoading({
              title: '推荐失败请重新选择图片搜索',
              icon:'none'
            })
            setTimeout(function () {
              wx.hideLoading()
            }, 1000)

          }
          else{
          console.log('服务器返回' + res);
          var jsonStr = res.data;
          jsonStr = jsonStr.replace(" ", "");
          if (typeof jsonStr != 'object') {
            jsonStr = jsonStr.replace(/\ufeff/g, ""); //重点
            var jj = JSON.parse(jsonStr);
            res.data = jj;
            app.globalData.result = res.data.data; //测试先注释掉
            console.log('返回搜索结果' + res)
            console.log('全局搜索结果' + app.globalData.result)
          }
          wx.hideLoading()
          wx.switchTab({
            url: '../result/result',
          })
          }

        },

        fail: function (res) {
          console.log(res)
          wx.showToast({
            title: '推荐失败请重新搜索',
            icon: 'none'

          })

          setTimeout(function () {
            wx.hideLoading()
          }, 1500)



        },

      })


    });


  },
  clickcut(e) {
    var that = this
    console.log(e.detail);

    //点击裁剪框阅览图片
    wx.previewImage({
      current: e.detail.url, // 当前显示图片的http链接
      urls: [e.detail.url] // 需要预览的图片http链接列表
    })
    wx.navigateTo({
      url: '../test1/test1',
    })
  },
})