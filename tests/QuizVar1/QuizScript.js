const questions = [
    {
        question: "Средства труда многократно используемые в процессе производства, постепенно изнашиваемые и переносящие свою стоимость на стоимость готовой продукции – это:",
        answers: [
            { text: "оборотные средства;", correct: false },
            { text: "оборотные фонды;", correct: false },
            { text: "основные фонды.", correct: true }
        ]
    },
    {
        question: "Амортизация основных фондов – это:",
        answers: [
            { text: "стоимость оборудования;", correct: false },
            { text: "перенесение стоимости основных фондов на себестоимость продукции;", correct: true },
            { text: "содержание основных фондов.", correct: false }
        ]
    },
    {
        question: "Какие из перечисленных позиций относятся к фондам обращения?",
        answers: [
            { text: "полуфабрикаты собственного производства;", correct: false },
            { text: "денежные средства в кассе;", correct: true },
            { text: "прибыль предприятия.", correct: false }
        ]
    },
    {
        question: "Что из перечисленного входит в состав оборотных средств предприятия?",
        answers: [
            { text: "запасы сырья, материалов, топлива;", correct: true },
            { text: "транспортные средства;", correct: false },
            { text: "вычислительная техника.", correct: false }
        ]
    },
    {
        question: "Какие из перечисленных позиций входят в состав ОПФ?",
        answers: [
            { text: "незавершенное производство;", correct: false },
            { text: "готовая продукция;", correct: false },
            { text: "здания, сооружения, передаточные устройства.", correct: true }
        ]
    },
    {
        question: "Отношение выручки от реализации продукции к стоимости ОПФ – это:",
        answers: [
            { text: "фондоотдача;", correct: true },
            { text: "фондовооруженность;", correct: false },
            { text: "фондоемкость.", correct: false }
        ]
    },
    {
        question: "Какие позиции характеризуют коэффициент оборачиваемости оборотных средств?",
        answers: [
            { text: "объем реализованной продукции в расчете на 1 руб. оборотных фондов;", correct: false },
            { text: "количество оборотов оборотных средств за соответствующий период;", correct: true },
            { text: "продолжительность одного оборота оборотных средств.", correct: false }
        ]
    },
    {
        question: "Разница между первоначальной стоимостью основных фондов и стоимостью износа – это:",
        answers: [
            { text: "восстановительная стоимость;", correct: false },
            { text: "ликвидационная стоимость;", correct: false },
            { text: "остаточная стоимость.", correct: true }
        ]
    },
    {
        question: "Фондоемкость определяется как отношение:",
        answers: [
            { text: "стоимости ОПФ к выручке от продажи продукции;", correct: true },
            { text: "выручки от реализации продукции к стоимости ОПФ;", correct: false },
            { text: "стоимости оборотных средств к стоимости ОПФ.", correct: false }
        ]
    },
    {
        question: "Это стоимость основных фондов, включающая стоимость (цену) приобретенного элемента основных фондов, а также затраты на доставку, монтаж, наладку, ввод в действие:",
        answers: [
            { text: "остаточная стоимость;", correct: false },
            { text: "восстановительная стоимость;", correct: false },
            { text: "первоначальная стоимость.", correct: true }
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