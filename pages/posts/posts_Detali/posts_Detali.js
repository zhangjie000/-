// pages/posts/posts_Detali/posts_Detali.js
var postsData = require("../../../data/posts_data.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var postsData1 = postsData.contetn[options.id]
    this.setData({
      postsId: options.id
    })
    this.setData({ postsData: postsData1 })
    var postsCollected=wx.getStorageSync("postsCollected")
    if (postsCollected){
      var postsCollected = postsCollected[options.id]
      this.setData({
        collected: postsCollected
      })
    }else {
      var postsCollected={};
      postsCollected[options.id]=false;
      wx.getStorageSync("postsCollected", postsCollected);
    }

  },
  onCollctedTap:function (event) {
  
    var postsCollected = wx.getStorageSync("postsCollected");
    var postsCollected = postsCollected[this.data.postsId];
    // console.log(postsCollected)
    postsCollected = !postsCollected;
    postsCollected[this.data.postsId] = postsCollected;
    wx.setStorageSync(postsCollected, postsCollected)
    this.setData({ collected:postsCollected})
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