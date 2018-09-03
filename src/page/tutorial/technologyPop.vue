<!-- 展示弹窗 -->
<template>
    <div class="techology-pop" v-if="popshow">
        <h2>{{data.title}}</h2>
        <p v-if="data.content.length>0" v-for="(item, index) in data.content" :key="index">{{item}}</p>    
        <img v-if="data.img.length>0" v-for="(item, index) in data.img" :key="index" :src="require(`${item}`)" />
        <div class="go-back" @click="goBack">返回</div>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    props: ["data","popshow"],
    components: {},

    computed: {},

    mounted() {},

    methods: {
        goBack(){
            this.$emit("closePop");
        }
    }
};
</script>
<style scoped>
.techology-pop {
    position: absolute;
    top: 40px;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ffffff;
}
.techology-pop h2 {
    padding: 0.1rem 0;
    color: #343434;
    text-align: center;
    font-size: 0.42rem;
    line-height: 2;
}
.techology-pop p {
    padding: 0 0.2rem;
    margin-bottom: 0.1rem;
    color: #343434;
    font-size: 0.34rem;
}
.go-back {
    margin: .5rem .2rem 0;
    height: 1rem;
    line-height: 1rem;
    text-align: center;
    font-size: .4rem;
    background: red;
    color: #ffffff;
    border-radius: 5px;
}
.techology-pop img{
    width: 85%;
    margin: 0 auto 0.1rem;
}
</style>