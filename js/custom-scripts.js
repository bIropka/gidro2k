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

    $('input[type="submit"]').click(function() {
        $(this).parent().find('.form-field').css('border', '1px solid #ff8a00');
    });

    jQuery(function($) {
        $('form').validatr({
            showall: true
        });
    });

    jQuery(function($){
        $('.user-phone').mask("+7(999) 999-99-99");
    });

    /*** window-callback ***/
    $('.leave-order').click(function () {
        $('.window-callback-short').fadeIn();
    });

    $('.window-callback-short').click(function (event) {
        $target = $(event.target);
        if (!$target.closest($('.form-callback-short')).length) $('.window-callback-short').fadeOut();
    });
    /*** the end of the window-callback script ***/

});
