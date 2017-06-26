<template>
    <div class="memberType">
        <div class="memberType-main">
            <div class="memberType-content">
                <div class="memberType-content-title readonly" id="dvInput">
                    <div class="memberType-content-title-left"><input readonly value="普通会员"></div>
                    <div class="memberType-content-title-right">设置</div>
                    <div class="memberType-content-title-right-b">
                        <span>取消</span>
                        <span>删除</span>
                        <span>保存</span>
                    </div>
                </div>
                <div class="memberType-care-left">
                    <div class="memberType-care-title">升级条件</div>
                    <div class="memberType-care-content">
                        <span>缴费：</span>
                        <span>2222</span>
                        <span>元/年</span>
                    </div>
                    <div class="memberType-care-content">
                        <span>期限：</span>
                        <span>2222</span>
                        <span>天</span>
                    </div>
                </div>
                <div class="memberType-care-right">
                    <div class="memberType-care-title">会员权益</div>
                    <div class="memberType-care-content">
                        <span>小票上传数：</span>
                        <span>非联盟客户2222</span>
                        <span>张</span>
                    </div>
                    <div class="memberType-care-content">
                        <span>单张小票存入限额：</span>
                        <span>2222</span>
                        <span>元</span>
                    </div>
                    <div class="memberType-care-content">
                        <span>单张体现金额基准：</span>
                        <span>2222</span>
                        <span>元</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="memberType-main">
            <div class="memberType-content">
                <div class="memberType-content-title">
                    <div class="memberType-content-title-left">普通会员</div>
                    <div class="memberType-content-title-right">设置</div>
                    <div class="memberType-content-title-right-b">
                        <span>取消</span>
                        <span>删除</span>
                        <span>保存</span>
                    </div>
                </div>
                <div class="memberType-care-left">
                    <div class="memberType-care-title">升级条件</div>
                    <div class="memberType-care-content">
                        <span>缴费：</span>
                        <span>2222</span>
                        <span>元/年</span>
                    </div>
                    <div class="memberType-care-content">
                        <span>期限：</span>
                        <span>2222</span>
                        <span>天</span>
                    </div>
                </div>
                <div class="memberType-care-right">
                    <div class="memberType-care-title">会员权益</div>
                    <div class="memberType-care-content">
                        <span>小票上传数：</span>
                        <span>非联盟客户2222</span>
                        <span>张</span>
                    </div>
                    <div class="memberType-care-content">
                        <span>单张小票存入限额：</span>
                        <span>2222</span>
                        <span>元</span>
                    </div>
                    <div class="memberType-care-content">
                        <span>单张体现金额基准：</span>
                        <span>2222</span>
                        <span>元</span>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    // export default {
    //      data: function(){
    //         return {
    //             isA: false
    //         };
    //     },
        
    //     methods: {
    //         toggle: function(){
    //             this.isA = !this.isA;
    //         }
    //     }
    // }

    
$(document).ready(function(){
  $(".memberType-content-title-right").click(function(){
  $(".memberType-content-title-right").toggle();
$(".memberType-content-title-right-b").toggle();
  });

 $(".memberType-content-title-right-b").click(function(){
  $(".memberType-content-title-right").toggle();
$(".memberType-content-title-right-b").toggle();
  });
});

function btnClick(btn) {
    var toEdit = btn.value == '编辑';
    $('#dvInput')[toEdit ? 'removeClass' : 'addClass']('readonly').find(':input').attr('readonly', toEdit ? false : true);
    btn.value = toEdit ? '保存' : '编辑';
    if (!toEdit) {//保存的ajax代码
        //..
    }
}

</script>

<style>
    .memberType {
        width: 100%;
        margin-top: 40px;
    }
    .memberType-main {
        width: 410px;
        height: 225px;
        float: left;
        margin-right: 24px;
        background-color: #f4f4f4;
        border:1px solid #ccc;
    }
    .memberType-content {
        padding: 10px;
    }
    .memberType-content-title {
        width: 100%;
        padding-bottom: 10px;
        border-bottom:1px solid #ccc;
        float: left;
    }
    .memberType-content-title-left {
        width: 55%;
        text-align: right;
        float: left;
    }
    .memberType-content-title-left input {
        text-align: right;
    }
    .memberType-content-title-right {
        width: 45%;
        text-align: right;
        float: left;
        color: #ff7b3f;
    }
    .memberType-content-title-right-b {
        width: 45%;
        text-align: right;
        float: left;
        display: none;
        color: #ff7b3f;
    }
    .memberType-content-title-right-b span {
        margin-right: 5px;
    }
    .memberType-care-left {
        width: 40%;
        float: left;
        margin-top: 20px;
    }
    .memberType-care-right {
        width: 55%;
        float: left;
        margin-top: 20px;
        margin-left: 5%;
    }
    .memberType-care-title {
        width: 100%;
    }
    .memberType-care-content {
        margin-top: 10px;
        color: #666;
        font-size: 14px;
    }
    .readonly input {
        border: none;
        background-color: #f4f4f4;
    }
</style>