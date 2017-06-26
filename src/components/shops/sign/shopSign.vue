<template>
    <div class="signList">
     <div class="search_parms">
           <ul>
              <li>
                <input type="button" value="+新增商户" >
                <input type="button" style="margin-left: 10px" value="批量删除" >               
                </li>
              <li><input type="text" name="search" v-model="input"  placeholder="输入用户ID"><input type="button" value="搜索" @click="search"></li>
           </ul>
      </div>
      <div class="order_data">
       <ul class="ul1">
         <li >用户ID</li>
         <li>商家名称</li>
         <li>合同编号</li>
         <li>签约时间</li>
         <li >合同到期日</li>
         <li >返佣比例</li>
         <li >账号状态</li>
         <li >操作</li>
       </ul>
       <ul class="ul2" >
         <li>0298655689</li>
         <li >深圳康复食品有限公司</li>
         <li >34568979209</li>
         <li >2016-08-08</li> 
         <li >2017-03-09</li>         
         <li >5%</li>
         <li >已开通</li>                                                        
         <li style="color:#ff7b3f;cursor:pointer;"><span>编辑</span><span style="margin-left: 10px">删除</span></li>
       </ul>
        <ul class="ul3">
          <li v-for="n in (+list.data.totalPage)" @click="toggleN(n)" v-bind:class="{'cli':isB ==n}">{{n}}</li>
        </ul>
        <button @click="toggle">下一页</button>
    </div>

    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
 export default {
  data () {
    return {
      isA:false,
      isB:1,
      page1:0,
      input:""
    }
  },
  created () {
    console.log(123)
    this.withList(1)
  },
  computed: mapState({
  		list: state => state.cketList
	}),
  methods: {
      withList (i) {
          if(i > this.list.totalPage){
              alert("没有下一页了")
              return
          }
          this.page1 = i
          this.$store.dispatch('addDrawalList',{page:i,table:'member_tx_record',state:""})
      },
      toggle() {
          const n = this.page1 +1
          this.withList(n)
          this.isB=this.page1;
      },
      toggleN(n){
          this.withList(n)
          this.isB=n;
      },
      search(){
        this.$store.dispatch('addDrawalList',{page:1,table:'member_tx_record',state:"",member_id:this.input})
      }
  }
}
</script>

<style>
.signList .search_parms li{
  float:left;
  padding-top:25px;
  margin-left: 20px;
  /*border:1px solid red;*/
  text-overflow:ellipsis;
  text-align: center;
}
.signList .search_parms ul{width: 1200px;height: 60px}
.signList .search_parms ul li span{color:#696969;font-size:16px;margin-right:5px;}
.signList .search_parms ul li select{width:115px;color:#959595;height:30px;line-height: 30px;text-indent: 5px;background: #f5f5f5;}
.signList .search_parms ul input[type="text"]{height:26px;line-height: 26px;width:270px;margin-right:10px;text-indent: 5px;}
.signList .search_parms ul input[type="button"]{width:63px;height:28px;line-height: 28px;background: #f5f5f5;border:1px solid #959595;}

.signList .order_data .ul1 li{
    width:12.5%;
    text-overflow:ellipsis;
}
.signList .order_data .ul2 li{
    width:12.5%;
    cursor: pointer;
    overflow:hidden;
    text-overflow:ellipsis;
}
.signList .order_data{
  margin-top: 15px;
}

</style>