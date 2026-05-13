const questions = [
    {
        question: "По времени действия цены делятся на:",
        answers: [
            { text: "единые и региональные", correct: false },
            { text: "твердые, текущие, скользящие, сезонные", correct: true },
            { text: "оптовые, розничные, закупочные и др.", correct: false },
            { text: "текущие, средние, неизменные", correct: false }
        ]
    },
    {
        question: "Цены, устанавливаемые производителями продукции на основе спроса и предложения – это цены:",
        answers: [
            { text: "регулируемые", correct: false },
            { text: "в условиях полной или частичной монополизации рынка", correct: false },
            { text: "свободные", correct: true },
            { text: "договорно-контрактные", correct: false }
        ]
    },
    {
        question: "Розничная цена включает:",
        answers: [
            { text: "отпускную цену предприятия и наценку посреднических организаций", correct: false },
            { text: "оптовую рыночную цену и торговую наценку", correct: true },
            { text: "себестоимость продукции, прибыль предприятия, косвенные налоги", correct: false },
            { text: "себестоимость продукции, прибыль предприятия, наценку посреднических организаций", correct: false }
        ]
    },
    {
        question: "Затратный метод ценообразования – это:",
        answers: [
            { text: "способ включения в себестоимость процентов по долгосрочным кредитам", correct: false },
            { text: "метод, учитывающий фактические затраты предприятия на производство и продажу продукции", correct: true },
            { text: "способ ускорения оборачиваемости оборотных средств", correct: false },
            { text: "все вышеперечисленное", correct: false }
        ]
    },
    {
        question: "Цены, действующие в пределах определенного периода времени (контракта) – это цены:",
        answers: [
            { text: "твердые", correct: true },
            { text: "текущие", correct: false },
            { text: "скользящие", correct: false },
            { text: "сезонные", correct: false }
        ]
    },
    {
        question: "Оптовая рыночная цена не включает:",
        answers: [
            { text: "наценки посреднических организаций", correct: false },
            { text: "торговые наценки", correct: true },
            { text: "прибыль предприятия", correct: false },
            { text: "себестоимость продукции", correct: false }
        ]
    },
    {
        question: "Какой показатель не участвует в формировании оптовой цены предприятия:",
        answers: [
            { text: "себестоимость единицы продукции", correct: false },
            { text: "уровень рентабельности, рассчитанный по себестоимости", correct: false },
            { text: "уровень рентабельности, рассчитанный по основным производственным фондам", correct: true },
            { text: "нет правильного ответа", correct: false }
        ]
    },
    {
        question: "Цены, складывающиеся на рынке под воздействием спроса и предложения относятся к:",
        answers: [
            { text: "регулируемым", correct: false },
            { text: "фиксированным", correct: false },
            { text: "свободным", correct: true },
            { text: "частично регулируемым", correct: false }
        ]
    },
    {
        question: "Эластичность спроса по цене показывает:",
        answers: [
            { text: "реакцию спроса на изменение качества товара", correct: false },
            { text: "реакцию спроса на изменение цены товара", correct: true },
            { text: "реакцию спроса на предложение при неизменных ценах", correct: false },
            { text: "реакцию спроса на изменение дохода потребителя", correct: false }
        ]
    },
    {
        question: "Цена товара – это:",
        answers: [
            { text: "затраты на производство единицы продукции", correct: false },
            { text: "стоимость товара", correct: false },
            { text: "денежное выражение стоимости единицы продукции", correct: true },
            { text: "потребительная стоимость товара", correct: false }
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