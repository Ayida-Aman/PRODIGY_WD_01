document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.getElementById("navbar");

    // Change style on scroll
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = "#fff"; // Change to the desired color
        } else {
            navbar.style.backgroundColor = "pink"; // Change to the default color
        }
    });
});