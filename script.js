
document.addEventListener("DOMContentLoaded", function () {

    // Smooth scrolling for navigation
    document.querySelectorAll('nav a').forEach(function(link) {
        link.addEventListener('click', function(event) {
            const target = document.querySelector(
                this.getAttribute('href')
            );

            if (target) {
                event.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    console.log("RRCE IEEE Website Loaded Successfully!");

});
