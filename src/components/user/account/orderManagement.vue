<template>
    <div class="orderManagement">
       <ul class="ul1">
         <li >订单号</li>
         <li >用户ID</li>
         <li>用户昵称</li>
         <li>
             <!--<el-select v-model="value" placeholder="会员类型">
                <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>-->
            登录账号
         </li>
         <li>原会员类型</li>
         <li>升级/续约</li>
         <li>现会员类型</li>
         <li>缴费金额</li>
         <li>缴费方式</li>
         <li>账号状态</li>
         <li>操作</li>
       </ul>
       <ul class="ul2">
         <li>0298655689</li>
         <li>0298655689</li>
         <li>小怪兽</li>
         <li>银牌/20天</li>
         <li>12345678912</li>
         <li>2017-03-26</li>
         <li>2017-03-26</li>
         <li>10</li>
         <li>10</li>
         <li>
             <el-select v-model="value2" placeholder="正常">
                <el-option
                v-for="item in options2"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
         </li>
         <li style="color:#ff7b3f;cursor:pointer;"> 
             <router-link :to="{name:'accountDetail'}">查看详情</router-link>
             <!--<el-button type="text" @click="open3">升级</el-button>
             <el-button type="text" @click="open4">续约</el-button>-->
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

<script>
    export default {
        data() {
        return {
            options: [{
            value: '选项1',
            label: '普通'
            }, {
            value: '选项2',
            label: '银牌'
            }, {
            value: '选项3',
            label: '金牌'
            }, {
            value: '选项4',
            label: '钻石'
            }],
            options2: [{
            value: '选项1',
            label: '正常'
            }, {
            value: '选项2',
            label: '暂停使用'
            }, {
            value: '选项3',
            label: '禁用'
            }],
            value: '',
            value2: ''
        }
        },
        methods: {
            open3() {
                this.$prompt('请输入邮箱', '升级', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
                inputErrorMessage: '邮箱格式不正确'
                }).then(({ value }) => {
                this.$message({
                    type: 'success',
                    message: '更改成功'
                });
                }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '取消更改'
                });       
                });
            },
            open4() {
                this.$prompt('请输入邮箱', '续约', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
                inputErrorMessage: '邮箱格式不正确'
                }).then(({ value }) => {
                this.$message({
                    type: 'success',
                    message: '更改成功'
                });
                }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '取消更改'
                });       
                });
            }
        }
    }
</script>

<style>
.orderManagement ul li{
    float: left;
    /*border:1px solid red;*/
    white-space: nowrap;  
    overflow: hidden;  
    text-overflow: ellipsis;
}
.orderManagement{
  width:100%;
  height:200px;
  /*border:1px solid #ccc;*/
  /*padding:0 2%;*/
  margin-top:15px;
}
.orderManagement ul {
    width:100%;
}
  .orderManagement .ul1 li{width:9.09%;font-size:13px;background:#f5f5f5;height: 50px;line-height: 50px;text-align: center;color:#696969;}
  .orderManagement .ul2 li{width:9.09%;font-size:13px;color:#959595;text-align: center;height:60px;line-height: 60px;border-bottom:1px solid #959595;}
  .orderManagement .ul3 li{width:35px;height:35px;line-height:35px;text-align: center;color:#696969;background: #f5f5f5;margin-left:5px;margin-top:20px;cursor: pointer;}
  .orderManagement .ul3 li:last-child{width:100px;background: #ff7b3f;color:#fff;}
</style>