// // Assuming your JSON file is stored locally, you would normally load it like this.
// // However, local file loading isn't allowed in most browsers due to CORS restrictions.
// // Therefore, this example assumes you're using a local server or hosting the JSON file.

// const destinations = [
//     {
//       name: "Bondi Beach",
//       category: "beach",
//       description: "A famous beach in Sydney, Australia.",
//       image: "bondi-beach.jpg",
//     },
//     {
//       name: "Golden Temple",
//       category: "temple",
//       description: "A spiritual temple in Amritsar, India.",
//       image: "golden-temple.jpg",
//     },
//     {
//       name: "CN Tower",
//       category: "Toronto",
//       description: "A landmark in Toronto, Canada.",
//       image: "cn-tower.jpg",
//     },
//   ];
  
//   // Search functionality
//   function searchDestinations() {
//     const searchInput = document.getElementById("search-navbar").value.toLowerCase();
  
//     const filteredResults = destinations.filter((destination) => {
//       return (
//         destination.name.toLowerCase().includes(searchInput) ||
//         destination.category.toLowerCase().includes(searchInput)
//       );
//     });
  
//     displayResults(filteredResults);
//   }
  
//   // Display results dynamically in HTML
//   function displayResults(results) {
//     const resultsDiv = document.getElementById("results");
  
//     resultsDiv.innerHTML = "";
  
//     if (results.length === 0) {
//       resultsDiv.innerHTML = `<p>No destinations found matching your search.</p>`;
//     } else {
//       results.forEach((result) => {
//         resultsDiv.innerHTML += `
//           <div class="result">
//             <h3>${result.name}</h3>
//             <p>${result.description}</p>
//             <img src="${result.image}" alt="${result.name}" class="result-img" />
//           </div>
//         `;
//       });
//     }
//   }
  
//   // Event listeners for search
//   document.getElementById("search-navbar").addEventListener("keypress", function (e) {
//     if (e.key === "Enter") {
//       searchDestinations();
//     }
//   });
  
//   document.getElementById("search-button").addEventListener("click", searchDestinations);
  







// const recommendations = [
//     {
//         name: "Bondi Beach",
//         category: "beach",
//         description: "A popular beach located in Sydney, Australia.",
//         image: "/project/beach2.png",
//     },
//     {
//         name: "Golden Temple",
//         category: "temple",
//         description: "A spiritual site located in Amritsar, India.",
//         image: "/project/temple.jpg",
//     },
//     {
//         name: "CN Tower",
//         category: "Toronto",
//         description: "An iconic landmark in Toronto, Canada.",
//         image: "cn-tower.jpg",
//     }
// ];
// 
// function getRecommendations() {
//     const searchQuery = document.getElementById('searchInput').value.toLowerCase();
//     const filteredResults = recommendations.filter(item => 
//         item.category.toLowerCase().includes(searchQuery) || item.name.toLowerCase().includes(searchQuery)
//     );

//     // Display the filtered results
//     const resultsDiv = document.getElementById('results');
//     resultsDiv.innerHTML = "";  // Clear previous results

//     if (filteredResults.length === 0) {
//         resultsDiv.innerHTML = "<p>No matching destinations found.</p>";
//     } else {
//         filteredResults.forEach(result => {
//             resultsDiv.innerHTML += `
//                 <div class="recommendation">
//                     <h3>${result.name}</h3>
//                     <p>${result.description}</p>
//                     <img src="${result.image}" alt="${result.name}" />
//                 </div>
//             `;
//         });
//     }

//     // Fetch and display local time for cities if applicable
//     if (searchQuery.includes("toronto")) {
//         fetchLocalTime("America/Toronto");
//     }
// }