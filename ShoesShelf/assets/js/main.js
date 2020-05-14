

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
            <img src='/assets/images/img360/iphone-11-org-1.jpg' alt="" style="cursor: move;" />
            <img src='/assets/images/img360/iphone-11-org-2.jpg' alt="" style="cursor: move;" />
            <img src='/assets/images/img360/iphone-11-org-3.jpg' alt="" style="cursor: move;" />
            <img src='/assets/images/img360/iphone-11-org-4.jpg' alt="" style="cursor: move;" />
            <img src='/assets/images/img360/iphone-11-org-5.jpg' alt="" style="cursor: move;" />
            <img src='/assets/images/img360/iphone-11-org-6.jpg' alt="" style="cursor: move;" />
            <img src='/assets/images/img360/iphone-11-org-7.jpg' alt="" style="cursor: move;" />
            <img src='/assets/images/img360/iphone-11-org-8.jpg' alt="" style="cursor: move;" />
            <img src='/assets/images/img360/iphone-11-org-9.jpg' alt="" style="cursor: move;" />
            <img src='/assets/images/img360/iphone-11-org-10.jpg' alt="" style="cursor: move;" />
            <img src='/assets/images/img360/iphone-11-org-11.jpg' alt="" style="cursor: move;" />
            <img src='/assets/images/img360/iphone-11-org-12.jpg' alt="" style="cursor: move;" />
            <img src='/assets/images/img360/iphone-11-org-13.jpg' alt="" style="cursor: move;" />
            <img src='/assets/images/img360/iphone-11-org-14.jpg' alt="" style="cursor: move;" />
            <img src='/assets/images/img360/iphone-11-org-15.jpg' alt="" style="cursor: move;" />
            <img src='/assets/images/img360/iphone-11-org-16.jpg' alt="" style="cursor: move;" />
            <img src='/assets/images/img360/iphone-11-org-17.jpg' alt="" style="cursor: move;" />
            <img src='/assets/images/img360/iphone-11-org-18.jpg' alt="" style="cursor: move;" />
            <img src='/assets/images/img360/iphone-11-org-19.jpg' alt="" style="cursor: move;" />
            <img src='/assets/images/img360/iphone-11-org-20.jpg' alt="" style="cursor: move;" />
            <img src='/assets/images/img360/iphone-11-org-21.jpg' alt="" style="cursor: move;" />
            <img src='/assets/images/img360/iphone-11-org-22.jpg' alt="" style="cursor: move;" />
            <img src='/assets/images/img360/iphone-11-org-23.jpg' alt="" style="cursor: move;" />
            <img src='/assets/images/img360/iphone-11-org-24.jpg' alt="" style="cursor: move;" />
            <img src='/assets/images/img360/iphone-11-org-25.jpg' alt="" style="cursor: move;" />
            <img src='/assets/images/img360/iphone-11-org-26.jpg' alt="" style="cursor: move;" />
            <img src='/assets/images/img360/iphone-11-org-27.jpg' alt="" style="cursor: move;" />
            <img src='/assets/images/img360/iphone-11-org-28.jpg' alt="" style="cursor: move;" />
            <img src='/assets/images/img360/iphone-11-org-29.jpg' alt="" style="cursor: move;" />
            <img src='/assets/images/img360/iphone-11-org-30.jpg' alt="" style="cursor: move;" />
            <img src='/assets/images/img360/iphone-11-org-31.jpg' alt="" style="cursor: move;" />
            <img src='/assets/images/img360/iphone-11-org-32.jpg' alt="" style="cursor: move;" />
            <img src='/assets/images/img360/iphone-11-org-33.jpg' alt="" style="cursor: move;" />
            <img src='/assets/images/img360/iphone-11-org-34.jpg' alt="" style="cursor: move;" />
            <img src='/assets/images/img360/iphone-11-org-35.jpg' alt="" style="cursor: move;" />
            <img src='/assets/images/img360/iphone-11-org-36.jpg' alt="" style="cursor: move;" />
        </div>
    </center>
    `;

    jQuery(document).ready(function () {
        jQuery('#product').j360();
    });
}