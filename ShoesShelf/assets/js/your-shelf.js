//make "your-shelf color white"



// //upload and review images 
function uploadImages() {

    const uploadImg = document.getElementById('upload-img');
    const reviewImg = document.getElementById('review-img-upload');
    const formNewShoes = document.getElementById('form-new-shoes');
    // var imgUpload = document.getElementsByClassName('img-upload');
    reviewImg.innerHTML = '';
    uploadImg.files.length = 0;
    if(document.getElementById('btn-post') != null){
        formNewShoes.removeChild(document.getElementById('btn-post'));
    }

    //run "for" all element have in "uploadImg",  later create element HTML assign value for this
    for (let i = 0; i < uploadImg.files.length; ++i) {

        var reader = new FileReader();

        reader.onload = function (e) {
            //create element HTML about:
            //tag "img" have id name "img-upload"
            //"src" = present result
            //<img id="img-upload" src = e.target.result>

            // let p = document.createElement('img');
            // p.className = 'img-upload';
            // p.src = e.target.result;

            let p = document.createElement('div');
            p.className = 'contain-img';
            p.innerHTML = `
            <img src="${e.target.result}" class="img-upload">`;

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
        formNewShoes.removeChild(document.getElementById('btn-post'));
    }
    else {
        document.getElementById('title-upload-img').style.display = 'none';
        let  p = document.createElement('div');
        p.className = 'container-btn-post';
        p.id = 'btn-post';
        p.innerHTML = '<button class="btn-post-status">Post</button>';
        formNewShoes.appendChild(p);
    }
}

checkContainImgUpload();


//upload and review images 
// function uploadImages() {

//     const uploadImg = document.getElementById('upload-img');
//     const reviewImg = document.getElementById('review-img-upload');
//     // var imgUpload = document.getElementsByClassName('img-upload');
//     // reviewImg.innerHTML = '';
//     const btnUpLoadImg = document.getElementsByClassName('btn-upload-img')[0];
//     reviewImg.removeChild(btnUpLoadImg);

//     //run "for" all element have in "uploadImg",  later create element HTML assign value for this
//     for (let i = 0; i < uploadImg.files.length; ++i) {

//         var reader = new FileReader();
//         let id = randomID();
//         reader.onload = function (e) {
//             //create element HTML about:
//             //tag "img" have id name "img-upload"
//             //"src" = present result
//             //<img id="img-upload" src = e.target.result>
//             let p = document.createElement('div');
//             p.className = 'contain-img';
//             p.id = id.toString();
//             p.innerHTML = `
//             <img src="${e.target.result}" class="img-upload">
//             <i class="fas fa-times-circle btn-delete-choose-img" onclick="closeImg(${id})"></i>`
//             reviewImg.appendChild(p);
//         };
//         //read the address of the ith element in  "uploadImg" 
//         reader.readAsDataURL(uploadImg.files[i]);
//     }

//     setTimeout(() => {
//         let p = document.createElement('label');
//         p.className = 'btn-upload-img';
//         p.setAttribute('for', 'upload-img');
//         p.textContent = '+';
//         reviewImg.appendChild(p);

//         checkContainImgUpload();
//     }, 500);


//     function randomID(){
//         var ID = Math.floor(Math.random() * 1000000);
//         return ID;
//     }
// }

function closeImg(idImgUpLoad){
    const reviewImg = document.getElementById('review-img-upload');
    const containImg = document.getElementById(idImgUpLoad);
    reviewImg.removeChild(containImg);
    checkContainImgUpload();
}

function checkContainImgUpload(){
    if (document.getElementsByClassName('contain-img').length == 0) {
        document.getElementById('title-upload-img').style.display = 'block';
    }
    else {
        document.getElementById('title-upload-img').style.display = 'none';
    }
}
