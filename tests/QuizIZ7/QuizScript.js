const questions = [
    // Задание 1 (было соответствие) — разбито на 4 отдельных вопроса
    {
        question: "Установите соответствие: для косвенных затрат характерно:",
        answers: [
            { text: "Непосредственно связаны с производственным процессом, обусловлены технологией и организацией производства", correct: false },
            { text: "Нельзя отнести непосредственно к конкретной единице продукции", correct: true },
            { text: "Находятся в прямой зависимости от объема производства и изменяются прямо пропорционально его изменению", correct: false },
            { text: "Состоят из одного экономического элемента", correct: false }
        ]
    },
    {
        question: "Установите соответствие: для основных затрат характерно:",
        answers: [
            { text: "Непосредственно связаны с производственным процессом, обусловлены технологией и организацией производства", correct: true },
            { text: "Нельзя отнести непосредственно к конкретной единице продукции", correct: false },
            { text: "Находятся в прямой зависимости от объема производства и изменяются прямо пропорционально его изменению", correct: false },
            { text: "Состоят из одного экономического элемента", correct: false }
        ]
    },
    {
        question: "Установите соответствие: для переменных затрат характерно:",
        answers: [
            { text: "Непосредственно связаны с производственным процессом, обусловлены технологией и организацией производства", correct: false },
            { text: "Нельзя отнести непосредственно к конкретной единице продукции", correct: false },
            { text: "Находятся в прямой зависимости от объема производства и изменяются прямо пропорционально его изменению", correct: true },
            { text: "Состоят из одного экономического элемента", correct: false }
        ]
    },
    {
        question: "Установите соответствие: для простых затрат характерно:",
        answers: [
            { text: "Непосредственно связаны с производственным процессом, обусловлены технологией и организацией производства", correct: false },
            { text: "Нельзя отнести непосредственно к конкретной единице продукции", correct: false },
            { text: "Находятся в прямой зависимости от объема производства и изменяются прямо пропорционально его изменению", correct: false },
            { text: "Состоят из одного экономического элемента", correct: true }
        ]
    },
    // Задание 2 (было соответствие) — разбито на 4 отдельных вопроса
    {
        question: "Установите соответствие: группировка 'Постоянные и переменные' относится к критерию:",
        answers: [
            { text: "По экономической роли в процессе производства", correct: false },
            { text: "По способу включения в себестоимость продукции", correct: false },
            { text: "По отношению к объему производства", correct: true },
            { text: "По участию в процессе производства", correct: false }
        ]
    },
    {
        question: "Установите соответствие: группировка 'Основные и накладные' относится к критерию:",
        answers: [
            { text: "По экономической роли в процессе производства", correct: true },
            { text: "По способу включения в себестоимость продукции", correct: false },
            { text: "По отношению к объему производства", correct: false },
            { text: "По участию в процессе производства", correct: false }
        ]
    },
    {
        question: "Установите соответствие: группировка 'Прямые и косвенные' относится к критерию:",
        answers: [
            { text: "По экономической роли в процессе производства", correct: false },
            { text: "По способу включения в себестоимость продукции", correct: true },
            { text: "По отношению к объему производства", correct: false },
            { text: "По участию в процессе производства", correct: false }
        ]
    },
    {
        question: "Установите соответствие: группировка 'Производственные и коммерческие' относится к критерию:",
        answers: [
            { text: "По экономической роли в процессе производства", correct: false },
            { text: "По способу включения в себестоимость продукции", correct: false },
            { text: "По отношению к объему производства", correct: false },
            { text: "По участию в процессе производства", correct: true }
        ]
    },
    // Далее обычные вопросы (3-8 из исходного теста №7)
    {
        question: "Калькуляция себестоимости не включает статью:",
        answers: [
            { text: "общепроизводственные расходы", correct: false },
            { text: "коммерческие расходы", correct: false },
            { text: "общехозяйственные расходы", correct: false },
            { text: "заработная плата", correct: true }
        ]
    },
    {
        question: "По отношению к каким из перечисленных видов затрат распределяются косвенные общепроизводственные и общехозяйственные расходы на себестоимость единицы продукции:",
        answers: [
            { text: "к цеховой себестоимости", correct: false },
            { text: "к материальным затратам", correct: true },
            { text: "к затратам в нормо-часах", correct: true },
            { text: "к основной заработной плате рабочих", correct: false },
            { text: "к основной и дополнительной заработной плате рабочих", correct: false },
            { text: "к производственной себестоимости", correct: true }
        ]
    },
    {
        question: "Укажите, какие из статей затрат на производство продукции относятся к категории условно-постоянных:",
        answers: [
            { text: "основная заработная плата рабочих", correct: false },
            { text: "амортизация здания заводоуправления", correct: true },
            { text: "затраты на сырье и вспомогательные материалы", correct: false },
            { text: "топливо и энергия на технологические цели", correct: false }
        ]
    },
    {
        question: "Укажите, какие 3 (три) статьи затрат на производство продукции относятся к категории условно-постоянных:",
        answers: [
            { text: "основная заработная плата рабочих", correct: false },
            { text: "заработная плата административно-управленческого персонала", correct: true },
            { text: "затраты на инструмент", correct: true },
            { text: "затраты на сырье и вспомогательные материалы", correct: false },
            { text: "затраты на сырье и основные материалы", correct: false },
            { text: "оплата освещения производственных цехов", correct: true },
            { text: "топливо и энергия на технологические цели", correct: false }
        ]
    },
    {
        question: "Согласно бухгалтерскому учету, показатель неполной производственной себестоимости продукции определяется вычитанием из выручки от продажи продукции:",
        answers: [
            { text: "расходов по продаже", correct: false },
            { text: "общехозяйственных расходов и расходов по продаже", correct: true },
            { text: "общепроизводственных и общехозяйственных расходов и расходов по продаже", correct: false }
        ]
    },
    {
        question: "Укажите, какие из статей затрат на производство продукции не относятся к категории условно-переменных:",
        answers: [
            { text: "основная заработная плата рабочих", correct: false },
            { text: "амортизация здания цеха", correct: true },
            { text: "затраты на сырье и вспомогательные материалы", correct: false },
            { text: "топливо и энергия на технологические цели", correct: false }
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