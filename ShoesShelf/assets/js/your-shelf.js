uploadImages = () => {

    var imgUpload = document.getElementById('upload-img');
    var reviewImg = document.getElementById('review-img-upload');
    reviewImg.innerHTML = '';
    for( let i = 0; i < imgUpload.files.length; ++i){
        var reader = new FileReader();

        reader.onload = function (e) {
            var p = document.createElement('img');
            p.id = 'img-upload';
            p.src = e.target.result;
            reviewImg.appendChild(p);
        };
    
        reader.readAsDataURL(imgUpload.files[i]);
    }
    
    if( imgUpload.files.length == 0 ){
        document.getElementById('title-upload-img').style.display = 'block';
    }
    else{
        document.getElementById('title-upload-img').style.display = 'none';
    }
}