//upload and review images 
uploadImages = () => {

    var imgUpload = document.getElementById('upload-img');
    var reviewImg = document.getElementById('review-img-upload');
    reviewImg.innerHTML = '';
    //run "for" all element have in "imgUpload",  later create element HTML assign value for this
    for( let i = 0; i < imgUpload.files.length; ++i){

        var reader = new FileReader();

        reader.onload = function (e) {
            //create element HTML about:
            //tag "img" have id name "img-upload"
            //"src" = present result
            //<img id="img-upload" src = e.target.result>
            var p = document.createElement('img');
            p.id = 'img-upload';
            p.src = e.target.result;
            reviewImg.appendChild(p);
        };
        //read the address of the ith element in  "imgUpload" 
        reader.readAsDataURL(imgUpload.files[i]);
    }
    
    if( imgUpload.files.length == 0 ){
        document.getElementById('title-upload-img').style.display = 'block';
    }
    else{
        document.getElementById('title-upload-img').style.display = 'none';
    }
}
//showup hidden content
var chooseContentShoes = () => {
    const newShoes = document.getElementById('user-new-shoes');
    const wannaRock = document.getElementById('user-wanner-rock');
    
    return {
        //showup new shoes
        contentNewShoes: () => {
            newShoes.style.display = 'block';
            wannaRock.style.display = 'none'
        },
        //showup wanna rock
        contentWannaRock: () => {
            newShoes.style.display = 'none';
            wannaRock.style.display = 'flex';
        }
    };
}