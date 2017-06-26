<template>
  <div class="shop_info">
    <div class="shop_head">
        <div class="shop_tab">
          <ul>
            <li  @click="toggle('all')" :class="{'selected':tabActive == 'all' }" >全部</li>
            <li  @click="toggle('stay')" :class="{'selected':tabActive == 'stay' }" >待开通</li>            
            <li  @click="toggle('Already')" :class="{'selected':tabActive == 'Already'}">已开通</li>
            <li  @click="toggle('Close')" :class="{'selected':tabActive == 'Close'}">已关闭</li>
          </ul>
        </div>
        <div class="search_parms">
           <ul>
              <li><input type="text" name="search" v-model="input"  placeholder="请输入用户ID"><input type="button" @click="search" value="搜索"></li>
           </ul>
        </div>
    </div>
   <div class="shop_data">
       <ul class="ul1">
         <li style="width:10%;">用户ID</li>
         <li>商铺名称</li>
         <li>返佣比例</li>
         <li>登录账号</li>
         <li>状态</li>
         <li>合同到期日</li>
         <li style="width:10%;">操作</li>
       </ul>
       <ul class="ul2">
         <li style="width:10%;">0298655689</li>
         <li>深圳腾讯有限公司</li>
         <li>5%</li>
         <li>123456789</li>
         <li>已开通</li>
         <li>2018-06-16</li>
         <li style="width:10%;color:#ff7b3f;cursor:pointer;"><span class="close">关闭</span><span>查看</span></li>
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
  </div>
</template>

<script>

// mounted 钩子函数  这里去请求豆瓣数据
export default {
  name: 'shopInfo',
  data () {
    return {
      tabActive:'all',
      input:"",
    }
  },
  created:function(){ //这里mounted和created生命周期函数区
      
  },
  methods: {
    toggle:function(e){
      this.tabActive = e
      this.$store.dispatch('addCketList',{page:1})
    },
    search:function(){
      const dapa ={
        input:this.input,
        name:"orderManage"
      }
      this.$store.dispatch('addNum',dapa)
      this.$store.dispatch('addCketList',{page:1,keyword:this.$store.state.answerid.orderManage})

    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.shop_info{
  height:100%;
  overflow: hidden;
  /*border:1px solid red;*/
}
.shop_head{
  width:100%;
  height:70px;
  /*border:1px solid #ccc;*/
  /*padding:0px 3%;*/
}
/*tab切换*/
.shop_head .shop_tab{
  float:left;
  padding-top:20px;
  /*border:1px solid red;*/
}
ul li{float:left;}
.shop_head .shop_tab ul li{
  cursor: pointer;
  height:38px;
  line-height: 38px;
  text-align: center;
  padding:0px 30px;
  border-bottom:1px solid #ccc;
  font-size: 15px;
  color:#959595;
}
.shop_head .shop_tab .selected{
  color:#ff7b3f;
  border:1px solid #ccc;
  background: #f5f5f5;
  border-bottom: 0px;
}
/*搜索栏*/
.shop_head .search_parms{
  float:right;
  padding-top:25px;
  /*border:1px solid red;*/
}
.shop_head .search_parms ul li{float:left;}
.shop_head .search_parms ul li:first-child{
  margin-right:40px;
}
.shop_head .search_parms ul li span{color:#696969;font-size:16px;margin-right:5px;}
.shop_head .search_parms ul li select{width:115px;color:#959595;height:30px;line-height: 30px;text-indent: 5px;background: #f5f5f5;}
.shop_head .search_parms ul input[type="text"]{height:26px;line-height: 26px;width:270px;margin-right:10px;text-indent: 5px;}
.shop_head .search_parms ul input[type="button"]{width:63px;height:28px;line-height: 28px;background: #f5f5f5;border:1px solid #959595;}

/*列表*/
.shop_data ul li{
    float: left;
    /*border:1px solid red;*/
}
.shop_data{
  width:100%;
  height:200px;
  /*border:1px solid #ccc;*/
  /*padding:0 2%;*/
  margin-top:15px;
  }
  .shop_data ul{width:100%;}
  .shop_data .ul1 li{width:16%;background:#f5f5f5;height: 50px;line-height: 50px;text-align: center;color:#696969;}
  .shop_data .ul2 li{width:16%;font-size:14px;color:#959595;text-align: center;height:60px;line-height: 60px;border-bottom:1px solid #959595;}
  .shop_data .ul3 li{width:35px;height:35px;line-height:35px;text-align: center;color:#696969;background: #f5f5f5;margin-left:5px;margin-top:20px;cursor: pointer;}
  .shop_data .ul3 li:last-child{width:100px;background: #ff7b3f;color:#fff;}
  
  .shop_data .ul2 .close{margin-right: 10px}
</style>