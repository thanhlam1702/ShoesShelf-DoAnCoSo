
// Get the modal
var modalSignin = document.getElementById('signin');
var modalSignup = document.getElementById('signup');
var btnSignin = document.getElementById('btnSignin');
var btnSignup = document.getElementById('btnSignup');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modalSignin || event.target == btnSignup) {
        modalSignin.style.display = "none";
    }
    else if(event.target==modalSignup || event.target == btnSignin){
        modalSignup.style.display = "none";
    }
}
//---------------------------------------------------
//script cua logo tron
function hoverImgOver(){
var imglogo=document.getElementById("imglogo");
imglogo.src="./assets/images/LogoSS-2-den.png";
}
function  hoverImgOut(){
var imglogo=document.getElementById("imglogo");
imglogo.src="./assets/images/LogoSS-2-xam.png";
}
//---------------------------------------------
$('.container-close').on('click', function () {
    $('.menu').toggleClass('expanded');
    $('.sub-menu').toggleClass('hidden');
    $('.container-close , .toggle').toggleClass('close-menu');
});
// kiem tra mat khau trung nhau
function matchpass(){  
var firstpassword=document.f1.password.value;  
var secondpassword=document.f1.password2.value;  
  
if(firstpassword==secondpassword){  
return true;  
}  
else{  
alert("mật khẩu không trùng khớp!");  
return false;  
}  
}  
// kiem tra do dai mat khau
function lengthpass(){
    var pass = document.f1.password.value;
    if (pass.length >= 6 )
    {
        return true;
    }
    else {
        alert("mật khẩu phải ít nhất 6 ký tự")
        return false;
    }
}
// thong bao trung email
function erremail(){
    alert("email đã có người sử dụng");
}
// $('#menu-bars').on('click', function(){
//   $('.right-menu').css('width','68%');
// });
// $('#toggle-close').on('click', function(){
//   $('.right-menu').css('width','12%');
// });
//--------------------------------------------
//--------------------------------------------
// $('.search').hover('class', function(){
//   var hasClass=$('.menu').hasClass('expanded');
//   if(hasClass){
//     $('.menu').toggleClass('expanded');
//     $('.sub-menu').toggleClass('hidden');
//     $('.container-close , .toggle').toggleClass('close-menu');
//   }
// });
//-----------------------------------------------
//script switch file css
//-----------------------------------------------

//-----------------------------------------------------