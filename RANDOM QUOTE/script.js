const quotes = [

    {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },

    {
        text: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },

    {
        text: "Success is not final, failure is not fatal.",
        author: "Winston Churchill"
    },

    {
        text: "It always seems impossible until it's done.",
        author: "Nelson Mandela"
    },

    {
        text: "The future depends on what you do today.",
        author: "Mahatma Gandhi"
    },

    {
        text: "Dream big and dare to fail.",
        author: "Norman Vincent Peale"
    },

    {
        text: "Do something today that your future self will thank you for.",
        author: "Unknown"
    },

    {
        text: "Great things are done by a series of small things brought together.",
        author: "Vincent van Gogh"
    }

];


function newQuote() {

    const randomIndex =
        Math.floor(Math.random() * quotes.length);

    const randomQuote =
        quotes[randomIndex];

    document.getElementById("quote").textContent =
        '"' + randomQuote.text + '"';

    document.getElementById("author").textContent =
        "— " + randomQuote.author;
}


newQuote();