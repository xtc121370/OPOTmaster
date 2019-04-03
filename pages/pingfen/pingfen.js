var app=getApp();
Page({
  data: {
    starIndex1: 0,
    starIndex2: 0,
    starIndex3: 0,
    starIndex4: 4,
    starIndex5: 5,
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar
  },

  onChange2(e) {
    const index = e.detail.index;
    this.setData({
      'starIndex2': index
    })
    console.log('用户评分:' + e.detail.index+'星')
  },
upload:function(){
wx.showToast({
  title: '感谢您的评价',
  icon:'success',
  duration: 1000,
})

},

});