const questions = [
    {
        question: "Факторы снижения затрат, не зависящие от промышленной организации:",
        answers: [
            { text: "организация и нормирование труда персонала", correct: false },
            { text: "использование оборудования", correct: false },
            { text: "конструкция изделий", correct: false },
            { text: "цены на материалы и комплектующие изделия", correct: true }
        ]
    },
    {
        question: "Какова цель группировки по калькуляционным статьям:",
        answers: [
            { text: "определение потребности в текущих затратах", correct: false },
            { text: "определение себестоимости единицы изделия", correct: true },
            { text: "определение структуры себестоимости произведенной продукции", correct: false },
            { text: "разработка плана снижения себестоимости", correct: false }
        ]
    },
    {
        question: "При изменении объема производства условно-постоянные затраты в себестоимости единицы продукции:",
        answers: [
            { text: "растут пропорционально увеличению объемов производства", correct: false },
            { text: "составляют постоянную величину", correct: false },
            { text: "уменьшаются пропорционально снижению объемов производства", correct: false },
            { text: "уменьшаются пропорционально росту объемов производства", correct: true }
        ]
    },
    {
        question: "При изменении объема производства условно-переменные затраты в себестоимости всего выпуска продукции:",
        answers: [
            { text: "растут пропорционально увеличению объемов производства", correct: true },
            { text: "растут пропорционально уменьшению объемов производства", correct: false },
            { text: "не зависят от динамики объемов производства", correct: false },
            { text: "уменьшаются пропорционально росту объемов производства", correct: false }
        ]
    },
    {
        question: "При уменьшении постоянных затрат объем продаж:",
        answers: [
            { text: "возрастет", correct: false },
            { text: "уменьшится", correct: false },
            { text: "не изменится", correct: true },
            { text: "возрастет или не изменится", correct: false }
        ]
    },
    {
        question: "С изменением объема производства и продаж продукции изменяется:",
        answers: [
            { text: "уровень условно-постоянных затрат в расчете на единицу продукции, а их общая сумма остается неизменной", correct: false },
            { text: "уровень условно-переменных затрат в расчете на единицу продукции, а их общая сумма остается неизменной", correct: false },
            { text: "общая сумма условно-переменных затрат и их уровень в расчете на единицу продукции", correct: false },
            { text: "общая сумма условно-постоянных затрат и их уровень в расчете на единицу продукции", correct: true }
        ]
    },
    {
        question: "Какие из названных позиций относятся к переменным издержкам производства:",
        answers: [
            { text: "затраты на сырье и материалы", correct: true },
            { text: "затраты на отопление и освещение", correct: false },
            { text: "отчисления на социальные нужды", correct: false },
            { text: "оплата труда управленческого персонала", correct: false }
        ]
    },
    {
        question: "Калькуляция составляется с целью:",
        answers: [
            { text: "определения цены продукции", correct: false },
            { text: "составления сметы затрат на производство", correct: false },
            { text: "расчета себестоимости единицы продукции", correct: true },
            { text: "исчисления прямых и косвенных затрат", correct: false }
        ]
    },
    {
        question: "В основу деления затрат на условно-постоянные и условно-переменные положен признак:",
        answers: [
            { text: "состав затрат", correct: false },
            { text: "способ включения затрат в себестоимость продукции", correct: false },
            { text: "связь с объемом выпуска", correct: true },
            { text: "комплексность затрат", correct: false }
        ]
    },
    {
        question: "При превышении темпов роста производительности труда над темпами роста средней заработной платы себестоимость продукции:",
        answers: [
            { text: "снижается", correct: true },
            { text: "повышается", correct: false },
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