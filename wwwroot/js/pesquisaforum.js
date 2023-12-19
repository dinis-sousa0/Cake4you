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
        var cakeContainer = document.querySelector(".inner-main-body.p-2.p-sm-3.collapse.forum-content.show");

        // Get all cake cards
        var cakeCards = document.querySelectorAll(".card.mb-2");

        // Show all cake cards initially
        cakeCards.forEach(function(card) {
            card.style.display = "block";
        });

        // If the search input is not empty, hide non-matching cards
        if (searchInput !== "") {
            cakeCards.forEach(function(card) {
                var cakeTitle = card.querySelector(".text-body").innerText.toLowerCase();
                if (!cakeTitle.includes(searchInput)) {
                    card.style.display = "none";
                }
            });
        }
    }
});