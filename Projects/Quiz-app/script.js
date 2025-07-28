const quizData = [{
    question: "How many dots appear on a pair of dice?",
    options: ["12", "21", "42"],
    correctOption: "42",
}, {
    question: "Which country is credited with inventing ice cream?",
    options: ["China", "Pakistan", "Japan"],
    correctOption: "China"
}, {
    question: "What is the capital of Pakistan?",
    options: ["Karachi", "Islamabad", "Lahore"],
    correctOption: "Islamabad",
}]

const quizNumber = document.querySelector(".quiz-number");
const quizQuestion = document.querySelector(".quiz-question");
const radioInputs = document.querySelectorAll("input[type='radio']");
let currentQuestion = 0;

// 1. question aur options display hongay
displayQuestion();

let score = 0;
console.log("score is", score)

// 2. next ka button click hoga
const nextBtn = document.querySelector("button");
nextBtn.addEventListener("click", function () {

    // 3. selected input agr correct hai to score + 1, wrna aese hi rahega
    radioInputs.forEach(input => {
        if (input.checked) {
            const selectedOption = input.nextElementSibling.textContent;
            if (selectedOption === quizData[currentQuestion].correctOption) {
                score++;
            }

            input.checked = false;
        }
    });

    // 4. isi tarh agr questions abhi aur hain to next question display hoga, wrna scroe display hojayega
    if (currentQuestion < (quizData.length - 1)) {
        currentQuestion++;
        displayQuestion();
    } else {
        const quizSection = document.querySelector("#quiz-section");
        quizSection.style.display = "none";

        displayScore();
    }
})

function displayQuestion() {
    quizNumber.textContent = currentQuestion + 1;
    quizQuestion.textContent = quizData[currentQuestion].question;

    const textOptions = document.querySelectorAll("label span");
    textOptions.forEach((textOption, index) => {
        textOption.textContent = quizData[currentQuestion].options[index];
    })
}

function displayScore() {
    const scoreSection = document.querySelector("#score-section");

    const h3 = document.createElement("h3");
    h3.textContent = "Score";
    scoreSection.appendChild(h3);

    const p = document.createElement("p");
    p.textContent = "Your score is " + score + " out of " +
        (quizData.length) + ".";
    scoreSection.appendChild(p);

    const btn = document.createElement("button");
    btn.textContent = "Restart";
    scoreSection.appendChild(btn);
}
