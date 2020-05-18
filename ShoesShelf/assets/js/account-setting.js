(function effectShowUpContainerBody(e) {
    $('.site-item').on('click', function () {
        $('.container-body-container').toggleClass('hidden');
        $('.site-item').toggleClass('active');
    });
})();