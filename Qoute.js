// DOM Elements
const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
const newQuoteButton = document.getElementById('new-quote');

// API URL
const API_URL = "https://api.quotable.io/random";

// Function to fetch a random quote from API
async function fetchQuote() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    quoteText.textContent = `"${data.content}"`;
    quoteAuthor.textContent = `- ${data.author}`;
  } catch (error) {
    quoteText.textContent = "Oops! Couldn't fetch a quote.";
    quoteAuthor.textContent = "";
    console.error("Error fetching quote:", error);
  }
}

// Event Listener
newQuoteButton.addEventListener('click', fetchQuote);

// Load a quote on page load
fetchQuote();
