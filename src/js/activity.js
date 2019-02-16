
//二级菜单
$(function () {
    $('.t').hover(function () {
        $(this).find('div').css('display', 'block');
    }, function () {
        $(this).find('div').css('display', 'none');
    });
});

//吸顶菜单

window.onscroll = function(){
    if(window.scrollY>=300){
        document.querySelector(".m-catnav").style.position = "fixed";
        document.querySelector(".m-catnav").style.left = "0";
        document.querySelector(".m-catnav").style.top = "0";
    }else{
        document.querySelector(".m-catnav").style.position = "static";
    }
}
function returnback(){
    var scrollTop = window.scrollY;
    var timi = setInterval(function(){
        scrollTop=scrollTop-50;
        window.scrollTo(0,scrollTop);
        if(scrollTop<=0){
            scrollTop=0;
            clearInterval(timi);
        }
    },10)
}







// 渲染页面



$.ajax({
    url:"../style/activity.json",
    type:"get",
    dataType:"json",
    success: function (res) {
        console.log(res.lis)
        var html = ""
        for(var i = 0;i <= res.lis.length; i ++){
            console.log(i)

            html = `<li class="m-goods">
             <a href="" target="_blank" class="imgwrap">
                 <img class="gimg img-lazyloaded"
                     src='${res.lis[i].img}'
                     id="auto-id-1550219272712">
             </a>
             <div class="detail">
                 <p class="tlt">
                     <a class="gtlt" href="">
                
                     ${res.lis[i].title}
                
                     </a>
                 </p>
                 <p class="intro">
                     <a class="gintro f-toe2" href="">指套牙刷 硅胶软毛</a>
                 </p>
                 <p class="price">
                     <span class="u-gprice">
                         <em class="crtprice"><span class="symbol"></span>${res.lis[i].Price}</em>
                         <i class="mktprice">¥<del>${res.lis[i].former}</del></i>
                     </span>
                
                     <span class="u-gtag"><b class="num">8.3</b>折</span>
                
                 </p>
                 <p class="btnwrap">
                     <a href="" class="u-gbuy">
                     ${res.lis[i].timer}
                     </a>
                 </p>
             </div>
         </li>`
        }
        $(".m-goodslst")[0].innerHTML = html;
    }
    
})



// var arr = 
// [
//     {
//         "img":"http://pop.nosdn.127.net/1dc57956-d661-4759-87b6-583d3cb9236b?imageView&amp;thumbnail=262x0&amp;quality=85",
//         "title":" Nuby 努比 婴儿牙刷0-1岁 宝宝手指套牙刷 硅胶软毛乳牙清洁不伤宝宝口腔 附收纳盒",
//         "Price":"￥32",
//         "former":"￥39",
//         "timer":"立即抢购"
//     },
//     {
//         "img":"https://pop.nosdn.127.net/da453a03-0f8b-4ea9-b256-f94cffa437c5.jpg?imageView&thumbnail=262x0&quality=85",
//         "title":" Nuby 努比 婴儿牙刷0-1岁 宝宝手指套牙刷 硅胶软毛乳牙清洁不伤宝宝口腔 附收纳盒",
//         "Price":"￥32",
//         "former":"￥39",
//         "timer":"立即抢购"
//     },
//     {
//         "img":"http://pop.nosdn.127.net/1dc57956-d661-4759-87b6-583d3cb9236b?imageView&amp;thumbnail=262x0&amp;quality=85",
//         "title":" Nuby 努比 婴儿牙刷0-1岁 宝宝手指套牙刷 硅胶软毛乳牙清洁不伤宝宝口腔 附收纳盒",
//         "Price":"￥32",
//         "former":"￥39",
//         "timer":"立即抢购"
//     },
//     {
//         "img":"http://pop.nosdn.127.net/1dc57956-d661-4759-87b6-583d3cb9236b?imageView&amp;thumbnail=262x0&amp;quality=85",
//         "title":" Nuby 努比 婴儿牙刷0-1岁 宝宝手指套牙刷 硅胶软毛乳牙清洁不伤宝宝口腔 附收纳盒",
//         "Price":"￥32",
//         "former":"￥39",
//         "timer":"立即抢购"
//     },
//     {
//         "img":"http://pop.nosdn.127.net/1dc57956-d661-4759-87b6-583d3cb9236b?imageView&amp;thumbnail=262x0&amp;quality=85",
//         "title":" Nuby 努比 婴儿牙刷0-1岁 宝宝手指套牙刷 硅胶软毛乳牙清洁不伤宝宝口腔 附收纳盒",
//         "Price":"￥32",
//         "former":"￥39",
//         "timer":"立即抢购"
//     },
//     {
//         "img":"http://pop.nosdn.127.net/1dc57956-d661-4759-87b6-583d3cb9236b?imageView&amp;thumbnail=262x0&amp;quality=85",
//         "title":" Nuby 努比 婴儿牙刷0-1岁 宝宝手指套牙刷 硅胶软毛乳牙清洁不伤宝宝口腔 附收纳盒",
//         "Price":"￥32",
//         "former":"￥39",
//         "timer":"立即抢购"
//     }
// ]


// var html = "";
// for (var i = 0; i < arr.length; i++) {
//     html += '<li class="m-goods">'+
//    '<a href="" target="_blank" class="imgwrap">' +
//         '<img src="'+ arr[i].image +'" alt="">'+
//     '</a>'+
//     '<div class="detail">'+
//        '<p class="tlt">' +
//             '<a class="gtlt" href="">'+${arr[i].title}+' </a>'+
//        '</p>' +
//         '<p class="intro">'+
//             '<a class="gintro f-toe2" href="">指套牙刷 硅胶软毛</a>'+
//         '</p>'+
//         '<p class="price">'+
//             '<span class="u-gprice">'+
//                 '<em class="crtprice"><span class="symbol">¥</span>'+${arr[i].Price}+'</em>'+
//                 '<i class="mktprice">¥<del>'+${arr[i].former}+'</del></i>'+
//             '</span>'+
//             '<span class="u-gtag"><b class="num">8.3</b>折</span>'+
//         '</p>'+
//         '<p class="btnwrap">'+
//             '<a href="" class="u-gbuy">'+${arr[i].timer} +'</a>'+
//         '</p>'+
//     '</div>'+
// '</li> '
// }
// m-goodslst.innerHTML = html;