const searchInput = document.querySelector(".search-input");
const videoCards = document.querySelectorAll(".video-card");
const menuItems = document.querySelectorAll(".sidebar .menu-item");

// Real-time search engine to filter video titles as the user types
searchInput.addEventListener("input", function() {
    const searchText = searchInput.value.toLowerCase();

    // Reset sidebar highlights to "Home Feed" when typing
    for (let j = 0; j < menuItems.length; j++) {
        menuItems[j].classList.remove("active");
    }
    menuItems[0].classList.add("active");

    // Loop through cards to check titles against search input
    for (let i = 0; i < videoCards.length; i++) {
        const card = videoCards[i];
        const videoTitle = card.querySelector(".info-text h3").textContent.toLowerCase();

        // Toggle card visibility based on match
        if (videoTitle.includes(searchText)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    }
});