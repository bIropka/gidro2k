$(document).ready(function () {

    $(window).resize(function(){
        if ($(window).width() < '1024'){
            $('#form-top').insertBefore($('.second-text'));
        } else {
            $('#form-top').insertBefore($('.first-text'));
        }
    });

    $('.mobile-menu').click(function() {
        $('nav ul').slideToggle();
    });

    $('input[type="submit"]').click(function() {
        $(this).parent().find('.form-field:invalid').css('border', '1px solid #ff8a00');
        $(this).parent().find('.form-field:valid').css('border', '1px solid transparent');
    });

    jQuery(function($) {
        $('form').validatr({
            showall: true
        });
    });

    jQuery(function($){
        $('.user-phone').mask("+7(999) 999-99-99");
    });

    /*** window-callback-short ***/
    $('.leave-order').click(function () {
        $('.window-callback-short').fadeIn();
    });

    $('.window-callback-short').click(function (event) {
        $target = $(event.target);
        if (!$target.closest($('.form-callback-short')).length) $('.window-callback-short').fadeOut();
    });
    /*** the end of the window-callback-short script ***/

    /*** window-callback-full ***/
    $('.window-callback-full').click(function (event) {
        $target = $(event.target);
        if (!$target.closest($('.form-callback-full')).length) $('.window-callback-full').fadeOut();
        if ($target.hasClass('close-marker')) $('.window-callback-full').fadeOut();
    });
    /*** the end of the window-callback-full script ***/

});
