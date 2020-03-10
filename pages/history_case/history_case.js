// pages/history_case/history_case.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msglist: [],
    pagenum: 1,
    havemore: true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showToast({
      title: '加载中',
      icon:'loading',
      duration:1500,
    });
    wx.cloud.callFunction({
      name: 'gethisinfo',
      data: {
        page: 1
      },
      success: res => {
        res = res.result;
        console.log("loadflash", res);
        this.setData({
          msglist: res
        });
      }
    });
  },

  Todetail: function (event) {
    var id = event.currentTarget.dataset.id;
    // console.log(id);
    wx.navigateTo({
      url: '../history_detail/history_detail?id='+id,
    });
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
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    wx.showToast({
      title: '加载中',
      icon:'loading',
      duration:1500,
    });
    var self = this;
    console.log(this.data.msglist);
    if (!this.data.havemore) return;
    var page = this.data.pagenum + 1;
    wx.cloud.callFunction({
      name: 'gethisinfo',
      data: {
        page: page
      },
      success: res => {
        res = res.result;
        if (res == undefined) {
          self.setData({
            havemore: false,
          })
          wx.showToast({
            title: '没有更多了',
            icon:'error',
            duration:1500,
          });
          return;
        }
        var already = self.data.msglist;
        var newlist = already.concat(res);
        console.log(res, page);
        self.setData({
          msglist: newlist,
          pagenum: page,
        });
      }
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})