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