$(document).ready(function () {

    function windowSize(){
        if ($(window).width() < '762'){
            var formTop = $('.service-info-page .form-top');
            formTop.insertBefore($('.services-cost'));
        }
    }
    jQuery(window).load(windowSize);

    $('.mobile-menu').click(function() {
        $('nav ul').slideToggle();
    });

});
