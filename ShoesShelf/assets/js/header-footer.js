// Get the modal
var modalSignIn = document.getElementById('sign-in-modal');
var modalSignUp = document.getElementById('sign-up-modal');
var btnSignIn = document.getElementById('btn-sign-in');
var btnSignUp = document.getElementById('btn-sign-up');
//menu of user 
var displayUseMenu = document.getElementById('user-menu');
var userImg = document.getElementById('user-img');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modalSignIn || event.target == btnSignUp) {
        modalSignIn.style.display = "none";
    } else if (event.target == modalSignUp || event.target == btnSignIn) {
        modalSignUp.style.display = "none";
    }
    //hidden or show up container menu user when user sign in done
    if (event.target == this.userImg) { //if click in avatar user then show up user container
        if (this.displayUseMenu.style.display == 'none') {
            this.displayUseMenu.style.display = 'flex';
        } else {
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
    modalSignIn.style.display = 'block';
}

function showUpSignUp() {
    modalSignUp.style.display = 'block';
}


//function close of modal content, change value display 'none' or ' block'
function closeModelContent() {
    document.getElementById('sign-up-modal').style.display = 'none'
    document.getElementById('sign-in-modal').style.display = 'none';
}
//---------------------------------------------------

//---------------------------------------------
//use Jquery 'toggleClass to add or delete class 'expanded' and 'hidden'
//with display 'none' or 'block'
$('.hidden-show-up-menu').on('click', function() {
    $('.menu').toggleClass('expanded');
    $('.right-sub-menu').toggleClass('hidden');
    $('.hidden-show-up-menu').toggleClass('close-menu');
});
