// pages/contact/contact.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    versionCode: app.globalData.appVersion,
    buildDate: app.globalData.branch,
    UserInfo: {},
    tries: 0,
    techInfo: 0,
    lastpress: 0,
  },

  view1: function () {

    wx.previewImage({
      urls: [
        'cloud://mocktrial12138.6d6f-mocktrial12138-1301499062/logo/logo.jpg',
        'cloud://mocktrial12138.6d6f-mocktrial12138-1301499062/logo/logo.png',
        'cloud://mocktrial12138.6d6f-mocktrial12138-1301499062/logo/logo2.png'
      ],
    })
  },

  toLog: function () {
    wx.navigateTo({
      url: '/pages/logs/logs',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var self = this
    wx.cloud.callFunction({
      name: 'returnID',
      data: {
        operation: 'require'
      },
      success: ({
        result
      }) => {
        this.setData({
          UserInfo: result
        })
        console.log(result)
      }
    })
  },

  onPressHandler: function () {
    this.setData({
      tries: this.data.tries + 1
    })
    if (this.data.tries >= 5) {
      wx.navigateTo({
        url: '/pages/logs/logs',
      })
    }

  },
  onPressHandler2: function () {
    if (this.data.lastpress == 0)
    {
      this.setData({
        lastpress: new Date(),
      });
    }
    else {
      if (new Date() - this.data.lastpress >= 1000)
      {
        this.setData({
          lastpress:0
        });
        return;
      }
    }
    this.setData({
      techInfo: this.data.techInfo + 1,
      lastpress:new Date(),
    })
    if (this.data.techInfo > 10) {
      this.setData({
        techInfo: 0
      })
    }
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