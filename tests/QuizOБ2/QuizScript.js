const questions = [
    {
        question: "Количество оборотных средств на рубль реализованной продукции показывает коэффициент:",
        answers: [
            { text: "материалоотдачи;", correct: false },
            { text: "загрузки средств в обороте;", correct: true },
            { text: "коэффициент оборачиваемости;", correct: false },
            { text: "время оборота", correct: false }
        ]
    },
    {
        question: "Об улучшении использования оборотных средств свидетельствует увеличение:",
        answers: [
            { text: "коэффициента оборачиваемости оборотных средств;", correct: true },
            { text: "длительности оборота оборотных средств;", correct: false },
            { text: "коэффициента загрузки средств в обороте;", correct: false },
            { text: "нет правильного ответа", correct: false }
        ]
    },
    {
        question: "Незавершенное производство при увеличении длительности производственного цикла:",
        answers: [
            { text: "уменьшается;", correct: false },
            { text: "не изменяется;", correct: false },
            { text: "увеличивается;", correct: true },
            { text: "нет правильного ответа", correct: false }
        ]
    },
    {
        question: "Какой показатель не используется при оценке эффективности оборотных средств:",
        answers: [
            { text: "коэффициент сменности;", correct: true },
            { text: "количество оборотов;", correct: false },
            { text: "длительность одного оборота;", correct: false },
            { text: "стоимость высвобождения оборотных средств", correct: false }
        ]
    },
    {
        question: "Выручка от реализации за квартал 200 тыс. руб., средний остаток оборотных средств – 40 тыс. руб. Количество оборотов оборотных средств равно:",
        answers: [
            { text: "5;", correct: true },
            { text: "0,2;", correct: false },
            { text: "18;", correct: false },
            { text: "800", correct: false }
        ]
    },
    {
        question: "Готовая продукция на складе, дебиторская задолженность относятся к:",
        answers: [
            { text: "медленно реализуемым оборотным средствам;", correct: false },
            { text: "быстро реализуемым;", correct: true },
            { text: "абсолютно ликвидным;", correct: false },
            { text: "все вышеперечисленное", correct: false }
        ]
    },
    {
        question: "По экономическому содержанию оборотные средства делятся на:",
        answers: [
            { text: "денежные средства и предметы труда;", correct: false },
            { text: "денежные средства и производственные запасы;", correct: false },
            { text: "оборотные производственные фонды и фонды обращения;", correct: true },
            { text: "готовую продукцию и дебиторскую задолженность", correct: false }
        ]
    },
    {
        question: "Оборотные производственные фонды по вещественному содержанию не включают:",
        answers: [
            { text: "производственные запасы сырья и материалов;", correct: false },
            { text: "полуфабрикаты собственного производства;", correct: false },
            { text: "ноу – хау;", correct: true },
            { text: "незавершенное производство", correct: false }
        ]
    },
    {
        question: "Коэффициент оборачиваемости оборотных средств показывает:",
        answers: [
            { text: "сумму оборотных средств для бесперебойной работы предприятия;", correct: false },
            { text: "время полного оборота оборотных средств;", correct: false },
            { text: "количество оборотов, совершаемых оборотными средствами за определенный период;", correct: true },
            { text: "нет правильного ответа", correct: false }
        ]
    },
    {
        question: "Какие виды запасов не включаются в производственные запасы:",
        answers: [
            { text: "текущие запасы;", correct: false },
            { text: "запасы неустановленного оборудования;", correct: true },
            { text: "транспортный запас;", correct: false },
            { text: "технологический запас", correct: false }
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