<template>
    <div class="tutorial">
        <Head :title="title" type="jc"></Head>
        <div class = "container">
            <div class="items items-a" >
                <router-link to="rechargeTutorial">
                    <p class="title">存款教程</p>
                    <p class="subTitle">存款极速到账</p>
                    <img class="indicator" src="./img/jiantou_jin.png" alt="">
                </router-link>
            </div>
            <div class="items items-b" >
                <router-link to="platTutorial">
                    <p class="title">玩法教程</p>
                    <p class="subTitle">主流彩票玩法</p>
                    <img class="indicator" src="./img/jiantou_jin.png" alt="">
                </router-link>
            </div>
            <div class="items items-c" >
                <router-link to="withdrawTutorial">
                    <p class="title">取款教程</p>
                    <p class="subTitle">极速提款</p>
                    <img class="indicator" src="./img/jiantou_jin.png" alt="">
                </router-link>
            </div>
            <div class="items items-d" >
                <router-link to="tutorialAboutUs">
                    <p class="title">关于我们</p>
                    <p class="subTitle">责任隐私策略</p>
                    <img class="indicator" src="./img/jiantou_jin.png" alt="">
                </router-link>
            </div>
            <div class="items items-e" >
                <router-link to="technologySupport">
                    <p class="title">技术支持</p>
                    <p class="subTitle">全面技术支持</p>
                    <img class="indicator" src="./img/jiantou_jin.png" alt="">
                </router-link>
            </div>
            <div class="items items-f">
                <router-link to="contactUs">
                    <p class="title">联系我们</p>
                    <p class="subTitle">为您全天服务</p>
                    <img class="indicator" src="./img/jiantou_jin.png" alt="">
                </router-link>
            </div>
        </div>
        <Foot v-if="!$route.query.sessionid"></Foot>
    </div>

</template>

<script>
import Head from '@/components/Head.vue';
import Foot from '@/components/Foot'

export default {
    data(){
        return{
            title:'教程'
        }
    },
    mounted(){
       
    },
    components:{
        Head,
        Foot,
    }
}
</script>

<style scoped>
    .tutorial{
        background-color: #f2f2f2;
        height: 100%;
    }
    .container{
        display: flex;
        width: 100%;
        justify-content:space-between;
        flex-wrap: wrap;
    }
    .items{
        display: block;
        margin: 3px;
        width: 5.16rem;
        height: 2.94rem;
    }
    .items-a{
        background-image: url('./img/cunkuanjiaocheng.png');
        background-size: 100%;
    }
    .items-b{
        background-image: url('./img/wanfajiaocheng.png');
        background-size: 100%;
    }
    .items-c{
        background-image: url('./img/qukuan.png');
        background-size: 100%;
    }
    .items-d{
        background-image: url('./img/guanyuwm.png');
        background-size: 100%;
    }
    .items-e{
        background-image: url('./img/jishuzhichi.png');
        background-size: 100%;
    }
    .items-f{
        background-image: url('./img/lianxiwomen.png');
        background-size: 100%;
    }
    .title{
        font-size: 0.42rem;
        color: #5a3f22;
        left: 2.8rem;
        top:0.3rem;
        position: relative;
        width:2.36rem;
    }
    .subTitle{
        font-size: 0.3rem;
        color: #5a3f22;
        left: 2.8rem;
        top:0.4rem;
        position: relative;
        width:2.36rem;
    }
    .indicator{
        left: 65%;
        width: 0.6rem;
        height: 0.6rem;
        top:0.6rem;
        position: relative;
    }
</style>
