<template>
   <div class="rebate">
        <div class="rebateImg" style="margin-right: 40px">
            <router-link :to="{name: 'taobaoDetail'}">
            <img src="../../../assets/images/11.png" />
            </router-link>
        </div>
        <div class="rebateImg">
            <router-link :to="{name: 'profitRebList'}">
                <img src="../../../assets/images/11.png" />
            </router-link>
        </div>
        <div class="rebateImg" style="margin-right: 40px">
           <!--<div class="rebateLeft">
                <span style="line-height: 100%"><i>小</i><br><i>票</i><br><i>商</i><br><i>户</i><br></span>
            </div>
            <div class="rebateRight">
                <div class="top">
                    <div class="top-txt">累计返佣（元）</div>
                    <div class="top-num">5,000.00</div>
                </div>
                <div class="bottom">
                    <div class="bottom-left">
                        <span class="bottom-txt">昨天返佣（元）</span>
                        <span class="bottom-num">5,000.00</span>
                    </div>
                    <div class="bottom-right">
                        <span class="bottom-txt">近一个月返佣(元）</span>
                        <span class="bottom-num">5,000.00</span>
                    </div>
                </div>
            </div>-->
            <img src="../../../assets/images/11.png" />
        </div>
        <div class="rebateImg">
            <img src="../../../assets/images/11.png" />
        </div>
   </div>
</template>

<script>

// mounted 钩子函数  这里去请求豆瓣数据

export default {
  name: 'shopRebate',
  
  created:function(){  //这里mounted和created生命周期函数区别
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .rebate .rebateImg{
        width: 420px;
        height: 170px;
        background: red;
        float:left;
        /*border: 1px solid yellow;*/
        margin-top: 50px;
    }
    .rebateImg img {
        width: 100%;
    }
    .rebate .rebateLeft{
        width: 80px;
        height: 100%;
        float: left;
        display:table;
    }
    .rebate .rebateLeft i{
        color: #ffffff;
        
    }
    .rebate .rebateRight{
        float: left;
        width: 340px;
        height: 100%;
    }
    .rebateRight .top{
        text-align: center;
        height: 90px;
    }
    .rebateRight .top div{
        margin-top: 10px;
    }
    .rebateRight .top .top-num{
        font-size: 30px
    }
/*底*/
    .rebateRight .bottom{

    }
    .rebateRight .bottom .bottom-left{
        width: 170px;
        height: 60px;
        text-align: center;
        border-right: 1px solid #959595;
        float: left;
    }
    .bottom .bottom-left .bottom-txt{
        
    }
    .rebateRight .bottom .bottom-right{
        width: 160px;
        height: 50px;
        text-align: center;
        float: right;
        
    }
    .rebateLeft {
        text-align: center;
    }
    .rebateLeft span {
        vertical-align:middle;   
        display:table-cell;  
    }
</style>