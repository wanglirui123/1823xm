
$("#phoneipt").blur(function(obj){
    reg = /0?(13|14|15|18|17)[0-9]{9}/;
    if (!reg.test(obj)) {
        $(".box").html("<i>手机号码格式错误</i>");
    } else {
        $(".box").html("");
    }

})
$("#auto-id").blur(function(res){
    reg = /^\d{4,6}$/;
    if (reg.test(res)) {
        $(".box1").html("<i>验证码格式错误</i>");
    } else {
        $(".box1").html("");
    }
   
})
$("#submitBtn").click(function(){
    if ($("#phoneipt").val() == "") {
        $(".box2").html("<i>请输入手机号</i>");
        return false;
    }
    if ($("#auto-id").val() == "") {
        $(".box2").html("<i>请输入手机号</i>");
        return false;
    }
})
//选项卡
$().ready(function(){
    $(".tab-menu li").click(function(){
    //通过 .index()方法获取元素下标，从0开始，赋值给某个变量
        var _index = $(this).index();
    //让内容框的第 _index 个显示出来，其他的被隐藏
        $(".tab-box>div").eq(_index).show().siblings().hide();
    //改变选中时候的选项框的样式，移除其他几个选项的样式
    $(this).addClass("change").siblings().removeClass("change");
    });
});
