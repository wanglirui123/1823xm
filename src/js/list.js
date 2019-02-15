
// 楼梯
class Stair{
    constructor(){

    }     

    init(){
          this.stairs = $(".stairs");
          this.btn_wrap = $(".btns");
          this.btns = $(".btns li");

          this.showTop = 200;
          
          this.stairsArray = [];
          for(var i = 0 ; i < this.stairs.length ; i ++){
                var ele = this.stairs.eq(i)
                this.stairsArray.push({
                      min : ele.offset().top,
                      max : ele.offset().top + ele.height()
                })
          }
        ;
          this.bindEvent();
    }

    bindEvent(){
          $(window).on("scroll",this.toggleBtn.bind(this));
          $(window).on("scroll",this.changeBtnIndex.bind(this));
          
          
          this.btns.eq(this.btns.length - 1).on("click",this.goTop.bind(this));
          this.btns.on("click",this.changeStairs.bind(this));
          
    }

    toggleBtn(){
        
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

          $("html,body").scrollTop(0);
    }

}

var stair = new Stair();
stair.init();


//二级菜单
$(function () {
      $('.t').hover(function () {
          $(this).find('div').css('display', 'block');
      }, function () {
          $(this).find('div').css('display', 'none');
      });
  });
  
  