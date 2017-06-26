<template>
    <div class="accountSecurity">
        <div class="accountSecurity-title-left">
            <li>登录账户：</li>
            <li>已绑定手机号：</li>
            <li>安全等级：</li>
        </div>
        <div class="accountSecurity-title-right">
            <li>123321</li>
            <li>123321 <span class="accountSecurity-modify">修改</span></li>
            <li class="accountSecurity-grade">高级</li>
        </div>
        <div class="accountSecurity-content-title">修改登录密码</div>
        <div class="accountSecurity-content-input">
            <div class="accountSecurity-title-left">
                <li>请输入旧密码</li>
                <li>请输入新密码</li>
                <li>重复新密码</li>
            </div>
            <div class="accountSecurity-title-right">
                <li><input /></li>
                <li><input /></li>
                <li><input /></li>
            </div>
        </div>
        <button class="accountSecurity-button">确认修改</button>
    </div>
</template>

<style>
    .accountSecurity {
        width: 100%;
        margin: 50px 0 0 0;
    }
    .accountSecurity li {
        list-style-type: none;
        line-height: 33px;
        color: #959595;
    }
    .accountSecurity-title-left {
        width: 150px;
        float: left;
        text-align: right;
    }
    .accountSecurity-title-right {
        width: 738px;
        float: left;
        text-align: left;
    }
    .accountSecurity-content-title {
        width: 100%;
        margin: 70px 0 30px 50px;
        color: #333333;
        font-size: 18px;
        float: left;
    }
    .accountSecurity input {
        margin-left: 15px;
        height:30px; 
        line-height: 30px;
        color: #959595;
        border: 1px solid #959595;
    }
    .accountSecurity-content-input li {
        line-height: 50px;
    }
    .accountSecurity-button {
        width: 100px;
        height: 35px;
        background-color: #ff7b3f;
        color: #fff;
        border: 0;
        border-radius: 5px;
        outline: none;
        margin: 50px 0 0 100px; 
    }
    .accountSecurity-button:hover {
        box-shadow: 0 9px 12px 0 rgba(0,0,0,0.24);
    }
    .accountSecurity-grade {
        color: #5ec14d;
    }
    .accountSecurity-modify {
        color: #ff7b3f;
        margin-left: 7px;
    }
</style>