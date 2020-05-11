// pages/hot_detail/hot_detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: '',
    title:'XXXX',
    time:'01 Jan 1970 00:00:00',
    htmlc:'',
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
      name:'gethotinfoByid',
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
      name: 'gethotcontent',
      data: {
        id: sid,
      },
      success: res => {
        var article = res.result;
        self.setData({
          htmlc:article,
        });
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