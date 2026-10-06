let flashcards = [

    {
        question: "What is HTML?",
        answer: "HTML stands for HyperText Markup Language."
    },

    {
        question: "What is CSS?",
        answer: "CSS is used to style and design web pages."
    },

    {
        question: "What is JavaScript?",
        answer: "JavaScript is used to add interactivity to web pages."
    }

];

let currentCard = 0;


// Display card

function displayCard() {

    document.getElementById("question").textContent =
        flashcards[currentCard].question;

    document.getElementById("answer").textContent =
        flashcards[currentCard].answer;

    document.getElementById("answer").style.display = "none";
}


// Show answer

function showAnswer() {

    document.getElementById("answer").style.display =
        "block";
}


// Next card

function nextCard() {

    currentCard++;

    if (currentCard >= flashcards.length) {

        currentCard = 0;
    }

    displayCard();
}


// Previous card

function previousCard() {

    currentCard--;

    if (currentCard < 0) {

        currentCard = flashcards.length - 1;
    }

    displayCard();
}


// Add card

function addCard() {

    let question =
        prompt("Enter your question:");

    let answer =
        prompt("Enter the answer:");

    if (question && answer) {

        flashcards.push({

            question: question,

            answer: answer

        });

        currentCard =
            flashcards.length - 1;

        displayCard();
    }
}


// Edit card

function editCard() {

    let newQuestion =
        prompt(
            "Edit question:",
            flashcards[currentCard].question
        );

    let newAnswer =
        prompt(
            "Edit answer:",
            flashcards[currentCard].answer
        );

    if (newQuestion && newAnswer) {

        flashcards[currentCard].question =
            newQuestion;

        flashcards[currentCard].answer =
            newAnswer;

        displayCard();
    }
}


// Delete card

function deleteCard() {

    if (flashcards.length === 1) {

        alert(
            "You must keep at least one card."
        );

        return;
    }

    flashcards.splice(currentCard, 1);

    if (currentCard >= flashcards.length) {

        currentCard =
            flashcards.length - 1;
    }

    displayCard();
}


// Show first card when app opens

displayCard();