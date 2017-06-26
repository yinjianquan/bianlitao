<template>
    <div class="profitDetail">
        <!--头部-->
        <div class="profidetail-header">
            <div class="detail-header-inside">
                <div class="goBack">
                    <span style="padding-right:5px;"><<</span>返回
                </div>
                <!--<div class="inside-detail" id="profit" @click="tabToggle" :class="{'inside-detail-tab':isA =='profit'}">
                    审核小票
               </div>-->
                <div class="inside-detail" id="profit" @click="tabToggle" :class="{'inside-detail-tab':isA =='profit'}">
                    <router-link :to="{name:'profitDetails'}" >收益详情</router-link>
                </div>
                <div class="inside-detail" id="consume" @click="tabToggle" :class="{'inside-detail-tab':isA == 'consume'}">
                    <router-link :to="{name:'consumeDetails'}" >消费详情</router-link>
                </div>
            </div>
        </div>
       <!--收益信息-->
      <div class="profit-view">
          <div class="profit-userinf">
              <p>用户信息</p>
              <ul>
                  <li>
                      <span class="profit-userName">用户ID</span><span class="profit-userNumber">123456321</span>
                  </li>
                  <li>
                      <span class="profit-userName">消费次数</span><span class="profit-userNumber">21</span>
                  </li>
                  <li>
                      <span class="profit-userName">存入次数</span><span class="profit-userNumber">21</span>
                  </li>
                  <li>
                      <span class="profit-userName">消费总存款</span><span class="profit-userNumber">56321</span>
                  </li>
              </ul>

              <p style="margin-top: 50px;float: left;">用户收益</p>
              <ul>
                  <li>
                      <span class="profit-userName">今日收益</span><span class="profit-userNumber">￥12321</span>
                  </li>
                  <li>
                      <span class="profit-userName">预计明日收益</span><span class="profit-userNumber">￥5221</span>
                  </li>
                  <li>
                      <span class="profit-userName">昨日收益</span><span class="profit-userNumber">￥24654</span>
                  </li>
                  <li>
                      <span class="profit-userName">当前年化收益</span><span class="profit-userNumber">￥56321</span>
                  </li>
              </ul>

          </div>
          <div class="profit-weektrend">
              <p>本周收益趋势</p>
              <div class="weektrend-data">
                  <span class="time-cheach">时期筛选</span>
                  <span class="time-cheach-date">
                        <el-date-picker  v-model="value1"  type="date"  placeholder="选择日期" :picker-options="pickerOptions0"> </el-date-picker>
                  </span>
                  <span style="margin: 2px 10px 0 10px"><img src="../../../assets/images/10.png" > </span>
                  <span>至</span>
                  <span class="time-cheach-date">
                      <el-date-picker  v-model="value2"  type="date"  placeholder="选择日期" :picker-options="pickerOptions0"> </el-date-picker>
                  </span>
                  <span style="margin: 2px 10px 0 10px"><img src="../../../assets/images/10.png" > </span>
              </div>


              <div class="bar-chart">
                <div class="bar-chart-progress">
                <span style="width: 20%;"></span>
                </div>

                <div class="bar-chart-progress">
                <span style="width: 40%;"></span>
                </div>

                <div class="bar-chart-progress">
                <span style="width: 60%;"></span>
                </div>

                <div class="bar-chart-progress">
                <span style="width: 80%;"></span>
                </div>

                <div class="bar-chart-progress">
                <span style="width: 100%;"></span>
                </div>

                <!--<div class="echarts">
                    <IEcharts :option="bar" ></IEcharts>
                </div>-->

              </div>
              <div class="bar-chart-title">
                  <span>3-20</span>
                  <span>3-20</span>
                  <span>3-20</span>
                  <span>3-20</span>
              </div>
          </div>
      </div>
       
       
    </div>

</template>

    <script>
    
        export default {
            name:'profitDetail',
            data () {
                return {

                    pickerOptions0: {
                        disabledDate(time) {
                            // return time.getTime() < Date.now() - 8.64e7;
                        }
                        },
                        value1: '',
                        value2: '',

                isA:false
                }
            },
            created(){
                 this.$nextTick(function(){
                      $(".datetimepicker3").on("click",function(e){
                        e.stopPropagation();
                        console.log($(this))
                        $(this).lqdatetimepicker({
                            css : 'datetime-day',
                            dateType : 'D',
                            selectback : function(){
                                
                            }
                        });
                       });
                 })
            },
            methods:{
                tabToggle:function(e){
                let isA = e.currentTarget.id;
                this.isA = isA;
                }
            }
            
        }

    </script>

<style>
    .detail{
        width:1200px;
        background:#fff;
        margin:0 auto;
        min-height:625px;
    }
    .profidetail-header{
        width:100%;
        height:70px;
        border-top: 2px solid #ffad2f;
        margin:0 auto;
        background: #fff;
        /*border:1px solid red;*/
    }
    .detail-header-inside{
        margin-left: 22px;
        margin-right: 22px;
        margin-top: 26px;
        border-bottom: 1px solid #e5e5e5;
        height: 42px;
        width: 1156px;     
    }
    .detail-header-inside .goBack{
        height: 22px;
        width: 76px;
        border-right: 1px solid #e5e5e5;
        float: left;
        color: #ffad2f
    }
    .detail-header-inside .inside-detail{
        margin-left: 40px;
        float: left;
        color: #696969;
    }
    .detail-header-inside .inside-detail-tab{
        color: #ffad2f;
        border-bottom: 2px solid #ffad2f;
    }

    .profit-view {
        width: 100%
    }
    .profit-userinf {
        width: 280px;
        float: left;
        margin: 40px 0 40px 60px; 
        border-right: 1px dashed #e5e5e5;
    }
    .profit-userinf ul {
        margin-top: 10px;
    }
    .profit-userinf ul li {
        width: 100%;
        color: #959595;
        margin-top: 15px;
        font-size: 14px;
    }
    .profit-userName {
        width: 90px;
        text-align: right;
        float: left;
    }
    .profit-userNumber {
        width: 160px;
        text-align: left;
        margin-left: 25px;
    }
    .profit-weektrend {
        width: 757px;
        float: left;
        margin: 40px 0 0 100px; 
    }
    .time-cheach {
        float: left;
    }
    .form-control {
        width: 125px;
        text-align: center;
        float: left;
        margin-left: 20px;
    }
    .weektrend-data {
        float: left;
        width: 600px;
        margin-top: 30px;
    }
    .weektrend-data span {
        float: left;
        color: #696969;
    }
    .bar-chart {
        width: 240px;
        height: 267px;
        float: left;
        transform: rotate(-90deg); 
        -o-transform: rotate(-90deg); 
        -webkit-transform: rotate(-90deg); 
        -moz-transform: rotate(-90deg);
        margin:30px 40px 0 40px;
        border: 1px solid;
        border-color: #ccc;
        border-bottom: 0;
        border-top: 0;
        border-right: 0;
    }
    
    /*条形图*/
    .bar-chart-progress {
        width: 100%;
        margin: 30px 30px 0 0px;
        float: left;
        border-radius: 10px;
    }
    .bar-chart-progress > span {
        position: relative;
        float: left;
        margin: 0 -1px;
        min-width: 30px;
        height: 18px;
        line-height: 16px;
        text-align: right;
        background: #ffad2f;
        border-color: #ffad2f #ffad2f #ffad2f;
        background-image: -webkit-linear-gradient(top, #ffad2f 0%, #ffad2f 70%, #ffad2f 100%);
        background-image: -moz-linear-gradient(top, #ffad2f 0%, #ffad2f 70%, #ffad2f 100%);
        background-image: -o-linear-gradient(top, #ffad2f 0%, #ffad2f 70%, #ffad2f 100%);
        background-image: linear-gradient(to bottom, #ffad2f 0%, #ffad2f 70%, #ffad2f 100%);
        -webkit-box-shadow: inset 0 1px rgba(255, 255, 255, 0.3), 0 1px 2px rgba(0, 0, 0, 0.2);
        box-shadow: inset 0 1px rgba(255, 255, 255, 0.3), 0 1px 2px rgba(0, 0, 0, 0.2);
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
    }
    .bar-chart-progress > span > span {
        padding: 0 8px;
        font-size: 11px;
        font-weight: bold;
        color: #404040;
        color: rgba(0, 0, 0, 0.7);
        text-shadow: 0 1px rgba(255, 255, 255, 0.4);
    }
    .bar-chart-progress > span:before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 1;
        height: 18px;
        border-radius: 10px;
    }
    
    
    .bar-chart-title {
        width: 100%;
        float: left;
        padding-top: 15px;
    }
    .bar-chart-title span {
        float: left;
        margin: -20px -35px 0 50px;
    }
    .time-cheach-date {
        margin-left: 20px;
        margin-top: -5px
    }
    .el-date-picker__header button {
        width: 20px;
        height: 20px;
    }
   
</style>