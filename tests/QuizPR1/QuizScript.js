const questions = [
    {
        question: "Общественно-необходимые затраты труда на выпуск и реализацию продукции отражает функция цены:",
        answers: [
            { text: "стимулирующая", correct: false },
            { text: "учетная", correct: true },
            { text: "сбалансирования спроса и предложения", correct: false },
            { text: "распределительная", correct: false }
        ]
    },
    {
        question: "По стадии товародвижения цены делятся на:",
        answers: [
            { text: "единые и региональные", correct: false },
            { text: "твердые, текущие, скользящие, сезонные", correct: false },
            { text: "оптовые, розничные, отпускные", correct: true },
            { text: "текущие, средние, неизменные", correct: false }
        ]
    },
    {
        question: "По срокам действия цены делятся на:",
        answers: [
            { text: "единые и региональные", correct: false },
            { text: "твердые, текущие, скользящие, сезонные", correct: true },
            { text: "оптовые, розничные, закупочные и др.", correct: false },
            { text: "текущие, средние, неизменные", correct: false }
        ]
    },
    {
        question: "Цены, меняющиеся в рамках одного контракта и отражающие изменение ситуации на рынке – это цены:",
        answers: [
            { text: "твердые", correct: false },
            { text: "текущие", correct: false },
            { text: "скользящие", correct: true },
            { text: "сезонные", correct: false }
        ]
    },
    {
        question: "Отпускная цена предприятия включает:",
        answers: [
            { text: "себестоимость продукции, прибыль предприятия", correct: false },
            { text: "себестоимость продукции, прибыль предприятия, наценку посреднических организаций", correct: false },
            { text: "себестоимость продукции, косвенные налоги", correct: false },
            { text: "себестоимость продукции, прибыль предприятия, косвенные налоги", correct: true }
        ]
    },
    {
        question: "Система франкирования показывает:",
        answers: [
            { text: "состояние международной торговли конкретными товарами", correct: false },
            { text: "уровень цен, по которым внутренние подразделения фирмы обмениваются между собой факторами производства и продуктами", correct: false },
            { text: "количество посредников, участвующих в реализации товара", correct: false },
            { text: "до какого пункта по пути продвижения товара от продавца к покупателю продавец возмещает транспортные расходы", correct: true }
        ]
    },
    {
        question: "Через включение в цену косвенных налогов реализуется … функция цены:",
        answers: [
            { text: "стимулирующая", correct: false },
            { text: "учетная", correct: false },
            { text: "сбалансирования спроса и предложения", correct: false },
            { text: "распределительная", correct: true }
        ]
    },
    {
        question: "В зависимости от территории действия цены делятся на:",
        answers: [
            { text: "единые и региональные", correct: true },
            { text: "твердые, текущие, скользящие, сезонные", correct: false },
            { text: "оптовые, розничные, закупочные и др.", correct: false },
            { text: "текущие, средние, неизменные", correct: false }
        ]
    },
    {
        question: "Цены, устанавливаемые на изделия с длительным сроком изготовления, позволяющие учитывать изменения в издержках производства за период их производства – это цены:",
        answers: [
            { text: "твердые", correct: false },
            { text: "текущие", correct: false },
            { text: "скользящие", correct: true },
            { text: "сезонные", correct: false }
        ]
    },
    {
        question: "Оптовая рыночная цена включает:",
        answers: [
            { text: "себестоимость продукции, прибыль предприятия", correct: false },
            { text: "себестоимость продукции, прибыль предприятия, наценку посреднических организаций", correct: false },
            { text: "отпускную цену предприятия и наценку посреднических организаций", correct: true },
            { text: "себестоимость продукции, прибыль предприятия, косвенные налоги", correct: false }
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