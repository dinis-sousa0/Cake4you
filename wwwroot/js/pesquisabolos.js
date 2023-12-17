document.addEventListener("DOMContentLoaded", function() {
    // Handle search button click
    document.getElementById("searchButton").addEventListener("click", function() {
        searchCakes();
    });

    // Handle enter key press in the search input
    document.getElementById("searchInput").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            searchCakes();
        }
    });

    // Handle search input change
    document.getElementById("searchInput").addEventListener("input", function() {
        searchCakes();
    });

    function searchCakes() {
        var searchInput = document.getElementById("searchInput").value.trim().toLowerCase();

        // Get the container that holds the cake cards
        var cakeContainer = document.querySelector(".d-flex.justify-content-center.flex-wrap");

        // Get all cake cards
        var cakeCards = document.querySelectorAll(".cake-card");

        // Show all cake cards initially
        cakeCards.forEach(function(card) {
            card.style.display = "block";
        });

        // If the search input is not empty, hide non-matching cards
        if (searchInput !== "") {
            cakeCards.forEach(function(card) {
                var cakeTitle = card.querySelector(".card-title").innerText.toLowerCase();
                if (!cakeTitle.includes(searchInput)) {
                    card.style.display = "none";
                }
            });
        }
    }
});