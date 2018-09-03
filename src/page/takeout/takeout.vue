<template>
    <div class="wrap">
         <Head :title="title"></Head>
         <div class="takeout-one">
              <div class="takeout-one-box">
                    <div class="takeout-total">
                        <div class="takeout-one-icon"></div>
                        <div class="takeout-one-text">
                            <p>中心钱包</p>
                            <p>￥<b>{{platform.balance}}</b></p>
                        </div>
                    </div>
                    <div class="takeout-addbank"><router-link to="addbank">添加银行卡</router-link></div>
                    <div class="takeout-refurbish" @click="refrash">刷新金额</div>
              </div>
         </div>
         <div class="takeout-two">
             <ul>
                 <li v-for="item in platform.list">
                     <label>{{item.title}}</label>
                     <span>{{item.balance}}</span>
                 </li>
             </ul>
         </div>
         <!-- 未绑定银行的模块 -->
         <div v-show = "unbindcard==true" class="pay-base-item" @click="firstbind">
            <span><i class="pay-allbank-icon"></i>请先绑定银行卡</span>
            <x-icon type="ios-arrow-right" size="15"></x-icon>
        </div>
        <!-- 已绑定银行的模块 -->
         <div v-show = "bindcard==true" class="pay-base-item" @click="showBank">
            <span><i class="pay-allbank-icon"></i>请选择银行<em style="margin-left:15px;">{{banklabel}}</em></span>
            <x-icon type="ios-arrow-right" size="15"></x-icon>
        </div>
        <div class="h20"></div>
        <div class="pay-hand-two">
            <div class="pay-hand-money">取款金额（元）</div>
            <x-input ref="paymoney" v-model="moneyval" title="￥" :required="true" placeholder="请输入取款金额"></x-input>
        </div>
        <div class="h20"></div>
        <div class="pay-hand-three">
            <span :class="{'on':isok===index}" v-for="(item,index) in moneylist" @click="getMoney(item,index)">{{item}}</span>
        </div>
        <div class="h20"></div>
        <div class="pay-go"><span @click="outGo">下一步</span></div>
        <!-- 银行卡的弹框 -->
        <div v-transfer-dom>
            <popup v-model="bankPop">
                <popup-header
                :title="banktit"
                :show-bottom-border="false">
                </popup-header>
                <group gutter="0">
                    <radio class="my-radio" :options="banklist" v-model="bankid" @on-change="getCurBank"></radio>
                </group>
            </popup>
        </div>
    </div>
</template>

<script>
import Head from "@/components/Head.vue";
export default {
  data() {
    return {
      title: "取款",
      platform:'',
      moneyval:0,
      moneylist: [50, 100, 500, 1000, 1500],
      isok:'',
      bankPop:false,
      banktit:"选择银行卡",
      banklist:[],
      bankid:'',
      banklabel:'',
      unbindcard:false,
      bindcard:false
    };
  },
  mounted() {
     this.getPlatform();
     this.getBankList();
  },
  methods: {
    // 获取钱包以及各平台余额
    getPlatform(){
       this.$vux.loading.show();
       let _username = JSON.parse(sessionStorage.vns_info).username;
       this.$http.post('/admin/plat_balance.do',{account: _username}).then(e=>{
            this.$vux.loading.hide();
            if(e.data.Status==200){
                this.platform = e.data.Data;
            }
       })
    },
    // 获取银行卡列表
    getBankList() {
        //this.bankPop = true;
        this.$http.post('/cash/user_bank_list.do').then(e=>{
            if(e.data.Status==200){
                if(e.data.Data.bank_list.length==0){
                    this.unbindcard = true;
                    return;
                }
                this.bindcard = true;
                this.banklist = e.data.Data.bank_list.map(function(val){
                     return {
                         key:val.id,
                         value:val.bank_title
                     }
                });
            }
        })
    },
    // 选择银行卡
    showBank() {
      this.bankPop = true;
    },
    // label => 银行卡名字  value => 银行卡id
    getCurBank(value,label){
        this.banklabel = label;
        this.bankPop = false;
    },
    // 获取充值金额
    getMoney(obj, key) {
      this.isok = key;
      this.moneyval = obj;
    },
    // 刷新金额
    refrash(){
        window.location.reload();
    },
    firstbind(){
        this.$router.push('addbank');
    },
    // 取款提交
    outGo(){
        if (this.bankid == "" || this.bankid==null) {
            this.$vux.toast.text('请选择银行卡');
            return;
        }
        if(this.moneyval=='' || this.moneyval==0){
            this.$vux.toast.text('请输入取款金额');
            return;
        }
        if(this.moneyval > this.platform.balance){
            this.$vux.toast.text('余额不够哦');
            return;
        }
        let param = {
            bank_id: this.bankid,
            amount: this.moneyval
        }
        this.$http.post('/cash/withdrawals.do',param).then(e=>{
             if(e.data.Status==200){
                this.$vux.toast.text('订单创建成功');
                this.$router.push('payoutrecordtable');
             }else{
                this.$vux.toast.text(e.data.Msg);
             }
        })
    }
  },
  components: {
    Head
  }
};
</script>

<style scoped>
@import url(./takeout.css);
</style>