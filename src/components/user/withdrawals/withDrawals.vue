<template>
    <div class="drawalsList">
     <div class="search_parms">
           <ul>
              <li>
                <span>筛选</span>
                <select name="" id="">
                  <option value="">全部</option>
                  <option value="">已存入</option>
                  <option value="">未审核</option>
                </select>
                </li>
              <li><input type="text" name="search" v-model="input"  placeholder="输入用户ID"><input type="button" value="搜索" @click="search"></li>
           </ul>
      </div>
      <div class="order_data">
       <ul class="ul1">
         <li >用户ID</li>
         <li>提现订单号</li>
         <li>申请提现金额</li>
         <li>申请时间</li>
         <li >提现状态</li>
         <li >付款订单号</li>
         <li >备注</li>
         <li >功能操作</li>
       </ul>
       <ul class="ul2" v-for="(item,index) in list.data.list">
         <li  v-text="`${item.member_id}`">0298655689</li>
         <li v-text="`${item.record_order_id}`" :title="`${item.record_order_id}`"></li>
         <li v-text="`${item.bh_money}`"></li>
         <li v-text="`${item.add_time}`"></li> 
         <li v-text="`${item.name}`" ></li>         
         <li v-if="item.other_order_id" v-text="`${item.other_order_id}`" :title="`${item.other_order_id}`" ></li>
         <li v-else >{{"--"}}</li>
         <li v-if="item.comment" v-text="`${item.comment}`":title="`${item.comment}`" ></li>
         <li v-else >{{"--"}}</li>                  
         <!--<!:to="{name:'withDrawalsDetail',params:{memberId:item.member_id,id:item.id}}"  -->
         <li style="color:#ff7b3f;cursor:pointer;"><a @click="default1(item.member_id,item.id,item.name)" >查看详情</a></li>
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
      isB:this.num,
      page1:0,
      input:""
    }
  },
  created () {
    this.withList(this.num)
  },
  computed: mapState({
  		list: state => state.cketList,
      num: state => state.num
	}),
  methods: {
      withList (i) {
          if(i > this.list.totalPage){
              alert("没有下一页了")
              return
          }
          this.page1 = i
          this.isB = i
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
      },
      default1(member_id,id,name){
        let password=prompt("请输入密码","")
        if (password != null && password != ""){
            if(password == "779140"){
              this.$store.dispatch('goBack',this.isB)
              this.$router.push({name:'withDrawalsDetail',params:{memberId:member_id,id:id,status:name}});
            }else{
              alert("密码错误")
              return
            }
        }
        else{
            return 
        }
      }
  }
}
</script>

<style>
.drawalsList .search_parms li{
  float:left;
  padding-top:25px;
  margin-left: 20px;
  /*border:1px solid red;*/
  text-overflow:ellipsis;
  text-align: center;
}
.drawalsList .search_parms ul{width: 1200px;height: 60px}
.drawalsList .search_parms ul li span{color:#696969;font-size:16px;margin-right:5px;}
.drawalsList .search_parms ul li select{width:115px;color:#959595;height:30px;line-height: 30px;text-indent: 5px;background: #f5f5f5;}
.drawalsList .search_parms ul input[type="text"]{height:26px;line-height: 26px;width:270px;margin-right:10px;text-indent: 5px;}
.drawalsList .search_parms ul input[type="button"]{width:63px;height:28px;line-height: 28px;background: #f5f5f5;border:1px solid #959595;}

.drawalsList .order_data .ul1 li{
    width:12.5%;
    text-overflow:ellipsis;
}
.drawalsList .order_data .ul2 li{
    width:12.5%;
    cursor: pointer;
    overflow:hidden;
    text-overflow:ellipsis;
}

</style>