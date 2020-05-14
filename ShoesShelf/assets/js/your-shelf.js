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
    const btnUserWannaRock = document.getElementById('btn-wanna-rock');

    const containerUserManager = document.getElementById('user-manager-shoes');


    return {
        //showup your shelf
        contentYourShelf: () => {
            btnUserNewShoes.style.color = btnUserUpdate.style.color = btnUserWannaRock.style.color = '';
            btnUserYourShelf.style.color = 'white';

            containerUserManager.innerHTML = `
            <ul class="user-your-shelf" id="user-your-shelf">
                <!-- card of images, short content of a post -->
                <li class="cards-posts">
                    <div class="card-container-img">
                        <img src="./assets/images/test1.jpg" alt="" class="card-img">
                    </div>
                    <div class="card-container-content">
                        <p class="card-short-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, hic. Harum necessitatibus, minima inventore consequatur numquam atque libero ipsam quis. Atque ad voluptatem earum ex id corporis quisquam. Saepe, magni!</p>
                    </div>
                </li>
                <li class="cards-posts">
                    <div class="card-container-img">
                        <img src="./assets/images/test1.jpg" alt="" class="card-img">
                    </div>
                    <div class="card-container-content">
                        <p class="card-short-content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste dolor quas eius sit magnam cumque! Deserunt in cupiditate culpa illum doloribus iusto autem reprehenderit magni optio, expedita sapiente possimus eaque.</p>
                    </div>
                </li>
            </ul>`;
        },
        //show up content new shoes
        contentNewShoes: () => {
            btnUserYourShelf.style.color = btnUserUpdate.style.color = btnUserWannaRock.style.color = '';
            btnUserNewShoes.style.color = 'white';

            containerUserManager.innerHTML = `
            <div class="user-new-shoes" id="user-new-shoes">
                <!-- form contain button upload image -->
                <form action="">
                    <div class="container-upload-img">
                        <!-- where img alter upload showup review -->
                        <div class="review-img-upload" id="review-img-upload">
                            <!-- <img src="" id="img-upload"> -->
                            <label for="upload-img" class="btn-upload-img" >+</label>
                        </div>
                        <span class="title-upload-img" id="title-upload-img">Show us what you have...</span>
                        <input type="file" name="img" accept="image/*" id="upload-img" onchange="uploadImages()" multiple>
                    </div>
                    <div class="container-editor">
                        <textarea name="status" id="share-exp" placeholder="Your experiences..."></textarea>
                    </div>
                    <div class="container-choose-more">
                        <select name="brands" class="brands" id="brands">
                            <option selected hidden style="font-weight: bold;">Brands</option>
                            <option value="vans">Vans</option>
                            <option value="adidas">Adidas</option>
                            <option value="nike">Nike</option>
                            <option value="nike">Reebok</option>
                            <option value="nike">Converse</option>
                            <option value="nike">Puma</option>
                            <option value="nike">Orther</option>
                        </select>
                        <input type="text" name="collections" placeholder="Collections" class="collections">
                        <input type="text" name="hashtag" placeholder="#HashTag" class="hashtag">
                    </div>
                    <div class="container-btn-post">
                        <button class="btn-post-status">Post</button>
                    </div>
                </form>
            </div>`;
        },

        contentUserUpdate: () => {
            btnUserYourShelf.style.color = btnUserNewShoes.style.color = btnUserWannaRock.style.color = '';
            btnUserUpdate.style.color = 'white';

            containerUserManager.innerHTML = `
            <div class="user-update" id="user-update">

            </div>
            `;
        },
        //showup wanna rock
        contentWannaRock: () => {
            btnUserYourShelf.style.color = btnUserNewShoes.style.color = btnUserUpdate.style.color = '';
            btnUserWannaRock.style.color = 'white';

            containerUserManager.innerHTML = `
            <ul class="user-wanna-rock" id="user-wanna-rock">
                <!-- card contain img and name hashtag of post -->
                <li class="card-wanna-rock">
                    <div class="card-container-img">
                        <img src="./assets/images/test1.jpg" alt="" class="card-img">
                    </div>
                    <div class="card-container-title">
                        <p class="card-title">#Adidas #superStar #3trips</p>
                    </div>
                </li>

                <li class="card-wanna-rock">
                    <div class="card-container-img">
                        <img src="./assets/images/test2.jpg" alt="" class="card-img">
                    </div>
                    <div class="card-container-title">
                        <p class="card-title">#Converse #cdg #commeDesgarcons #black</p>
                    </div>
                </li>

                <li class="card-wanna-rock">
                    <div class="card-container-img">
                        <img src="./assets/images/test3.jpg" alt="" class="card-img">
                    </div>
                    <div class="card-container-title">
                        <p class="card-title">#Converse #cdg #commeDesgarcons #white</p>
                    </div>
                </li>

                <li class="card-wanna-rock">
                    <div class="card-container-img">
                        <img src="./assets/images/test4.jpg" alt="" class="card-img">
                    </div>
                    <div class="card-container-title">
                        <p class="card-title">#adidas #stansmith</p>
                    </div>
                </li>
            </ul>`;
        }
    };
}
function modalEditProfileUser() {
    var userContainer = document.getElementById('user-container');

    return {
        showUpModal: () => {
            var nodeModalEditUser = document.createElement('div');

            nodeModalEditUser.className = 'user-edit-profile';
            nodeModalEditUser.id = 'user-edit-profile';

            userContainer.appendChild(nodeModalEditUser);

            nodeModalEditUser.innerHTML = `
            <form class="modal-edit-profile">
                <i class="close-modal-edit" onclick="modalEditProfileUser().closeModal()">x</i>
                <div class="user-avatar">
                    <img src="" id="user-img" class="user-img">
                </div>
                <label for="change-avatar" class="btn-change-avatar">Change Photo</label>
                <input type="file" name="img" accept="image/*" id="change-avatar">
                <input type="text" value="" class="user-name" id="change-user-name">
                <p>This could be your first name or a nickname <br> It's how you'll appear on ShoesShelf</p>
                <button class="btn-save-change">Save Change</button>
            </form>
            `;
            showUser();
        },
        closeModal: () =>{
            userContainer.removeChild(document.getElementById('user-edit-profile'));
        } 
    }
}