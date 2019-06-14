// pages/test/test.js
var WxParse = require('../../wxParse/wxParse.js');
var app=getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    emp: [{
      "answer": '证明：方法一：如图1中，作BF⊥DE于点F，CG⊥DE于点G．</br>  <img width=135 height=157 src=\"http://60.205.203.206/picname/35518adf-9d44-437a-b569-e928f8072831.gif\" ></br>  ∴∠F=∠CGE=90°，</br>  在△BFE和△CGE中，</br>  <img width=106 height=62 src=\"http://60.205.203.206/picname/6c256d95-3b88-4fce-a8d2-e35d28131b84.gif\">，</br>  ∴△BFE≌△CGE．</br>  ∴BF=CG．</br>  在△ABF和△DCG中，</br>  <img width=130 height=62 src=\"http://60.205.203.206/picname/6e05e7d0-4695-4b4d-b8cf-6c62d50ad3a1.gif\">，</br>  ∴△ABF≌△DCG．</br>  ∴AB=CD．</br>  或方法二：如图2中，作CF∥AB，交DE的延长线于点F．</br>  <img width=135 height=178 src=\"http://60.205.203.206/picname/ce1e8d53-be44-4071-a9cc-4ee720df11b0.gif\" ></br>  ∴∠F=∠BAE．</br>  又∵∠ABE=∠D，</br>  ∴∠F=∠D．</br>  ∴CF=CD．</br>  在△ABE和△FCE中，</br>  <img width=106 height=62 src=\"http://60.205.203.206/picname/3730530e-78bd-4934-b3d1-26a8e7faadbb.gif\">', "id": 0, "unique": "efb631f67fa068a466aac2f4ce425783", "jx": "  （1）利用组合体的形状，分别从正面、左面、上面观察得出它的三视图即可；\u003c/br\u003e（2）利用俯视图以及组合体的个数进而得出主视图和左视图． ", "tuijianWay": "原题", "keyWord": ",三视图,三视图", "checked": false, "queUrl": "../image/testque.png", "answerUrl": "../image/testjx.png", "jxUrl": "http://39.105.56.207:8190/pictures/jx1.png"
    }, { "answer": '"（2012秋•八步区校级期中）某市为鼓励市民节约用水，做出如下规定：<br><table class=MsoNormalTable  border=0  cellspacing=0  style="border-collapse:collapse;width:237.0000pt;mso-table-layout-"><tr><td width=251  valign=top  colspan=3  style="width:150.7500pt;padding:0.0000pt 5.4000pt 0.0000pt 5.4000pt ;border-left:1.0000pt solid rgb(0,0,0); border-right:1.0000pt solid rgb(0,0,0);border-top:1.0000pt solid rgb(0,0,0);border-bottom:1.0000pt solid rgb(0,0,0); ">用 &nbsp;水 &nbsp;量</br></td><td width=143  valign=top  style="width:86.2500pt;padding:0.0000pt 5.4000pt 0.0000pt 5.4000pt ;border-left:none; border-right:1.0000pt solid rgb(0,0,0);border-top:1.0000pt solid rgb(0,0,0);border-bottom:1.0000pt solid rgb(0,0,0); ">收 &nbsp;费</br></td></tr><tr><td width=30  valign=top  style="width:18.0000pt;padding:0.0000pt 5.4000pt 0.0000pt 5.4000pt ;border-left:1.0000pt solid rgb(0,0,0); border-right:1.0000pt solid rgb(0,0,0);border-top:1.0000pt solid rgb(0,0,0);border-bottom:1.0000pt solid rgb(0,0,0); ">不超过 10m<sup>3</sup></br></td><td width=30  valign=top  style="width:18.0000pt;padding:0.0000pt 5.4000pt 0.0000pt 5.4000pt ;border-left:none; border-right:1.0000pt solid rgb(0,0,0);border-top:1.0000pt solid rgb(0,0,0);border-bottom:1.0000pt solid rgb(0,0,0); ">0.5元/m<sup>3</sup></br></td></tr><tr><td width=30  valign=top  style="width:18.0000pt;padding:0.0000pt 5.4000pt 0.0000pt 5.4000pt ;border-left:1.0000pt solid rgb(0,0,0); border-right:1.0000pt solid rgb(0,0,0);border-top:1.0000pt solid rgb(0,0,0);border-bottom:1.0000pt solid rgb(0,0,0); ">10m<sup>3</sup>以上每增加 1m<sup>3</sup></br></td><td width=30  valign=top  style="width:18.0000pt;padding:0.0000pt 5.4000pt 0.0000pt 5.4000pt ;border-left:none; border-right:1.0000pt solid rgb(0,0,0);border-top:1.0000pt solid rgb(0,0,0);border-bottom:1.0000pt solid rgb(0,0,0); ">1.00 元/m<sup>3</sup><br></td></tr></table>若小明家9月份缴水费20元，那么他家9月份的实际用水量是多少？</br>"', "id": 0, "unique": "021d5cf652ef429ceaf7a475c8d543a3", "jx": "  由已知条件可知，主视图有2列，每列小正方数形数目分别为3，2，左视图有3列，每列小正方形数目分别为3，1，2．据此可画出图形即可． ", "tuijianWay": "知识点顺序完全匹配", "keyWord": ",画三视图,图形的三视图", "checked": false, "queUrl": "../image/testque.png", "answerUrl": "../image/testjx.png", "jxUrl": "http://39.105.56.207:8190/pictures/jx2.png" }, { "answer": "", "id": 0, "unique": "1049c9e320dbd5079b2a5359832d0d16", "jx": "由已知条件可知，从正面看有3列，每列小正方数形数目分别为3，1，4；从左面看有3列，每列小正方形数目分别为2，4，2．据此可画出图形．", "tuijianWay": "知识点顺序完全匹配", "keyWord": ",几何体的三视图画法", "checked": false, "queUrl": "../image/testque.png", "answerUrl": "../image/testjx.png", "jxUrl": "http://39.105.56.207:8190/pictures/jx3.png" }, { "answer": "", "id": 0, "unique": "00f09b2896b310025f85d0b69d570690", "jx": "由已知条件可知，从正面看有2列，每列小正方数形数目分别为2，3；从左面看有3列，每列小正方形数目分别为1，2，3．据此可画出图形．", "tuijianWay": "知识点顺序完全匹配", "keyWord": ",几何体的三视图画法", "checked": false, "queUrl": "../image/testque.png", "answerUrl": "../image/testjx.png", "jxUrl": "http://39.105.56.207:8190/pictures/jx4.png" }, { "answer": "", "id": 0, "unique": "07f4ec132af2dda8181ec71af9367937", "jx": "由已知条件可知，主视图有3列，每列小正方数形数目分别为4，3，1，左视图有2列，每列小正方形数目分别为3，4，据此可画出图形．", "tuijianWay": "知识点顺序完全匹配", "keyWord": ",几何体的三视图画法", "checked": false, "queUrl": "../image/testque.png", "answerUrl": "../image/testjx.png", "jxUrl": "http://39.105.56.207:8190/pictures/jx5.png" }, { "answer": "", "id": 0, "unique": "02ecd152ae17da65070da46df1c288af", "jx": "（1）易得这个几何体共有3层，由俯视图可得第一层正方体的个数，由主视图可得第二层和第三层最少或最多的正方体的个数，相加即可；\u003c/br\u003e（2）利用题意结合立方体的个数画出左视图即可．", "tuijianWay": "知识点顺序完全匹配", "keyWord": ",三视图,空间想象能力,俯视图打地基，主视图疯狂盖，左视图拆违章", "checked": false, "queUrl": "../image/testque.png", "answerUrl": "../image/testjx.png", "jxUrl": "http://39.105.56.207:8190/pictures/jx6.png" }, { "answer": "", "id": 0, "unique": "051b49b3316dff76467153ebbc7521a8", "jx": "（1）由主视图可知，第二列小立方体的个数均为1，第3列小正方体的个数为3，那么a\u003d3，b\u003d1，c\u003d1；\u003c/br\u003e（2）第一列小立方体的个数最多为2+2+2，最少为2+1+1，那么加上其他两列小立方体的个数即可；\u003c/br\u003e（3）左视图有3列，每列小正方形数目分别为3，1，2．", "tuijianWay": "知识点顺序完全匹配", "keyWord": ",三视图,主视图,左视图,主视图主要告知组成的几何体的层数和列数", "checked": false, "queUrl": "../image/testque.png", "answerUrl": "../image/testjx.png", "jxUrl": "http://39.105.56.207:8190/pictures/jx7.png" }],
   
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
    //循环插入数组
    var replyArr = test;

    for (let i = 0; i < replyArr.length; i++) {
      WxParse.wxParse('reply' + i, 'html', replyArr[i], that);
      if (i === replyArr.length - 1) {
        WxParse.wxParseTemArray("replyTemArray", 'reply', replyArr.length, that)
      }
    }
   //放入wxprase显示
    
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