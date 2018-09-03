<template>
    <!-- 已登录 -->
    <div v-if="islogin=='yes'" class="me-header">
         <div class="me-top">
             <span class="me-exit" @click="exitGo">退出</span>
             <router-link to="message" class="me-message"></router-link>
         </div>
         <div class="me-icon">
            <img src="./img/nv.png" alt="">
        </div>
        <div class="me-txt"><i class="me-lev"></i><span class="me-name">{{username}}</span></div>
        <div class="me-bom">
            <div class="me-brance">
                <p>钱包余额</p>
                <p>￥<span>{{brance}}</span></p>
            </div>
            <div class="me-pay"><router-link to="pay">充值</router-link></div>
        </div>
    </div>
    <!-- 未登录 -->
    <div v-else class="me-header">
        <div class="me-icon">
            <router-link to="login"><img src="./img/touxiang.png" alt=""></router-link>
        </div>
        <div class="me-txt">请登录</div>
    </div>
</template>

<script>
    export default {
        props:['islogin','username','brance'],
        data() {
            return {
                
            }
        },
        mounted() {
            
        },
        methods: {
            exitGo(){
                this.$http.post('/user/logout.do').then(res=>{
                    if(res.data.Status==200){
                        window.sessionStorage.clear();
                        window.location.reload();
                    }
                })
            }
        },
        computed: {
            
        },
        components: {
            
        }
    }
</script>

<style scoped>
.me-header {
    height: 4.5rem;
    text-align: center;
    padding-top: 1.2rem;
    position: relative;
}

.me-icon {
    width: 1.8rem;
    height: 1.8rem;
    border-radius: 100%;
    display: inline-block;
}

.me-txt {
    font-size: 0.32rem;
    color: #333;
}

.me-lev{
    display: inline-block;
    vertical-align: middle;
    padding:0.25rem;
    background: url(./img/dengji.png) center no-repeat;
    background-size: 100%;
}
.me-name{
    display: inline-block;
    vertical-align: middle;
}
.me-top{
    width:100%;
    position: absolute;
    top:0;
    left:0;
}
.me-exit{
    font-size:0.42rem;
    color:#333;
    float: left;
    padding: 0.3rem 0 0 0.3rem;
}
.me-pay{
    width:1.6rem;
    height:0.5rem;
    line-height: 0.5rem;
    padding:0.1rem 0;
    background: #bb9755;
    border-radius:6px;
    font-size: 0.32rem;
}
.me-pay a{
    color:#fff;
}
.me-bom{
    display: flex;
    justify-content: space-between;
    padding:0.35rem;
}
.me-brance p{
    font-size: 0.32rem;
    text-align: left;
}
.me-message{
    display: block;
    width:0.96rem;
    height:0.96rem;
    background: url(./img/xinfen.png) center no-repeat;
    background-size:100%;
    float:right;
    margin: 0.3rem 0.3rem 0 0;
}
.me-exit{
    margin:0.2rem 0.3rem 0 0;
}
</style>
