const questions = [
    {
        question: "На уровне промышленной организации работы тарифицируются с 1 по 27 разряд",
        answers: [
            { text: "да", correct: false },
            { text: "нет", correct: true }
        ]
    },
    {
        question: "Единый тарифно–квалификационный справочник работ и рабочих представляет собой совокупность государственных нормативов, посредством которых осуществляется дифференциация и регулирование оплаты труда различных групп работников в зависимости от сложности и условий труда",
        answers: [
            { text: "да", correct: false },
            { text: "нет", correct: true }
        ]
    },
    {
        question: "Реальная заработная плата – «покупательная способность» номинальной зарплаты",
        answers: [
            { text: "да", correct: true },
            { text: "нет", correct: false }
        ]
    },
    {
        question: "Следует различать стимулирующую, воспроизводственную, регулирующую и информационную функции оплаты труда",
        answers: [
            { text: "да", correct: false },
            { text: "нет", correct: true }
        ]
    },
    {
        question: "Диапазон единой тарифной сетки – соотношение тарифного коэффициента максимального разряда и тарифного коэффициента 1-го разряда",
        answers: [
            { text: "да", correct: true },
            { text: "нет", correct: false }
        ]
    },
    {
        question: "Контракт – трудовой договор, который заключается в письменной форме на определенный срок, содержит особенности по сравнению с общими правилами законодательства о труде",
        answers: [
            { text: "да", correct: true },
            { text: "нет", correct: false }
        ]
    },
    {
        question: "Прогрессивная система оплаты труда, при которой заработная плата начисляется за объем произведенной продукции с выплатой премии за перевыполнение установленной нормы выработки",
        answers: [
            { text: "да", correct: false },
            { text: "нет", correct: true }
        ]
    },
    {
        question: "Сдельно-косвенная система применяется для оплаты труда основных рабочих",
        answers: [
            { text: "да", correct: false },
            { text: "нет", correct: true }
        ]
    },
    {
        question: "Сдельная расценка – это оплата труда за выпущенную продукцию",
        answers: [
            { text: "да", correct: false },
            { text: "нет", correct: true }
        ]
    },
    {
        question: "Часовая тарифная ставка – это оплата за отработанное время одним работником",
        answers: [
            { text: "да", correct: false },
            { text: "нет", correct: true }
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