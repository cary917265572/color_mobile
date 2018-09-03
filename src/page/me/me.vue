<template>
    <div class="wrap">
        <MeHead :islogin="islogin" :username="username" :brance="brance"></MeHead>
        <div class="me-body">
             <div class="me-item me-four-item">
                  <ul>
                      <li>
                          <router-link to = "pay">
                          <img src="./img/cunkuan.png" alt="">
                          <p>存款</p>
                          </router-link>
                      </li>
                      <li>
                          <router-link to = "takeout">
                          <img src="./img/qukuan.png" alt="">
                          <p>取款</p>
                          </router-link>
                      </li>
                      <li>
                          <router-link to = "remit">
                          <img src="./img/zhuan.png" alt="">
                          <p>转账</p>
                          </router-link>
                      </li>
                      <li>
                          <router-link to = "game">
                          <img src="./img/youhui_67.png" alt="">
                          <p>游戏</p>
                          </router-link>
                      </li>
                  </ul>
             </div>
             <div class="me-item me-three-item">
                  <ul>
                      <li>
                          <router-link to = "personinfo">
                          <img src="./img/geren.png" alt="">
                          <p>个人信息</p>
                          </router-link>
                      </li>
                      <li>
                          <router-link to = "discountapply">
                          <img src="./img/youhui.png" alt="">
                          <p>优惠申请</p>
                          </router-link>
                      </li>
                      <li>
                          <router-link to="vip">
                          <img src="./img/dengji.png" alt="">
                          <p>会员等级</p>
                          </router-link>
                      </li>
                  </ul>
             </div>
             <div class="me-item me-three-item">
                  <ul>
                      <li>
                          <router-link to="payoutrecord">
                          <img src="./img/ticun.png" alt="">
                          <p>存取记录</p>
                          </router-link>
                      </li>
                      <li>
                          <router-link to="limitrecord">
                          <img src="./img/edu.png" alt="">
                          <p>额度记录</p>
                          </router-link>
                      </li>
                      <li>
                          <router-link to="discountrecord">
                          <img src="./img/youhui1.png" alt="">
                          <p>优惠记录</p>
                          </router-link>
                      </li>
                  </ul>
             </div>
             <div class="me-item me-three-item">
                  <ul>
                      <li>
                          <router-link to="friend_recommendation">
                          <img src="./img/haoyou.png" alt="">
                          <p>好友推荐</p>
                          </router-link>
                      </li>
                      <li>
                          <router-link to = "bankcardset">
                          <img src="./img/jilu.png" alt="">
                          <p>银行卡管理</p>
                          </router-link>
                      </li>
                      <li>
                          <router-link to="delegate">
                          <img src="./img/daili.png" alt="">
                          <p>代理</p>
                          </router-link>
                      </li>
                  </ul>
             </div>
             <div class="me-item me-three-item">
                  <ul>
                      <li>
                          <router-link to="about">
                          <img src="./img/women.png" alt="">
                          <p>关于我们</p>
                          </router-link>
                      </li>
                      <li>
                          +
                      </li>
                      <li>
                          +
                      </li>
                  </ul>
             </div>
        </div>
        <Foot></Foot>
    </div>
</template>
<script>
     import MeHead from './meHead'
     import Foot from '@/components/Foot'
     export default{
         name:'',
         components:{
               MeHead,
               Foot
         },
         data(){
             return{
                title:'PT电子',
                islogin:'',
                brance:0,
                username:''
             }
         },
         mounted() {
             if(window.sessionStorage.vns_status==200){
                this.islogin='yes';
                const vnsinfo = JSON.parse(sessionStorage.vns_info);
                this.username = vnsinfo.username;
                this.getBlance()
             }
         },
         computed:{
             
         },
         methods:{
            //  获取余额
            getBlance(){
                this.$http.post('/user/show_cash_fast.do').then(e=>{
                    if(e.data.Status==200){
                        this.brance = e.data.Data.cash;
                    }
                })
            }
         }
     }
</script>
<style scoped>
   @import './me.css';
</style>