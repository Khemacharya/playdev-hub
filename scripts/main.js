const searchInput = document.querySelector(".search-input");
const videoCards = document.querySelectorAll(".video-card");
const menuItems = document.querySelectorAll(".sidebar .menu-item");

// Sidebar navigation click handler to filter cards by category
for (let i = 0; i < menuItems.length; i++) {
    const clickedItem = menuItems[i];

    clickedItem.addEventListener("click", function(event) {
        event.preventDefault(); 

        // Update active class layout styling on the sidebar links
        for (let j = 0; j < menuItems.length; j++) {
            menuItems[j].classList.remove("active");
        }
        clickedItem.classList.add("active");

        const categoryText = clickedItem.querySelector("span").textContent.toLowerCase().trim();

        // Loop through cards to display only matching topics
        for (let k = 0; k < videoCards.length; k++) {
            const card = videoCards[k];
            const rawTag = card.querySelector(".category-tag").textContent.toLowerCase().trim();

            // Map short thumbnail labels to broad sidebar categories
            let mappedTag = rawTag;
            if (rawTag === "html" || rawTag === "css" || rawTag === "js") {
                mappedTag = "web development";
            }
            if (rawTag === "sql" || rawTag === "data") {
                mappedTag = "data science";
            }
            if (rawTag === "python" || rawTag === "java") {
                mappedTag = "software engineering";
            }

            // Show matching cards or show everything if Home Feed is selected
            if (categoryText === "home feed" || mappedTag === categoryText) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        }
        
        // Wipe search input string to clear out active text filtering
        searchInput.value = "";
    });
}

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