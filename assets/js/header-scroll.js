
/*
    This script contains code related to the header mechanics/movements on scrolls
 */
window.onload = function () {

    var navbar = document.getElementById('header');
    var banner = document.getElementById('banner');
    var sticky = navbar.offsetTop;

    var prevScrollTop = -1;

    window.onscroll = function () {

        // Get the current scroll position
        var scrollTop = document.documentElement.scrollTop
            || document.body.scrollTop;

        /*
            NOTE:
                When the user first scrolls down, the header bar makes a move upwards. (top: -5em)
                This is to prepare itself for the "slide down effect" when it shows up later. (top: 0)
                The effect is produced by using a CSS transition on the "top" property.

                The condition below is for hiding this upward movement from the user.
         */
        // If the user has scrolled past the original header bar a little bit far enough
        if (window.pageYOffset >= sticky * 4) {
            document.getElementById('header').classList.add("scroll-header");
            document.getElementById('header').classList.add("hide-header");

            // This should only work if the user is not in the home page
            if (!(typeof banner != "undefined" && banner != null)) {
                // If scrolling down, hide the header
                if (scrollTop > prevScrollTop) {
                    console.log('Hiding header...');
                    document.getElementById('header').classList.add("hide-header");
                } else { // If scrolling up, show the header
                    document.getElementById('header').classList.remove("hide-header");
                    console.log('Showing header...');
                }
            }
        } else {
            document.getElementById('header').classList.remove("scroll-header");
            document.getElementById('header').classList.remove("hide-header");
            document.body.classList.remove("subpage");
        }

        // Check if the banner exists (or user is in the home page)
        if (typeof banner != "undefined" && banner != null) {

            // If the user has scrolled past the banner
            if (window.pageYOffset >= banner.offsetTop + banner.offsetHeight) {

                // Only show the header when below the banner (when this ^ condition is met)
                document.body.classList.add("subpage");

                // If scrolling down, hide the header
                if (scrollTop > prevScrollTop) {
                    document.getElementById('header').classList.add("hide-header");
                } else { // If scrolling up, show the header
                    document.getElementById('header').classList.remove("hide-header");
                }
            }
        } else {

        }

        prevScrollTop = scrollTop;
    };
}