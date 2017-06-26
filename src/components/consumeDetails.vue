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
       <!--详情列表-->
       <div class="profitdetail-li-title">
           <ul style="border-bottom: 0;">
               <li class="li1" style="color: #333333;">淘宝订单号</li>
               <li class="li2" style="color: #333333;">订单详情</li>
               <li class="li1" style="color: #333333;">提交时间</li>
               <li class="li1" style="color: #333333;">存入时间</li>
               <li class="li3" style="color: #333333;">订单金额</li>
               <li class="li3" style="color: #333333;">订单状态</li>
               <li class="li3" style="color: #333333;">日均收益</li>
               <li class="li3" style="color: #333333;">累计返利</li>
               <li class="li3" style="color: #333333;">年化收益</li>
               <li class="li3" style="color: #333333;">功能操作</li>
           </ul>
           <ul v-for="(item,index) in list.data.list">
               <li class="li1" v-text="`${item.order_number}`">31704719831660986</li>
               <li class="li2" v-text="`${item.goods_name}`">8双装礼盒 男士袜子一</li>
               <li class="li1" v-text="`${item.create_time}`">2017-03-26 14:45:32</li>
               <li class="li1" v-text="`${item.pay_time}`">2017-03-26 14:45:32</li>
               <li class="li3" v-text="`${item.pay_money}`">￥19.25</li>
               <li class="li3" v-if="item.status == 0">已存入</li>
               <li class="li3" v-else-if="item.status == 1">进行中</li>
               <li class="li3" v-else="item.status == 2">无效</li>
               <li class="li3" v-text="`${item.order_number || 0}`">￥19.25</li>
               <li class="li3" v-text="`${item.order_number || 0}`">￥19.25</li>
               <li class="li3" v-text="`${item.order_number || 0}`">25.25%</li>
               <li class="li4" style="color: #ff7b3f;"><router-link :to="{name:'profitDetails'}">查看订单</router-link></li>
           </ul>
           
       </div>
       
       <div class="profitOrder_data">
             <ul class="ul3">
                <li style="border: 1px solid #e5e5e5">1</li>
                <li style="border: 1px solid #e5e5e5">2</li>
                <li style="border: 1px solid #e5e5e5">3</li>
                <li style="border: 1px solid #e5e5e5">4</li>
                <li style="border: 1px solid #e5e5e5">5</li>
                <li style="border: 1px solid #e5e5e5">6</li>
                <li style="border: 1px solid #e5e5e5">7</li>
                <li style="border: 1px solid #e5e5e5">8</li>
                <li>下一页</li>
            </ul>
       </div>
    </div>

</template>

    <script>
        export default {
            name:'profitDetail',
            data () {
                return {
                isA:false,
                page1:0,
                list:[]
                }
            },
            created () {
                this.getList(1)
            
            },
            methods:{
                tabToggle:function(e){
                let isA = e.currentTarget.id;
                this.isA = isA;
                },
                getList (i) {
                    if(i > this.list.totalPage){
                        alert("没有下一页了")
                        return
                    }
                    this.page1 = i
                    this.$ajax({
                    method: 'get',
                    url: 'static/json/consumedetail.json',
                    data: {
                        totalPage:i
                    }
                }).then((res) => {
                    console.log(res.data);
                    this.list = res.data;
                    //   debugger
                    }).catch((err) => {
                    console.log(err)
                    })
                },
                toggle() {
                    const n = this.page1 +1
                    this.getList(n)
                },
                toggleN(n){
                    this.getList(n)
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
        height: 18px;
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
    .detail-tie{font-size:17px;}
    .detail-user .detail-id{height:40px;line-height:40px;color:#959595;padding-top:10px;}
    .detail-user .detail-id span:last-child{margin-left:25px;}
    .detail-main{padding:10px 30px;height:300px;}
     .xiao-text td{line-height:30px;padding-left:20px;}
     .shen{padding:0px 30px;}
     .shen div{float:left;width:100px;height:35px;line-height:35px;background:#ff7b3f;color:#fff;text-align:center;}
     .shen div:last-child{margin-left:20px;}

     .profitDetail {
         background: #fff;
     }
     .profitdetail-li-title {
         width: 100%;
         height: 50px;
         margin-top: 35px;
         line-height: 50px;
         background: #f4f4f4;

     }
     .profitdetail-li-title ul {
         width: 100%;
         float: left;
         border-bottom: 1px solid #dcdcdc;
     }
     .profitdetail-li-title ul li {
         font-size: 14px;
         margin: 0 10px;
         text-align: center;
         color: #959595;
         white-space: nowrap;  
         overflow: hidden;  
         text-overflow: ellipsis;
     }
     .li1 {
         width: 150px;
         float: left;
     }
     .li2 {
         width: 110px;
         float: left;
     }
     .li3 {
         width: 65px;
         float: left;
     }
     .li4 {
         width: 65px;
         float: left;
         /*color: #ff7b3f;*/
     }
     .ul3 li {
         text-align: center;
         background: #f6f6f6;
         /*border: 1px soid #696969;*/
     }
</style>