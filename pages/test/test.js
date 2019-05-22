// pages/test/test.js
var WxParse = require('../../wxParse/wxParse.js');
var app=getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    emp: [{ "answer": "（1）如图所示：\u003c/br\u003e\u003cimg  src\u003d\"http://101.200.41.95/images/464856.92075900483.jpg\" style\u003d\"vertical-align:middle\"/\u003e；\u003c/br\u003e（2）如图所示：\u003c/br\u003e\u003cimg  src\u003d\"http://101.200.41.95/images/464857.11576783814.jpg\" style\u003d\"vertical-align:middle\"/\u003e．", "id": 0, "unique": "efb631f67fa068a466aac2f4ce425783", "jx": "  （1）利用组合体的形状，分别从正面、左面、上面观察得出它的三视图即可；\u003c/br\u003e（2）利用俯视图以及组合体的个数进而得出主视图和左视图． ", "tuijianWay": "原题", "keyWord": ",三视图,三视图", "checked": false, "queUrl": "../image/testque.png", "answerUrl": "../image/testjx.png", "jxUrl": "http://39.105.56.207:8190/pictures/jx1.png" }, { "answer": "如图所示：\u003c/br\u003e\u003cimg  src\u003d\"http://101.200.41.95/images/165340.17093247885.jpg\" style\u003d\"vertical-align:middle\"/\u003e．", "id": 0, "unique": "021d5cf652ef429ceaf7a475c8d543a3", "jx": "  由已知条件可知，主视图有2列，每列小正方数形数目分别为3，2，左视图有3列，每列小正方形数目分别为3，1，2．据此可画出图形即可． ", "tuijianWay": "知识点顺序完全匹配", "keyWord": ",画三视图,图形的三视图", "checked": false, "queUrl": "../image/testque.png", "answerUrl": "../image/testjx.png", "jxUrl": "http://39.105.56.207:8190/pictures/jx2.png" }, { "answer": "如图所示：\u003c/br\u003e\u003cimg src\u003d\"http://101.200.41.95/images/37574.712808252.jpg\" zwidth\u003d\"244\" zheight\u003d\"162\"/\u003e", "id": 0, "unique": "1049c9e320dbd5079b2a5359832d0d16", "jx": "由已知条件可知，从正面看有3列，每列小正方数形数目分别为3，1，4；从左面看有3列，每列小正方形数目分别为2，4，2．据此可画出图形．", "tuijianWay": "知识点顺序完全匹配", "keyWord": ",几何体的三视图画法", "checked": false, "queUrl": "../image/testque.png", "answerUrl": "../image/testjx.png", "jxUrl": "http://39.105.56.207:8190/pictures/jx3.png" }, { "answer": "如图所示：\u003c/br\u003e \u003cimg src\u003d\"http://101.200.41.95/images/26091.73831667981.jpg\" zzwidth\u003d\"189\" zzheight\u003d\"133\"/\u003e", "id": 0, "unique": "00f09b2896b310025f85d0b69d570690", "jx": "由已知条件可知，从正面看有2列，每列小正方数形数目分别为2，3；从左面看有3列，每列小正方形数目分别为1，2，3．据此可画出图形．", "tuijianWay": "知识点顺序完全匹配", "keyWord": ",几何体的三视图画法", "checked": false, "queUrl": "../image/testque.png", "answerUrl": "../image/testjx.png", "jxUrl": "http://39.105.56.207:8190/pictures/jx4.png" }, { "answer": "\u003cimg src\u003d\"http://101.200.41.95/images/102234.07346891408.jpg\" zwidth\u003d\"211\" zheight\u003d\"139\"/\u003e如图所示：", "id": 0, "unique": "07f4ec132af2dda8181ec71af9367937", "jx": "由已知条件可知，主视图有3列，每列小正方数形数目分别为4，3，1，左视图有2列，每列小正方形数目分别为3，4，据此可画出图形．", "tuijianWay": "知识点顺序完全匹配", "keyWord": ",几何体的三视图画法", "checked": false, "queUrl": "../image/testque.png", "answerUrl": "../image/testjx.png", "jxUrl": "http://39.105.56.207:8190/pictures/jx5.png" }, { "answer": "（1）搭这样的几何体最少需要8+2+1\u003d11个小正方体，\u003c/br\u003e最多需要8+6+3\u003d17个小正方体；\u003c/br\u003e（2）如图所示：\u003c/br\u003e\u003cimg src\u003d\"http://101.200.41.95/images/109488.16780900593.jpg\" zwidth\u003d\"226\" zheight\u003d\"142\"/\u003e", "id": 0, "unique": "02ecd152ae17da65070da46df1c288af", "jx": "（1）易得这个几何体共有3层，由俯视图可得第一层正方体的个数，由主视图可得第二层和第三层最少或最多的正方体的个数，相加即可；\u003c/br\u003e（2）利用题意结合立方体的个数画出左视图即可．", "tuijianWay": "知识点顺序完全匹配", "keyWord": ",三视图,空间想象能力,俯视图打地基，主视图疯狂盖，左视图拆违章", "checked": false, "queUrl": "../image/testque.png", "answerUrl": "../image/testjx.png", "jxUrl": "http://39.105.56.207:8190/pictures/jx6.png" }, { "answer": "（1）a\u003d3，b\u003d1，c\u003d1；\u003c/br\u003e（2）这个几何体最少由4+2+3\u003d9个小立方块搭成；\u003c/br\u003e这个几何体最多由6+2+3\u003d11个小立方块搭成；\u003c/br\u003e（3）如图所示：\u003c/br\u003e\u003cimg src\u003d\"http://101.200.41.95/images/117859.92688278746.jpg\" zwidth\u003d\"103\" zheight\u003d\"138\"/\u003e", "id": 0, "unique": "051b49b3316dff76467153ebbc7521a8", "jx": "（1）由主视图可知，第二列小立方体的个数均为1，第3列小正方体的个数为3，那么a\u003d3，b\u003d1，c\u003d1；\u003c/br\u003e（2）第一列小立方体的个数最多为2+2+2，最少为2+1+1，那么加上其他两列小立方体的个数即可；\u003c/br\u003e（3）左视图有3列，每列小正方形数目分别为3，1，2．", "tuijianWay": "知识点顺序完全匹配", "keyWord": ",三视图,主视图,左视图,主视图主要告知组成的几何体的层数和列数", "checked": false, "queUrl": "../image/testque.png", "answerUrl": "../image/testjx.png", "jxUrl": "http://39.105.56.207:8190/pictures/jx7.png" }],
   
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
var that=this;
var test1=that.data.emp;
    var test = []
for(let i = 0;i<test1.length;i++)
{

  test.push(test1[i].answer)

}
    console.log('测试测试'+test)
    var replyArr = test;

  

    for (let i = 0; i < replyArr.length; i++) {
      WxParse.wxParse('reply' + i, 'html', replyArr[i], that);
      if (i === replyArr.length - 1) {
        WxParse.wxParseTemArray("replyTemArray", 'reply', replyArr.length, that)
      }
    }
   
    
   /*    var  article  =  that.data.emp.toString();
    console.log('测试'+that.data.emp.toString())



    WxParse.wxParse('article', 'html', article, that, 5);*/

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