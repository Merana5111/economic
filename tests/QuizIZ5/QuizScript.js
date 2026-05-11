const questions = [
    {
        question: "При уменьшении цены реализации объем продаж:",
        answers: [
            { text: "возрастет", correct: true },
            { text: "уменьшится", correct: false },
            { text: "не изменится", correct: false },
            { text: "не изменится или уменьшится", correct: false }
        ]
    },
    {
        question: "Расходы, не относящиеся к переменным:",
        answers: [
            { text: "затраты на сырье и основные материалы", correct: false },
            { text: "основная заработная платы производственных рабочих", correct: false },
            { text: "расходы на топливо и энергию на технологические цели", correct: false },
            { text: "цеховые расходы", correct: true }
        ]
    },
    {
        question: "Производственная себестоимость продукции не включает в себя:",
        answers: [
            { text: "затраты на сбыт продукции", correct: true },
            { text: "цеховую себестоимость", correct: false },
            { text: "общезаводские расходы", correct: false },
            { text: "общепроизводственные расходы", correct: false }
        ]
    },
    {
        question: "При формировании расходов элементами затрат не признаются:",
        answers: [
            { text: "материальные затраты", correct: false },
            { text: "затраты на оплату труда", correct: false },
            { text: "отчисления на социальные нужды", correct: false },
            { text: "основная заработная плата производственных рабочих", correct: true }
        ]
    },
    {
        question: "Цель группировки затрат по экономическим элементам:",
        answers: [
            { text: "определение себестоимости продукции на запланированный объем производства", correct: true },
            { text: "определение стоимости живого и прошлого труда на единицу продукции", correct: false },
            { text: "определение места возникновения затрат", correct: false },
            { text: "определение направления использования затрат", correct: false }
        ]
    },
    {
        question: "К комплексным статьям затрат в себестоимости продукции не относятся:",
        answers: [
            { text: "коммерческие расходы", correct: false },
            { text: "общепроизводственные расходы", correct: false },
            { text: "общехозяйственные расходы", correct: false },
            { text: "затраты на сырье и материалы", correct: true }
        ]
    },
    {
        question: "Какие затраты не относятся к прямым:",
        answers: [
            { text: "сырье и материалы", correct: false },
            { text: "возвратные отходы", correct: false },
            { text: "заработная плата основных производственных рабочих", correct: false },
            { text: "общепроизводственные расходы", correct: true }
        ]
    },
    {
        question: "Смета затрат не включает:",
        answers: [
            { text: "материальные затраты", correct: false },
            { text: "амортизация", correct: false },
            { text: "запасные части и другие материалы для ремонта основных средств", correct: true },
            { text: "прочие затраты", correct: false }
        ]
    },
    {
        question: "Полная себестоимость продукции отличается от величины производственной себестоимости на величину:",
        answers: [
            { text: "амортизационных отчислений", correct: false },
            { text: "расходов будущих периодов", correct: false },
            { text: "затрат на реализацию продукции", correct: true },
            { text: "прочих затрат", correct: false }
        ]
    },
    {
        question: "Объективной причиной повышения себестоимости продукции служит:",
        answers: [
            { text: "уровень автоматизации и механизации процессов производства", correct: false },
            { text: "инфляционный рост цен на потребляемые материальные ресурсы", correct: true },
            { text: "уровень организации труда", correct: false },
            { text: "уровень технологического развития производства", correct: false }
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