var app = getApp();
const device = wx.getSystemInfoSync()
const W = device.windowWidth
const H = device.windowHeight - 50

let cropper = require('../../welCropper/welCropper.js');

console.log(device)

Page({
  data: {
   
    tempFilePaths: '',
    sessionId: null,
    mode:null,
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

  onLoad: function () {

    var that = this
    // 初始化组件数据和绑定事件
    cropper.init.apply(that, [W, H]);
    that.setData({

      sessionId: app.globalData.sessionId
    })
    // console.log(usertype)  
  },
 
 /* chooseWxImage: function (type) {
    var that = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original',], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: [type],// 可以指定来源是相册还是相机，默认二者都有
      success(res) {
        const tempFilePath = res.tempFilePaths[0]
        console.log(tempFilePath)

        // 将选取图片传入cropper，并显示cropper
        // mode=rectangle 返回图片path
        // mode=quadrangle 返回4个点的坐标，并不返回图片。这个模式需要配合后台使用，用于perspective correction
        // let modes = ["rectangle", "quadrangle"]
        // let mode = modes[1]   //rectangle, quadrangle
        that.showCropper({
          src: tempFilePath,
          mode: that.data.mode,
          sizeType: ['original', 'compressed'], //'original'(default) | 'compressed'
          callback: (res) => {
            if (that.data.mode == 'rectangle') {
              console.log("crop callback:" + res)
              app.globalData.tempFilePaths = res;
              that.setData({

                tempFilePaths: res,

              })
              console.log('本地返回' + that.data.tempFilePaths)
              console.log('全局' + app.globalData.tempFilePaths)

              console.log(res)
            }
            wx.showLoading({
              title: '加载中,请稍等',
              success:function(){
                wx.uploadFile({
                  url: app.globalData.Url + 'wPictureServlet',
                  filePath: that.data.tempFilePaths,
                  name: 'image',
                  header: {
                    'content-type': 'application/x-www-form-urlencoded;charset=utf-8;',
                    'Cookie': 'JSESSIONID=' + that.data.sessionId,
                  },

                  success: function (res) {
                    setTimeout(function () {
                      wx.hideLoading()
                    }, 0)

                    console.log('服务器返回' + res.data);
                    var jsonStr = res.data;
                    jsonStr = jsonStr.replace(" ", "");
                    if (typeof jsonStr != 'object') {
                      jsonStr = jsonStr.replace(/\ufeff/g, ""); //重点
                      var jj = JSON.parse(jsonStr);
                      res.data = jj;
                      //app.globalData.result = res.data; //测试先注释掉
                      //app.globalData.queUrl = res.data.queUrl//测试先注释掉
                    }

                    wx.navigateTo({
                      url: '../result/result',
                    })
                    console.log('返回搜索结果' + res.data)
                    console.log('全局搜索结果' + app.globalData.result)
                    console.log('问题URL' + app.globalData.queUrl)
                  },

                  fail: function (res) {
                    console.log(res)
                    wx.showLoading({
                      title: '推荐失败，请联系管理员',
                    })

                    setTimeout(function () {
                      wx.hideLoading()
                    }, 3000)



                  },

                })
                
                that.hideCropper()
                
              }
            })

           

            //隐藏，我在项目里是点击完成就上传，所以如果回调是上传，那么隐藏掉就行了，不用previewImage
          }
        })
      }
    })
  },
  */

  selectTap:function() {
    let that = this
    wx.navigateTo({
      url: '../camera/camera',
    })
   /*that.data.mode = e.currentTarget.dataset.mode
    console.log('打印测试'+that.data.mode)
    wx.showActionSheet({
      itemList: ['拍照', '从相册选择'],
      itemColor: " black",
      success: function (res) {
        if (!res.cancel) {
          if (res.tapIndex == 1) {
            that.chooseWxImage('album')
          } else if (res.tapIndex == 0) {
            that.chooseWxImage('camera')
          }
        }
      }
    })
 */
  },


  //上传图片



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
    this.app.slideupshow(this, 'slide_up1', 80, 0)
    //延时展现容器2，做到瀑布流的效果，见上面预览图
    setTimeout(function () {
      this.app.slideupshow(this, 'slide_up2', 80, 0)
    }.bind(this), 80);
  },

  onShareAppMessage: function () {

    // 用户点击右上角分享

    return {

      title: 'title', // 分享标题

      desc: 'desc', // 分享描述

      path: 'path' // 分享路径

    }

  }

})