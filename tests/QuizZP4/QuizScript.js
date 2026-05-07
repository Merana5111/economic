const questions = [
    {
        question: "Размер оплаты рабочего – сдельщика не зависит от:",
        answers: [
            { text: "количества сделанных деталей", correct: false },
            { text: "расценки на изделие", correct: false },
            { text: "отработанного времени", correct: true },
            { text: "тарифной ставки первого разряда и тарифного коэффициента соответствующего разряда", correct: false }
        ]
    },
    {
        question: "Соответствие между разрядами оплаты труда и коэффициентами оплаты труда устанавливает:",
        answers: [
            { text: "тарифная сетка", correct: true },
            { text: "тарифная ставка", correct: false },
            { text: "тарифно – квалификационный справочник", correct: false },
            { text: "нормирование труда", correct: false }
        ]
    },
    {
        question: "«Покупательная способность» номинальной заработной платы – это:",
        answers: [
            { text: "реальная заработная плата", correct: true },
            { text: "минимальная зарплата", correct: false },
            { text: "повременная зарплата", correct: false },
            { text: "нет правильного ответа", correct: false }
        ]
    },
    {
        question: "Одним из принципов организации заработной платы является:",
        answers: [
            { text: "опережающий темп роста средней заработной платы по сравнению с темпом роста производительности труда", correct: false },
            { text: "опережающий темп роста производительности труда по сравнению с темпом роста средней заработной платы", correct: true },
            { text: "одинаковые темпы роста производительности труда и заработной платы", correct: false },
            { text: "замедление темпов роста заработной платы по сравнению с темпами роста инфляции", correct: false }
        ]
    },
    {
        question: "Заработная плата в пределах выполнения норм оплачивается по прямым сдельным расценкам, а при выработке сверх этих исходных норм – по повышенным – это:",
        answers: [
            { text: "прямая сдельная зарплата", correct: false },
            { text: "аккордная", correct: false },
            { text: "сдельно – премиальная", correct: false },
            { text: "сдельно – прогрессивная", correct: true }
        ]
    },
    {
        question: "Применение косвенно – сдельной формы оплаты труда целесообразно в случае:",
        answers: [
            { text: "имеются значительные заказы на производимую продукцию, а количество рабочих ограничено", correct: false },
            { text: "имеется возможность точного учета объемов выполняемых работ", correct: false },
            { text: "когда от темпа и качества работы вспомогательного рабочего зависит выработка обслуживаемых им основных рабочих", correct: true },
            { text: "работа неоднородна по своему характеру и нерегулярна по нагрузке", correct: false }
        ]
    },
    {
        question: "Сдельная расценка – это:",
        answers: [
            { text: "показатель увеличения размера заработной платы в зависимости от месторасположения предприятия", correct: false },
            { text: "затраты на освоение предприятий, цехов, агрегатов", correct: false },
            { text: "средний тарифный коэффициент", correct: false },
            { text: "размер заработной платы за единицу продукции или работы", correct: true }
        ]
    },
    {
        question: "К основным нормативам, образующим тарифную систему не относятся:",
        answers: [
            { text: "тарифно – квалификационные справочники", correct: false },
            { text: "схемы должностных окладов", correct: false },
            { text: "тарифные ставки и сетки", correct: false },
            { text: "выплаты помощи социального и стимулирующего характера", correct: true }
        ]
    },
    {
        question: "Начисленная и полученная работником заработная плата за его труд за определенный период – это:",
        answers: [
            { text: "минимальная заработная плата", correct: false },
            { text: "номинальная зарплата", correct: true },
            { text: "реальная зарплата", correct: false },
            { text: "тарифная зарплата", correct: false }
        ]
    },
    {
        question: "Что входит в состав тарифной системы:",
        answers: [
            { text: "тарифные ставки и тарифная сетка", correct: false },
            { text: "должностные оклады", correct: false },
            { text: "тарифно-квалификационный справочник", correct: false },
            { text: "все перечисленное", correct: true }
        ]
    },
    // Задание на соответствие (вопрос 11 исходного теста) — разбито на 4 отдельных вопроса
    {
        question: "Установите соответствие: оплата труда производится по неизменным расценкам и независимо от степени выполнения нормы выработки. Для какой системы это характерно?",
        answers: [
            { text: "Прямая сдельная", correct: true },
            { text: "Аккордная", correct: false },
            { text: "Простая повременная", correct: false },
            { text: "Косвенно-сдельная", correct: false }
        ]
    },
    {
        question: "Установите соответствие: сдельная расценка устанавливается сразу на весь объем работ, которые должны быть выполнены в срок. Для какой системы это характерно?",
        answers: [
            { text: "Прямая сдельная", correct: false },
            { text: "Аккордная", correct: true },
            { text: "Простая повременная", correct: false },
            { text: "Косвенно-сдельная", correct: false }
        ]
    },
    {
        question: "Установите соответствие: применяется для оплаты труда вспомогательных рабочих, обслуживающих основное производство. Для какой системы это характерно?",
        answers: [
            { text: "Прямая сдельная", correct: false },
            { text: "Аккордная", correct: false },
            { text: "Простая повременная", correct: false },
            { text: "Косвенно-сдельная", correct: true }
        ]
    },
    {
        question: "Установите соответствие: заработная плата начисляется по тарифной ставке работника данного разряда за фактически отработанное время. Для какой системы это характерно?",
        answers: [
            { text: "Прямая сдельная", correct: false },
            { text: "Аккордная", correct: false },
            { text: "Простая повременная", correct: true },
            { text: "Косвенно-сдельная", correct: false }
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