//make "your-shelf color white"



//upload and review images 
function uploadImages() {

    const uploadImg = document.getElementById('upload-img');
    const reviewImg = document.getElementById('review-img-upload');
    // var imgUpload = document.getElementsByClassName('img-upload');
    reviewImg.innerHTML = '';

    //run "for" all element have in "uploadImg",  later create element HTML assign value for this
    for (let i = 0; i < uploadImg.files.length; ++i) {

        var reader = new FileReader();

        reader.onload = function (e) {
            //create element HTML about:
            //tag "img" have id name "img-upload"
            //"src" = present result
            //<img id="img-upload" src = e.target.result>
            let p = document.createElement('img');
            p.className = 'img-upload';
            p.src = e.target.result;
            reviewImg.appendChild(p);
        };
        //read the address of the ith element in  "uploadImg" 
        reader.readAsDataURL(uploadImg.files[i]);
    }

    setTimeout(() => {
        let p = document.createElement('label');
        p.className = 'btn-upload-img';
        p.setAttribute('for', 'upload-img');
        p.textContent = '+';
        reviewImg.appendChild(p);
    }, 500);

    if (uploadImg.files.length == 0) {
        document.getElementById('title-upload-img').style.display = 'block';
    }
    else {
        document.getElementById('title-upload-img').style.display = 'none';
    }
}
