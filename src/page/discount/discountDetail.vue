<template>
    <div class="wrap">
         <Head :title="title" v-if="!$route.query.sessionid"></Head>
         <div class="content" v-for="(item,key) in list" :key="key" v-if="$route.query.id === item.id" v-html="item.content"></div>
    </div>
</template>

<script>
import Head from "@/components/Head";
export default {
  data() {
    return {
      title: "优惠详情",
      list: ""
    };
  },
  mounted() {
    this.showContent();
  },
  methods: {
    showContent() {
      if (window.activelist) {
        this.list = window.activelist;
      } else {
        this.$http
          .post("/public/active_list.do", { is_list: "1", is_info: "1" })
          .then(e => {
              if(e.data.Status == 200){
                  this.list = e.data.Data.active_list;
              }
          });
      }
    }
  },
  components: {
    Head
  }
};
</script>

<style scoped>
.content {
  padding: 10px;
}
</style>