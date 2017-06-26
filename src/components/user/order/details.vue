<template>
    <div class="detail">
        <!--头部-->
        <div class="detail-header">
            <div class="detail-header-inside">
                <div class="goBack">
                <router-link :to="{name:'smTicket'}"><span class="icon_back"></span><span style="float:left;margin-left:10px;">返回</span></router-link>
                </div>
                <div class="inside-detail" id="profit" v-if="list.order_status==20">
                    审核小票
               </div>
                 <div class="inside-detail" id="profit" v-else>
                    已审核
               </div>
                <!--<div class="inside-detail" id="profit" @click="tabToggle" :class="{'inside-detail-tab':isA =='profit'}">
                    收益详情
                </div>
                <div class="inside-detail" id="consume" @click="tabToggle" :class="{'inside-detail-tab':isA == 'consume'}">
                    消费详情
                </div>-->
            </div>
        </div>
       <!--内容-->
       <div class="detail-user">
           <div class="detail-tie">用户信息</div>
           <div class="detail-id">
               <span>用户ID</span><span>{{list.order_number}}</span>
           </div>
       </div>
       <!--小票详情-->
       <div class="detail-main">
           <div class="detail-xiao" style="width:75%;height:300px;float:left;">
               <div class="detail-tie">小票详情</div>
               <div style="margin-top:15px;color:#959595;">
                   <div class="xiao-picture" style="float:left;margin-top:10px;" >
                       <div class="picture1" style="float:left;"><div><img v-bind:src="list.picture" style="width:150px;height:200px;border:1px solid #ccc;margin-right:20px;"  @click="clickImg($event)"></div><div style="width:150px;text-align:center;height:30px;line-height:30px;font-size:15px;">完整图</div></div>
                       <div class="picture2"  style="float:left;"><div><img src="" alt="" style="width:150px;height:200px;border:1px solid #ccc;" @click="clickImg($event)"></div><div style="width:150px;text-align:center;height:30px;line-height:30px;font-size:15px;">撕裂图</div></div>
                   </div>
                    <big-img v-if="showImg" @clickit="viewImg" :imgSrc="imgSrc"></big-img>
                   <div style="margin-left:60px;float:left;" class="xiao-text">
                       <table>
                           <tr>
                               <td>商户名称</td>
                               <td>{{list.shop_name}}</td>
                            </tr>
                            <tr>
                                <td>小票上传位置</td>
                                <td>{{list.ticket_position}}<br>N:35`55`435&nbsp;E:45`66`908`</td>
                            </tr>
                            <tr>
                                <td>商户地理位置</td>
                                <td>{{list.shop_position}}<br>N:35`55`435&nbsp;E:45`66`908`<br><span v-bind:class="{'status': !isA}">正常</span></td>
                            </tr>
                            <tr v-if="list.order_status==20||list.order_status==30">
                                <td>小票金额</td>
                                <td v-if="list.order_status==20" style="color:#ff7b3f;">待输入</td>
                                <td v-else="list.order_status==30">￥{{list.pay_money}}</td>
                            </tr>
                            <tr v-if="list.order_status==30">
                                <td>存入金额</td>
                                <td>￥{{list.deposit_money}}</td>
                            </tr>
                            <tr v-if="list.order_status==40">
                                <td>审核失败原因</td>
                                <td>{{list.reason}}</td>
                            </tr>
                            <tr>
                                <td>打印时间</td>
                                <td>{{list.create_time}}</td>
                            </tr>
                       </table>
                   </div>
               </div>
           </div>
           <div class="order-state" style="float:left;border-left:1px dashed #e5e5e5;padding-left:75px;height:300px;">
              <div class="detail-tie">订单状态</div>
               <table class="xiao_state">  
                   <tr>
                       <td><img src="../../../assets/images/noselect.png" alt=""></td>
                       <td class="xiao_noselect"><div>上传小票</div><div>2017-03-26 12:45:46</div></td>
                   </tr>
                   <tr>
                       <td><img src="../../../assets/images/selected.png" alt=""></td>
                       <td v-bind:class="{'xiao_selected':!isA}" style="padding:0px 20px;" v-if="list.order_status==20"><div>待审核</div><div>2017-03-26 12:45:46</div></td>
                       <td v-bind:class="{'xiao_selected':!isA}" style="padding:0px 20px;" v-else-if="list.order_status==30"><div>已存入</div><div>2017-03-26 12:45:46</div></td>
                       <td v-bind:class="{'xiao_selected':!isA}" style="padding:0px 20px;" v-else><div>无效</div><div>2017-03-26 12:45:46</div></td>
                   </tr>
               </table>
           </div>
       </div>
       <div class="shen" v-if="list.order_status==20">
           <div @click="open(0)">审核通过</div>
           <div @click="open(1)">审核失败</div>
       </div>
        <div class="shen" v-else>
           <div style="background-color:#d2d2d2;color:#fff;" v-if="list.order_status==30">审核通过</div>
           <div style="background-color:#d2d2d2;color:#fff;" v-if="list.order_status==40">审核失败</div>
       </div>
        <el-dialog :title="title" v-model="dialogFormVisible" :action="action">
            <el-form @model="form">
                <el-form-item label="请写入存入的小票金额" :label-width="formLabelWidth" v-show="!isB">
                <el-input v-model="form.money" auto-complete="off" style="width:85%;"></el-input>
                </el-form-item>
                <el-form-item label="审核失败原因" :label-width="formLabelWidth" v-show="isB">
                <el-select v-model="form.reason" placeholder="请选择审核失败原因">
                    <el-option label="不是小票" value="不是小票"></el-option>
                    <el-option label="小票拍摄不清晰" value="小票拍摄不清晰"></el-option>
                    <el-option label="未拍到小票金额" value="未拍到小票金额"></el-option>
                    <el-option label="不是当天的小票" value="不是当天的小票"></el-option>
                    <el-option label="已超过小票上传规定期限" value="已超过小票上传规定期限"></el-option>
                    <el-option label="其他" value="7"></el-option>
                </el-select>
                </el-form-item>
                <el-form-item label="其他原因" :label-width="formLabelWidth" v-show="isC">
                 <el-input type="textarea" v-model="form.other" placeholder="请保持在20字以内..." resize="none"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="sure">确 定</el-button>
            </div>
            </el-dialog>
    </div>
    
</template>

<script>
import BigImg from '../../bigImg.vue';
import { mapState, mapActions } from 'vuex'
    export default {
        name:'details',
        data () {
         return {
            dialogFormVisible: false,
            isA:false,
            isB:false, 
            isC:false,
            defaultActive:this.$route.name,
            list:[],
            title:null,
            action:null,
            member_id:this.$route.params.id,
            order_number:this.$route.params.order_number,
            form: {
                money: '',
                reason: '',
                other:'',
             },
             showImg:false,
             imgSrc: '',
            formLabelWidth: '152px'
            };
        },
        created () {
            this.getList();
        },
        components: {
            'big-img':BigImg
        },
         methods: {
            clickImg(e) {
                this.showImg = true;
                // 获取当前图片地址
                this.imgSrc = e.currentTarget.src;
            },
            viewImg(){
                this.showImg = false;
            },
            getList () {
            this.api.ajaxGet('/ticket/details',{member_id:this.member_id,order_number:this.order_number})
           .then((res) => {
                console.log(res);
                this.list = res.data;
                }).catch((err) => {
                console.log(err)
                })
            },
            open:function(a){
            if(a==0){this.title="审核通过";this.action="success";this.isB=false; }else if(a==1){this.title="审核失败";this.action="failed";this.isB=true; }this.dialogFormVisible=true;console.log(this.action); },
            sure:function(){
                this.dialogFormVisible=false;
                    // 审核通过或者失败请求接口
                    let params={};
                    if(this.form.reason=='7'){
                        params={member_id:this.list.member_id,order_number:this.list.order_number,action:this.action,reason:"其他:"+this.form.other,pay_money:this.form.money};
                    }else{
                        params={member_id:this.list.member_id,order_number:this.list.order_number,action:this.action,reason:this.form.reason,pay_money:this.form.money};
                    }
                    console.log(params);
                    this.api.ajaxGet('/ticket/examine',params)
                    .then((res) => {
                        console.log(res);
                        if(res.statusCode=="0"){
                          this.$router.push({path:'/only/tao/orderManage/smTicket'});
                        }else{
                            alert(res.msg)
                        }
                        }).catch((err) => {
                        console.log(err)
                        })
                }
         },
         watch:{
            'form.reason':function(){
                if(this.form.reason=='7'){this.isC=true;}else{this.isC=false;} 
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
        margin-left: 27px;
        height:17;
        line-height: 17px;
        float: left;
        color: #696969;
        font-size:17px;
    }
    .detail-header-inside .inside-detail-tab{
        color: #ffad2f;
        border-bottom: 2px solid #ffad2f;
    }
    .detail-user{
        padding:30px;
    }
    .detail-tie{font-size:17px;color:#696969;}
    .detail-user .detail-id{height:40px;line-height:40px;color:#959595;padding-top:10px;font-size:15px;}
    .detail-user .detail-id span:last-child{margin-left:25px;}
    .detail-main{padding:5px 30px;height:300px;}
    .xiao-text  td{line-height:30px;padding-left:20px;font-size:15px;}
    .xiao-text tr{vertical-align:top;line-height: 0px;}
    .xiao-text tr td:first-child{text-align: right;padding-left:40px;}
    .shen{height:35px;padding:0px 30px;margin-top:35px;}
    .shen div{float:left;width:100px;height:35px;line-height:35px;background:#ff7b3f;color:#fff;text-align:center;border-radius: 2px;cursor: pointer;}
    .shen div:last-child{margin-left:25px;}
    .order-state .xiao_state td{font-size:15px;color:#696969;padding:20px 15px;}
    .order-state .xiao_state tr td:first-child{padding:10px 0px;}
    .order-state .xiao_state  .xiao_noselect{line-height: 25px;color:#959595;font-size: 15px;}
    .order-state .xiao_state  .xiao_selected{color:#ff7b3f;}
    .order-state .xiao_state{position: relative;}
    .order-state .xiao_state:before{content: "";width:0px;height:48px;border:1px solid #e5e5e5;position: absolute;top:50px;left:7px;}
    .status{color:#bae1b5;}
    .el-dialog--small {
    width: 33% !important;
    }
    .el-textarea__inner{height:75px !important;}
</style>