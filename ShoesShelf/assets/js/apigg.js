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
            var auth3 = gapi.auth2.getAuthInstance();
            console.log(auth3.currentUser.ie.Pt.Ad.toString());
        })
        
    });
};
initClient();
var statusLogin;