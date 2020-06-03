

//menu of user 
var displayUseMenu = document.getElementById('user-menu');
var userImg = document.getElementById('user-img');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
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

//use Jquery 'toggleClass to add or delete class 'expanded' and 'hidden'
//with display 'none' or 'block'
$('.hidden-show-up-menu').on('click', function () {
    $('.menu').toggleClass('expanded');
    $('.right-sub-menu').toggleClass('hidden');
    $('.hidden-show-up-menu').toggleClass('close-menu');
});

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 5) {
            document.getElementById('navbar').style.backgroundColor = 'rgba(238, 238, 238, 0.9)';
        }
        else
            document.getElementById('navbar').style.backgroundColor = '';
    })
})

$('#dismiss, #btn-menu').on('click', function(){
    $('#overlay').toggleClass('active');
    $('#sidebar').toggleClass('active');
    $('#sidebar-index').toggleClass('active');
})


