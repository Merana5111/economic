const questions = [
    {
        question: "Что включает понятие «валовая прибыль предприятия»:",
        answers: [
            { text: "выручку от реализации продукции", correct: false },
            { text: "денежное выражение стоимости товаров", correct: false },
            { text: "разность между выручкой от продаж продукции и полной производственной себестоимостью товарной продукции", correct: false },
            { text: "прибыль от реализации продукции, результат от прочей реализации доходы от внереализационных операций, расходы и убытки от внереализационных операций", correct: true },
            { text: "выручку от реализации продукции за вычетом акцизов", correct: false }
        ]
    },
    {
        question: "Прибыль от продаж определяют:",
        answers: [
            { text: "вычитанием из валовой прибыли коммерческих и управленческих расходов", correct: false },
            { text: "вычитанием из выручки от продаж полной себестоимости проданной продукции и НДС", correct: true },
            { text: "вычитанием из выручки от продаж полной производственной себестоимости", correct: false }
        ]
    },
    {
        question: "Прибыль до налогообложения определяется:",
        answers: [
            { text: "как разница между выручкой от продаж и полной себестоимостью проданной продукции", correct: false },
            { text: "как разница между прибылью от продаж и сальдо операционных и внереализационных доходов и расходов", correct: true },
            { text: "как разница между валовой прибылью и коммерческими и управленческими расходами", correct: false }
        ]
    },
    {
        question: "Прибыль от обычной деятельности определяют:",
        answers: [
            { text: "путем вычитания из прибыли до налогообложения налога на прибыль и иных аналогичных платежей", correct: true },
            { text: "вычитанием из выручки от продаж полной себестоимости проданной продукции", correct: false },
            { text: "вычитанием из прибыли от продаж налога на прибыль", correct: false }
        ]
    },
    {
        question: "Показатель чистой прибыли определяют:",
        answers: [
            { text: "вычитанием из прибыли от продаж налога на прибыль", correct: false },
            { text: "к прибыли от продаж прибавляют операционные и внереализационные доходы и вычитают операционные и внереализационные расходы", correct: false },
            { text: "к чистой прибыли от обычной деятельности прибавляют чрезвычайные доходы и из полученной суммы вычитают чрезвычайные расходы", correct: true }
        ]
    },
    {
        question: "Рентабельность предприятия — это:",
        answers: [
            { text: "получаемая предприятием прибыль", correct: false },
            { text: "относительная доходность или прибыльность (измеряемая в процентах) как отношение прибыли к затратам капитала", correct: true },
            { text: "отношение прибыли к средней стоимости основных фондов и оборотных средств", correct: false },
            { text: "балансовая прибыль на 1 руб. реализованной продукции", correct: false },
            { text: "отношение прибыли к цене изделия", correct: false }
        ]
    },
    {
        question: "Рентабельность продукции можно определить как отношение:",
        answers: [
            { text: "выручки от реализации к материальным затратам", correct: false },
            { text: "абсолютной величины прибыли к себестоимости продукции", correct: true },
            { text: "прибыли к материальным затратам", correct: false },
            { text: "прибыли к фонду оплаты труда", correct: false }
        ]
    },
    {
        question: "Источником уплаты налога на прибыль в открытом акционерном обществе может являться:",
        answers: [
            { text: "валовая выручка", correct: false },
            { text: "себестоимость", correct: false },
            { text: "валовая прибыль", correct: true },
            { text: "чистая прибыль", correct: false },
            { text: "резервный фонд", correct: false },
            { text: "заемные средства", correct: false }
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