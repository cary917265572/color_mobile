<template>
    <div class="wrap">
         <Head :title="title"></Head>
         <div v-show="bankcardlist.length==0" class="nocard">未添加银行卡</div>
         <ul class="cardlist">
             <li v-for="item in bankcardlist">
                 <div>
                     <p>{{item.bank_title}}</p>
                     <p>{{item.cardnumber}}</p>
                 </div>
                 <x-icon type="ios-close" class="cell-x-icon" size="20" @click="unbind(item)"></x-icon>
             </li>
         </ul>
         <div class="h40"></div>
         <div class="pay-go">
             <span><router-link to="addbank">添加银行卡</router-link></span>
         </div>
    </div>
</template>

<script>
    import Head from '@/components/Head'
    export default {
        data(){
            return {
                title:'银行卡列表',
                bankcardlist:[]
            }
        },
        mounted() {
            this.showBankList();
        },
        methods:{
            // 银行卡列表
            showBankList(){
                this.$http.post('/cash/user_bank_list.do').then(e=>{
                     this.bankcardlist = e.data.Data.bank_list;
                })
            },
            // 解绑银行卡
            unbind(obj){
                this.$http.post('/cash/unbundled_bank.do',{bank_id:obj.id}).then(e=>{
                     if(e.data.Status==200){
                         this.$vux.toast.text(e.data.Msg);
                         this.bankcardlist = this.bankcardlist.filter(val=>{
                             return val.id !==obj.id;
                         })
                     }else{
                         this.$vux.toast.text(e.data.Msg);
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
   .wrap{
       height:100%;
       background:#f2f2f2;
   }
   .pay-go a{
    color:#fff;
   }
   .nocard{
       padding: 6px 0;
       background: #fff;
       text-align:center;
       margin: 0.4rem 0;
   }
   .cardlist li{
       padding: 0.25rem;
       background:#fff;
       margin-top:0.2rem;
       display:flex;
       justify-content: space-between;
       align-items: center;
   }
   .cell-x-icon{
       fill:red;
   }
</style>