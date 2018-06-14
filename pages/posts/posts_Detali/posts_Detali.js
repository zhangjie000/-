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
    var postsCollected = wx.getStorageSync("postsCollected")
    //判断是都有缓存的数据
    if (postsCollected) {
      var postsCollected = postsCollected[postsId]
      this.setData({
        collected: postsCollected
      })
    } else {
      var postsCollected = {};
      postsCollected[postsId] = false;
      console.log(postsCollected)
      wx.setStorageSync("postsCollected", postsCollected);
    }

  },
  onCollctedTap: function (event) {
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
    this.setData({ collected: postsCollectedSelect });
    // 收藏取消显示弹出框
    wx.showToast({
      title: postsCollectedSelect ? '收藏成功' : "取消收藏",
      icon: postsCollectedSelect ? 'success' : "none",
      duration: 1000
    })
  },
  onShareTop: function (event) {
    var itemList = ['分享到微信好友', '分享到朋友圈', '分享到QQ好友', "分享到QQ空间"]
    wx.showActionSheet({
      itemList: itemList,
      success: function (res) {
        wx.showModal({
          title: '提示',
          content: itemList[res.tapIndex],
          confirmColor: "#405f80",
          success: function (res) {
            if (res.confirm) {
              console.log('用户点击确定')
            } else if (res.cancel) {
              console.log('用户点击取消')
            }
          }
        })
      },
      fail: function (res) {
      }
    })
  },

})