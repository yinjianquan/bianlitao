<template>
    <div class="profitDetail">
        <!--头部-->
        <div class="profidetail-header">
            <div class="detail-header-inside">
                <div class="goBack">
                    <span style="padding-right:5px;"><<</span><router-link :to="{name:'accountInfor'}" >返回</router-link>
                </div>
                <!--<div class="inside-detail" id="profit" @click="tabToggle" :class="{'inside-detail-tab':isA =='profit'}">
                    审核小票
               </div>-->
                 <div class="inside-detail" id="profit">
                    <router-link :to="{name:''}" >查看详情</router-link>
                </div>
                <!--<div class="inside-detail" id="consume" @click="tabToggle" :class="{'inside-detail-tab':isA == 'consume'}">
                    <router-link :to="{name:'consumeDetails'}" >消费详情</router-link>
                </div>-->
            </div>
        </div>
        <div class="accountDetail-main">
            <div class="accountDetail-content">
                <p>标题</p>
                <div class="accountDetail-li">
                    <div class="accountDetail-li-left">用户ID</div>
                    <div class="accountDetail-li-right">1234567</div>
                </div>
                <div class="accountDetail-li">
                    <div class="accountDetail-li-left">登录账户</div>
                    <div class="accountDetail-li-right">1234567</div>
                </div>
            </div>
            <div class="accountDetail-content">
                <p>消费行为</p>
                <div class="accountDetail-li">
                    <div class="accountDetail-li-left">用户ID</div>
                    <div class="accountDetail-li-right">1234567</div>
                </div>
                <div class="accountDetail-li">
                    <div class="accountDetail-li-left">用户ID</div>
                    <div class="accountDetail-li-right">1234567</div>
                </div>
            </div>
            <div class="accountDetail-content">
                <p>第三方授权状态</p>
                <div class="accountDetail-li">
                    <div class="accountDetail-li-left">用户ID</div>
                    <div class="accountDetail-li-right">1234567</div>
                </div>
                <div class="accountDetail-li">
                    <div class="accountDetail-li-left">用户ID</div>
                    <div class="accountDetail-li-right">1234567</div>
                </div>
            </div>
            <div class="accountDetail-content">
                <p>代言人</p>
                <div class="accountDetail-li">
                    <div class="accountDetail-li-left">用户ID</div>
                    <div class="accountDetail-li-right">1234567</div>
                </div>
                <div class="accountDetail-li">
                    <div class="accountDetail-li-left">用户ID</div>
                    <div class="accountDetail-li-right">1234567</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    .accountDetail-main {
        width: 100%;
        background-color: #fff;
        float: left;
        min-height: 400px;
        padding-bottom: 50px;
    }
    .accountDetail-content {
        width: 25%;
        float: left;
        margin-top: 40px;
    }
    .accountDetail-content p {
        width: 85%;
        text-align: left;
        margin-left: 15%;
        margin-bottom: 10px;
    }
    .accountDetail-li {
        width: 100%;
        margin: 5px 0;
        color: #ccc;
        float: left;
    }
    .accountDetail-li-left {
        width: 45%;
        text-align: right;
        float: left;
    }
    .accountDetail-li-right {
        width: 50%;
        margin-left: 5%;
        float: left;
        text-align: left;
    }
</style>