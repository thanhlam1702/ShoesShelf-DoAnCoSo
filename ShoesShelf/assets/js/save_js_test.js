function initClient(googleUser) {
   var auth = googleUser.getBasicProfile();
   console.log('Name: ' + auth.getName());
};
var onSuccess = function() {
    window.location = "https://shoesshelf.com/shoesshelf_main.html";
 };

// Handle sign-in failures.
var onFailure = function(error) {
    console.log(error);
};
//run sign in google
initClient();




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
// //load google
// var initClient = function() {
//     gapi.load('auth2', function() {
//         //Retrieve the singleton for the GoogleAuth library and set up the
//         //client.
//         auth2 = gapi.auth2.init({
//             client_id: '276514203511-rkdmf52kmh1ljdg29sjfj30fn1phubb3.apps.googleusercontent.com',
//             cookiepolicy: 'single_host_origin',
//             // Request scopes in addition to 'profile' and 'email'
//             scope: 'profile email'
//         }).then(function() {
//             let auth3 = gapi.auth2.getAuthInstance();
//             document.getElementById('user-name').innerHTML = auth3.currentUser.ie.Pt.Ad;
//             document.getElementById('user-img').src = auth3.currentUser.ie.Pt.fL;
//         })
//     });
// };