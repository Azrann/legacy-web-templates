$(window).load(function() {
    console.log($("#sslides").height(), $(window).height());
    $("#sslides").css({
        height: Math.max($("#sslides").height(), $(window).height())
    });

    console.log($("#sslides").height(), $(window).height());

    $(".focusable").click(function() {
        $(this).focus();
    });
});