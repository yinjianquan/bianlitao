<template>
  <div class="extension">
    <div class="ext_head">
        <div class="detail-tie">导出Excel表</div>
        <div class="detail-pai">
               <span>排序</span>
               <select >
                  <option value="1">推广总收益</option>
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
   <div class="extension_data">
       <ul class="ul1">
         <li style="width:10%;">推广用户ID</li>
         <li>用户昵称</li>
         <li>代言人个数</li>
         <li>推广红包小票总金额</li>
         <li>推广总收益</li>
         <li>推广收益排名</li>
         <li style="width:10%;">最近推广订单时间</li>
       </ul>
       <ul class="ul2">
         <li style="width:10%;">0298655689</li>
         <li>张三</li>
         <li>23</li>
         <li>￥300.00</li>
         <li>￥300.00</li>
         <li>1</li>
         <li style="width:10%;color:#ff7b3f;cursor:pointer;">2017-3-21</li>
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
.extension{
  height:100%;
  overflow: hidden;
  /*border:1px solid red;*/
}
.ext_head{
  width:100%;
  height:70px;
  /*border:1px solid #ccc;*/
  /*padding:0px 3%;*/
}
/*head*/
.ext_head .detail-tie{
        width: 135px;
        height: 35px;
        margin: 20px;
        background-color: #ff7b3f;
        line-height: 35px;
        color: #ffffff;
        border-radius: 2px;
        float:left;
    }
.ext_head .detail-pai{
        width: 750px;
        height: 35px;
        margin:0px 0px 20px 200px;
        padding-top: 20px;
       
    }
.ext_head .detail-pai select{width:115px;color:#959595;height:30px;line-height: 30px;text-indent: 5px;background: #f5f5f5;margin:0px 30px 0px 10px}
.ext_head input[type="number"]{height:30px;line-height: 30px;width:200px;margin-right:5px;margin-left:40px;text-indent: 5px;}
.ext_head input[type="button"]{width:63px;height:28px;line-height: 28px;background: #f5f5f5;border:1px solid #959595;}
/*排序 */
/*列表*/
.extension_data ul li{
    float: left;
    /*border:1px solid red;*/
}
.extension_data{
  width:100%;
  height:200px;
  /*border:1px solid #ccc;*/
  /*padding:0 2%;*/
  margin-top:15px;
  }
  .extension_data ul{width:100%;}
  .extension_data .ul1 li{width:16%;background:#f5f5f5;height: 50px;line-height: 50px;text-align: center;color:#696969;}
  .extension_data .ul2 li{width:16%;font-size:14px;color:#959595;text-align: center;height:60px;line-height: 60px;border-bottom:1px solid #959595;}
  .extension_data .ul3 li{width:35px;height:35px;line-height:35px;text-align: center;color:#696969;background: #f5f5f5;margin-left:5px;margin-top:20px;cursor: pointer;}
  .extension_data .ul3 li:last-child{width:100px;background: #ff7b3f;color:#fff;}
  
  .extension_data .ul2 .close{margin-right: 10px}
</style>