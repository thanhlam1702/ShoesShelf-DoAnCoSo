
window.fbAsyncInit = function() {
    FB.init({
        appId      : '257459131957730',
        cookie     : true,                     // Enable cookies to allow the server to access the session.
        xfbml      : true,                     // Parse social plugins on this webpage.
        version    : 'v6.0'           // Use this Graph API version for this call.
    });
    FB.getLoginStatus(function(response) {   // Called after the JS SDK has been initialized.
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

//logout facebook
function logout(){
    FB.logout(function(response){
        window.location="https://shoesshelf.com/";
    })
}

function showUser(){
    //Check user sign in, if sign in then load avatar, name of user, else comeback home pages
    FB.getLoginStatus(function(response){
        if(response.status === 'connected'){
            FB.api('/me?fields=name,picture,email', function(user_data){
                var name = user_data.name;
                var avatar = user_data.picture.data.url;
                try{
                    //infused avatar and name in user-avatar, user-name
                    document.getElementById('user-name').innerHTML = name;
                    document.getElementById('user-img').src = avatar;
                }
                catch(err){
                    console.log(err);
                }
            })
        }
        else{
            window.location = "https://shoesshelf.com/";
        }
    })
    
}


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
        if(event.target != this.displayUseMenu){
            this.displayUseMenu.style.display = 'none';
        }
        
    }
}

    
