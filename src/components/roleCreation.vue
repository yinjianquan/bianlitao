<template>
    <div class="roleCreation">
        <!--头部-->
        <div class="profidetail-header">
            <div class="detail-header-inside">
                <div class="goBack">
                    <span style="padding-right:5px;"><<</span><router-link :to="{name:'subAccountMe'}" >返回</router-link>
                </div>
                <!--<div class="inside-detail" id="profit" @click="tabToggle" :class="{'inside-detail-tab':isA =='profit'}">
                    审核小票
               </div>-->
                 <div class="inside-detail" id="profit">
                    <router-link :to="{name:''}" >用户管理员</router-link>
                </div>
                <div class="inside-detail" id="consume" @click="tabToggle" :class="{'inside-detail-tab':isA == 'consume'}">
                    <router-link :to="{name:''}" >商户管理员</router-link>
                </div>
                <div class="inside-datail-button"><router-link :to="{name:''}" >+&nbsp;&nbsp;角色新建</router-link></div>
            </div>
        </div>
        <!--二级导航-->
        <div class="roleCreation-header-botton">
            <div class="detail-header-inside">
                <div class="detail-header-inside-s">所有权限</div>
                <div class="inside-datail-button-er"><router-link :to="{name:''}" >保存</router-link></div>
                <div class="inside-datail-button-er"><router-link :to="{name:''}" >取消</router-link></div>
            </div>
        </div>

        <div class="roleCreation-main">
            <div class="roleCreation-main-content">
                <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">用户管理</el-checkbox>
                <div style="margin: 15px 0;"></div>
                <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                    <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
                </el-checkbox-group>
            </div>
            <div class="roleCreation-main-content">
                <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange01">分销管理</el-checkbox>
                <div style="margin: 15px 0;"></div>
                <el-checkbox-group v-model="checkedCities01" @change="handleCheckedCitiesChange01">
                    <el-checkbox v-for="city01 in cities01" :label="city01" :key="city01">{{city01}}</el-checkbox>
                </el-checkbox-group>
            </div>
        </div>
    </div>
</template>

<script>
  const cityOptions = ['账户管理', '订单管理', '收益管理', '体现管理'];
  const cityOptions01 = ['分销管理'];
  export default {
    data() {
      return {
        checkAll: true,
        checkedCities: ['账户管理', '订单管理'],
        cities: cityOptions,
        
        checkedCities01: ['账户管理'],
        cities01: cityOptions01,

        isIndeterminate: true
      };
    },
    methods: {
      handleCheckAllChange(event) {
        this.checkedCities = event.target.checked ? cityOptions : [];
        this.isIndeterminate = false;
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
      },

      handleCheckAllChange01(event) {
        this.checkedCities01 = event.target.checked ? cityOptions01 : [];
        this.isIndeterminate = false;
      },
      handleCheckedCitiesChange01(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities01.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities01.length;
      }
    }
  };
</script>

<style>
    .roleCreation-main {
        width: 100%;
        background-color: #fff;
        float: left;
        min-height: 400px;
        padding-bottom: 50px;
    }
    .roleCreation-main-content {
        margin: 40px 0 0 50px;
    }
    .roleCreation-content {
        width: 25%;
        float: left;
        margin-top: 40px;
    }
    .roleCreation-content p {
        width: 85%;
        text-align: left;
        margin-left: 15%;
        margin-bottom: 10px;
    }
    .roleCreation-li {
        width: 100%;
        margin: 5px 0;
        color: #ccc;
        float: left;
    }
    .roleCreation-li-left {
        width: 45%;
        text-align: right;
        float: left;
    }
    .roleCreation-li-right {
        width: 50%;
        margin-left: 5%;
        float: left;
        text-align: left;
    }
    .inside-datail-button {
        float: right;
        width: 120px;
        height: 35px;
        line-height: 35px;
        text-align: center;
        color: #fff;
        background-color: #ff7b3f;
        margin-top: -10px;
        border-radius: 5px;
    }
    .roleCreation-header-botton {
        width: 100%;
        height: 70px;
        margin: 0 auto;
        padding-top: 20px;
        background: #fff;
        float: left;
    }
    .detail-header-inside-s {
        margin-left: 10px;
        color: #959595;
    }
    .inside-datail-button-er {
        float: right;
        width: 60px;
        height: 35px;
        line-height: 35px;
        text-align: center;
        color: #fff;
        background-color: #ff7b3f;
        margin: -30px 0 0 30px;
        border-radius: 5px;
    }
</style>