var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:null,
    tel:null,
    zcpass:null,
    phone: '',
    password: '',
    userInfo: '',
    jc:null,
    nj:null,
    status: '',
    openid:null,

    avatarUrl:null,
    nianji:[ '七年级上','七年级下','八年级上','八年级下','九年级上','九年级下' ],
    jiaocai: ['人教版', '北师大版', '华师大版', '苏科版', '湘教版', '青鸟版', '浙教版', '冀教版', '沪科版', '人教五四版', '鲁教五四版', '北京课改版', '泸科版', 
    '人教新版', '北师大新版', '华师大新版', '苏科新版', '湘教新版', '青鸟新版', '浙教新版', '冀教新版', '沪科新版', '人教五四新版', '鲁教五四新版', '北京课改新版', '泸科新版']
    
  },
  name:function(e){
    var that = this;
    that.data.name = e.detail.value;
    console.log(that.data.name)
  },
  phone:function(e){

    var that = this;
    that.data.tel = e.detail.value;
    console.log(that.data.tel)
  },
  password:function(e){
    var that = this;
    that.data.zcpass= e.detail.value;
    console.log(that.data.zcpass)

  },
  nianji: function (e) {
var that=this;
var a=e.detail.value
    that.setData({
      index1: e.detail.value,
      nj:that.data.nianji[a]
    })
    console.log(that.data.nj)
  },
  jiaocai: function (e) {
    var that=this;
    var b = e.detail.value
    
    that.setData({
      index2: e.detail.value,
      jc:that.data.jiaocai[b]
    
    })
    console.log(that.data.jc)
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
  gozhuce: function (options) {
  var that=this;
  
  wx.request({
    url: app.globalData.Url+'/user/register',
    data: {
      username: that.data.name,
      phone : that.data.tel,
      password: that.data.zcpass,
      nianji:that.data.nj,
      jiaocai:that.data.jc
    },
    method: 'POST',
    header: {
      'content-type': 'application/x-www-form-urlencoded;charset=utf-8;',
      'Cookie': 'JSESSIONID=' + that.data.sessionId,
    },
    success:function(res){

console.log(res)
that.setData({
  modalName: null

})
      wx.showToast({
        title: '注册成功',
        icon: 'success'

      })
      setTimeout(function () {
        wx.hideLoading()
      }, 1000)


    }

  })
  }, //注册BUTTON跳转
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var that = this;
    this.app = getApp()
    that.setData({
      avatarUrl:app.globalData.avatarUrl,
      openid:app.globalData.openid,
    })
   
  
   console.log('openid:'+that.data.openid)
    console.log('avatatUrl:' + that.data.openid)
    
  },
  PhoneInput: function (e) {
    var that = this;
    that.data.phone = e.detail.value;

  }, //获取输入账号
  PasswordInput: function (e) {
    var that = this;
    that.data.password = e.detail.value;
  }, //获取输入密码

binding:function(){
var that=this;
wx.request({
  url: app.globalData.Url +'/wxUser/Binding',
  data: {
    openid:that.data.openid,
    username: that.data.phone,
    password:that.data.password
  },
  method: 'POST',
  header: {
    'content-type': 'application/x-www-form-urlencoded;charset=utf-8;',
    'Cookie': 'JSESSIONID=' + that.data.sessionId,
  },
  success:function(res){
if(res.data.status==500){
  console.log('失败')
  wx.showToast({
    title: '请检查用户名密码是否正确',
    icon: 'none'

  })
  setTimeout(function () {
    wx.hideLoading()
  }, 500)
  
}
else{
  wx.showToast({
    title: '添加成功',
    success:function(){

      wx.navigateTo({
        url: '../wx/wx',
      })
    }

  })
  setTimeout(function () {
    wx.hideLoading()
  }, 500)
 
  console.log(res)
}
   

  },
  fail:function(res){

    console.log('失败')
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