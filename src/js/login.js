var username = document.getElementById("phoneipt");
var password = document.getElementById("auto");
var username2 = document.getElementById("phoneipt2");
var submit = document.querySelectorAll(".f-cb");

username.addEventListener("blur", confirmUserName);
// 验证邮箱名的函数;
function confirmUserName() {
    var email_reg = /0?(13|14|15|18|17)[0-9]{9}/;
    var username_str = username.value;
    var tip = username.parentNode.children[2];
    if (email_reg.test(username_str)) {
        //验证成功;
        tip.className = "success";
    } else {
        tip.className = "error";
    }
}

password.addEventListener("blur", confirmPassWord);
//验证码
function confirmPassWord() {
    var pass_reg = /\d{4,6}(?!\d)/;
    var pass_str = password.value;
    var tip = password.parentNode.children[2];

    if (pass_reg.test(pass_str)) {
        tip.className = "success";
    } else {
        tip.className = "error";
    }

}
username2.addEventListener("blur", confirmUserName);
// 验证邮箱名的函数;
function confirmUserName() {
    var email_reg = /0?(13|14|15|18|17)[0-9]{9}/;
    var username_str = username.value;
    var tip = username.parentNode.children[2];
    if (email_reg.test(username_str)) {
        //验证成功;
        tip.className = "success";
    } else {
        tip.className = "error";
    }   
}

// 阻止提交;
