// pages/near_detail/near_detail.js
// pages/history_detail/history_detail.js
var WxParse = require('../../wxParse/wxParse.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: '',
    title:'XXXX',
    time:'01 Jan 1970 00:00:00',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showToast({
      title: 'loading',
      icon:"loading",
      duration:1000,
    });
    console.log(options.id);
    var sid=options.id;
    this.setData({
      id:sid,
    });
    var self = this;
    wx.cloud.callFunction({
      name:'getnearinfoByid',
      data:{
        id:sid,
      },
      success:res=>{
        res=res.result;
        var date=new Date(res.time).toGMTString();
        date=date.slice(4,date.length-4);
        console.log(date);
        self.setData({
          title:res.title,
          time:date,
        });
      }
    });
    wx.cloud.callFunction({
      name: 'getnearcontent',
      data: {
        id: sid,
      },
      success: res => {
        var article = res.result;
        WxParse.wxParse('article', 'html', article, self, 5);
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