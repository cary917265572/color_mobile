<template>
   <div class="wrap">
        <div class="reg-logo">
             <img src="../../assets/image/logo.png" alt="">
        </div>
        <div class="reg-form">
             <ul>
                 <li>
                     <x-input title="账号" placeholder="" v-model="form.username"></x-input>
                 </li>
                 <li>
                     <x-input title="密码" type="password" placeholder="" v-model="form.password"></x-input>
                 </li>
                 <li class="login-pwd">
                     <span><em class="on"></em>记住密码</span>
                     <span  @click="show=true">忘记密码</span>
                 </li>
                 <li @click="goLogin">登录</li>
             </ul>
        </div>
        <div class="login-look"><router-link to="/">去逛逛</router-link></div>
        <div class="register-go"><router-link to="register">注册</router-link></div>
        <actionsheet v-model="show" :menus="bytype" show-cancel @on-click-menu="getval"></actionsheet>
   </div>
</template>

<script>
import { Actionsheet} from 'vux'
export default {
  name: '',
  components: {
    Actionsheet
  },
  data () {
    return {
      show: false,
      bytype: {
        1: '邮箱找回',
        2: '手机找回'
      },
      form:{
        username:'',
        password:'',
      }
    }
  },
  mounted() {
  },
  methods:{
      goLogin() {
            var that = this;
            if (!this.form.username) {
                that.$vux.toast.text("用户名不能为空", "middle");
                return false;
            }
            if (!this.form.password) {
                that.$vux.toast.text("密码不能为空", "middle");
                return false;
            }
            this.$http
                .post("/public/login.do", {
                    username: this.form.username,
                    password: this.form.password,
                    iscaptcha: "1"
                })
                .then(function(data) {
                    if (data.data.Status === 200) {
                        that.getUserInfo();
                        that.$vux.toast.text("登录成功");
                        window.sessionStorage.vns_status = 200;
                    } else {
                        that.$vux.toast.text(data.data.Msg);
                    }
                });
        },
        // 获取用户信息
        getUserInfo() {
            var that = this;
            this.$http.post("/user/info.do").then(function(data) {
                if (data.data.Status === 200) {
                    var info = data.data.Data.user_info;
                    window.sessionStorage.vns_info = JSON.stringify(info);
                    that.$router.push('/index');
                }
            });
        },
        // 忘记密码
        getval(key,item){
            this.$router.push({
                path:'forgetpwd',
                query:{'way':key}
            })
        }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   @import './login.css';
</style>
