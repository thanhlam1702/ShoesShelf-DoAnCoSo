(function effectShowUpContainerBody() {
    $('.site-item').on('click', function () {
        $('.container-body-container').toggleClass('hidden');
        $('.site-item').toggleClass('active');
    });
})();