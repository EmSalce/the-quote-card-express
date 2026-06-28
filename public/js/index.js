'use strict';

const elements = {
  quote: document.getElementById('quote'),
  author: document.getElementById('author'),
};

const quotes = [
  {
    quote: 'All Hands! Abandon ship!',
    author: 'Captain Picard',
  },

  {
    quote: 'Doh!',
    author: 'Homer Simpson',
  },

  {
    quote:
      'The dreams of those who have fallen! The hopes of those who will follow! Those two sets of dreams weave together into a double helix, drilling a path towards tomorrow!',
    author: 'Simon, Gurren Lagann',
  },
];

function loopThroughQuotes() {
  let quoteIndex = 0;
  setInterval(() => {
    if (quoteIndex < quotes.length) {
      elements.quote.textContent = quotes[quoteIndex].quote;
      elements.author.textContent = quotes[quoteIndex].author;
      quoteIndex++;
    } else {
      quoteIndex = 0;
    }
  }, 3000);
}

setTimeout(loopThroughQuotes, 3000);
