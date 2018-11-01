// pages/mine/mine.js
var app=getApp();


Page({

  /**
   * 页面的初始数据
   */
  data: {
  phone:null,
  name:null,
  username:null,
    isPopping: true,//是否已经弹出

    animPlus: {},//旋转动画

    animCollect: {},//item位移,透明度

    animTranspond: {},//item位移,透明度

    animInput: {},//item位移,透明度

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
  input: function () {

    console.log("input")

  },

  transpond: function () {

    console.log("transpond")

  },

  collect: function () {

    console.log("collect")

  },



  //弹出动画

  popp: function () {

    //plus顺时针旋转

    var animationPlus = wx.createAnimation({

      duration: 500,

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

    animationTranspond.translate(0, 100).rotateZ(180).opacity(1).step();

    animationInput.translate(0, 150).rotateZ(180).opacity(1).step();

    this.setData({

      animPlus: animationPlus.export(),

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

    animationcollect.translate(0, 0).rotateZ(0).opacity(0).step();

    animationTranspond.translate(0, 0).rotateZ(0).opacity(0).step();

    animationInput.translate(0, 0).rotateZ(0).opacity(0).step();

    this.setData({

      animPlus: animationPlus.export(),

      animCollect: animationcollect.export(),

      animTranspond: animationTranspond.export(),

      animInput: animationInput.export(),

    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  var that=this;
    this.app = getApp()
that.setData({


  phone:app.globalData.phone,
  name:app.globalData.name,
  username:app.globalData.username

})
console.log(that.data.phone)
    console.log(that.data.name)
    console.log(that.data.username)
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
    this.app.slideupshow(this, 'slide_up1', -200, 1)

    setTimeout(function () {
      this.app.slideupshow(this, 'slide_up2', -200, 1)
    }.bind(this), 200);
  },


  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    //你可以看到，动画参数的200,0与渐入时的-200,1刚好是相反的，其实也就做到了页面还原的作用，使页面重新打开时重新展示动画
    this.app.slideupshow(this, 'slide_up1', 200, 0)
    //延时展现容器2，做到瀑布流的效果，见上面预览图
    setTimeout(function () {
      this.app.slideupshow(this, 'slide_up2', 200, 0)
    }.bind(this), 200);
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
    var that = this;
    that.setData({


      phone: app.globalData.phone,
      name: app.globalData.name,
      username: app.globalData.username

    })
    console.log(that.data.phone)
    console.log(that.data.name)
    console.log(that.data.username)
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