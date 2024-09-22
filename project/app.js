function getRecommendations() {
    const query = document.getElementById('searchInput').value.trim().toLowerCase();
    const resultsDiv = document.getElementById('results');
    
    // Clear previous results
    resultsDiv.innerHTML = '';
    
    if (!query) {
      resultsDiv.style.display = 'none'; // Hide if query is empty
      return;
    }
    
    // Simulated data (replace with actual API data)
    const searchResults = [
        {
            name: "Bondi Beach",
            category: "beach",
            description: "A popular beach located in Sydney, Australia.",
            image: "/project/beach2.png",
        },
        {
            name: "Golden Temple",
            category: "temple",
            description: "A spiritual site located in Amritsar, India.",
            image: "/project/temple.jpg",
        },
        {
            name: "CN Tower",
            category: "Toronto",
            description: "An iconic landmark in Toronto, Canada.",
            image: "/project/tower2.jpg",
        }
    ];

    // Filter results based on the query
    const filteredResults = searchResults.filter(result => 
        result.name.toLowerCase().includes(query) || 
        result.category.toLowerCase().includes(query)
    );

    if (filteredResults.length === 0) {
        resultsDiv.style.display = 'none'; // Hide if no results
        return;
    }

    // Populate the filtered results
    filteredResults.forEach(result => {
        const resultItem = document.createElement('div');
        resultItem.classList.add('result-item');
        
        // HTML for each result item
        resultItem.innerHTML = `
            <img src="${result.image}" alt="${result.name}" width="40" height="40">
            <div>
                <strong>${result.name}</strong>
                <p>${result.description}</p>
            </div>
        `;
        
        // Append result item to the results container
        resultsDiv.appendChild(resultItem);
    });

    // Display the results container as a dropdown
    resultsDiv.style.display = 'block';
}

// Hide results dropdown when clicking outside
document.addEventListener('click', function(event) {
    const resultsDiv = document.getElementById('results');
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('search-button');
    
    if (!resultsDiv.contains(event.target) && event.target !== searchInput && event.target !== searchButton) {
      resultsDiv.style.display = 'none';
    }
});

function fetchLocalTime(timezone) {
    fetch(`https://worldtimeapi.org/api/timezone/${timezone}`)
    .then(response => response.json())
    .then(data => {
        document.getElementById('results').innerHTML += `
            <div class="local-time">
                <p>Current local time in ${timezone}: ${new Date(data.datetime).toLocaleTimeString()}</p>
            </div>
        `;
    })
    .catch(error => console.error('Error fetching time:', error));
}