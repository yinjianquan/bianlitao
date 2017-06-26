<template>
    <div class="profitRebList">
        <!--头部-->
        <div class="detail-header">
            <div class="detail-header-inside">
                <div class="goBack">
                <router-link :to="{name:'smTicket'}"><span class="icon_back"></span><span style="float:left;margin-left:10px;">返回</span></router-link>
                </div>
                <div class="inside-detail" @click="tabNative(0)" :class="{'native': isA == 0}">
                    小票商户返佣明细总表
               </div>
               <div class="inside-detail" @click="tabNative(1)" :class="{'native': isA == 1}">
                    小票商户返佣明细分表
               </div>
            </div>
        </div>
       <!--内容-->
       <div class="tdetail-user">
           <div class="detail-tie">导出Excel表</div>
           <div class="detail-sai" v-if="isA == 0">
               <span>筛选时间</span>
               <input type="text" value="2017-06-23"/>
               <span>至</span>
               <input type="text" value="2017-06-23" />
               
                <input type="number" placeholder="搜素订单号" />
                <input type="button" value="搜索"/>
               
           </div>
           <div class="detail-pai" v-else>
               <span>排序</span>
               <select >
                  <option value="1">累积返佣</option>
                  <option value="2">未审核</option>
                  <option value="3">审核失败</option>
                  <option value="4">提现成功</option>
                </select>
                <span>icon</span>
                <span>从高到底</span>
                <input type="number" placeholder="商户ID/商户名称" />
                <input type="button" value="搜索"/>
           </div>
       </div>
       <!--小票详情-->
       <div class="tdetail-main">
        <div class="order_data">
            <ul class="ul1">
                <li style="width:12.5%;">小票订单号</li>
                <li>商户ID</li>
                <li>商户名称</li>
                <li>创建时间</li>
                <li>订单金额</li>
                <li>返佣比例</li>
                <li>返佣金额</li>
                <li style="width:12.5%;">操作</li>
            </ul>
            <ul class="ul2">
                    <li style="width:12.5%;">1230298655689</li>
                    <li >213217312</li>    
                    <li >深圳格格有限公司</li>
                    <li >2017-03-26 14:45:46</li>
                    <li>￥9.00</li>
                    <li >5%</li>
                    <li>￥1.00</li>
                    <li style="width:12.5%;color:#ff7b3f;cursor:pointer;" v-if="isA == 0"><router-link :to="{name:'profitDetails'}">查看订单</router-link></li>
                    <li style="width:12.5%;color:#ff7b3f;cursor:pointer;" v-else><router-link :to="{name:'profitDetails'}">查看明细</router-link></li>
            </ul>
            <button @click="toggle">下一页</button>
        </div>
           
       </div>
       
    </div>
    
</template>

<script>
    export default {
        name:'profitRebList',
        data () {
            return {
                isA:0
            }
        },
        created () {
            
        },
         methods: {
            tabNative(i){
                this.isA = i;
            }
         },
         watch:{
            
         }
    }
</script>

<style scoped>
    .profitRebList{
        width:1200px;
        background:#fff;
        margin:0 auto;
        min-height:625px;
    }
    .detail-header{
        width:100%;
        height:65px;
        border-top: 2px solid #ffad2f;
        margin:0 auto;
        /*border:1px solid red;*/
    }
    .detail-header-inside{
        margin-left: 22px;
        margin-right: 20px;
        margin-top: 25px;
        border-bottom: 1px solid #e5e5e5;
        height: 38px;
        width: 1156px;     
    }
    .detail-header-inside .goBack{
        height: 14px;
        line-height: 14px;
        margin-top: 2px;
        width: 80px;
        border-right: 1px solid #e5e5e5;
        float: left;
        color: #ff7b3f;
        font-size:16px;
    }
    .icon_back{background: url(../../../assets/images/icon_back.png) no-repeat;width:15px;height:14px;display: block;float:left;}
    .detail-header-inside .inside-detail{
        margin-left: 40px;
        height:17;
        line-height: 17px;
        float: left;
        color: #959595;
        font-size:17px;
    }
    .detail-header-inside .inside-detail-tab{
        color: #ffad2f;
        border-bottom: 2px solid #ffad2f;
    }
    .tdetail-user{
       height: 80px;
       width: 100px;
    }
    .tdetail-user .detail-tie{
        width: 135px;
        height: 35px;
        margin: 20px;
        background-color: #ff7b3f;
        line-height: 35px;
        color: #ffffff;
        border-radius: 2px;
        float:left;
    }
    .tdetail-user .detail-sai{
        width: 750px;
        height: 35px;
        margin:0px 0px 20px 440px;
        padding-top: 20px;
        color: #959595;
       
    }
    .tdetail-user .detail-sai input{
        height: 30px;
        line-height: 30px;
        margin-left: 10px;
    }
    .tdetail-user input[type="number"]{height:30px;line-height: 30px;width:200px;margin-right:5px;margin-left:40px;text-indent: 5px;}
    .tdetail-user input[type="button"]{width:63px;height:28px;line-height: 28px;background: #f5f5f5;border:1px solid #959595;}
/*排序 */
.tdetail-user .detail-pai{
        width: 750px;
        height: 35px;
        margin:0px 0px 20px 500px;
        padding-top: 20px;
       
    }
.tdetail-user .detail-pai select{width:115px;color:#959595;height:30px;line-height: 30px;text-indent: 5px;background: #f5f5f5;margin:0px 30px 0px 10px}

/*表格*/
 .profitRebList .order_data{
  /*width:100%;*/
  height:200px;
  /*border:1px solid #ccc;*/
  /*padding:0 2%;*/
  /*margin-top:15px;*/
  margin-left: 20px;
  }
  /*.order_data ul{height: 50px;display: block}*/
  .order_data .ul1 li{width:12.5%;background:#f5f5f5;height: 50px;line-height: 50px;text-align: center;color:#696969;}
  .ul2 li{width:12.5%;font-size:14px;color:#959595;text-align: center;height:60px;line-height: 60px;border-bottom:1px solid #959595;}
  .ul3 li{width:35px;height:35px;line-height:35px;text-align: center;color:#696969;background: #f5f5f5;margin-left:5px;margin-top:20px;cursor: pointer;}
  .order_data button{width:60px;height: 35px;float: left;background: #ff7b3f;color:#fff;margin-left:5px;margin-top:20px;line-height:35px;text-align:center;border: 0px;}

  .profitRebList .native{
      color: #ff7b3f;
  }
</style>