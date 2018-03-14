window.onload = function () {

    var navbar = document.getElementById('header');
    var banner = document.getElementById('banner');
    var sticky = navbar.offsetTop;

    var prevScrollTop = -1;

    window.onscroll = function () {
        var scrollTop = document.documentElement.scrollTop
            || document.body.scrollTop;

        if (window.pageYOffset >= sticky * 4) {
            document.getElementById('header').classList.add("scroll-header");
            document.getElementById('header').classList.add("hide-header");
        } else {
            document.getElementById('header').classList.remove("scroll-header");
            document.getElementById('header').classList.remove("hide-header");
            document.body.classList.remove("subpage");
        }

        if (window.pageYOffset >= banner.offsetTop + banner.offsetHeight) {
            document.body.classList.add("subpage");

            // If scrolling down
            if (scrollTop > prevScrollTop) {
                document.getElementById('header').classList.add("hide-header");
            } else {
                document.getElementById('header').classList.remove("hide-header");
            }
        }

        prevScrollTop = scrollTop;
    };
}