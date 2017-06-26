<template>
    <div class="newAdministrator">
        <!--头部-->
        <div class="newAdministrator-header">
            <div class="detail-header-inside">
                <div class="goBack">
                    <span style="padding-right:5px;"><<</span><router-link :to="{name:'subAccountMe'}" >返回</router-link>
                </div>
                 <div class="inside-detail" id="profit">
                    <router-link :to="{name:''}" >新建管理员</router-link>
                </div>
            </div>
        </div>
        <div class="newAdministrator-content">
            <div class="newAdministrator-content-left">
                <div class="newAdministrator-content-left-l">
                    <li>ID:</li>
                    <li>登录账户</li>
                    <li>验证码</li>
                    <li>设置密码</li>
                    <li>再次输入密码</li>
                    <li>账号角色</li>
                    <li>使用者姓名</li>
                    <li>使用部门</li>
                </div>
                <div class="newAdministrator-content-left-r">
                    <li>000000</li>
                    <li><input /></li>
                    <li><input /></li>
                    <li><input /></li>
                    <li><input /></li>
                    <li><input /></li>
                    <li><input /></li>
                    <li><input /></li>
                </div>
                <div class="n-botton">创建</div>
            </div>
            <div class="newAdministrator-content-right">
                <div class="newAdministrator-t" style="margin-bottom: 20px;color: #000;">备注：</div>
                <div class="newAdministrator-c">
                    <li>1.提交后自动生成管理员账号并与填写的管理员手机号绑定</li>
                    <li>2.管理员可使用手机号或者账号登录系统</li>    
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    .newAdministrator-main {
        width: 100%;
    }
    .newAdministrator-content {
        width: 100%;
        margin: 50px 0;
    }
    .newAdministrator-content-left {
        width: 49%;
        float: left;
        border-right:1px dashed #959595; 
        min-height: 300px;
    }
    .newAdministrator-content-right {
        width: 42%;
        float: left;
        color: #959595;
        padding: 0px 0 0 8%;
    }
    .n-span-left {
        width: 100%;
        float: left;
    }
    .newAdministrator-content-left-l {
        width: 38%;
        float: left;
        text-align: right;
        padding-right: 2%;
    }
    .newAdministrator-content-left-r {
        width: 60%;
        float: left;
        text-align: left;
    }
    .newAdministrator-content-left li {
        list-style-type: none;
        color: #959595;
        margin: 5px 0;
        height: 40px;
        line-height: 40px;
    }
    .newAdministrator-content-left li:first-child {
        margin-bottom: 10px;
        color: #000;
    }
    .newAdministrator-content-left li input {
        line-height: 30px;
        margin: 5px 0;
    }
    .n-botton {
        float: left;
        padding: 5px 15px;
        text-align: center;
        background-color: #ff7b3f;
        color: #fff;
        border-radius: 5px;
        margin: 50px 0 20px 150px;
    }
    .newAdministrator-content-right li {
        list-style-type: none;
        margin-bottom: 10px;
    }
</style>