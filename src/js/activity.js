
//二级菜单
$(function () {
    $('.t').hover(function () {
        $(this).find('div').css('display', 'block');
    }, function () {
        $(this).find('div').css('display', 'none');
    });
});

//吸顶菜单
$(function () {
    var a = $('.m-catnav'),
        b = a.offset();//返回或设置导航栏相对于文档的偏移(位置)
    //加个屏幕滚动事件，c是滚动条相当于文档最顶端的距离
    $(document).on('scroll', function () {
        var c = $(document).scrollTop();
        //*当滚动的屏幕距离大于等于导航栏本身离最顶端的距离时（判断条件）给它加样式（根据自己业务的条件加样式，一般如下）*／
        if (b.top <= c) {
            a.css({ 'position': 'fixed', 'top': '0px' })
        } else {
            a.css({ 'position': 'absolute', 'top': '250px' })
        }
    })
});










// 渲染页面

// $.ajax({
//     type: 'get',
//     url: '../style/activity.json',
//     success: function (arr) {
//         for (var i = 0; i < arr.length; i++) {
//             $(`<li class="m-goods">
//                      <a href="" target="_blank" class="imgwrap">
//                          <img class="gimg img-lazyloaded"
//                              src='${arr[i].img}'
//                              id="auto-id-1550219272712">
//                      </a>
//                      <div class="detail">
//                          <p class="tlt">
//                              <a class="gtlt" href="">
                
//                              ${arr[i].title}
                
//                              </a>
//                          </p>
//                          <p class="intro">
//                              <a class="gintro f-toe2" href="">指套牙刷 硅胶软毛</a>
//                          </p>
//                          <p class="price">
//                              <span class="u-gprice">
//                                  <em class="crtprice"><span class="symbol">¥</span>${arr[i].Price}</em>
//                                  <i class="mktprice">¥<del>${arr[i].former}</del></i>
//                              </span>
                
//                              <span class="u-gtag"><b class="num">8.3</b>折</span>
                
//                          </p>
//                          <p class="btnwrap">
//                              <a href="" class="u-gbuy">
//                              ${arr[i].timer}
//                              </a>
//                          </p>
//                      </div>
//                  </li>      
//                 `)
//                 .appendTo('.m-goodszone .goodsWrap .m-goodslst');
//             //         if(arr[i].topTip){
//             //               $(`<span class="topTip">${arr[i].topTip}</span> `)
//             //   .appendTo($('.m-goodszone .goodsWrap .m-goodslst').eq(i).find('.thb'));
//             //         }
//         }
//     },
//     error: function (msg) {
//         console.log(msg);
//     }
// });









var arr = 
[
    {
        "img":"http://pop.nosdn.127.net/1dc57956-d661-4759-87b6-583d3cb9236b?imageView&amp;thumbnail=262x0&amp;quality=85",
        "title":" Nuby 努比 婴儿牙刷0-1岁 宝宝手指套牙刷 硅胶软毛乳牙清洁不伤宝宝口腔 附收纳盒",
        "Price":"￥32",
        "former":"￥39",
        "timer":"立即抢购"
    },
    {
        "img":"https://pop.nosdn.127.net/da453a03-0f8b-4ea9-b256-f94cffa437c5.jpg?imageView&thumbnail=262x0&quality=85",
        "title":" Nuby 努比 婴儿牙刷0-1岁 宝宝手指套牙刷 硅胶软毛乳牙清洁不伤宝宝口腔 附收纳盒",
        "Price":"￥32",
        "former":"￥39",
        "timer":"立即抢购"
    },
    {
        "img":"http://pop.nosdn.127.net/1dc57956-d661-4759-87b6-583d3cb9236b?imageView&amp;thumbnail=262x0&amp;quality=85",
        "title":" Nuby 努比 婴儿牙刷0-1岁 宝宝手指套牙刷 硅胶软毛乳牙清洁不伤宝宝口腔 附收纳盒",
        "Price":"￥32",
        "former":"￥39",
        "timer":"立即抢购"
    },
    {
        "img":"http://pop.nosdn.127.net/1dc57956-d661-4759-87b6-583d3cb9236b?imageView&amp;thumbnail=262x0&amp;quality=85",
        "title":" Nuby 努比 婴儿牙刷0-1岁 宝宝手指套牙刷 硅胶软毛乳牙清洁不伤宝宝口腔 附收纳盒",
        "Price":"￥32",
        "former":"￥39",
        "timer":"立即抢购"
    },
    {
        "img":"http://pop.nosdn.127.net/1dc57956-d661-4759-87b6-583d3cb9236b?imageView&amp;thumbnail=262x0&amp;quality=85",
        "title":" Nuby 努比 婴儿牙刷0-1岁 宝宝手指套牙刷 硅胶软毛乳牙清洁不伤宝宝口腔 附收纳盒",
        "Price":"￥32",
        "former":"￥39",
        "timer":"立即抢购"
    },
    {
        "img":"http://pop.nosdn.127.net/1dc57956-d661-4759-87b6-583d3cb9236b?imageView&amp;thumbnail=262x0&amp;quality=85",
        "title":" Nuby 努比 婴儿牙刷0-1岁 宝宝手指套牙刷 硅胶软毛乳牙清洁不伤宝宝口腔 附收纳盒",
        "Price":"￥32",
        "former":"￥39",
        "timer":"立即抢购"
    }
]


var html = "";
for (var i = 0; i < arr.length; i++) {
    html += '<li class="m-goods">'+
   '<a href="" target="_blank" class="imgwrap">' +
        '<img src="'+ arr[i].image +'" alt="">'+
    '</a>'+
    '<div class="detail">'+
       '<p class="tlt">' +
            '<a class="gtlt" href="">'+${arr[i].title}+' </a>'+
       '</p>' +
        '<p class="intro">'+
            '<a class="gintro f-toe2" href="">指套牙刷 硅胶软毛</a>'+
        '</p>'+
        '<p class="price">'+
            '<span class="u-gprice">'+
                '<em class="crtprice"><span class="symbol">¥</span>'+${arr[i].Price}+'</em>'+
                '<i class="mktprice">¥<del>'+${arr[i].former}+'</del></i>'+
            '</span>'+
            '<span class="u-gtag"><b class="num">8.3</b>折</span>'+
        '</p>'+
        '<p class="btnwrap">'+
            '<a href="" class="u-gbuy">'+${arr[i].timer} +'</a>'+
        '</p>'+
    '</div>'+
'</li> '
}
m-goodslst.innerHTML = html;