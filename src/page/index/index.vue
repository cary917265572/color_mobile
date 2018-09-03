<template>
   <div class="wrap">
        <div class="logobox">
            <img src="../../assets/image/sy_logo.png" alt="">
        </div>
        <!-- Swiper -->
        <swiper :aspect-ratio="1/2" class="my-swiper" :auto="true" dots-position="center">
            <swiper-item class="swiper-demo-img" v-for="(item, index) in bannerlist" :key="index" @click.native="openBannerUrl(index)">
                <img :src="item.img4">
            </swiper-item>
        </swiper>
        <!-- 公告 -->
        <div class="notice">
            <img src="./img/laba.png" alt="" srcset="">
            <marquee :item-height=30>
                <marquee-item v-for="(item,index) in noticelist" @click.native="$router.push('/notice')" :key="index">{{item.content}}</marquee-item>
            </marquee>
        </div>

        <div class="index-nav">
             <ul>
                 <li>
                     <router-link to="pay">
                         <i><img src="./img/cunkuan.png" alt=""></i>
                         <span>存款</span>
                     </router-link>
                 </li>
                 <li>
                     <router-link to="remit">
                         <i><img src="./img/zhuanzhang.png" alt=""></i>
                         <span>转账</span>
                     </router-link>
                 </li>
                 <li>
                     <router-link to="takeout">
                         <i><img src="./img/qukuan.png" alt=""></i>
                         <span>取款</span>
                     </router-link>
                 </li>
                 <li>
                     <router-link to="discount">
                         <i><img src="./img/youhui.png" alt=""></i>
                         <span>优惠</span>
                     </router-link>
                 </li>
             </ul>
        </div>
        <!-- 游戏平台 -->
        <div class="index-gametype">
             <div class="gametype-content">
                  <div class="other" v-for="(item,key) in gamelist" :key="key" @click="platformGo(item)">
                        <img :src="item.plattype | gameimg" alt="">
                        <div class="gametype-name">
                            <em></em>
                            <span>{{item.title}}</span>
                            <i></i>
                        </div>
                  </div>
             </div>
        </div>
        <Foot></Foot>
   </div>
</template>

<script>
import Foot from '@/components/Foot'
export default {
  name: 'Index',
  data () {
    return {
        bannerlist:[],
        noticelist:[],
        gamelist:[],
        bannerid:''
    }
  },
  components: {
        Foot
  },
  mounted() {
      this.$vux.loading.show();
      this.getBanner();
      this.getNotice();
      this.getGamePlatform();
  },
  methods:{
        //获取banner   
        getBanner() {
            this.$http.post('/public/active_list.do', { "is_banner": "1", "is_info": '1' }).then((e)=>{
                this.$vux.loading.hide();

                if(e.data.Status==200){
                    this.bannerlist = e.data.Data.active_list;
                }
            })
        },
        // 获取公告
        getNotice(){
            this.$http.post('/public/notice.do').then(e=>{
                if(e.data.Status==200){
                     this.noticelist = e.data.Data.notice;
                }
            })
        },
        // 获取平台游戏
        getGamePlatform(){
            this.$http.post('/public/get_platform_list.do',{sys_type:'app'}).then(e=>{
                if(e.data.Status==200){
                    this.gamelist = e.data.Data.list;
                }
            })
        },
        // 获取banner链接
        openBannerUrl(key){
            this.bannerid = this.bannerlist[key].class_id;
            this.$router.push({
                path:'discount',
                query:{
                    bannerid:this.bannerid
                }
            })
        },
        // 点击到对号入座
        platformGo(obj){
            this.$router.push({
                path:'game',
                query:{plat_type:obj.plattype}
            })
        }
  },
  // 平台图标过滤
  filters:{
      gameimg:function(val){
          if(val=='egame'){
              return require("./img/dianzi.png") ;
          }else if(val=='live'){
              return require('./img/zhenren.png');
          }else if(val=='sport'){
              return require('./img/tiyuyouxi.png');
          }else if(val=='lottery'){
              return require('./img/caipiao.png');
          }else if(val=='esport'){
              return require('./img/dianzijingji.png');
          }
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   @import './index.css'; 
</style>