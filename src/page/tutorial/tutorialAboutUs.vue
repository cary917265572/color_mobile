<template>
    <div class="tutotialAboutUs">
        <Head :title="title" v-if="!$route.query.sessionid"></Head>
        <div class = "container">
            <img src="./img/gywm_one.jpg" alt="">
            <img src="./img/gywm_two.jpg" alt="">
            <img src="./img/gywm_three.jpg" alt="">
            <img src="./img/gywm_four.jpg" alt="">
        </div>
    </div>

</template>

<script>
import Head from '@/components/Head.vue';

export default {
    data(){
        return{
            title:'关于我们'
        }
    },
    components:{
        Head,
    }
}
</script>

<style scoped>
    .tutotialAboutUs{
        height: 100%;
        background-color: #f2f2f2;
        padding-top:1.2rem;
    }
    .container{
        width: 100%;
        height: 100%;
    }
    .my-header{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 9;
    }
</style>
