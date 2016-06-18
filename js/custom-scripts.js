$(document).ready(function () {

    /** scripts for adaptive **/

    if ($(window).width() < '1024'){
        $('#form-top').insertBefore($('.second-text'));
    } else {
        $('#form-top').insertBefore($('.first-text'));
    }

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

    /** end of scripts for adaptive **/

    /** validation **/

    $(function($) {
        $('#form-top').validatr({
            showall: true,
            valid: submitFormTop
        });
    });
    function submitFormTop() {
        $('.window-callback-full').fadeIn();
        $('#full-user-name').val($('#top-user-name').val());
        $('#full-user-email').val($('#top-user-email').val());
        $('#full-user-phone').val($('#top-user-phone').val());
        $('#form-callback-full').find('.form-field:valid').css('border', '1px solid transparent');
        return false;
    }

    $(function($) {
        $('#form-bottom').validatr({
            showall: true,
            valid: submitFormBottom
        });
    });
    function submitFormBottom() {
        $('.window-callback-full').fadeIn();
        $('#full-user-name').val($('#bottom-user-name').val());
        $('#full-user-email').val($('#bottom-user-email').val());
        $('#full-user-phone').val($('#bottom-user-phone').val());
        $('#form-callback-full').find('.form-field:valid').css('border', '1px solid transparent');
        return false;
    }

    $(function($) {
        $('#form-callback-short').validatr({
            showall: true,
            valid: submitFormShort
        });
    });
    function submitFormShort() {
        $('#form-callback-short').fadeOut();
        $('.window-callback-full').fadeIn();
        $('#full-user-name').val($('#short-user-name').val());
        $('#full-user-email').val($('#short-user-email').val());
        $('#full-user-phone').val($('#short-user-phone').val());
        $('#form-callback-full').find('.form-field:valid').css('border', '1px solid transparent');
        return false;
    }

    $(function($) {
        $('#form-callback-full').validatr({
            showall: true
        });
    });

    $(function($){
        $('.user-phone').mask("+7(999) 999-99-99");
    });

    $('input[type="submit"]').click(function() {
        $(this).parent().find('.form-field:invalid').css('border', '1px solid #ff8a00');
        $(this).parent().find('.form-field:valid').css('border', '1px solid transparent');
    });

    /** end of validation **/

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

    $('.get-callback').click(function () {
        $('.window-callback-full').fadeIn();
    });

    $('.window-callback-full').click(function (event) {
        $target = $(event.target);
        if (!$target.closest($('.form-callback-full')).length) $('.window-callback-full').fadeOut();
        if ($target.hasClass('close-marker')) $('.window-callback-full').fadeOut();
    });

    /*** the end of the window-callback-full script ***/

});
