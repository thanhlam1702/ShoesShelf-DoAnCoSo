// Get the modal
var modalSignin = document.getElementById('signin');
var modalSignup = document.getElementById('signup');
var btnSignin = document.getElementById('btnSignin');
var btnSignup = document.getElementById('btnSignup');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modalSignin || event.target == btnSignup) {
        modalSignin.style.display = "none";
    } else if (event.target == modalSignup || event.target == btnSignin) {
        modalSignup.style.display = "none";
    }
}


//when click a button sign in or sign up then showup modal
function showUpSignin() {
    modalSignin.style.display = 'block';
}

function showUpSignup() {
    modalSignup.style.display = 'block';
}


//function close of modal content, change value display 'none' or ' block'
function closeModelContent() {
    document.getElementById('signup').style.display = 'none'
    document.getElementById('signin').style.display = 'none';
}
//---------------------------------------------------
//chage img logo when hover, change address of class imglogo
function hoverImgOver() {
    var imglogo = document.getElementById("imglogo");
    imglogo.src = "./assets/images/logo-ss-white.png";
}

function hoverImgOut() {
    var imglogo = document.getElementById("imglogo");
    imglogo.src = "./assets/images/logo-ss-black.png";
}
//---------------------------------------------
//use Jquery 'toggleClass to add or delete class 'expanded' and 'hidden'
//with display 'none' or 'block'
$('.container-close').on('click', function() {
    $('.menu').toggleClass('expanded');
    $('.sub-menu').toggleClass('hidden');
    $('.container-close , .toggle').toggleClass('close-menu');
});
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