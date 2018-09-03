<template>
    <div class="gamewrap">
        <Head :title="title" ></Head>
        <!-- Tab -->
        <tab :line-width=0 active-color='#dc700c' v-model="tabIndex" class="my-tab">
            <tab-item active-class="on"  class="vux-center" :selected="demo2 === key" @click="demo2 = key"  v-for="(item, key) in gamelist" :key="key" :class="item.plattype">
               <h2>{{item.title}}</h2>
            </tab-item>
        </tab>
        <swiper v-model="tabIndex" :show-dots="false" height="16rem">
            <swiper-item v-for="(item, key) in gamelist" :key="key">
                <div class="tab-swiper vux-center">
                    <ul class="game-img">
                        <li v-for="(item2,index2) in item.list" :key="index2" @click="getGameUrl(item2)">
                            <img :src="item2.slideimg" alt="">
                            <div class="game-name">
                                <span>{{item2.title}}</span>
                                <i>{{tabIndex}}</i>
                            </div>
                        </li>
                    </ul>
                </div>
            </swiper-item>
        </swiper>
    </div>
</template>
<script>
import Head from "@/components/Head";
export default {
  name: "",
  components: {
    Head
  },
  data() {
    return {
      list2: [],
      demo2: 0,
      tabIndex: 0,
      title: "游戏",
      gamelist: [
        {
          list: []
        }
      ],
      imglist: []
    };
  },
  mounted() {
    this.$vux.loading.show();
    this.getGamePlatform();
  },
  methods: {
    //   获取各平台游戏
    getGamePlatform() {
      this.$http
        .post("/public/get_platform_list.do", { sys_type: "app" })
        .then(e => {
          this.$vux.loading.hide();
          if (e.data.Status == 200) {
              // console.log(this.$route.query.plat_type);
            this.gamelist = e.data.Data.list;
            this.checkUrl();
          }
        });
    },
    // 获取游戏链接
    getGameUrl(obj) {
      var data = {
        plat: obj.game_plat,
        gametype: obj.game_type
      };

      if (obj.game_type === "egame" || obj.game_type === "poker") {
        if (obj.is_list == 1) {
          this.$router.push({
            path: "/ptElc",
            query: {
              gameplat: obj.game_plat,
              gametype: obj.game_type
            }
          });
          return;
        }
        data.gameid = obj.game_id;
        data.gamekind = obj.game_kind;
        data.gamename = obj.game_name;
      }
      this.$vux.loading.show();
      this.$http.post("/game/login.do", data).then(e => {
        this.$vux.loading.hide();
        if (e.data.Status === 200) {
          window.location.href = e.data.Data.login_url;
        } else if (e.data.Status === 600) {
          this.$vux.toast.text("登录失效");
          window.sessionStorage.clear();
          this.$router.push("/login");
        } else {
          this.$vux.toast.text(e.data.Msg);
        }
      });
    },
    // 判断是否首页进入
    checkUrl(){
      if(this.$route.query.plat_type){
        this.gamelist.map((val,index,arr)=>{
             if(this.$route.query.plat_type==val.plattype){
               this.demo2 = index;
             }
        })
      }
    }
  }
};
</script>
<style>
@import "./game.css";
</style>