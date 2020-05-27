(function effectShowUpContainerBody(e) {
    $('.site-item').on('click', function () {
        $('.container-body-container').toggleClass('hidden');
        $('.site-item').toggleClass('active');
    });
})()

function reviewChangeAvatar() {
    const changeAvatar = document.getElementById('change-avatar');
    const containUserAvatar = document.getElementById('user-avatar');
    const imgChange = document.getElementById('img-upload');
    const containUploadAvatar = document.getElementById('form-upload-avatar');
    const btnSaveChange = document.getElementsByClassName('btn-save-change-avatar');
    if (imgChange != null) {
        containUserAvatar.removeChild(imgChange);
        containUploadAvatar.removeChild(btnSaveChange[0]);
    }
    var reader = new FileReader();
    reader.onload = function (e) {
        let p = document.createElement('img');
        p.id = 'img-upload';
        p.src = e.target.result;
        containUserAvatar.appendChild(p);
    };
    reader.readAsDataURL(changeAvatar.files[0]);
    let p =document.createElement('input');
    p.className = 'btn-save-change-avatar';
    p.type = 'submit';
    p.value = 'Save Avatar';
    containUploadAvatar.appendChild(p);
}