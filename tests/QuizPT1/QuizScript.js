const questions = [
    {
        question: "При увеличении объема производства в два раза численность ППП:",
        answers: [
            { text: "не изменится;", correct: false },
            { text: "увеличится в 2 раза;", correct: false },
            { text: "увеличится менее чем в 2 раза", correct: true }
        ]
    },
    {
        question: "Какой из показателей является показателем трудоемкости:",
        answers: [
            { text: "количество произведенной продукции, приходящееся на одного вспомогательного рабочего;", correct: false },
            { text: "затраты времени на производство единицы продукции;", correct: true },
            { text: "стоимость произведенной продукции, приходящаяся на единицу оборудования;", correct: false },
            { text: "стоимость произведенной продукции, приходящаяся на одного среднесписочного работника ППП;", correct: false },
            { text: "стоимость материалов, приходящаяся на одного рабочего", correct: false }
        ]
    },
    {
        question: "Какие показатели характеризуют уровень производительности труда:",
        answers: [
            { text: "фондоотдача;", correct: false },
            { text: "выработка на работающего;", correct: true },
            { text: "трудоемкость продукции;", correct: true },
            { text: "фондовооруженность труда", correct: false }
        ]
    },
    {
        question: "К какой категории промышленно – производственного персонала относятся наладчик карусельных станков; водитель электрокары; грузчик:",
        answers: [
            { text: "основные рабочие;", correct: false },
            { text: "вспомогательные рабочие;", correct: true },
            { text: "специалисты;", correct: false },
            { text: "служащие", correct: false }
        ]
    },
    {
        question: "Ответственность предприятия перед наемными работниками вызывает необходимость:",
        answers: [
            { text: "выбора рационального метода ценообразования;", correct: false },
            { text: "осуществления автоматизации производства;", correct: true },
            { text: "создания условий высокопроизводительного труда;", correct: true },
            { text: "проведение маркетинговых исследований.", correct: false }
        ]
    },
    {
        question: "Что характеризует производительность труда:",
        answers: [
            { text: "эффективность затрат труда;", correct: true },
            { text: "эффективность использования оборудования;", correct: false },
            { text: "эффективность использования материальных ресурсов", correct: false }
        ]
    },
    {
        question: "При выпуске разнородной и незавершенной производством продукции применяется преимущественно:",
        answers: [
            { text: "стоимостной метод определения выработки;", correct: false },
            { text: "трудовой метод определения выработки;", correct: true },
            { text: "натуральный метод;", correct: false },
            { text: "условно-натуральный", correct: false }
        ]
    },
    {
        question: "Если темпы роста производительности труда на планируемый период превышают темпы роста объема производства продукции, то это требует:",
        answers: [
            { text: "дополнительной численности рабочих;", correct: false },
            { text: "не связаны с изменением численности рабочих;", correct: false },
            { text: "сокращения существующей численности", correct: true }
        ]
    },
    {
        question: "Какой из показателей является стоимостным показателем производительности труда:",
        answers: [
            { text: "количество произведенной продукции, приходящееся на одного вспомогательного рабочего;", correct: false },
            { text: "затраты времени на производство единицы продукции;", correct: false },
            { text: "стоимость произведенной продукции, приходящаяся на единицу оборудования;", correct: false },
            { text: "стоимость произведенной продукции, приходящаяся на одного среднесписочного работника ППП;", correct: true },
            { text: "стоимость материалов, приходящаяся на одного рабочего", correct: false }
        ]
    },
    {
        question: "Какое из понятий характеризует выработку:",
        answers: [
            { text: "количество продукции, произведенное в среднем на одном станке;", correct: false },
            { text: "стоимость произведенной продукции, приходящейся на одного среднесписочного работника ППП (рабочего);", correct: true },
            { text: "время на производство запланированного объема продукции;", correct: false },
            { text: "номенклатура выпускаемой продукции;", correct: false },
            { text: "стоимость основной продукции, приходящейся на одного рабочего", correct: true }
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