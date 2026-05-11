const questions = [
    {
        question: "Производство относится к трудоемкому, если в структуре себестоимости наибольший удельный вес приходится на:",
        answers: [
            { text: "амортизацию", correct: false },
            { text: "основные материалы", correct: false },
            { text: "заработную плату", correct: true },
            { text: "энергию всех видов", correct: false }
        ]
    },
    {
        question: "С изменением объема производства и продаж продукции изменяется общая сумма:",
        answers: [
            { text: "условно-переменных затрат и их уровень в расчете на единицу продукции", correct: false },
            { text: "условно-постоянных затрат и их уровень в расчете на единицу продукции", correct: false },
            { text: "условно-переменных затрат, а их уровень остается неизменным в расчете на единицу продукции", correct: true },
            { text: "условно-постоянных затрат, а их уровень остается неизменным в расчете на единицу продукции", correct: false }
        ]
    },
    {
        question: "Какая из названных статей не относится к косвенным расходам:",
        answers: [
            { text: "затраты на сырье и материалы", correct: true },
            { text: "цеховые расходы", correct: false },
            { text: "общезаводские расходы", correct: false },
            { text: "расходы на рекламу", correct: false }
        ]
    },
    {
        question: "По способу включения в себестоимость затраты делятся на:",
        answers: [
            { text: "основные и накладные", correct: false },
            { text: "прямые и косвенные", correct: true },
            { text: "простые и комплексные", correct: false },
            { text: "производственные и коммерческие", correct: false }
        ]
    },
    {
        question: "Смета затрат не включает:",
        answers: [
            { text: "отчисления на социальные нужды", correct: false },
            { text: "общепроизводственные расходы", correct: true },
            { text: "амортизацию", correct: false },
            { text: "материальные затраты", correct: false },
            { text: "затраты на оплату труда", correct: false }
        ]
    },
    {
        question: "К комплексным статьям затрат в себестоимости продукции не относятся:",
        answers: [
            { text: "коммерческие расходы", correct: false },
            { text: "общепроизводственные расходы", correct: false },
            { text: "общехозяйственные расходы", correct: false },
            { text: "материальные затраты", correct: true }
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
        question: "При изменении объема производства условно-переменные затраты в себестоимости всего выпуска продукции:",
        answers: [
            { text: "уменьшаются пропорционально росту объемов производства", correct: false },
            { text: "растут пропорционально уменьшению объемов производства", correct: false },
            { text: "не зависят от динамики объемов производства", correct: false },
            { text: "уменьшаются пропорционально снижению объема производства", correct: true }
        ]
    },
    {
        question: "При изменении объема производства условно-постоянные затраты в себестоимости всего выпуска продукции:",
        answers: [
            { text: "растут пропорционально увеличению объемов производства", correct: false },
            { text: "не зависят от динамики объемов производства", correct: true },
            { text: "уменьшаются пропорционально снижению объемов производства", correct: false },
            { text: "уменьшаются пропорционально росту объемов производства", correct: false }
        ]
    },
    {
        question: "Определение безубыточного объема продаж предприятия графическим способом предполагает нахождение точки пересечения линий:",
        answers: [
            { text: "постоянных и переменных затрат", correct: false },
            { text: "переменных затрат и выручки", correct: false },
            { text: "постоянных затрат и выручки", correct: false },
            { text: "совокупных затрат (полной себестоимости) и выручки", correct: true }
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