<template>
    <div class="t_plat">

        <Head :title="title" v-if="!$route.query.sessionid"></Head>
        <tab bar-active-color="#c6a469" active-color="#c6a469" v-model="tabIndex">
            <tab-item v-for="(item, index) in data" :key="index">{{item.title}}</tab-item>
        </tab>
        <div class="t-plat-container">
            <div v-for="(item, key) in data[tabIndex].list" :key="key">
                <h2>·&nbsp;{{item.title}}</h2>
                <p v-for="(e,k) in item.content" :key="k">
                    {{e}}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import Head from "@/components/Head.vue";
var data = require("./play.json");
export default {
    data() {
        return {
            title: "玩法教程",
            tabIndex: 0,
            data: data.Data.list
        };
    },
    components: {
        Head
    }
};
</script>

<style scoped>
.t_plat {
    height: 100%;
    background-color: #f2f2f2;
    padding-top:1.3rem;
}
.container {
    width: 100%;
    height: 100%;
}
.t_plat h2 {
    font-size: 0.38rem;
    color: #000000;
    line-height: 2;
}
.t-plat-container {
    padding: 0 0.2rem 0.5rem;
}
.t-plat-container p {
    color: #666666;
    font-size: 0.32rem;
}
    .my-header{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 9;
    }
</style>
