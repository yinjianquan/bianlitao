<template>
  <div class="tao">
         <div class="main_header_info user-info" style="width:100%;">
            <div class="user-head">
            <div class="fl photo"><a href="/index.php?act=member&op=avatar" ><img src="http://upload.lexiangquan.com/shop/common/default_user_portrait.gif" width="94"></a></div>
            <div class="fl info">
                <p class="name">150123456754</p>
                <p class="safety">超级管理员</p>
            </div>
            </div>
            <div class="user-data">
                <div class="year-rate clearfix">
                    <div class="fl progress"><span><em style="height: 80%;"></em></span></div>
                    <div class="fl">
                        <p class="tit">年化收益<i></i></p>
                        <p class="rate"><em>0</em><span>(%)</span></p>
                    </div>
                        <i class="at"></i>
                </div>
                <div  class="day-earnings">
                    <p class="tit">今日收益</p>
                    <p class="rate"><em>0.007</em></p>
                </div>
                <div class="item already">
                    <p class="number">0</p>
                    <p class="txt">已存入订单</p>
                </div>
                <div class="item doingNow">
                    <p class="number">0</p>
                    <p class="txt">订单进行中</p>
                </div>
                <div class="item outDate">
                    <p class="number">0</p>
                    <p class="txt">无效订单</p>
                </div>
                </div>
            </div>
           <!--主题内容-->
            <div class="mainbody">
                <el-menu class="left-menu" :default-active="defaultActive" @select="selectItems">
                    <router-link :to="{name: 'member'}" @click.native="toggle()" :class="{'toggleAc':isA == 'member'}">
                        <el-menu-item index="1" :class="{'white':isA == 'member'}"><i class="i-0"></i><span>我的便利淘</span></el-menu-item>
                    </router-link>
                    <el-submenu index="2" unique-opened="true">
                        <template slot="title"><i class="i-10"></i><span>用户管理</span></template>
                        <router-link  :to="{name: 'accountInfor'}" @click.native="toggle('accountI')" :class="{'toggleAc':isA == 'accountInfor'}">
                            <el-menu-item index="2-1" :class="{'toggleAc':isA == 'accountInfor'}"><span>账户管理</span></el-menu-item>
                        </router-link>
                        <router-link :to="{name: 'taobao'}" @click.native="toggle()" :class="{'toggleAc':isA == 'taobao' || isA == 'smTicket'}">
                            <el-menu-item index="2-2" :class="{'toggleAc':isA == 'taobao' || isA == 'smTicket'}"><span>订单管理</span></el-menu-item>
                        </router-link>
                        <router-link :to="{name: 'profitTao'}" @click.native="toggle()" :class="{'toggleAc':isA == 'profitTao'}">
                            <el-menu-item index="2-3" :class="{'toggleAc':isA == 'profitTao'}"><span>收益管理</span></el-menu-item>
                        </router-link>
                        <router-link :to="{name: 'withDrawals'}" @click.native="toggle()" :class="{'toggleAc':isA == 'withDrawals'}">
                            <el-menu-item index="2-4" :class="{'toggleAc':isA == 'withDrawals'}"><span>提现管理</span></el-menu-item>
                        </router-link>
                    </el-submenu>
                    
                    <!--<el-menu-item index="3"><i class="i-2"></i><span>分销管理</span></el-menu-item>-->
                    <el-submenu index="3" unique-opened="true">
                        <template slot="title"><i class="i-10"></i><span>分销管理</span></template>
                        <router-link :to="{name: 'extensionList'}" @click.native="toggle()" :class="{'toggleAc':isA == 'extensionList'}">
                            <el-menu-item index="3-1" :class="{'toggleAc':isA == 'extensionList'}"><span>推广收益管理</span></el-menu-item>
                        </router-link>
                    </el-submenu>
                    <el-submenu index="4" unique-opened="true">
                        <template slot="title"><i class="i-10"></i><span>商铺管理</span></template>
                        <router-link :to="{name: 'shopInfo'}" @click.native="toggle()" :class="{'toggleAc':isA == 'shopInfo'}">
                            <el-menu-item index="4-1" :class="{'toggleAc':isA == 'shopInfo'}"><span>账户与信息管理</span></el-menu-item>
                        </router-link>
                        <router-link :to="{name: 'shopSign'}" @click.native="toggle()" :class="{'toggleAc':isA == 'shopSign'}">
                            <el-menu-item index="4-2" :class="{'toggleAc':isA == 'shopSign'}"><span>签约与续约管理</span></el-menu-item>
                        </router-link>
                        <router-link :to="{name: 'shopRebate'}" @click.native="toggle()" :class="{'toggleAc':isA == 'shopRebate'}">
                            <el-menu-item index="4-3" :class="{'toggleAc':isA == 'shopRebate'}"><span>返佣管理</span></el-menu-item>
                        </router-link>
                    </el-submenu>
                    <el-menu-item index="5"><i class="i-4"></i><span>损益统计</span></el-menu-item>
                <el-submenu index="6">
                        <template slot="title"><i class="el-icon-setting"></i><span>系统设置</span></template>
                        <router-link  :to="{name: 'accountSecurity'}" @click.native="toggle('accountI')" :class="{'toggleAc':isA == 'accountSecurity'}">
                            <el-menu-item index="6-1" :class="{'toggleAc':isA == 'accountSecurity'}"><span>账户安全设置</span></el-menu-item>
                        </router-link>
                        <router-link  :to="{name: 'subAccountMe'}" @click.native="toggle('Order')" :class="{'toggleAc':isA == 'subAccountMe'}">
                            <el-menu-item index="6-2" :class="{'toggleAc':isA == 'subAccountMe' || isA == 'subAccountMe'}"><span>子账号管理</span></el-menu-item>
                        </router-link>
                </el-submenu>
                <el-menu-item index="7"><i class="el-icon-setting"></i><span>微淘管理</span></el-menu-item>
                </el-menu>
                <div class="right-con">
                    <router-view></router-view>
                </div>
            </div>
     </div>  
</template>

<script>
export default {
  // name: 'only',
  data () {
    return {
      isA : this.$route.name,
      defaultActive : this.$store.state.defaultActive
    }
  },
   created () {
            this.getList();
        },
  methods:{
     getList () {
            this.api.ajaxGet('/account/personmessage',{id:13})
           .then((res) => {
                console.log(res);
                }).catch((err) => {
                console.log(err)
                })
            },
   toggle:function(e){
      this.isA = this.$route.name; 
      this.$store.dispatch('addRouter',this.isA)
    },
    selectItems: function(index){
        this.$store.dispatch('selectIndex',index)
    }
  }
 
}
</script>

<style scoped>
   /*//用户信息*/
.user-info{height:136px;background: url("../assets/images/user_bg.png")no-repeat;}
.user-info .user-head{width: 265px;float: left;height: 100px;padding:20px 0px 20px 15px;}
.user-info .user-head .photo{padding: 2px;}
.user-info .user-head .photo img{border-radius: 100%;}
.user-info .user-head .info{margin-left:15px;margin-top:28px;}
.user-info .user-head .info .name{text-align:center;font-size: 18px;color: #333333;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;width: 135px;}
.user-info .user-head .info .safety{color: #959595;margin-top: 5px;font-size:16px;text-align: center;}
.user-info .user-data{width:764px;height: 100px;float: left;padding:10px 50px; }
.user-info .user-data .year-rate{width: 195px;padding-top: 25px;float: left;margin-left: 15px;}
.user-info .user-data .year-rate .progress{height: 58px;margin-right: 10px;}
.user-info .user-data .year-rate .progress span{height: 58px;width: 8px;display: inline-block;background: #f0f0f0;border-radius: 10px;position: relative;}
.user-info .user-data .year-rate .progress span em{display: inline-block;position: absolute;bottom: 0;background: #fc6e1e;width: 8px;border-radius: 10px;}
.user-info .user-data  .tit{font-size: 16px;color: #a6a6a6;}
.user-info .user-data .year-rate .tit i{ background: url(../assets/images/user-icon.png);  background-position: -78px -3px;width: 17px;height: 17px;margin-bottom: -2px;margin-left: 8px;}
.user-info .user-data .rate em{font-size: 38px;color: #f3630a;font-weight: bold;}
.user-info .user-data .rate span{font-size: 14px;color: #fb6319;margin-left:3px;}
.user-info .user-data .year-rate .rate i{background-position: -42px 0 ;width: 25px;height: 32px;margin-left: 20px}
.user-info .user-data .year-rate .rate i.bottom{background-position: -42px -39px; }
.user-info .user-data .day-earnings{width: 250px;float: left;text-align: center;padding-top: 25px;}
.user-info .user-data .item{float: left;width: 100px;padding-top: 25px;text-align: center;}
.user-info .user-data .item .number{font-size:34px;color: #666666; }
.user-info .user-data .item .txt{color: #a6a6a6;font-family: "宋体" ;font-size:12px; }

 .mainbody{
      width: 1200px;
      margin: 0 auto;
      background: #f5f5f5;
      overflow: hidden;
      /*min-height:800px;*/
      height:100%;
      /*border:1px solid red;*/
   }
.mainbody .left-menu{width: 210px;background: #eeeeee;float: left}
.mainbody .left-menu .item{height:52px;line-height:52px;display: block;font-size: 16px;color: #696969;padding-left: 40px;position: relative;}
.mainbody .left-menu  i{width:35px;height:24px;margin-bottom: -6px;margin-right: 10px;display: inline-block;}
.mainbody .left-menu  i.i-0{background:url(../assets/images/000.png) no-repeat;}
.mainbody .left-menu  i.i-1{background:url(../assets/images/001.png) no-repeat;}
.mainbody .left-menu  i.i-2{background:url(../assets/images/002.png) no-repeat;}
.mainbody .left-menu  i.i-3{background:url(../assets/images/003.png) no-repeat;}
.mainbody .left-menu  i.i-4{background:url(../assets/images/004.png) no-repeat;}
.mainbody .left-menu  i.i-5{background:url(../assets/images/005.png) no-repeat;}
.mainbody .left-menu  i.i-6{background:url(../assets/images/006.png) no-repeat;}
.mainbody .left-menu  i.i-7{background:url(../assets/images/006.png) no-repeat;}
.mainbody .left-menu  i.i-8{background:url(../assets/images/007.png) no-repeat;}
.mainbody .left-menu  i.i-9{background:url(../assets/images/008.png) no-repeat;}
.mainbody .left-menu  i.i-10{background:url(../assets/images/009.png) no-repeat;}

.mainbody .left-menu li:hover i.i-0{background:url(../assets/images/00.png) no-repeat;}
.mainbody .left-menu li:hover i.i-1{background:url(../assets/images/01.png) no-repeat;}
.mainbody .left-menu li:hover i.i-2{background:url(../assets/images/02.png) no-repeat;}
.mainbody .left-menu li:hover i.i-3{background:url(../assets/images/03.png) no-repeat;}
.mainbody .left-menu li:hover i.i-4{background:url(../assets/images/04.png) no-repeat;}
.mainbody .left-menu li:hover i.i-5{background:url(../assets/images/05.png) no-repeat;}
.mainbody .left-menu li:hover i.i-6{background:url(../assets/images/06.png) no-repeat;}
.mainbody .left-menu li:hover i.i-7{background:url(../assets/images/06.png) no-repeat;}
.mainbody .left-menu li:hover i.i-8{background:url(../assets/images/07.png) no-repeat;}
.mainbody .left-menu li:hover i.i-9{background:url(../assets/images/08.png) no-repeat;}
.mainbody .left-menu li:hover i.i-10{background:url(../assets/images/09.png) no-repeat;}

.mainbody .left-menu .toggleAc i.i-0{background:url(../assets/images/00.png) no-repeat;}
.mainbody .left-menu .item.toggleAc i.i-1{background:url(../assets/images/01.png) no-repeat;}
.mainbody .left-menu .item.toggleAc i.i-2{background:url(../assets/images/02.png) no-repeat;}
.mainbody .left-menu .item.toggleAc i.i-3{background:url(../assets/images/03.png) no-repeat;}
.mainbody .left-menu .item.toggleAc i.i-4{background:url(../assets/images/04.png) no-repeat;}
.mainbody .left-menu .item.toggleAc i.i-5{background:url(../assets/images/05.png) no-repeat;}
.mainbody .left-menu .item.toggleAc i.i-6{background:url(../assets/images/06.png) no-repeat;}
.mainbody .left-menu .item.toggleAc i.i-7{background:url(../assets/images/06.png) no-repeat;}
.mainbody .left-menu .item.toggleAc i.i-8{background:url(../assets/images/07.png) no-repeat;}
.mainbody .left-menu .item.toggleAc i.i-9{background:url(../assets/images/08.png) no-repeat;}
.mainbody .left-menu .item.toggleAc i.i-10{background:url(../assets/images/09.png) no-repeat;}
.at{display: inline-block; background:url(../assets/images/mywallet.png) no-repeat;background-position:-31px -432px ; width: 24px; height: 34px; margin-left: 25px; margin-top: 21px;}
.mainbody .left-menu .toggleAc{background: #fff;color:#ff7b3f;}
.mainbody .left-menu .item.toggleAc em{display: inline;width:3px;height: 24px;background: #ff7b3f;position: absolute;left: 0;top: 14px;border-radius:50px;}
.right-con{width: 888px;float: left;padding: 0 50px 30px;background: #fff;min-height: 490px;}
.mainbody .left-menu .item:hover{background: #fff;color:#ff7b3f;}
.mainbody .left-menu .item:hover  em{display: inline;width:3px;height: 24px;background: #ff7b3f;position: absolute;left: 0;top: 14px;border-radius: 5px;}

.main_right{float:left;width:1000px;margin-left:8px;}
.main_right .index{color:#f08e39;height:45px;line-height: 45px;margin-left:20px;font-weight: 600;} 
.main_right .index a{height:100%;display: block;float:left;margin-left:15px;}
.main_right .index i{content:"";background: url(../assets/images/index.png) no-repeat;display: block;width:24px;height:22px;position: relative;top:12px;left:5px;float:left;}
.main_right .content{width:980px;height:480px;background-color:#fff; margin-left:20px;}
.right-con ul{width:70%;padding:50px 0px 50px 20px;height:28%;}
.right-con  ul li{float: left;margin-left:40px;cursor:pointer;}
.xiaopiao{display: block;width:250px;height:142px;background: url(../assets/images/xiaopiao.png) no-repeat;}
.tixian{display: block;width:250px;height:142px;background: url(../assets/images/tixian.png) no-repeat;}
.right-con  ul li .tie{text-indent:4px;font-size:14px;display: block;width:30px;height:30px;position: relative;top:-23px;left:241px;background: url(../assets/images/tie.png)no-repeat;line-height: 30px;color:#fff;}

/*导航栏*/
.left-menu li span{
    /*width: 10px;*/
    /*border: 1px solid red;*/
    padding-left: 15px;
    font-size: 15px;
}
.el-menu.left-menu{
    background-color: #eeeeee;
}

.left-menu li.white{background: #fff;color:#ff7b3f;}
.left-menu li:hover{background: #fff;color:#ff7b3f;}
.mainbody .left-menu li:hover{background: #fff;color:#ff7b3f;}
</style>