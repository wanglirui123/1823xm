/** 
 * 倒计时
 *  countDown  返回的是当前时间和目标时间的距离 用时分秒表示 
 * 
 *  参数 : 时间字符串 "yyyy/mm/dd[ hh:mm:ss]"
 * 
 *  返回值 : 
 *  {
 *    hour : string,
 *    minute : string,
 *    second : string
 *  }
 * */ 

function countDown(dateString){
      var target = new Date(dateString);
      var now = Date.now();
      //差值时间(单位为ms);
      var Dtime = target.getTime() - now;

      var hour = parseInt(Dtime / 1000 / 3600) ;
      var minute = parseInt((Dtime - hour * 1000 * 3600) / 1000 / 60);
      var second = parseInt((Dtime - hour * 1000 * 3600 - minute * 1000 * 60) / 1000);
      var ms = Dtime % 1000;
      return {
            hour : buling(hour),
            minute : minute,
            second : second,
            ms : ms
      }
}
function buling(num){
      return num < 10 ? "0" + num : num;
}

function _(select){
      // 如果选择的数组只有一项,直接返回这个项而不是数组;
      var doms = document.querySelectorAll(select);
      if(doms.length === 0){
            return null;
      }
      return doms.length === 1 ? doms[0] : doms;
}

// 伪数组转换成真数组的方法;
function _toArray(list){
      return Array.prototype.slice.call(list);
}


//运动框架
function animate(dom,attr,target){
      // if(timer !== null) return false;
      clearInterval(dom.timer);
      dom.timer = setInterval(()=>{
            let distance = target -  getStyle(dom,attr,"number");
            let speed = distance > 0 ?  Math.ceil(distance/10) : Math.floor(distance  / 10);
            dom.style[attr] =  getStyle(dom,attr,"number") + speed + "px";
            if(distance === 0){
                  clearInterval(dom.timer);
                  timer = null;
            }
      },50)
}
function getStyle(dom,attr,type){
      // 用 新方法取值;
      var res_attr =  getComputedStyle(dom)[attr];
      // 如果要求转换成数字,那么就转换;
      if(type === "number"){
            return parseInt(res_attr);
      }
      // 如果不要求就原样返回;
      return res_attr;
}

//封装jsonp跨域与后端交换的框架
// jsonp_key => 前端发给后端函数名时使用的字段名;
function jsonp(url,jsonp_key){
      return new Promise(function(resolve,reject){

            // 函数名随机处理避免占用命名空间，避免冲突;

            var randomName = "_" + Date.now()
            // console.log(randomName);

            window[randomName] = function(res){
                  // console.log(res);
                  //如果传送成功就执行res
                  resolve(res);
            }
            // 2. 创建并插入script标签;
            var script = document.createElement("script");

            // 判定当前路径url之中是否存在 ? （存在问好表示已经有数据了），我应该用& 去拼接数据，反之则用 ?;
            url = url + (/\?/.test(url) ? "&" : "?") + jsonp_key + "=" + randomName;

            script.src = url;
            // 3. 标签放入页面之中;
            document.body.appendChild(script);
            // 4. 清理垃圾;
            script.onload = function(){
                  this.remove();
                  //清除已经使用完的内置函数名（直接清空）
                  window[randomName] = null;
                  //清除当前的命名空间
                  delete window[randomName];
            }
      })
}


//ajaxGet登录注册的方法
function ajaxGet(url){
// 使用promise =>  就没有回调函数;
      return new  Promise(function(resolve,reject){
            var xhr = new XMLHttpRequest();
            xhr.open("GET",url);
            xhr.send(null);
            xhr.onreadystatechange =  function(){
                  //判断是否发送成功
                  if(xhr.readyState === 4 &&  xhr.status === 200){
                        resolve(xhr.response);
                  }
            }
      })
}

//ajaxPost登录注册的方法
function ajaxPost(url,data){
      return new  Promise(function(resolve,reject){
            var xhr = new XMLHttpRequest();
            xhr.open("POST",url);
            // 让http协议识别当前我的发送规则;
            // 设置http协议发送数据的规则;
             xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
            // 对对象进行二次处理;
            // 只要不是我们想要的结果（原因），那么我们就做某些事情;
            var data_str = "?";
            for(var attr in data){
                  if(data_str.length !== 1){
                        data_str += "&";
                  }
                  data_str += attr+"="+data[attr]
            }
            // console.log(data_str);
            xhr.send(data);
            xhr.onreadystatechange = function(){
                  if(xhr.readyState === 4 &&  xhr.status === 200){
                        resolve(xhr.response);
                  }
            }
      })
}


//函数节流封装
function _throttle(callback,dealy){
      // 利用闭包，让 timer 私有化;
      var timer = null;
      return function(){
            // 节流函数; 确保,callback在正确的时机被调用?
            // 事件执行的时候，真正会执行的函数是这个;
            if(timer !== null) return false;
            // 如果已经过了规定的时间可以再次执行代码了;
            timer = setTimeout(function(){
                 callback();
                 timer = null;
            },dealy)
      }
}

//函数去抖封装
function _debounce(callback,dealy){
      // 利用闭包，让 timer 私有化;
      var timer = null;
      return function(){
            clearTimeout(timer);
            // 如果已经过了规定的时间可以再次执行代码了;
            timer = setTimeout(function(){
                 callback();
            },dealy)
      }
}


//二级菜单
$(document).ready(function(){
      $(".t").hover(function(){
            $(this).next().slideToggle();
            $(this).parent().siblings().children("div").slideUp();
      });
  });
