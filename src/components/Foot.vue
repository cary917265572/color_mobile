<template>
      <tabbar class="tabbar" slot="bottom" style="position: fixed;background:#414248;color:#fff;">
          <tabbar-item :selected="url==='/index'" link="/index">
            <img slot="icon" src="../assets/image/sy.png">
            <img slot="icon-active" src="../assets/image/sy2.png">
            <span slot="label">首页</span>
          </tabbar-item>
          <tabbar-item :selected="url==='/tutorial'" link="/tutorial">
            <img slot="icon" src="../assets/image/jc.png">
            <img slot="icon-active" src="../assets/image/jc2.png">
            <span slot="label">教程</span>
          </tabbar-item>
          <tabbar-item :selected="url==='/service'" link="/service">
            <img slot="icon" src="../assets/image/kf.png">
            <img slot="icon-active" src="../assets/image/kf2.png">
            <span slot="label">客服</span>
          </tabbar-item>
          <tabbar-item :selected="url==='/me'" link="/me">
            <img slot="icon" src="../assets/image/wd.png">
            <img slot="icon-active" src="../assets/image/wd2.png">
            <span slot="label">我的</span>
          </tabbar-item>
        </tabbar>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      url:this.$route.path
    }
  },
  watch:{
    $route(val){
      console.log(val);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.tabbar span{
  color:#fff;
}
.weui-tabbar__item.weui-bar__item_on span{
  color:#e6a23c;
}
</style>
