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
         <div class="remit-type">
              <div class="remit-zz">转账</div>
              <div class="remit-flex">
                  <span v-for="(item,index) in remittype" @click="remitChange(index)" :class="{'active':ischeck==index}"><i class="pay-bank-icon"></i>{{item}}</span>
              </div>
         </div>
         <div v-if="ischeck==1">
            <div class="h20"></div>
            <div class="pay-base-item" @click="platformPop=true">
                <span><i>从</i><em style="margin-left:15px;">{{formplatformname}}</em></span>
                <x-icon type="ios-arrow-right" size="15"></x-icon>
            </div>
            <div class="h20"></div>
            <div class="pay-base-item" @click="platformPop2=true">
                <span><i>到</i><em style="margin-left:15px;">{{toplatformname}}</em></span>
                <x-icon type="ios-arrow-right" size="15"></x-icon>
            </div>
        
        <div class="h20"></div>
         <div class="pay-hand-two">
            <div class="pay-hand-money">金额（元）</div>
            <x-input ref="paymoney" v-model="moneyval" title="￥" :required="true" placeholder="请输入金额"></x-input>
        </div>
        <div class="h20"></div>
        <div class="pay-hand-three">
            <span :class="{'on':isok===index}" v-for="(item,index) in moneylist" @click="getMoney(item,index)">{{item}}</span>
        </div>
        <div class="h20"></div>
        <div class="pay-go"><span @click="remitSure">提交</span></div>
        </div>
        <!-- 平台弹框1 -->
        <div v-transfer-dom>
            <popup v-model="platformPop">
                <popup-header
                :title="platformtit"
                :show-bottom-border="false">
                </popup-header>
                <group gutter="0">
                    <radio class="my-radio" :options="platformlist" v-model="platformcode" @on-change="checkCur"></radio>
                </group>
            </popup>
        </div>
        <!-- 平台弹框2 -->
        <div v-transfer-dom>
            <popup v-model="platformPop2">
                <popup-header
                :title="platformtit"
                :show-bottom-border="false">
                </popup-header>
                <group gutter="0">
                    <radio class="my-radio" :options="platformlist" v-model="platformcode2" @on-change="checkCurs"></radio>
                </group>
            </popup>
        </div>
        <div class="h40"></div>
    </div>
</template>

<script>
    import Head from '@/components/Head.vue';
    export default {
        data(){
            return {
                title:'转账',
                platform:[],
                remittype:['自动转账','手动转账'],
                ischeck:'',
                moneylist: [50, 100, 500, 1000, 1500],
                moneyval:0,
                isok:'',
                platformPop:false,
                platformPop2:false,
                platformtit:'请选择平台',
                platformlist:[],
                platformcode:'',
                platformcode2:'',
                formplatformname:'请选择平台',
                toplatformname:'请选择平台'
            }
        },
        mounted() {
            this.getPlatform();
            this.ischeck = JSON.parse(sessionStorage.vns_info).common_status-1;
        },
        methods:{
            // 各个平台信息
            getPlatform(){
                this.$vux.loading.show();
                let _username = JSON.parse(sessionStorage.vns_info).username;
                this.$http.post('/admin/plat_balance.do',{account: _username}).then(e=>{
                        this.$vux.loading.hide();
                        if(e.data.Status==200){
                            this.platform = e.data.Data;
                            this.bindPlatform(e.data.Data.list)
                        }
                })
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
            // 绑定平台
            bindPlatform(obj){
                this.platformlist = obj.map(function(val) {
                    return {
                        key:val.plat,
                        value:val.title
                    }
                })
                this.platformlist.unshift({key:'website',value:'中心钱包'});
            },
            // 选择当前
            checkCur(value,label){
               this.formplatformname = label;
               this.platformPop = false;
            },
            // 选择当前
            checkCurs(value,label){
               this.toplatformname = label;
               this.platformPop2 = false;
            },
            // 转账提交
            remitSure(){
                let param = {
                    fromPlat:this.platformcode,
                    toPlat:this.platformcode2,
                    amount:this.moneyval
                }
                this.$http.post('/cash/transferPlattoPlat.do',param).then(e=>{
                    if(e.data.Status==200){
                        this.$vux.toast.text(e.data.Msg);
                    }else{
                        this.$vux.toast.text(e.data.Msg);
                    }
                })
            },
            // 切换手动和自动转账
            remitChange(index){
                this.ischeck = index;
                console.log(sessionStorage.vns_info)
                var comstatus = JSON.parse(sessionStorage.vns_info).common_status;
                
                if(comstatus==1){
                    comstatus = 2;
                }else if(comstatus==2){
                    comstatus = 1;
                }
                
                this.$http.post('/user/ChangeCommonstate.do',{commonState:comstatus}).then(e=>{
                    if(e.data.Status == 200){
                        sessionStorage.vns_info = JSON.stringify(e.data.Data.user_info);
                    }
                })
            }
        },
        components:{
            Head
        }
    }
</script>

<style scoped>
@import url(./remit.css);
</style>