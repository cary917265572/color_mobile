<template>
    <div class="contact">
        <div class="box">
            <Head :title="title" v-if="!$route.query.sessionid"></Head>
            <div class = "container">
                <img src="./img/lianxiwm.png" alt="">
                <p class="text">澳门威尼斯人为您提供7x24小时的服务，您可以通过联系客服的方式与我们取得联系，我们会尽快帮你解决所有问题。</p>
                <p class="text">客服邮箱: vns908cs@gmail.com</p>
                <p>联系QQ: 878899282</p>
                <p>微信: vs908cs</p>
            </div>
        </div>
    </div>

</template>

<script>
import Head from '@/components/Head.vue';

export default {
    data(){
        return{
            title:'联系我们',
        }
    },
    components:{
        Head,
    }
}
</script>

<style scoped>
    .contact{
        height:100%;
        background-color: #f2f2f2;
    }
    .box{
        padding-top:1rem;
    }
    .container{
        width: 100%;
        height: 100%;
    }
    img{
        width:100%;
        height: 4.68rem;
    }
    p{
        padding-left: 0.4rem;
        padding-right: 0.4rem;
        font-size: 0.40rem;
    }
    .text{
        margin-top: 0.4rem;
    }
    .my-header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 9;
    }
</style>
