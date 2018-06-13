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
    //获取新闻详情的ID
    var postsId = options.id;
    //获取每个ID的书记
    var postsData1 = postsData.contetn[postsId]
   //保存ID
    this.setData({
      postsId: postsId
    })
     //设置数据数据
    this.setData({ postsData: postsData1 })
    var postsCollected=wx.getStorageSync("postsCollected")
    //判断是都有缓存的数据
    if (postsCollected){
      var postsCollected = postsCollected[postsId]
      this.setData({
        collected: postsCollected
      })
    }else {
      var postsCollected={};
      postsCollected[postsId]=false;
      console.log(postsCollected)
      wx.setStorageSync("postsCollected", postsCollected);
    }

  },
  onCollctedTap:function (event) {
    //获得是否收藏数据
    var postsCollected = wx.getStorageSync("postsCollected");
    //找到当前的收藏书记
    var postsCollectedSelect = postsCollected[this.data.postsId];
    //收藏与为收藏切换数据
    postsCollectedSelect = !postsCollectedSelect;
    postsCollected[this.data.postsId] = postsCollectedSelect;
    //缓存是否收藏数据
    wx.setStorageSync("postsCollected", postsCollected);
    //保存是否输出数据 界面展示数据
    this.setData({ collected: postsCollectedSelect});
    // 收藏取消显示弹出框
    wx.showToast({
      title: postsCollectedSelect?'收藏成功':"取消收藏",
      icon: postsCollectedSelect ? 'success' : "none",
      duration: 1000
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