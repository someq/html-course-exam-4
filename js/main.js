var contactPopup;
var callUsBtn;
var popupOutside;
var header;
var contactForm;
var contactFormPopup;
var gallery;

function initVariables() {
    contactPopup = $("#popup");
    callUsBtn = $("#call-us");
    popupOutside = $("#popup-bg");
    header = $("#main-header");
    contactForm = $("#contact-form");
    contactFormPopup = $("#contact-form-popup");
    gallery = $("#gallery");
}

function setupPopup() {
    callUsBtn.click(function (e) {
        e.preventDefault();
        contactPopup.addClass("active");
    });

    popupOutside.click(function (e) {
        e.preventDefault();
        contactPopup.removeClass("active");
    });
}

function setupStickyHeader() {
    $(window).scroll(function () {
        if ($(window).scrollTop() + 10 >= gallery.offset().top ) header.addClass('sticky');
        else header.removeClass('sticky');
    });
}

function setupFormValidation() {
    var rules = {rules: {
        name: {required: true},
        phone: {required: true},
        email: {required: true, email: true}
    }};

    contactForm.validate(rules);
    contactFormPopup.validate(rules);

    $.mask.definitions['9'] = '';
    $.mask.definitions['d'] = '[0-9]';
    $("input[name=phone]", contactForm).mask('+(996)ddd-dd-dd-dd');
    $("input[name=phone]", contactFormPopup).mask('+(996)ddd-dd-dd-dd');
}

function setupSmoothScroll() {
    function scrollTo(target) {
        $('html, body').animate(
            {scrollTop: target.offset().top},
            500
        );
    }

    $('a[href="#promo"]').click(function () {
        scrollTo($("#promo"));
    });

    $('a[href="#gallery"]').click(function () {
        scrollTo($("#gallery"));
    });

    $('a[href="#clients"]').click(function () {
        scrollTo($("#clients"));
    });

    $('a[href="#contacts"]').click(function () {
        scrollTo($("#contacts"));
    });
}

$(document).ready(function () {
    initVariables();
    setupPopup();
    setupStickyHeader();
    setupFormValidation();
    setupSmoothScroll();
});