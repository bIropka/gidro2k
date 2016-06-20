$(document).ready(function () {

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

    /** scripts for adaptive **/
    if ($(window).width() < '1024'){
        $('#form-top').insertBefore($('.second-text'));
    } else {
        $('#form-top').insertBefore($('.first-text'));
    }
    if ($(window).width() < '701'){
        $('.articles-page .work-steps-short').insertAfter($('.article-list + .page-navigation'));
        $('.articles-page .why-we-short').insertAfter($('.article-list + .page-navigation'));
        $('.price-page .work-steps-short').insertBefore($('.contact-info'));
        $('.price-page .why-we-short').insertBefore($('.contact-info'));

    } else {
        $('.price-page .work-steps-short').prependTo('.side-panel');
        $('.price-page .why-we-short').prependTo('.side-panel');
        $('.articles-page .work-steps-short').insertAfter($('.side-menu'));
        $('.articles-page .why-we-short').insertAfter($('.side-menu'));
    }

    $(window).resize(function(){
        if ($(window).width() < '1024'){
            $('#form-top').insertBefore($('.second-text'));
        } else {
            $('#form-top').insertBefore($('.first-text'));
        }
        if ($(window).width() < '701'){
            $('.articles-page .work-steps-short').insertAfter($('.article-list + .page-navigation'));
            $('.articles-page .why-we-short').insertAfter($('.article-list + .page-navigation'));
            $('.price-page .work-steps-short').insertBefore($('.contact-info'));
            $('.price-page .why-we-short').insertBefore($('.contact-info'));

        } else {
            $('.price-page .work-steps-short').prependTo('.side-panel');
            $('.price-page .why-we-short').prependTo('.side-panel');
            $('.articles-page .work-steps-short').insertAfter($('.side-menu'));
            $('.articles-page .why-we-short').insertAfter($('.side-menu'));
        }
    });

    $('.mobile-menu').click(function() {
        $('nav ul').slideToggle();
        $(this).toggleClass('opened');
    });

    /** end of scripts for adaptive **/

    /*** window-callback-short ***/

    $('.service-info-page .leave-order').click(function () {
        $(this).parent().append($('.window-callback-short'));
        $('.window-callback-short').fadeIn();
    });

    /*** the end of the window-callback-short script ***/

    /*** window-callback-full ***/

    $('.get-callback').click(function () {
        $('.window-callback-full').fadeIn();
    });

    $('.price-page .leave-order').click(function () {
        $('.window-callback-full').fadeIn();
    });

    $('.window-callback-full').click(function (event) {
        $target = $(event.target);
        if (!$target.closest($('.form-callback-full')).length) $('.window-callback-full').fadeOut();
        if ($target.hasClass('close-marker')) $('.window-callback-full').fadeOut();
    });

    /*** the end of the window-callback-full script ***/

    /** script for service-cost **/
    $('.services-cost .see-all').click(function() {
        $(this).siblings('ul').find('.hidden').slideToggle();
        $(this).find('.closed').fadeToggle(0);
        $(this).find('.opened').fadeToggle(0);
    });
    /** end of script for service-cost **/

});
