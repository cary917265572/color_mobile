<template>
    <div class="diswrap">
        <Head :title="title" ></Head>
        <div class="disapply-a">
            <label>账户总额度：</label>
            <span>{{platform.total}}元</span>
        </div>
        <div class="disapply-b">
            <group>
                <popup-radio title="自助申请" :options="discountlist" v-model="checkstate">
                    <p slot="popup-header" class="vux-1px-b demo3-slot">请选择</p>
                </popup-radio>
            </group>
        </div>
        <div class="disapply-c">
            <span style="width:145px;">温馨提示：</span>
            <span>账户总额度包含所有游戏平台中的余额，以及存款和奖金。如有疑问，请联系在线客服获得帮助。</span>
        </div>
        <div class="h40"></div>
        <div class="pay-go" @click="submitDiscount">
            <span>提交</span>
        </div>
    </div>
</template>

<script>
import Head from "@/components/Head";
import { log } from "util";
export default {
  data() {
    return {
      title: "优惠申请",
      discountlist: [],
      checkstate: "",
      platform: ""
    };
  },
  mounted() {
    this.bindBrance();
    this.bindDiscount();
  },
  methods: {
    // 账户总额度
    bindBrance() {
      this.$vux.loading.show();
      let _username = JSON.parse(sessionStorage.vns_info).username;
      this.$http
        .post("/admin/plat_balance.do", { account: _username })
        .then(e => {
          this.$vux.loading.hide();
          if (e.data.Status == 200) {
            this.platform = e.data.Data;
          }
        });
    },
    // 优惠申请列表
    bindDiscount() {
      this.$http.post("/public/discount_apply.do").then(e => {
        if (e.data.Status == 200) {
          this.discountlist = e.data.Data.list.map(val => {
            return {
              key: val.code,
              value: val.title
            };
          });
        }
      });
    },
    // 优惠提交
    submitDiscount() {
      this.$http
        .post("/game/ss_bonus.do", { cash_code: this.checkstate })
        .then(e => {
          this.$vux.toast.text(e.data.Msg);
        });
    }
  },
  components: {
    Head
  }
};
</script>

<style>
.diswrap {
  height: 100%;
  background: #f2f2f2;
}
.disapply-a {
  height: 1.2rem;
  padding: 0 0.4rem;
  font-size: 0.42rem;
  color: #333;
  display: flex;
  align-items: center;
}
.disapply-a label {
  width: 2.8rem;
}
.disapply-a span {
  color: #e43434;
}
.demo3-slot {
  text-align: center;
  padding: 8px 0;
  color: #888;
}
.disapply-b .weui-cell {
  padding: 8px 10px;
}
.disapply-b .weui-cells {
  font-size: 0.42rem;
  margin-top: 0;
}
.disapply-c {
  display: flex;
  padding: 0.2rem 0.4rem;
  font-size: 0.32rem;
  color: #b5b3b3;
}
</style>