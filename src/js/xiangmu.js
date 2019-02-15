
//   吸顶菜单
    var toggle = "normal"; // active; 
    var timerTopBar = null;
    var hasAnimate = false;

    // normal 状态不用添加 class active;
    // active 状态需要添加 class active;
    var _top = 40; // st到达这个值时需要作出改变;

    // target 是动画目标点;
    var target = 0;
    var speed = 2;
    var top_bar = document.querySelector(".f-dn2");
    // 1. 判定一个 临界值;
    window.addEventListener("scroll",isToggle);
    function isToggle(){
            var st = document.body.scrollTop || document.documentElement.scrollTop;
            if(st >= _top){
                toggle = "active";
            }else{
                toggle = "normal";
            }
            // console.log(toggle);
    }     

    // 2. DOM操作再次封装;
    window.addEventListener("scroll",setClass);
    // 根据 toggle 更改dom属性;
    function setClass(){
            var hasActive = /active/.test(top_bar.className);
            if(toggle === "normal" && hasActive){
                top_bar.className = top_bar.className.replace(/\s+active/g,"");


                hasAnimate = false;
                clearInterval(timerTopBar);
                top_bar.style.marginTop = 0;
                timerTopBar = null;
            }

            if(toggle === "active" && !hasActive){
                top_bar.className += " active";
            }
    }     

    // 3. 动画;
    window.addEventListener("scroll",animate);
    // 根据 toggle 更改dom属性;
    function animate(){
            
            if(toggle !== "active" || hasAnimate || timerTopBar !== null) return false;
            // 终点 ;   
            // 只要应该运动;
            hasAnimate = true;  
            // 找到起始点;
            top_bar.style.marginTop = "-100px";
            // 定时器运动到终止点;
            timerTopBar = setInterval(function(){
                var mt = parseInt(top_bar.style.marginTop);
                console.log(mt);

                if(Math.abs(target - mt) <= Math.abs(speed)){
                        clearInterval(timerTopBar);
                        top_bar.style.marginTop = target + "px";
                        timerTopBar = null;
                        return false;
                }
                top_bar.style.marginTop = mt + speed + "px";
            },10)       
    }  
    
//轮播图 
$(function() {
   
    $('.middle_right').hover(function() {
        $("#toright").show(),
        $("#toleft").show()       
    }, function() {
        $("#toright").hide(),
        $("#toleft").hide()
    })
    
})

var t;
var index = 0;
/////自动播放
t = setInterval(play, 3000)

function play() {
    index++;
    if (index > 7) {
        index = 0
    }
    // console.log(index)
    $("#lunbobox ul li").eq(index).css({
        "background": "red",
    }).siblings().css({
        "background": "#fff",
    })

    $(".lunbo a ").eq(index).fadeIn(1000).siblings().fadeOut(1000);
};

///点击鼠标 图片切换
$("#lunbobox ul li").click(function() {

    //添加 移除样式
    //$(this).addClass("lito").siblings().removeClass("lito"); //给当前鼠标移动到的li增加样式 且其余兄弟元素移除样式   可以在样式中 用hover 来对li 实现
    $(this).css({
        "background": "red",
        
    }).siblings().css({
        "background": "#fff"
    })
    var index = $(this).index(); //获取索引 图片索引与按钮的索引是一一对应的
    // console.log(index);

    $(".lunbo a ").eq(index).fadeIn(1000).siblings().fadeOut(1000); // siblings  找到 兄弟节点(不包括自己）
});

/////////////上一张、下一张切换
$("#toleft").click(function() {
    index--;
    if (index <= 0) //判断index<0的情况为：开始点击#toright  index=0时  再点击 #toleft 为负数了 会出错
    {
        index = 7
    }
    console.log(index);
    $("#lunbobox ul li").eq(index).css({
        "background": "red",
        
    }).siblings().css({
        "background": "#fff"
    })

    $(".lunbo a ").eq(index).fadeIn(1000).siblings().fadeOut(1000); // siblings  找到 兄弟节点(不包括自己）必须要写
}); // $("#imgbox a ")获取到的是一个数组集合 。所以可以用index来控制切换

$("#toright").click(function() {
    index++;
    if (index > 7) {
        index = 0
    }
    console.log(index);
    $(this).css({
        "opacity": "0.5"
    })
    $("#lunbobox ul li").eq(index).css({
        "background": "red",
        
    }).siblings().css({
        "background": "#fff"
    })
    $(".lunbo a ").eq(index).fadeIn(1000).siblings().fadeOut(1000); // siblings  找到 兄弟节点(不包括自己）
});
$("#toleft,#toright").hover(function() {
        $(this).css({
            "color": "black"
        })
    },
    function() {
        $(this).css({
            "opacity": "0.5",
            "color": ""
        })
    })
///

///////鼠标移进  移出
$("#lunbobox ul li,.lunbo a img,#toright,#toleft ").hover(
    ////////鼠标移进
    function() {
        $('#toright,#toleft').show()
        clearInterval(t);

    },
    ///////鼠标移开
    function() {
        //$('#toright,#toleft').hide()
        //alert('aaa')
        t = setInterval(play, 3000)

        function play() {
            index++;
            if (index > 7) {
                index = 0
            }
            $("#lunbobox ul li").eq(index).css({
                "background": "red",
            }).siblings().css({
                "background": "#fff"
            })
            $(".lunbo a ").eq(index).fadeIn(1000).siblings().fadeOut(1000);
        }
    })

    //楼梯
    class Stair{
        constructor(){

        }     

        init(){
              this.stairs = $("");
              this.btn_wrap = $(".louti");
              this.btns = $(".m-indexleft li");

              // 显示高度的临界值;
              this.showTop = 620;
              // 计算初始数据;
              this.stairsArray = [];
              for(var i = 0 ; i < this.stairs.length ; i ++){
                    var ele = this.stairs.eq(i)
                    this.stairsArray.push({
                          min : ele.offset().top,
                          max : ele.offset().top + ele.height()
                    })
              }
              // console.log(stairsArray);
              this.bindEvent();
        }

        bindEvent(){
              $(window).on("scroll",this.toggleBtn.bind(this));
              $(window).on("scroll",this.changeBtnIndex.bind(this));
              
              
              this.btns.eq(this.btns.length - 1).on("click",this.goTop.bind(this));
              this.btns.on("click",this.changeStairs.bind(this));
              
        }

        toggleBtn(){
              // console.log(1);
              let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;

              if(scrollTop > this.showTop){
                    this.btn_wrap.show();
              }else{
                    this.btn_wrap.hide();
              }
        }     

        changeBtnIndex(){

              if(this.animate){
                    return false;
              }

              // 判定值的区间;
              let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
              
              this.stairsArray.some((item,index)=>{
                    if(scrollTop >= item.min && scrollTop < item.max){

                          this.btns.removeClass("active")
                          .eq(index).addClass("active");
                          return true;
                    }
              })
        }
        changeStairs(e){
              var target = e.currentTarget;
              // console.log($(target).index());
              var index = $(target).index();

              if(index === this.stairs.length) return false;

              this.btns.removeClass("active")
                        .eq(index).addClass("active");
              $("html,body").animate({
                    "scrollTop" : this.stairsArray[index].min
              },()=>{
                    this.animate = false;
              })
              this.animate = true;
        }     
        goTop(){
              
              // $("html,body").animate({
              //       "scrollTop" : 0
              // })
              $("html,body").scrollTop(0);
        }

  }

  var stair = new Stair();
  stair.init();

//   搜索
var search = document.getElementById("topSearchInput");
var list = document.getElementById("list");
search.addEventListener("input",_throttle(handlerSearch,100));
var showNum = 4;
var timer = null;
function handlerSearch(){
        //获取百度的接口（加载数据）
        var url = `https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=${search.value}&json=1&p=3&sid=1422_21089_28131_26350_28266&req=2&csor=2`;

        //渲染页面;
        jsonp(url,"cb")
        .then(function(res){
            var html = "";
            res.s.every((item,index)=>{
                html += `<li>${item}</li>`
                return index < showNum;
            })
            list.innerHTML = html;
        })

}

//二级菜单
$(function () {
    $('.t').hover(function () {
        $(this).find('div').css('display', 'block');
    }, function () {
        $(this).find('div').css('display', 'none');
    });
});

