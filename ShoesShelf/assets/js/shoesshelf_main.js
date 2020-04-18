
window.fbAsyncInit = function() {
    FB.init({
        appId      : '257459131957730',
        cookie     : true,                     // Enable cookies to allow the server to access the session.
        xfbml      : true,                     // Parse social plugins on this webpage.
        version    : 'v6.0'           // Use this Graph API version for this call.
    });
    FB.getLoginStatus(function(response) {   // Called after the JS SDK has been initialized.
        statusChangeCallback(response);
        showUser();
    });
};

(function(d, s, id) {                      // Load the SDK asynchronously
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


var statusLogin = -1;
function statusChangeCallback(response){
    if (response.status === 'connected'){
        statusLogin = 1;
    }
    else{
        statusLogin = 0;
    }
}
  

//load google
var initClient = function() {
    gapi.load('auth2', function(){
        //Retrieve the singleton for the GoogleAuth library and set up the
        //client.
        auth2 = gapi.auth2.init({
            client_id: '276514203511-rkdmf52kmh1ljdg29sjfj30fn1phubb3.apps.googleusercontent.com',
            cookiepolicy: 'single_host_origin',
            // Request scopes in addition to 'profile' and 'email'
            scope: 'profile email'
        }).then(function(){
            let auth3 = gapi.auth2.getAuthInstance();
            document.getElementById('user-name').innerHTML = auth3.currentUser.ie.Pt.Ad;
            document.getElementById('user-img').src = auth3.currentUser.ie.Pt.fL;
        })
    });
};

var showUser = function(){
    if(statusLogin === 1){
        FB.api('/me?fields=name,picture.type(large),email', function(user_data){
            document.getElementById('user-name').innerHTML = user_data.name;
            document.getElementById('user-img').src = user_data.picture.data.url;
        })
        console.log('login fb');
    }
    else if(statusLogin === 0){
        initClient();
        console.log('login gg');
    }
    else{
        //window.location="https://shoesshelf.com/";
        console.log('no login');
    }
};


//showup or hidden user menu profile 
var displayUseMenu = document.getElementById('user-menu');
var userimg = document.getElementById('user-img');
window.onclick = function(event){
    if(event.target == this.userimg){
        if(this.displayUseMenu.style.display == 'none'){
            this.displayUseMenu.style.display = 'flex';
        }
        else{
            this.displayUseMenu.style.display = 'none';
        }
    }
    else{
        if(event.target != this.displayUseMenu && event.target != document.getElementById('user-name')){
            this.displayUseMenu.style.display = 'none';
        }
        
    }
}

//logout facebook and google
function logout(){
    if(statusLogin === 1){
        FB.logout(function(response){
            window.location="https://shoesshelf.com/";
        })
    }
    else if(statusLogin === 0){
        var auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(function () {
            window.location="https://shoesshelf.com/";
        });
    }
}