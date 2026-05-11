const questions = [
    {
        question: "Что характеризует категория себестоимости продукции в машиностроительном производстве:",
        answers: [
            { text: "отраслевые затраты", correct: false },
            { text: "общественно необходимые затраты", correct: false },
            { text: "индивидуальные затраты предприятия", correct: true },
            { text: "средние народнохозяйственные затраты", correct: false },
            { text: "минимальные мировые затраты", correct: false }
        ]
    },
    {
        question: "К себестоимости продукции машиностроения относятся:",
        answers: [
            { text: "текущие затраты на производство", correct: false },
            { text: "капитальные затраты", correct: false },
            { text: "выраженные в денежной форме затраты предприятия на производство и реализацию продукции", correct: true },
            { text: "затраты на сырье, материалы и заработную плату работающих", correct: false },
            { text: "затраты на оборудование", correct: false }
        ]
    },
    {
        question: "Назначение классификации затрат на производство по экономическим элементам затрат:",
        answers: [
            { text: "расчет себестоимости единицы конкретного вида продукции", correct: false },
            { text: "основание для составления сметы затрат на производство", correct: true },
            { text: "исчисление затрат на материалы", correct: false },
            { text: "определение затрат на заработную плату", correct: false },
            { text: "установление цены изделия", correct: false }
        ]
    },
    {
        question: "Назначение классификации по калькуляционным статьям расходов:",
        answers: [
            { text: "определение цены на заготовку деталей и узлов", correct: false },
            { text: "исчисление прямых и косвенных расходов", correct: false },
            { text: "расчет себестоимости единицы конкретного вида продукции", correct: true },
            { text: "служить основой для составления сметы затрат на производство", correct: false }
        ]
    },
    {
        question: "К группировке затрат по экономическим элементам не относятся затраты на:",
        answers: [
            { text: "топливо и энергию на технологические цели", correct: true },
            { text: "основную заработную плату производственных рабочих", correct: false },
            { text: "амортизацию основных фондов", correct: false },
            { text: "расходы на рекламу", correct: false },
            { text: "дополнительную заработную плату производственных рабочих", correct: false }
        ]
    },
    {
        question: "Неполная производственная (цеховая) себестоимость продукции включает затраты:",
        answers: [
            { text: "цеха на выполнение технологических операций", correct: false },
            { text: "предприятия на производство данного вида продукции", correct: false },
            { text: "цеха на управление производством", correct: false },
            { text: "цеха на выполнение технологических операций и управление цехом", correct: true }
        ]
    },
    {
        question: "Полная производственная себестоимость продукции включает:",
        answers: [
            { text: "затраты цеха на производство данного вида продукции", correct: false },
            { text: "цеховую себестоимость и общехозяйственные расходы", correct: true },
            { text: "затраты на производство и сбыт продукции", correct: false },
            { text: "технологическую себестоимость", correct: false },
            { text: "коммерческую себестоимость", correct: false }
        ]
    },
    {
        question: "Себестоимость или издержки производства представляют собой:",
        answers: [
            { text: "расходы, непосредственно связанные с производством", correct: false },
            { text: "затраты на подготовку производства", correct: false },
            { text: "суммарные затраты на производство и продажу продукции, выраженные в денежной форме", correct: true },
            { text: "затраты, связанные с совершенствованием продукции, повышением квалификации работников", correct: false }
        ]
    },
    {
        question: "По отношению к объему производства затраты подразделяются на:",
        answers: [
            { text: "производственные и непроизводственные", correct: false },
            { text: "прямые и косвенные", correct: false },
            { text: "переменные и постоянные", correct: true },
            { text: "текущие и единовременные", correct: false }
        ]
    },
    {
        question: "По способу отнесения на себестоимость продукции затраты подразделяются на:",
        answers: [
            { text: "производственные и непроизводственные", correct: false },
            { text: "прямые и косвенные", correct: true },
            { text: "переменные и постоянные", correct: false },
            { text: "текущие и единовременные", correct: false }
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