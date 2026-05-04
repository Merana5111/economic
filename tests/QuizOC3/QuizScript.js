const questions = [
    {
        question: "Моральный износ второго вида (рода) происходит:",
        answers: [
            { text: "от бездействия основных фондов;", correct: false },
            { text: "в случае роста производительности труда в отраслях, изготавливающих данные основные фонды;", correct: false },
            { text: "в результате влияния различных внешних условий;", correct: false },
            { text: "в результате появления машин того же назначения, но более производительных", correct: true }
        ]
    },
    {
        question: "К основным средствам относятся:",
        answers: [
            { text: "здания, сооружения, рабочий скот;", correct: true },
            { text: "транспортные средства, оборудование, готовая продукция, продуктивный скот;", correct: false },
            { text: "рабочий скот, многолетние насаждения, денежные средства;", correct: false },
            { text: "покупные полуфабрикат, готовая продукция, сырье", correct: false }
        ]
    },
    {
        question: "Показателем воспроизводства (изменения) основных средств не является коэффициент:",
        answers: [
            { text: "прироста;", correct: false },
            { text: "обновления;", correct: false },
            { text: "выбытия;", correct: false },
            { text: "интенсивности использования станочного парка", correct: true }
        ]
    },
    {
        question: "Полная первоначальная стоимость – это:",
        answers: [
            { text: "оценка воспроизводства основных средств в современных условиях на момент переоценки;", correct: false },
            { text: "сумма фактических затрат в действующих ценах на приобретение или создание средств труда;", correct: true },
            { text: "стоимость, по которой основные средства учитываются в балансе предприятия по данным бух. учета об их наличии и движении;", correct: false },
            { text: "нет правильного ответа", correct: false }
        ]
    },
    {
        question: "Моральный износ происходит:",
        answers: [
            { text: "от бездействия основных средств;", correct: false },
            { text: "в случае роста производительности труда в отраслях, изготавливающих данные основные средства;", correct: true },
            { text: "в результате влияния различных внешних условий;", correct: false },
            { text: "нет правильного ответа", correct: false }
        ]
    },
    {
        question: "Быстрое развитие НТП влечет за собой:",
        answers: [
            { text: "снижение нормы амортизации;", correct: false },
            { text: "увеличение срока службы основных средств;", correct: false },
            { text: "более высокую норму амортизации и меньший срок службы основных средств;", correct: true },
            { text: "замедление морального устаревания", correct: false }
        ]
    },
    {
        question: "Первоначальная стоимость основных средств 500 тыс. руб., срок полезного использования 5 лет, коэффициент ускорения – 2. Амортизационные отчисления за первый год, начисленные способом уменьшаемого остатка составили:",
        answers: [
            { text: "50 тыс. руб.;", correct: false },
            { text: "100 тыс. руб.;", correct: false },
            { text: "200 тыс. руб.;", correct: true },
            { text: "250 тыс. руб.", correct: false }
        ]
    },
    {
        question: "Коэффициент сменности определяется как отношение:",
        answers: [
            { text: "количества отработанных станко-смен за сутки к среднегодовой стоимости нормы оборудования;", correct: false },
            { text: "количества смен, отработанных за сутки, к количеству установленного оборудования;", correct: false },
            { text: "количества работающего оборудования в наибольшую смену к количеству наличного оборудования;", correct: false },
            { text: "количества отработанных станко-смен за сутки (станков за все смены) к количеству работающего оборудования", correct: true }
        ]
    },
    {
        question: "Уровень использования машин и оборудования по их производительности характеризует:",
        answers: [
            { text: "интегральный коэффициент;", correct: false },
            { text: "коэффициент экстенсивного использования;", correct: false },
            { text: "коэффициент интенсивного использования;", correct: true },
            { text: "показатель фондоотдачи", correct: false }
        ]
    },
    {
        question: "На предприятии за отчетный период объем выпуска и реализации продукции составляет 700 тыс. руб., среднегодовая стоимость основных производственных средств составила 350 тыс. руб. Фондоотдача составила:",
        answers: [
            { text: "2 руб./руб.;", correct: true },
            { text: "0,5 руб./руб.;", correct: false },
            { text: "1050 тыс. руб.;", correct: false },
            { text: "24,5 тыс. руб.", correct: false }
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