const questions = [
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
    },
    {
        question: "При изменении объема производства условно-переменные затраты в себестоимости единицы продукции:",
        answers: [
            { text: "растут пропорционально увеличению объемов производства", correct: false },
            { text: "составляют постоянную величину", correct: false },
            { text: "уменьшаются пропорционально снижению объемов производства", correct: false },
            { text: "уменьшаются пропорционально росту объемов производства", correct: true }
        ]
    },
    {
        question: "Условно-постоянные затраты — это:",
        answers: [
            { text: "затраты, которые изменяются пропорционально изменению объемов производства", correct: false },
            { text: "затраты, которые не зависят от динамики объема производства", correct: true },
            { text: "затраты, отнесенные к таковым ПБУ 10/99 «Расходы организации»", correct: false },
            { text: "часть себестоимости единицы продукции, которая остается неизменной с ростом объема производства", correct: false }
        ]
    },
    {
        question: "Понятие безубыточности означает, что:",
        answers: [
            { text: "предприятие работает с прибылью", correct: false },
            { text: "предприятие работает с убытком", correct: false },
            { text: "при данном объеме продаж предприятие достигает полного покрытия выручкой всех затрат на реализованную продукцию, а прибыль равна нулю", correct: true },
            { text: "при данном объеме продаж предприятие обеспечивает рентабельность продукции, достаточную для ведения расширенного воспроизводства", correct: false }
        ]
    },
    {
        question: "Что не является целью группировки затрат по экономическим элементам:",
        answers: [
            { text: "определение потребности в текущих затратах", correct: false },
            { text: "определение себестоимости единицы изделия", correct: true },
            { text: "определение структуры себестоимости произведенной продукции", correct: false },
            { text: "разработка плана снижения себестоимости", correct: false }
        ]
    },
    {
        question: "Какие из перечисленных позиций относятся к постоянным издержкам производства:",
        answers: [
            { text: "амортизация", correct: true },
            { text: "оплата труда производственных рабочих", correct: false },
            { text: "затраты на сырье и материалы", correct: false },
            { text: "все позиции", correct: false }
        ]
    },
    {
        question: "Что служит основой для исчисления фактической себестоимости выпускаемой продукции при нормативном методе учета:",
        answers: [
            { text: "производственные отчеты с приложенными первичными документами", correct: false },
            { text: "калькуляция нормативной себестоимости", correct: true },
            { text: "распоряжение руководителя промышленной организации", correct: false },
            { text: "нет правильного ответа", correct: false }
        ]
    },
    {
        question: "Для отнесения на себестоимость единицы продукции цеховых расходов используется метод:",
        answers: [
            { text: "пропорционально заработной плате производственных рабочих", correct: true },
            { text: "пропорционально производственной себестоимости", correct: false },
            { text: "пропорционально затрат на сырье и материалы", correct: false },
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