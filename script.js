// Select elements from the DOM
const quoteContainer = document.querySelector('.quote-container');
const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const generateBtn = document.getElementById('generate-btn');

// API URL for fetching random quotes with CORS proxy
const quoteApiUrl = 'https://cors-anywhere.herokuapp.com/https://zenquotes.io/api/random';

// Function to fetch and display a random quote
function fetchAndDisplayQuote() {
    console.log('Fetching quote...');
    fetch(quoteApiUrl)
        .then(response => {
            console.log('Received response:', response);
            return response.json();
        })
        .then(data => {
            console.log('Received data:', data);
            if (data.length > 0) {
                const quote = data[0];
                console.log('Quote:', quote);
                // Update the quote and author elements
                quoteElement.textContent = quote.q;
                authorElement.textContent = `- ${quote.a}`;
            } else {
                console.error('No quotes received from API');
            }
        })
        .catch(error => console.error('Error:', error));
}

// Generate a random quote on page load
fetchAndDisplayQuote();

// Add event listener to generate button
generateBtn.addEventListener('click', fetchAndDisplayQuote);