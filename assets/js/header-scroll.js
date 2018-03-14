window.onload = function () {

    var navbar = document.getElementById('header');
    var sticky = navbar.offsetTop;

    window.onscroll = function () {
        // console.log('Just keep scrolling');
        var scrollTop = document.documentElement.scrollTop
            || document.body.scrollTop;

        if (window.pageYOffset >= sticky) {
            document.getElementById('header').classList.add("scroll-header");
            document.body.classList.add("subpage");
        }
        else {
            document.getElementById('header').classList.remove("scroll-header");
            document.body.classList.remove("subpage");
        }
    };
}