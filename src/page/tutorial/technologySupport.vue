<template>
    <div class="t_support">
        <Head :title="title" v-if="!$route.query.sessionid"></Head>
        <ul class="support-list">
            <li v-for="(item, index) in data" :key="index" @click="setData(item)">
                <h2>{{item.title}}</h2>
                <p>{{item.content[0]}}</p>
            </li>
        </ul>
        
        <Pop :popshow="popShow" :data="singleData" @closePop="close"></Pop>
    </div>
</template>

<script>
import Head from "@/components/Head.vue";
import Pop from "./technologyPop";
var data = require("./support.json");
export default {
    data() {
        return {
            title: "技术支持",
            data: data.Data.list,
            singleData: [],
            popShow: false
        };
    },
    methods: {
        setData(item) {
            this.singleData = item;
            this.popShow = true;
        },
        close(){
            this.popShow = false;
        }
    },
    components: {
        Head,
        Pop,
    }
};
</script>

<style scoped>
.t_support {
    height: 100%;
    background-color: #f2f2f2;
}
.container {
    width: 100%;
    height: 100%;
}
.support-list {
    padding: 0 0.2rem;
}
.support-list li {
    margin-top: 0.2rem;
    background: #ffffff;
    padding: 0.2rem;
    border-radius: 5px;
}
.support-list p {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
</style>
