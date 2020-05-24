// Get the modal
var modalSignIn = document.getElementById('sign-in-modal');
var modalSignUp = document.getElementById('sign-up-modal');
var btnSignIn = document.getElementById('btn-sign-in');
var btnSignUp = document.getElementById('btn-sign-up');
var btnCloseModalSignIn = document.getElementById('btn-close-sign-in');
var btnCloseModalSignUp = document.getElementById('btn-close-sign-up');

//menu of user 
var displayUseMenu = document.getElementById('user-menu');
var userImg = document.getElementById('user-img');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modalSignIn || event.target == btnSignUp || event.target == this.btnCloseModalSignIn) {
        modalSignIn.style.display = "none";
        this.hiddenBodyScrollBar().showup();
    }
    else if (event.target == modalSignUp || event.target == btnSignIn || event.target == this.btnCloseModalSignUp) {
        modalSignUp.style.display = "none";
        this.hiddenBodyScrollBar().showup();
    }
    //hidden or show up container menu user when user sign in done
    if (event.target == this.userImg) { //if click in avatar user then show up user container
        if (this.displayUseMenu.style.display == 'none') {
            this.displayUseMenu.style.display = 'flex';
        }
        else {
            this.displayUseMenu.style.display = 'none';
        }
    } else {
        //if click out site container user then hidden container user
        if (event.target != this.displayUseMenu && event.target != document.getElementById('user-name')) {
            this.displayUseMenu.style.display = 'none';
        }
    }
}

//when click a button sign in or sign up then showup modal
function showUpSignIn() {
    hiddenBodyScrollBar().hidden();
    modalSignIn.style.display = 'block';

}

function showUpSignUp() {
    modalSignUp.style.display = 'block';
    hiddenBodyScrollBar().hidden();
}
//hidden or showup scroll bar
function hiddenBodyScrollBar() {
    return {
        hidden: () => document.body.style.overflow = 'hidden',
        showup: () => document.body.style.overflow = '',
    }
}

//use Jquery 'toggleClass to add or delete class 'expanded' and 'hidden'
//with display 'none' or 'block'
(function effectRightMenu() {
    $('.hidden-show-up-menu').on('click', function () {
        $('.menu').toggleClass('expanded');
        $('.right-sub-menu').toggleClass('hidden');
        $('.hidden-show-up-menu').toggleClass('close-menu');
    });
})();

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 5) {
            document.getElementById('navbar').style.backgroundColor = 'rgba(238, 238, 238, 0.9)';
        }
        else
            document.getElementById('navbar').style.backgroundColor = '';
    })
})
