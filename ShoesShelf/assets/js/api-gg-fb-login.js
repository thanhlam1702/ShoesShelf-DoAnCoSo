//variable check user login facebook, google, account register, or not sign in
var statusLogin = -1;

initClient();
//scripts sign in with facebook
function statusChangeCallback(response) { // Called with the results from FB.getLoginStatus().
    if (response.status === 'connected') { // Logged into your webpage and Facebook.
        statusLogin = 1;
        SignInComplete();
    }
}

window.fbAsyncInit = function () {
    FB.init({
        appId: '257459131957730',
        cookie: true, // Enable cookies to allow the server to access the session.
        xfbml: true, // Parse social plugins on this webpage.
        version: 'v6.0' // Use this Graph API version for this call.
    });

    FB.getLoginStatus(function (response) { // Called after the JS SDK has been initialized.
        statusChangeCallback(response); // Returns the login status.
    });
};

(function (d, s, id) { // Load the SDK asynchronously
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function checkLoginState() { // Called when a person is finished with the Login Button.
    FB.getLoginStatus(function (response) { // See the onlogin handler
        statusChangeCallback(response);
    });
}

//Initializes the Sign-In client.
function initClient() {
    gapi.load('auth2', async function () {
        //Retrieve the singleton for the GoogleAuth library and set up the
        //client.
        auth2 = await gapi.auth2.init({
            client_id: '276514203511-rkdmf52kmh1ljdg29sjfj30fn1phubb3.apps.googleusercontent.com',
            cookiepolicy: 'single_host_origin',
            // Request scopes in addition to 'profile' and 'email'
            scope: 'profile email'
        });
        //wait google init load complete, after check status user login, if not login 
        //then isSingedIn return 'false', user login return true,
        //if 'true' load information  of user
        if (auth2.isSignedIn.get() === true) {
            onSuccess();
        }

        // Attach the click handler to the sign-in button
        const btnSignInGG = document.getElementsByClassName('custom-gg-sign-in');
        for (let i = 0; i < btnSignInGG.length; ++i) {
            auth2.attachClickHandler(btnSignInGG[i], {}, onSuccess, onFailure);
        }
    });
};
//login complete
function onSuccess() {
    statusLogin = 0;
    // window.location = 'http://localhost:4444/main';
    SignInComplete();
};

// Handle sign-in failures.
function onFailure() {
    console.log('error');
};

//show layout after user login complete
function SignInComplete() {
    window.location = 'http://localhost:4444';
}


