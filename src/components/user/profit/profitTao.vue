<template>
    <div class="order_data">
       <ul class="ul1">
         <li style="width:20%;">用户ID</li>
         <li>用户昵称</li>
         <li>今日收益</li>
         <li>累计收益</li>
         <li style="width:20%;">订单操作</li>
       </ul>
       <ul class="ul2" v-for="(item,index) in list.data">
            <li style="width:20%;" v-text="`${item.earnings_id}`">0298655689</li>
            <li v-text="`${item.member_name}`">31704719831660986</li>    
            <li v-text="`${item.total_earnings}`">2017-03-26 14:45:46</li>
            <li v-text="`${item.member_id}`">2017-03-26 14:45:46</li>
            <li style="width:20%;color:#ff7b3f;cursor:pointer;"><router-link :to="{name:'profitDetails'}" v-if="item.ranking == 10">查看订单</router-link></li>
       </ul>
       <button @click="toggle">下一页</button>
    </div>
</template>

<script>
 export default {
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
  methods: {
      getList (i) {
          if(i > this.list.totalPage){
              alert("没有下一页了")
              return
          }
          this.page1 = i
          this.$ajax({
          method: 'get',
          url: 'static/json/earnings.json',
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


.dis{display: none;}
.order_data{
  width:100%;
  height:200px;
  /*border:1px solid #ccc;*/
  /*padding:0 2%;*/
  margin-top:15px;
  }
  /*.order_data ul{height: 50px;display: block}*/
  .order_data .ul1 li{width:20%;background:#f5f5f5;height: 50px;line-height: 50px;text-align: center;color:#696969;}
  .ul2 li{width:20%;font-size:14px;color:#959595;text-align: center;height:60px;line-height: 60px;border-bottom:1px solid #959595;}
  .ul3 li{width:35px;height:35px;line-height:35px;text-align: center;color:#696969;background: #f5f5f5;margin-left:5px;margin-top:20px;cursor: pointer;}
  .order_data button{width:60px;height: 35px;float: left;background: #ff7b3f;color:#fff;margin-left:5px;margin-top:20px;line-height:35px;text-align:center;border: 0px;}
</style>