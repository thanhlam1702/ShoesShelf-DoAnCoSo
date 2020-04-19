//scripts signin with facebook
function statusChangeCallback(response) {  // Called with the results from FB.getLoginStatus().
    if (response.status === 'connected') {   // Logged into your webpage and Facebook.
        window.location="/shoesshelf_main.html";

    } else {
        console.log("not sign in"); // Not logged into your webpage or we are unable to tell.
    }
}

window.fbAsyncInit = function() {
    FB.init({
        appId: '257459131957730',
        cookie: true, // Enable cookies to allow the server to access the session.
        xfbml: true, // Parse social plugins on this webpage.
        version: 'v6.0' // Use this Graph API version for this call.
    });

    FB.getLoginStatus(function(response) { // Called after the JS SDK has been initialized.
        statusChangeCallback(response); // Returns the login status.
    });
};

(function(d, s, id) { // Load the SDK asynchronously
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function checkLoginState() { // Called when a person is finished with the Login Button.
    FB.getLoginStatus(function(response) { // See the onlogin handler
        statusChangeCallback(response);
    });
}


//Initializes the Sign-In client.
var initClient = function() {
    gapi.load('auth2', function() {
        //Retrieve the singleton for the GoogleAuth library and set up the
        //client.
        auth2 = gapi.auth2.init({
            client_id: '276514203511-rkdmf52kmh1ljdg29sjfj30fn1phubb3.apps.googleusercontent.com',
            cookiepolicy: 'single_host_origin',
            // Request scopes in addition to 'profile' and 'email'
            scope: 'profile email'
        });

        // Attach the click handler to the sign-in button
        auth2.attachClickHandler('gg-login-button', {}, onSuccess, onFailure);
    });
};
var onSuccess = function() {
    window.location = "/shoesshelf_main.html";
 };

// Handle sign-in failures.
var onFailure = function(error) {
    console.log(error);
};
//run sign in google
initClient();