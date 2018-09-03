<template>
    <div class="t_withDraw">

        <Head :title="title" v-if="!$route.query.sessionid"></Head>
        <swiper class="with-draw-img" :loop=true :auto=true  :interval='3000' :show-dots="false" :aspect-ratio="1.4/1">
            <swiper-item>
                <img src="./img/qukuan_jiaocheng.png" alt="">
                <p>第一步</p>
            </swiper-item>
            <swiper-item>
                <img src="./img/qukuantwo_jiaocheng.png" alt="">
                <p>第二步</p>
            </swiper-item>
        </swiper>
    </div>

</template>

<script>
import Head from "@/components/Head.vue";

export default {
    data() {
        return {
            title: "取款教程"
        };
    },
    components: {
        Head
    }
};
</script>

<style scoped>
.t_withDraw {
    height: 100%;
    background-color: #f2f2f2;
}
.with-draw-img {
    padding: .8rem .5rem 0;

}
.with-draw-img img{
    margin: 0 auto;
}
.with-draw-img p{
    line-height: 2;
    font-size: .38rem;
    text-align: center;
    color: #000000;
}
</style>
