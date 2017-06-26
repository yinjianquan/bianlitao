<template>
    <div class="order_data">
       <ul class="ul1">
         <li style="width:20%;">用户ID</li>
         <li>订单编号</li>
         <li>上传时间</li>
         <li>订单状态</li>
         <li style="width:20%;">订单操作</li>
       </ul>
       <ul class="ul2" v-for="(item,index) in list.data">
         <li style="width:20%;" v-text="`${item.member_id}`">0298655689</li>
         <li v-text="`${item.order_number}`">31704719831660986</li>
         <li v-text="`${item.create_time}`">2017-03-26 14:45:46</li>
         <li v-if="item.order_status == 20">待审核</li>
         <li v-else-if="item.order_status == 30">已存入</li>
         <li v-else>无效</li>
         <li style="width:20%;color:#ff7b3f;cursor:pointer;"><router-link :to="{name:'details',params: {id:item.member_id,order_number:item.order_number}}" v-if="item.order_status == 20" >审核小票</router-link>
         <router-link @click.native="back()" :to="{name:'details',params:{id:item.member_id,order_number:item.order_number}}" v-else>查看订单</router-link></li>
       </ul>
        <ul class="ul3">
          <li v-for="n in (+list.totalPage)" @click="toggleN(n)"  v-bind:class="{'cli':isB ==n}">{{n}}</li>
        </ul>
        <button @click="toggle">下一页</button>
    </div>
</template> 

<script>
import { mapState, mapActions } from 'vuex'
 export default {
  data () {
    return {
      isA:false,
      isB:this.num,
      page1:0,
    }
  },
  created () {
    this.getList(this.num)
   
  },
  computed: mapState({
  		level: state => state.level,
  		list: state => state.cketList,
      num: state => state.num
      		
      		
	}),
  methods: {
      getList (i) {
          if(i > this.list.totalPage){
              alert("没有下一页了")
              return
          }
          this.isB = i
          this.page1 = i
          this.$store.dispatch('addCketList',{page:i})
      },
      toggle(event) {
          const n = this.page1 +1
          this.getList(n);
          this.isB=this.page1;
      },
      toggleN(n){
          this.getList(n);  
          this.isB=n;
          },
      back(){
       this.$store.dispatch('goBack',this.isB)
      }
          
  }
}
</script>

<style>

.order_data li{
    float: left;
    /*border:1px solid red;*/
}
  .order_data{
  width:100%;
  height:200px;
  /*border:1px solid #ccc;*/
  /*padding:0 2%;*/
  margin-top:15px;
  }
  .ul3 li.cli{color:#fff;background: #ff7b3f}
  /*.order_data ul{height: 50px;display: block}*/
  .order_data .ul1 li{width:20%;background:#f5f5f5;height: 50px;line-height: 50px;text-align: center;color:#696969;}
  .ul2 li{width:20%;font-size:14px;color:#959595;text-align: center;height:60px;line-height: 60px;border-bottom:1px solid #959595;}
  .ul3 li{width:35px;height:35px;line-height:35px;text-align: center;color:#696969;background: #f5f5f5;margin-left:5px;margin-top:20px;cursor: pointer;}
  .order_data button{width:60px;height: 35px;float: left;background: #ff7b3f;color:#fff;margin-left:5px;margin-top:20px;line-height:35px;text-align:center;border: 0px;outline: none;cursor: pointer}
</style>