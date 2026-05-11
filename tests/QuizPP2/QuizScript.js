const questions = [
    {
        question: "Коэффициент использования производственной мощности - это:",
        answers: [
            { text: "доля активной части основных средств в их общей величине", correct: false },
            { text: "отношение стоимости основных средств к величине производственной мощности", correct: false },
            { text: "отношение объема произведенной продукции к величине производственной мощности", correct: true },
            { text: "нет правильного ответа", correct: false }
        ]
    },
    {
        question: "Максимально возможный объем выпуска продукции при заданных номенклатуре и ассортименте на данном оборудовании при определенном режиме работы - это:",
        answers: [
            { text: "товарная продукция", correct: false },
            { text: "производственная программа предприятия", correct: false },
            { text: "производственная мощность предприятия", correct: true },
            { text: "нет правильного ответа", correct: false }
        ]
    },
    {
        question: "Мощность на конец периода:",
        answers: [
            { text: "входная", correct: false },
            { text: "выходная", correct: true },
            { text: "среднегодовая", correct: false },
            { text: "производственная", correct: false }
        ]
    },
    {
        question: "Коэффициент использования производственной мощности определяет:",
        answers: [
            { text: "баланса производственной мощности", correct: false },
            { text: "резерв производственной мощности", correct: true },
            { text: "условно-постоянные затраты", correct: false },
            { text: "норматив использования производственной мощности", correct: false }
        ]
    },
    {
        question: "Производственная мощность предприятия определяется по:",
        answers: [
            { text: "сумме мощностей всех цехов производственных подразделений", correct: false },
            { text: "цеху с минимальной мощностью", correct: false },
            { text: "ведущему звену производства", correct: true },
            { text: "нет правильного ответа", correct: false }
        ]
    },
    {
        question: "Планирование производственной мощности включает расчет:",
        answers: [
            { text: "входной, выходной мощности и степени использования мощности", correct: false },
            { text: "выходной и среднегодовой мощности", correct: false },
            { text: "степени использования мощности и максимальной мощности", correct: false },
            { text: "входной, выходной, среднегодовой мощности и степени использования мощности", correct: true }
        ]
    },
    {
        question: "При расчете мощности используется фонд времени:",
        answers: [
            { text: "календарный", correct: false },
            { text: "режимный (номинальный)", correct: false },
            { text: "эффективный (действительный)", correct: true },
            { text: "фактический", correct: false }
        ]
    },
    {
        question: "Коэффициент использования производственной мощности рассчитывается как:",
        answers: [
            { text: "отношение объема выпущенной продукции к среднегодовой производственной мощности предприятия", correct: true },
            { text: "отношение среднегодовой производственной мощности предприятия к объему выпускаемой продукции", correct: false },
            { text: "отношение объема выпускаемой продукции к выходной мощности", correct: false },
            { text: "нет правильного ответа", correct: false }
        ]
    },
    {
        question: "При непрерывном режиме работы предприятия используется фонд времени работы оборудования:",
        answers: [
            { text: "фактический", correct: false },
            { text: "режимный", correct: false },
            { text: "плановый (эффективный)", correct: false },
            { text: "календарный", correct: true }
        ]
    },
    {
        question: "Для расчета производственной мощности используется следующий состав оборудования:",
        answers: [
            { text: "действующее и бездействующее оборудование", correct: false },
            { text: "установленное оборудование", correct: true },
            { text: "фактически работающее оборудование", correct: false },
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