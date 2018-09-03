<template>
    <div class="t_recharge">
        <Head :title="title" v-if="!$route.query.sessionid"></Head>
        <div >
            <tab bar-active-color="#c6a469" active-color="#c6a469" v-model="tabIndex">
                <tab-item selected @on-item-clik="onItemClick">网银支付</tab-item>
                <tab-item>手工存款</tab-item>
                <tab-item>银联扫码</tab-item>
                <tab-item>微信支付</tab-item>
                <tab-item>支付宝支付</tab-item>
            </tab>
            <div class="tab" v-if="tabIndex === 0">
                <img src="./img/cunkuan_wangyinzhifu.png" alt="">
            </div>
            <div class="tab" v-if="tabIndex === 1">
                <img src="./img/cunkuan_shougongcunkuan.png" alt="">
            </div>
            <div class="tab" v-if="tabIndex === 2">
                <img src="./img/cunkuan_yinliansaoma.png" alt="">
            </div>
            <div class="tab" v-if="tabIndex === 3">
                <img src="./img/cunkuan_weixinzhifu.png" alt="">
            </div>
            <div class="tab" v-if="tabIndex === 4">
                <img src="./img/cunkuan_zhifubao.png" alt="">
            </div>
        </div>
    </div>

</template>

<script>
import Head from "@/components/Head.vue";

export default {
    data() {
        return {
            title: "存款教程",
            tabIndex: 0,
        };
    },
    methods: {
        onItemClick(index) {
            
        }
    },
    components: {
        Head
    }
};
</script>

<style scoped>
.t_recharge {
    height: 100%;
    background-color: #f2f2f2;
}
.container {
    width: 100%;
    height: 100%;
}
</style>
