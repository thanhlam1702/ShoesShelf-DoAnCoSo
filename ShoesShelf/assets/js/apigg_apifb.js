//scripts signin with facebook
function statusChangeCallback(response) {  // Called with the results from FB.getLoginStatus().
    if (response.status === 'connected') {   // Logged into your webpage and Facebook.
        //console.log('Sign in Complete!!');
        //window.location="https://shoesshelf.com/shoesshelf_main.html";
        setElement(true);
        
    }
    else {                                 // Not logged into your webpage or we are unable to tell.
        console.log('Not sign in');
        setElement(false);
    }
}

window.fbAsyncInit = function() {
    FB.init({
        appId      : '257459131957730',
        cookie     : true,                     // Enable cookies to allow the server to access the session.
        xfbml      : true,                     // Parse social plugins on this webpage.
        version    : 'v6.0'           // Use this Graph API version for this call.
    });

    FB.getLoginStatus(function(response) {   // Called after the JS SDK has been initialized.
        statusChangeCallback(response);        // Returns the login status.
    });
};

(function(d, s, id) {                      // Load the SDK asynchronously
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function checkLoginState(){                   // Called when a person is finished with the Login Button.
    FB.getLoginStatus(function(response) {   // See the onlogin handler
    statusChangeCallback(response);
    });
}


//if sign in success then button sign in and sign up be hidden
//else show up button for user sign in
function setElement(isSignin){
    if(isSignin){
        document.getElementById('user').style.display = 'flex';
        document.getElementById('right-menu').style.display = 'none';
        document.getElementById('signin').style.display = 'none';
        document.getElementById('signup').style.display = 'none';
    }
    else{
        document.getElementById('user').style.display = 'none';
        document.getElementById('right-menu').style.display = 'flex';
    }
}

//logout facebook
function logout(){
    FB.logout(function(response){
        setElement(false);
    })
}
