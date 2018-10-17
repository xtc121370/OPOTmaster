var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone:'',
    password:'',
    userInfo:'',
    status:'',
jsonparse:null,
wrong:0,
    
  },
 


   gozhuce:function (options)
    {
          
        wx.navigateTo({
        url: '../zhuce/zhuce',
    })
    },   //注册BUTTON跳转
  /**
   * 生命周期函数--监听页面加载
   */
      onLoad: function (options) {
        
     var that = this
       
   
   },
      PhoneInput: function (e) {
        this.data.phone = e.detail.value;

      },  //获取输入账号
      PasswordInput: function (e) {
        this.data.password = e.detail.value;
      },//获取输入密码


      login: function () {
        var that=this;
       
        //打印收入账号和密码
        console.log('账户: ', this.data.phone);
        console.log('密码: ', this.data.password);
        if (this.data.phone.length == 0 || this.data.password.length == 0) {
          wx.showToast({
            title: '用户名和密码不能为空',
            icon: 'none',
            duration: 2000
          })
        }  
        wx.request({
          url:app.globalData.Url+'wLoginServlet',   //服务器接口地址
          data: {
            LoginInfo: that.data.phone,
            password: that.data.password,

          },
          method: 'POST',
          header: {
            'content-type': 'application/x-www-form-urlencoded;charset=utf-8;',

          },
          success: function (res) {
            console.log('错误message'+res.data.message);
            console.log('错误状态'+res.data.status);
            that.data.status=res.data.status;
            if (that.data.status == 0) {
              wx.showToast({
                title: '手机号密码错误',
                icon: 'none',
                duration: 2000
              })
            };

            console.log('后台返回' + res.data);
            console.log('sessionId:' + res.data.sessionId);
            console.log('status:' + res.data.msg.status);
            console.log('rightmessage:'+res.data.msg.message);
            console.log('uid:'+res.data.u.id);
            console.log('phone:'+res.data.u.phone);
            console.log('password:'+res.data.u.password);
            console.log('username:'+res.data.u.username);
            console.log('name'+res.data.u.name);
            app.globalData.sessionId = res.data.sessionId;
            app.globalData.name = +res.data.u.name;
            app.globalData.username = res.data.u.username;
            app.globalData.phone = +res.data.u.phone;
            console.log('全局变量sessionId:' +app.globalData.sessionId)
            if (res.data.msg.status== 1) {

              wx.showToast({
                title: '登录成功',
                icon: 'success',
                duration: 2000000,
                success: function () {
                  wx.switchTab({
                    url: '../index/index',
                  })
                }
              })
            } 
            
       




          },
          fail: function () {
          
            
            console.log('服务器请求失败!')
            wx.showToast({
              title: '服务器请求失败，请联系管理员',
              icon: 'none',
              duration: 2000
            })
          },


        })
       
       
        //上传数据
       
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