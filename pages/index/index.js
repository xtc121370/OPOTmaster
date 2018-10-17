var app = getApp();
const device = wx.getSystemInfoSync()
const W = device.windowWidth
const H = device.windowHeight - 50

let cropper = require('../../welCropper/welCropper.js');

console.log(device)

Page({
  data: {
    tempFilePaths: '',
    sessionId:null
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
  selectTap(e) {
    let that = this
    let mode = e.currentTarget.dataset.mode
    console.log(e)

    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
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
          mode: mode,
          sizeType: ['original', 'compressed'],   //'original'(default) | 'compressed'
          callback: (res) => {
            if (mode == 'rectangle')
             {
              console.log("crop callback:" + res)
              app.globalData.tempFilePaths=res;
              that.setData({

                tempFilePaths: res,

              })
              console.log('本地返回' + that.data.tempFilePaths)
              console.log('全局'+app.globalData.tempFilePaths)
            
              console.log(res)
            }
            wx.showLoading({
              title: '加载中,请稍等',
            })

            setTimeout(function () {
              wx.hideLoading()
            },5000)
          
          wx.uploadFile({
            url: app.globalData.Url +'wPictureServlet',
              filePath: that.data.tempFilePaths,
              name: 'image',
              header: {
                'content-type': 'application/x-www-form-urlencoded;charset=utf-8;', 'Cookie': 'JSESSIONID=' + that.data.sessionId,
              },

              success: function (res) {

                console.log('服务器返回'+res.data);
               var jsonStr = res.data;
                jsonStr = jsonStr.replace(" ", "");
                if (typeof jsonStr != 'object') {
                  jsonStr = jsonStr.replace(/\ufeff/g, "");//重点
                  var jj = JSON.parse(jsonStr);
              res.data = jj;
                 app.globalData.result = res.data;
                 app.globalData.queUrl=res.data.queUrl
                }
                
                wx.navigateTo({
                 url: '../result/result',
                })
               console.log('返回搜索结果' + res.data)
                console.log('全局搜索结果' + app.globalData.result)
                console.log('问题URL'+app.globalData.queUrl)
              },
              fail:function(res){
                console.log(res)
                wx.showLoading({
                  title: '推荐失败，请重新上传',
                })

                setTimeout(function () {
                  wx.hideLoading()
                }, 3000)

            

              },
            })
            that.hideCropper() //隐藏，我在项目里是点击完成就上传，所以如果回调是上传，那么隐藏掉就行了，不用previewImage
          }
        })
      }
    })
  },
 
  
 //上传图片
  

  
  uploadimage: function (e){
  

        },

 
  

}) 