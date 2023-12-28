$(document).ready(function() {
    $(".mobi-menu-icon").click(function() {
        $(".main-menu").fadeToggle();
    });
    // $(".acc-user").click(function() {
    //     $(".acc-dropdow").fadeToggle();
    // });
    $(".nav-mobi-icon").click(function() {
        $(".profile-nav").toggleClass("show");
    });
    $(document).on('click', function(event) {

        if (!$(event.target).closest('.mobi-menu-icon').length && !$(event.target).closest('.main-menu').length) {

            $(".main-menu").fadeOut();
        };
        // if (!$(event.target).closest('.acc-user').length && !$(event.target).closest('.acc-dropdow').length) {

        //     $(".acc-dropdow").fadeOut();
        // };
        if (!$(event.target).closest('.profile-nav').length && !$(event.target).closest('.nav-mobi-icon').length) {

            $(".profile-nav").removeClass("show");
        };
    });
});