
const gulp = require("gulp");

//1. 让 gulp 向我们问好; 添加一个gulp的指令;

// gulp.task("sayHello",()=>{
//       console.log("hello world");
// })

// 2. 转存文件 src/html/index.html 转存至 dist/

// gulp.src => 找到源数据;
gulp.task("html",()=>{
      // 把这个src方法得到的结果是一个对象;(流)
      return gulp.src("./src/html/index.html")
      // pipe => 用于gulp.src的返回值 ,进行二次处理;
      // gulp.dest("")转存; 没有文件夹就创建，有就在内部保存;
            .pipe(gulp.dest("./dist/"));
})

// 转存文件 src/scripts/index1.js和index2.js 转存至 dist/(两个文件)
gulp.task("js",()=>{
      // return gulp.src(["./src/scripts/index1.js","./src/scripts/index2.js"])
      //*.js表示是以js为后缀的就行，！可以排除mouge某个
      return gulp.src(["./src/scripts/*.js","!./src/scripts/index6.js"])
            .pipe(gulp.dest("./dist/scripts/"))

})

// gulp.task("build",["html","js"]);

// // gulp.watch => 监听;

// gulp.task("watch",()=>{
//       gulp.watch("./src/html/*.html",["html"]);
//       gulp.watch("./src/scripts/*.js",["js"]);
// })    