/**
 * Simple Interactive Quiz Logic
 * This script handles checking the user's answer against the correct answer
 * and displays feedback on the HTML page.
 */

function checkAnswer() {
    // 1. Identify the Correct Answer for the current question (2 + 2 = 4).
    const correctAnswer = "4";

    // 2. Retrieve the User’s Answer
    // Use querySelector to find the radio input element that is both named 'quiz' AND is currently 'checked'.
    const selectedInput = document.querySelector('input[name="quiz"]:checked');
    
    let userAnswer = ""; 
    const feedbackElement = document.getElementById("feedback");

    // Check if an option was selected at all
    if (selectedInput) {
        // Access the 'value' property of the selected radio button
        userAnswer = selectedInput.value;
    }

    // 3. Compare the User’s Answer with the Correct Answer
    if (userAnswer === correctAnswer) {
        // Correct answer logic
        feedbackElement.textContent = "Correct! Well done.";
        feedbackElement.style.color = "green"; 
    } else if (userAnswer === "") {
        // No answer selected logic
        feedbackElement.textContent = "Please select an answer.";
        feedbackElement.style.color = "orange";
    }
    else {
        // Incorrect answer logic
        feedbackElement.textContent = "That's incorrect. Try again!";
        feedbackElement.style.color = "red"; 
    }
}

// 4. Add an Event Listener to the Submit Button
// Select the button by its ID
const submitButton = document.getElementById("submit-answer");

// Attach the checkAnswer function to the 'click' event.
// Note: We pass the function name without parentheses so it executes upon clicking, not immediately.
submitButton.addEventListener('click', checkAnswer);
