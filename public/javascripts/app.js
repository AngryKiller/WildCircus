$(document).ready(function() {
    $(function () {
        $("a[href*='#']:not([href='#'])").click(function () {
            if (
                location.hostname === this.hostname
                && this.pathname.replace(/^\//, "") === location.pathname.replace(/^\//, "")
            ) {
                let anchor = $(this.hash);
                anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) + "]");
                if (anchor.length) {
                    $("html, body").animate({scrollTop: anchor.offset().top}, 1500);
                }
            }
        });
    });
    let navFixed = false;
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() >= 500 && navFixed === false) {
                console.log("test");
                navFixed = true;
                $( "nav" ).addClass( "fixed" );
            }
            else if ($(this).scrollTop() <= 500 && navFixed === true){
                console.log("lel");
                navFixed = false;
                $("nav").removeClass("fixed");
            }
        });

    })
});