<template>
    <div class="runbeforewrap">
        <div class="runbefore-h5">
            <router-link to = "/index"><img src="./img/wangye_btn.png" alt=""></router-link>
        </div>
        <div class="runbefore-download">
            <a href= "https://www.vs908app.com/"><img src="./img/xiazai_btn.png" alt=""></a>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{

            }
        },
        mounted(){
            // this.$router.push('index');
        }
    }
</script>

<style scoped>
    .runbeforewrap{
        height: 100%;
        background: url(./img/qidong.png) center no-repeat;
        background-size: 100%;
        position: relative;
    }
    .runbeforewrap img{
        width:7.92rem;
        height:1.08rem;
    }
    .runbefore-h5{
        position: absolute;
        left:50%;
        top:50%;
        transform: translate(-50%,-50%);
    }
    .runbefore-download{
        position: absolute;
        left:50%;
        top:60%;
        transform: translate(-50%,-50%);
    }
</style>