<template>
   <div class="my-header">
    <x-header v-if="type=='jc'" :left-options="{showBack: false}">{{title}}</x-header>
    <x-header v-else>{{title}}</x-header>
   </div>
</template>

<script>
export default {
  name: '',
  props:['type','title'],
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.my-header .vux-header {
    padding:0;
    background: #0d0d0d;
}
.my-header .vux-header .vux-header-left a{
  color:#fff;
}
.my-header .vux-header .vux-header-left {
    left:10px;
    top: 10px;
    line-height: 20px;
}
.my-header .vux-header .vux-header-title {
    font-size: 16px;
}
.my-header .vux-header .vux-header-left .left-arrow:before{
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    border: 1px solid #fff;
    border-width: 1px 0 0 1px;
    -webkit-transform: rotate(315deg);
    transform: rotate(315deg);
    top: 10px;
    left: 7px;
}
</style>
