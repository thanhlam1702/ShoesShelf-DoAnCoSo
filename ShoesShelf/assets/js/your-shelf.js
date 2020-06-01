//make "your-shelf color white"
document.getElementById('btn-your-shelf').style.color = 'white';


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

//showup hidden content
function chooseContentShoes() {
    const btnUserYourShelf = document.getElementById('btn-your-shelf');
    const btnUserNewShoes = document.getElementById('btn-new-shoes');
    const btnUserUpdate = document.getElementById('btn-update');
    // const btnUserWannaRock = document.getElementById('btn-wanna-rock');

    const userYourShelf = document.getElementById('user-your-shelf');
    const userNewShoes = document.getElementById('user-new-shoes');
    const userUpdate = document.getElementById('user-update');
    // const userWannaRock = document.getElementById('user-wanna-rock');

    return {
        //showup your shelf
        contentYourShelf: () => {
            userNewShoes.style.display = userUpdate.style.display = userWannaRock.style.display = 'none';
            userYourShelf.style.display = 'flex';

            btnUserNewShoes.style.color = btnUserUpdate.style.color = btnUserWannaRock.style.color = '';
            btnUserYourShelf.style.color = 'white';
        },
        //show up content new shoes
        contentNewShoes: () => {
            userYourShelf.style.display = userUpdate.style.display = userWannaRock.style.display = 'none';
            userNewShoes.style.display = 'block';

            btnUserYourShelf.style.color = btnUserUpdate.style.color = btnUserWannaRock.style.color = '';
            btnUserNewShoes.style.color = 'white';

        },

        contentUserUpdate: () => {
            userYourShelf.style.display = userNewShoes.style.display = userWannaRock.style.display = 'none';
            userUpdate.style.display = 'block';

            btnUserYourShelf.style.color = btnUserNewShoes.style.color = btnUserWannaRock.style.color = '';
            btnUserUpdate.style.color = 'white';

        },
        // //showup wanna rock
        // contentWannaRock: () => {
        //     userYourShelf.style.display = userNewShoes.style.display = userUpdate.style.display = userWannaRock.style.display = 'none';
        //     userWannaRock.style.display = 'flex';

        //     btnUserYourShelf.style.color = btnUserNewShoes.style.color = btnUserUpdate.style.color = '';
        //     btnUserWannaRock.style.color = 'white';
        // },
    }
}
// function modalEditProfileUser() {
//     var userContainer = document.getElementById('user-container');

//     return {
//         showUpModal: () => {
//             var nodeModalEditUser = document.createElement('div');

//             nodeModalEditUser.className = 'user-edit-profile';
//             nodeModalEditUser.id = 'user-edit-profile';

//             userContainer.appendChild(nodeModalEditUser);

//             nodeModalEditUser.innerHTML = `
//             <form class="modal-edit-profile">
//                 <i class="close-modal-edit" onclick="modalEditProfileUser().closeModal()">x</i>
//                 <div class="user-avatar">
//                     <img src="" id="user-img" class="user-img">
//                 </div>
//                 <label for="change-avatar" class="btn-change-avatar">Change Photo</label>
//                 <input type="file" name="img" accept="image/*" id="change-avatar">
//                 <input type="text" value="" class="user-name" id="change-user-name">
//                 <p>This could be your first name or a nickname <br> It's how you'll appear on ShoesShelf</p>
//                 <button class="btn-save-change">Save Change</button>
//             </form>
//             `;
//             showUser();
//         },
//         closeModal: () => {
//             userContainer.removeChild(document.getElementById('user-edit-profile'));
//         }
//     }
// }no