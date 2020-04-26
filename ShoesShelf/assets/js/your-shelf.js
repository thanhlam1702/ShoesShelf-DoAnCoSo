//upload and review images 
uploadImages = () => {

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
//showup hidden content
var chooseContentShoes = () => {
    const userYourShelf = document.getElementById('user-your-shelf');
    const userNewShoes = document.getElementById('user-new-shoes');
    const userUpdate = document.getElementById('user-update');
    const userWannaRock = document.getElementById('user-wanna-rock');

    const btnUserYourShelf = document.getElementById('btn-your-shelf');
    const btnUserNewShoes = document.getElementById('btn-new-shoes');
    const btnUserUpdate = document.getElementById('btn-update');
    const btnUserWannaRock = document.getElementById('btn-wanna-rock');

    const colorManagerUser = '#4a525c';

    return {
        //showup your shelf
        contentYourShelf: () => {
            userNewShoes.style.display = userUpdate.style.display = userWannaRock.style.display = 'none';
            userYourShelf.style.display = 'flex';

            btnUserNewShoes.style.color = btnUserUpdate.style.color = btnUserWannaRock.style.color = colorManagerUser;
            btnUserYourShelf.style.color = 'white';
        },
        //showup new shoes
        contentNewShoes: () => {
            userYourShelf.style.display = userUpdate.style.display = userWannaRock.style.display = 'none';
            userNewShoes.style.display = 'block';

            btnUserYourShelf.style.color = btnUserUpdate.style.color = btnUserWannaRock.style.color = colorManagerUser;
            btnUserNewShoes.style.color = 'white';
        },
        //showup user update
        contentUserUpdate: () => {
            userYourShelf.style.display = userNewShoes.style.display = userWannaRock.style.display = 'none';
            userUpdate.style.display = 'block';

            btnUserYourShelf.style.color = btnUserNewShoes.style.color = btnUserWannaRock.style.color = colorManagerUser;
            btnUserUpdate.style.color = 'white';
        },
        //showup wanna rock
        contentWannaRock: () => {
            userYourShelf.style.display = userNewShoes.style.display = userUpdate.style.display = userWannaRock.style.display = 'none';
            userWannaRock.style.display = 'flex';

            btnUserYourShelf.style.color = btnUserNewShoes.style.color = btnUserUpdate.style.color = colorManagerUser;
            btnUserWannaRock.style.color = 'white';
        }
    };
}