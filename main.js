document.addEventListener('DOMContentLoaded', function () {
    // Get all card labels in the carousel
    var cards = document.querySelectorAll('.cards label');

    // Function to hide all h2 tags
    function hideAllH2() {
        cards.forEach(function(card) {
            var h2Tag = card.querySelector('h2');
            if (h2Tag) {
                h2Tag.style.display = 'none';
            }
        });
    }

    // Function to show h2 tag for clicked image
    function showH2(event) {
        hideAllH2(); // First, hide all h2 tags
        var h2Tag = event.currentTarget.querySelector('h2');
        if (h2Tag) {
            h2Tag.style.display = 'block'; // Then, show the h2 tag for the clicked image
        }
    }

    // Add click event listeners to card labels
    cards.forEach(function(card) {
        card.addEventListener('click', showH2);
    });

    // Initially hide all h2 tags
    hideAllH2();
});
// Function to check if element is in viewport
window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.nav');
    if (window.scrollY > 0) {
        navbar.style.backgroundColor = '#242a25';
    } else {
        navbar.style.backgroundColor = 'transparent';
    }
});

  