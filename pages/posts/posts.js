// pages/posts/posts.js
var postsData=require("../../data/posts_data.js")
Page({
  data:{
   
  },
  onPosts:function (event){
    var postsId = event.currentTarget.dataset.postsid;
    wx.navigateTo({
      url: '/pages/posts/posts_Detali/posts_Detali?id=' + postsId,
    })
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    this.setData({ ContentListArray: postsData.contetn})
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})