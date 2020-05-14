

function hiddenImg360() {
    var content = document.getElementById('main-content');
    var childNode = document.getElementById('container-img360')

    content.removeChild(childNode);
    hiddenBodyScrollBar().showup();
}

function showImg360() {
    var content = document.getElementById('main-content');
    var childNode = document.createElement('div');

    childNode.className = 'container-img360';
    childNode.id = 'container-img360';

    content.appendChild(childNode);

    hiddenBodyScrollBar().hidden();

    document.getElementById('container-img360').innerHTML = `
    <i class="btn-close" onclick = "hiddenImg360()">x</i>
    <center>
        <div id="product" style="width: 800px; height: 600px; overflow: hidden;cursor: move;">
            <img src='/assets/images/img360/2DC_3631.jpg' alt="" style="cursor: move;" />
            <img src='/assets/images/img360/2DC_3632.jpg' alt="" style="cursor: move;" />
            <img src='/assets/images/img360/2DC_3633.jpg' alt="" style="cursor: move;" />
            <img src='/assets/images/img360/2DC_3634.jpg' alt="" style="cursor: move;" />
            <img src='/assets/images/img360/2DC_3635.jpg' alt="" style="cursor: move;" />
            <img src='/assets/images/img360/2DC_3636.jpg' alt="" style="cursor: move;" />
            <img src='/assets/images/img360/2DC_3637.jpg' alt="" style="cursor: move;" />
            <img src='/assets/images/img360/2DC_3638.jpg' alt="" style="cursor: move;" />
            <img src='/assets/images/img360/2DC_3639.jpg' alt="" style="cursor: move;" />
            <img src='/assets/images/img360/2DC_3640.jpg' alt="" style="cursor: move;" />
            <img src='/assets/images/img360/2DC_3641.jpg' alt="" style="cursor: move;" />
            <img src='/assets/images/img360/2DC_3642.jpg' alt="" style="cursor: move;" />
            <img src='/assets/images/img360/2DC_3643.jpg' alt="" style="cursor: move;" />
            <img src='/assets/images/img360/2DC_3644.jpg' alt="" style="cursor: move;" />
            <img src='/assets/images/img360/2DC_3645.jpg' alt="" style="cursor: move;" />
            <img src='/assets/images/img360/2DC_3646.jpg' alt="" style="cursor: move;" />
            <img src='/assets/images/img360/2DC_3646.jpg' alt="" style="cursor: move;" />
            <img src='/assets/images/img360/2DC_3648.jpg' alt="" style="cursor: move;" />
            <img src='/assets/images/img360/2DC_3649.jpg' alt="" style="cursor: move;" />
            <img src='/assets/images/img360/2DC_3650.jpg' alt="" style="cursor: move;" />
            <img src='/assets/images/img360/2DC_3651.jpg' alt="" style="cursor: move;" />
            <img src='/assets/images/img360/2DC_3652.jpg' alt="" style="cursor: move;" />
            <img src='/assets/images/img360/2DC_3653.jpg' alt="" style="cursor: move;" />
            <img src='/assets/images/img360/2DC_3654.jpg' alt="" style="cursor: move;" />
            <img src='/assets/images/img360/2DC_3655.jpg' alt="" style="cursor: move;" />
            <img src='/assets/images/img360/2DC_3656.jpg' alt="" style="cursor: move;" />
            <img src='/assets/images/img360/2DC_3657.jpg' alt="" style="cursor: move;" />
            <img src='/assets/images/img360/2DC_3658.jpg' alt="" style="cursor: move;" />
            <img src='/assets/images/img360/2DC_3659.jpg' alt="" style="cursor: move;" />
            <img src='/assets/images/img360/2DC_3660.jpg' alt="" style="cursor: move;" />
            <img src='/assets/images/img360/2DC_3661.jpg' alt="" style="cursor: move;" />
            <img src='/assets/images/img360/2DC_3662.jpg' alt="" style="cursor: move;" />
            <img src='/assets/images/img360/2DC_3663.jpg' alt="" style="cursor: move;" />
            <img src='/assets/images/img360/2DC_3664.jpg' alt="" style="cursor: move;" />
            <img src='/assets/images/img360/2DC_3665.jpg' alt="" style="cursor: move;" />
            <img src='/assets/images/img360/2DC_3666.jpg' alt="" style="cursor: move;" />
        </div>
    </center>
    `;

    jQuery(document).ready(function () {
        jQuery('#product').j360();
    });
}