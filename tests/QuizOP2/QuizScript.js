const questions = [
    {
        question: "Продолжите фразу «Акции должны быть обеспечены…»",
        answers: [
            { text: "имуществом", correct: true },
            { text: "валютой", correct: false },
            { text: "юридическим оформлением", correct: false },
            { text: "акционерами", correct: false }
        ]
    },
    {
        question: "Дайте название капиталу акционерного общества, который состоит из номинальной стоимости акций, приобретенных акционерами, и определяет минимальный размер имущества общества, гарантирующий интересы его кредиторов.",
        answers: [
            { text: "уставный", correct: true },
            { text: "балансовый", correct: false },
            { text: "первоначальный", correct: false },
            { text: "стартовый", correct: false },
            { text: "собственный", correct: false }
        ]
    },
    {
        question: "Как классифицируются предприятия по степени концентрации?",
        answers: [
            { text: "крупные акционерные общества и унитарные предприятия", correct: false },
            { text: "малые, средние, крупные", correct: true },
            { text: "коммерческие и некоммерческие", correct: false },
            { text: "совместные и иностранные", correct: false },
            { text: "специализированные и неспециализированные", correct: false }
        ]
    },
    {
        question: "Как классифицируются предприятия по целям деятельности?",
        answers: [
            { text: "акционерные общества и унитарные предприятия", correct: false },
            { text: "малые, средние, крупные", correct: false },
            { text: "коммерческие и некоммерческие", correct: true },
            { text: "совместные и иностранные", correct: false }
        ]
    },
    {
        question: "Как классифицируются предприятия по участию иностранного капитала?",
        answers: [
            { text: "акционерные общества и унитарные предприятия", correct: false },
            { text: "малые, средние, крупные", correct: false },
            { text: "коммерческие и некоммерческие", correct: false },
            { text: "совместные, зарубежные и иностранные", correct: true }
        ]
    },
    {
        question: "Как классифицируются предприятия по организационно-правовым формам?",
        answers: [
            { text: "средние, крупные", correct: false },
            { text: "коммерческие и некоммерческие", correct: false },
            { text: "акционерные общества, хозяйственные товарищества, хозяйственные общества, унитарные предприятия", correct: true },
            { text: "совместные и иностранные", correct: false }
        ]
    },
    {
        question: "Что является основным учредительным документом акционерного общества?",
        answers: [
            { text: "устав и учредительный договор", correct: true },
            { text: "учредительный договор", correct: false },
            { text: "акция", correct: false },
            { text: "коллективный договор", correct: false }
        ]
    },
    {
        question: "Как называется установленная в законодательном порядке процедура легализации деятельности субъектов хозяйствования?",
        answers: [
            { text: "организационное оформление", correct: false },
            { text: "государственная регистрация", correct: true },
            { text: "ликвидация", correct: false },
            { text: "лицензирование", correct: false }
        ]
    },
    {
        question: "Как называется юридическое лицо, уставный фонд которого состоит из доли иностранного инвестора и доли отечественных партнеров - физических и (или) юридических лиц?",
        answers: [
            { text: "зарубежное предприятие", correct: false },
            { text: "иностранное предприятие", correct: false },
            { text: "совместное предприятие", correct: true },
            { text: "коллективное предприятие", correct: false }
        ]
    },
    {
        question: "Как называется ценная бумага, свидетельствующая о вкладе ее владельца в уставный фонд акционерного общества и дающая право ее владельцу на участие в управлении и получении доли прибыли?",
        answers: [
            { text: "сертификат", correct: false },
            { text: "акция", correct: true },
            { text: "дивиденды", correct: false },
            { text: "расписка", correct: false },
            { text: "лицензия", correct: false }
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