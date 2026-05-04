
const questions = [
    {
        question: "Производственная трудоемкость представляет собой затраты труда:",
        answers: [
            { text: "основных рабочих;", correct: false },
            { text: "основных и вспомогательных рабочих;", correct: true },
            { text: "основных, вспомогательных рабочих, специалистов, служащих;", correct: false },
            { text: "основных, вспомогательных рабочих, специалистов, служащих руководителей", correct: false }
        ]
    },
    {
        question: "Выработка в натуральном или стоимостном выражении определяется как:",
        answers: [
            { text: "отношение объема товарной продукции к среднесписочной численности работников;", correct: true },
            { text: "отношение среднесписочной численности работников к объему товарной продукции;", correct: false },
            { text: "отношение количества отработанного времени к объему произведенной продукции", correct: false }
        ]
    },
    {
        question: "Уменьшение показателя производительности труда (выработка) рабочих сопровождается:",
        answers: [
            { text: "сокращением объема производства;", correct: true },
            { text: "неизменным объемом производимой продукции;", correct: false },
            { text: "увеличением объема производимой продукции", correct: false }
        ]
    },
    {
        question: "Какой из показателей является трудовым показателем производительности труда:",
        answers: [
            { text: "станкоемкость;", correct: false },
            { text: "трудоемкость;", correct: true },
            { text: "материалоемкость;", correct: false },
            { text: "фондоемкость;", correct: false },
            { text: "энергоемкость", correct: false }
        ]
    },
    {
        question: "Полная трудоемкость представляет собой затраты труда:",
        answers: [
            { text: "основных рабочих;", correct: false },
            { text: "основных и вспомогательных рабочих;", correct: false },
            { text: "основных, вспомогательных рабочих, специалистов, служащих;", correct: true },
            { text: "основных, вспомогательных рабочих, специалистов, служащих руководителей", correct: false }
        ]
    },
    {
        question: "Наибольшее распространение получил показатель выработки в:",
        answers: [
            { text: "натуральном выражении;", correct: false },
            { text: "условно-натуральном выражении;", correct: false },
            { text: "стоимостном;", correct: true },
            { text: "трудовом", correct: false }
        ]
    },
    {
        question: "Между нормами времени и нормами выработки существует:",
        answers: [
            { text: "прямая зависимость;", correct: false },
            { text: "обратная зависимость;", correct: true },
            { text: "связи не существует", correct: false }
        ]
    },
    {
        question: "Для измерения эффективности использования трудовых ресурсов используются показатели:",
        answers: [
            { text: "материалоемкости;", correct: false },
            { text: "трудоемкости;", correct: true },
            { text: "фондоемкости;", correct: false },
            { text: "выработки", correct: true }
        ]
    },
    {
        question: "Может быть применен только на предприятиях выпускающих однородную продукцию показатель выработки в:",
        answers: [
            { text: "стоимостном выражении;", correct: false },
            { text: "натуральном выражении;", correct: true },
            { text: "трудовом выражении", correct: false }
        ]
    },
    {
        question: "Технологическая трудоемкость представляет собой затраты труда:",
        answers: [
            { text: "основных рабочих;", correct: true },
            { text: "основных и вспомогательных рабочих;", correct: false },
            { text: "основных, вспомогательных рабочих, специалистов, служащих;", correct: false },
            { text: "основных, вспомогательных рабочих, специалистов, служащих руководителей", correct: false }
        ]
    }
];

function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = getRandomNumber(i + 1);
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const backtomenu = document.getElementById("backtomenu-btn");
const topics = document.getElementById("topics-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Далее";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    backtomenu.style.display = "none";
    topics.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `Вы набрали ${score} из ${questions.length} баллов!`;
    nextButton.innerHTML = "Пройти снова";
    nextButton.style.display = "block";
    backtomenu.innerHTML = "Вернуться на главную";
    backtomenu.style.display = "block";
    topics.innerHTML = "Вернуться к темам";
    topics.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        shuffleArray(questions);
        startQuiz();
    }
});

shuffleArray(questions);
startQuiz();