window.onload = function () {

    var navbar = document.getElementById('header');
    var banner = document.getElementById('banner');
    var sticky = navbar.offsetTop;

    window.onscroll = function () {
        var scrollTop = document.documentElement.scrollTop
            || document.body.scrollTop;

        if (window.pageYOffset >= sticky * 4) {
            document.getElementById('header').classList.add("scroll-header");
        }
        else {
            document.getElementById('header').classList.remove("scroll-header");
        }

        if (window.pageYOffset >= banner.offsetTop + banner.offsetHeight) {
            document.body.classList.add("subpage");
        }
        else {
            document.body.classList.remove("subpage");
        }
    };
}