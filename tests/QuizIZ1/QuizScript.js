const questions = [
    {
        question: "Место и направление использования затрат учитывает классификация:",
        answers: [
            { text: "поэлементная", correct: false },
            { text: "калькуляционная", correct: true },
            { text: "производственная", correct: false },
            { text: "функциональная", correct: false }
        ]
    },
    {
        question: "Расходы всех структурных подразделений организации, участвующих в производстве называются",
        answers: [
            { text: "калькуляцией", correct: false },
            { text: "структурой себестоимости", correct: false },
            { text: "сметой затрат на производство и реализацию продукции", correct: true },
            { text: "нет правильного ответа", correct: false }
        ]
    },
    {
        question: "В смете затрат на производство не отражается элемент",
        answers: [
            { text: "материальные затраты", correct: false },
            { text: "затраты на оплату труда", correct: false },
            { text: "цеховая себестоимость", correct: true },
            { text: "амортизация основных средств и нематериальных активов", correct: false }
        ]
    },
    {
        question: "По способу отнесения на себестоимость единицы продукции выделяют затраты",
        answers: [
            { text: "текущие и накладные", correct: false },
            { text: "прямые и косвенные", correct: false },
            { text: "постоянные и переменные", correct: true },
            { text: "простые и комплексные", correct: false }
        ]
    },
    {
        question: "Документ, в котором оформляется расчет себестоимости единицы продукции (работ, услуг), называется",
        answers: [
            { text: "калькуляцией", correct: true },
            { text: "сметой затрат", correct: false },
            { text: "себестоимостью продукции", correct: false },
            { text: "нет правильного ответа", correct: false }
        ]
    },
    {
        question: "Точка безубыточности определяется как",
        answers: [
            { text: "отношение общих постоянных издержек к постоянным издержкам на единицу продукции", correct: false },
            { text: "отношение себестоимости выпуска продукции на себестоимость единицы", correct: false },
            { text: "отношение общих переменных затрат к затратам на единицу продукции", correct: true },
            { text: "нет правильного ответа", correct: false }
        ]
    },
    {
        question: "При снижении объема производства продукции по сравнению с базисным периодом при прочих равных условиях себестоимость единицы продукции:",
        answers: [
            { text: "снижается", correct: false },
            { text: "повышается", correct: true },
            { text: "остается неизменной", correct: false },
            { text: "нет правильного ответа", correct: false }
        ]
    },
    {
        question: "Какие элементы затрат не включаются в цеховую себестоимость:",
        answers: [
            { text: "заработная плата основных производственных рабочих", correct: false },
            { text: "стоимость всех видов энергии", correct: true },
            { text: "стоимость основных материалов", correct: false },
            { text: "общепроизводственные расходы", correct: false }
        ]
    },
    {
        question: "Себестоимость продукции – это:",
        answers: [
            { text: "уменьшение экономических выгод в результате выбытия активов и (или) возникновения обязательств, приводящее к уменьшению капитала организации", correct: false },
            { text: "выраженные в денежной форме текущие затраты на ее производство", correct: true },
            { text: "показатель, характеризующий конечный результат производственной или коммерческой деятельности предприятия", correct: false },
            { text: "подготовка рабочего места, полная его загрузка, применение передовых методов и приемов труда", correct: false }
        ]
    },
    {
        question: "При снижении объема производства продукции по сравнению с базисным периодом при прочих равных условиях себестоимость единицы продукции:",
        answers: [
            { text: "снижается", correct: false },
            { text: "повышается", correct: true },
            { text: "остается неизменной", correct: false },
            { text: "нет правильного ответа", correct: false }
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