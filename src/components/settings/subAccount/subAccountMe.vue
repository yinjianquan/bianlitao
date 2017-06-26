<template>
    <div class="subAccountMe">
        <div class="subAccountMe-title">
            <router-link :to="{name:'newAdministrator'}" ><div class="subAccountMe-title-left">+ 添加账户</div></router-link>
           <router-link :to="{name:'roleCreation'}" ><div class="subAccountMe-title-left">角色创建</div></router-link>
        </div>

       <ul class="ul1">
         <li >用户ID</li>
         <li >登录账户</li>
         <li>使用人</li>
         <li>创建时间</li>
         <li>账号角色</li>
         <li>操作</li>
       </ul>
       <ul class="ul2">
         <li>0298655689</li>
         <li>0298655689</li>
         <li>小怪兽</li>
         <li>银牌/20天</li>
         <li>12345678912</li>
         <li> 
             <!--<router-link :to="{name:'accountDetail'}">查看详情</router-link>-->
             <el-button type="text" @click="open3" style="color:#ff7b3f;cursor:pointer;">编辑</el-button>
             <el-button type="text" @click="open4" style="color:#ff7b3f;cursor:pointer;">删除</el-button>
         </li>
       </ul>
        <ul class="ul3">
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
          <li>下一页</li>
        </ul>
    </div>
</template>

<style>
    .subAccountMe {
        width: 100%;
    }
    .subAccountMe-title {
        width: 100%;
        margin: 30px 0;
        float: left;
        color: #959595;
    }
    .subAccountMe-title-left {
        padding: 10px;
        float: left;
        margin-right: 30px;
        background-color: #eeeeee;
    }
    .subAccountMe ul li{
        float: left;
        /*border:1px solid red;*/
        white-space: nowrap;  
        overflow: hidden;  
        text-overflow: ellipsis;
    }
    .subAccountMe ul {
        width:100%;
    }
  .subAccountMe .ul1 li{width:16.6%;font-size:13px;background:#f5f5f5;height: 50px;line-height: 50px;text-align: center;color:#696969;}
  .subAccountMe .ul2 li{width:16.6%;font-size:13px;color:#959595;text-align: center;height:60px;line-height: 60px;border-bottom:1px solid #959595;}
  .subAccountMe .ul3 li{width:35px;height:35px;line-height:35px;text-align: center;color:#696969;background: #f5f5f5;margin-left:5px;margin-top:20px;cursor: pointer;}
  .subAccountMe .ul3 li:last-child{width:100px;background: #ff7b3f;color:#fff;}
</style>