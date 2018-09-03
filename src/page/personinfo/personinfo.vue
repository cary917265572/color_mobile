<template>
    <div class="wrap">
         <Head :title = "title"></Head>
         <div class="personinfo">
            <ul>
                <li>
                    <label>会员等级</label>
                    <div class="mid"><span class="info-lev">{{owninfo.level}}级</span><router-link to = "/vip">（查看等级规则）</router-link></div>
                    <x-icon type="ios-arrow-right" size="15"></x-icon>
                </li>
                <li>
                    <label>真实姓名</label>
                    <div class="mid"><router-link :to = "truenamepath" style="width: 100%;"><span>{{truename}}</span><span>{{gotruename}}</span></router-link></div>
                    <x-icon type="ios-arrow-right" size="15"></x-icon>
                </li>
                <li>
                    <label>修改密码</label>
                    <div class="mid"><router-link to = "changepwd" style="width: 100%;"><span>如需重置密码</span><span>去修改</span></router-link></div>
                    <x-icon type="ios-arrow-right" size="15"></x-icon>
                </li>
                <li>
                    <label>银行卡</label>
                    <div class="mid"><router-link to = "addbank" style="width: 100%;"><span>请绑定您的银行卡</span><span>去绑定</span></router-link></div>
                    <x-icon type="ios-arrow-right" size="15"></x-icon>
                </li>
                <li>
                    <label>手机</label>
                    <div class="mid">{{owninfo.telephone}}</div>
                    <x-icon type="ios-arrow-right" size="15"></x-icon>
                </li>
                <li>
                    <label>邮箱</label>
                    <div class="mid"><router-link :to = "{path:'infobind',query:{type:'email'}}" style="width: 100%;"><span>{{owninfo.email}}</span><span>去绑定</span></router-link></div>
                    <x-icon type="ios-arrow-right" size="15"></x-icon>
                </li>
                <li>
                    <label>QQ</label>
                    <div class="mid"><router-link :to = "qqpath" style="width: 100%;"><span>{{qq}}</span><span>{{goqq}}</span></router-link></div>
                    <x-icon type="ios-arrow-right" size="15"></x-icon>
                </li>
                <li>
                    <label>微信</label>
                    <div class="mid"><router-link :to = "wxpath" style="width: 100%;"><span>{{wechat}}</span><span>{{gowechat}}</span></router-link></div>
                    <x-icon type="ios-arrow-right" size="15"></x-icon>
                </li>
            </ul>
         </div>
    </div>
</template>

<script>
    import Head from '@/components/Head'
    export default {
        data(){
            return {
                title: '个人信息',
                owninfo:[],
                truename:'',
                qq:'',
                goqq:'',
                wechat:'',
                gowechat:'',
                path:'',
                qqpath:'',
                wxpath:'',
                truenamepath:'',
                gotruename:''
            }
        },
        mounted() {
            this.bindInfo();
        },
        methods:{
            bindInfo(){
                this.owninfo = JSON.parse(sessionStorage.vns_info);
                // 真实姓名
                if(this.owninfo.true_name){
                    this.truename = this.owninfo.true_name;
                    this.gotruename = '已绑定';
                    this.truenamepath = "";
                }else{
                    this.truename = '请绑定您的真实姓名';
                    this.gotruename = '去绑定';
                    this.truenamepath = {path:'infobind',query:{type:'name'}};
                }
                // QQ
                if(this.owninfo.qq){
                    this.qq = this.owninfo.qq;
                    this.goqq = '已绑定';
                    this.qqpath = "";
                }else{
                    this.qq = '请绑定您的QQ';
                    this.goqq = '去绑定';
                    this.qqpath = {path:'infobind',query:{type:'qq'}};
                }
                // 微信
                if(this.owninfo.wechat){
                    this.wechat = this.owninfo.wechat;
                    this.gowechat = '已绑定';
                    this.wxpath = "";
                }else{
                    this.wechat = '请绑定您的微信';
                    this.gowechat = '去绑定';
                    this.wxpath = {path:'infobind',query:{type:'wechat'}}
                }
            }
        },
        components:{
            Head
        }
    }
</script>

<style scoped>
    @import './personinfo.css';
</style>