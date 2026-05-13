const questions = [
    {
        question: "Назовите 4 источника финансирования капитальных вложений:",
        answers: [
            { text: "прибыль (доход) предприятий", correct: true },
            { text: "кредиты банков", correct: true },
            { text: "амортизационные отчисления", correct: true },
            { text: "себестоимость продукции", correct: false },
            { text: "средства государственного (местного) бюджета", correct: true }
        ]
    },
    {
        question: "Понятие «капитальное строительство» включает:",
        answers: [
            { text: "строительно-монтажные работы при возведении зданий, сооружений", correct: true },
            { text: "приобретение оборудования, транспортных средств", correct: true },
            { text: "совокупность работ, связанных с созданием основных фондов", correct: true },
            { text: "приобретение сырья, основных и вспомогательных материалов", correct: false }
        ]
    },
    {
        question: "Какие из перечисленных затрат входят в состав капитальных вложений?",
        answers: [
            { text: "затраты на строительно-монтажные работы", correct: true },
            { text: "затраты на приобретение оборудования, инструмента, инвентаря", correct: true },
            { text: "затраты на приобретение основных и вспомогательных материалов комплектующих изделий", correct: false },
            { text: "затраты на проектно-изыскательские работы", correct: true },
            { text: "затраты на инфраструктуру и охрану окружающей среды", correct: true }
        ]
    },
    {
        question: "Какие существуют виды структур капитальных вложений?",
        answers: [
            { text: "технологическая", correct: true },
            { text: "воспроизводственная", correct: true },
            { text: "отраслевая", correct: true },
            { text: "территориальная", correct: true },
            { text: "удельная", correct: false }
        ]
    },
    {
        question: "Финансовое инвестирование − это:",
        answers: [
            { text: "вложение средств в создание финансовых структур (банков страховых компаний и т.д.)", correct: false },
            { text: "финансирование разработки и реализации инвестиционных проектов", correct: false },
            { text: "вложение средств в финансовые активы (ценные бумаги)", correct: true }
        ]
    },
    {
        question: "Реальное инвестирование − это:",
        answers: [
            { text: "вложение средств в физический капитал предприятия (средства производства)", correct: true },
            { text: "инвестирование в данный момент времени", correct: false },
            { text: "инвестиционный проект, находящийся на стадии эксплуатации", correct: false }
        ]
    },
    {
        question: "Капитальные вложения – это:",
        answers: [
            { text: "затраты обеспечивающие увеличение капитала предприятия", correct: false },
            { text: "паевые и иные взносы в уставный капитал вновь создаваемых предприятий", correct: false },
            { text: "затраты на строительно-монтажные работы, приобретение оборудования, инструмента, инвентаря, прочие капитальные работы и затраты", correct: true }
        ]
    },
    {
        question: "Техническое перевооружение − это:",
        answers: [
            { text: "замена старой производственной техники на новую (с более высокими технико-экономическими показателями) с расширением производственной площади", correct: false },
            { text: "замена старой производственной техники и технологии на новую (с более высокими технико-экономическими показателями) без расширения производственной площади", correct: true },
            { text: "увеличение объема производства путем строительства новых цехов и организации новых подразделений", correct: false }
        ]
    },
    {
        question: "Расширение производства – это:",
        answers: [
            { text: "замена старой производственной техники и технологии на новую (с более высокими технико-экономическими показателями) с расширением производственной площади", correct: false },
            { text: "замена старой производственной техники и технологии на новую (с более высокими технико-экономическими показателями) без расширения производственной площади", correct: false },
            { text: "увеличение объема производства путем строительства новых цехов и организации новых подразделений", correct: true }
        ]
    },
    {
        question: "В каком случае инвестиционный проект считается эффективным?",
        answers: [
            { text: "если индекс доходности меньше единицы", correct: false },
            { text: "если индекс доходности больше единицы", correct: true },
            { text: "если значение чистого дисконтированного дохода положительно", correct: true },
            { text: "если значение чистого дисконтированного дохода отрицательно", correct: false },
            { text: "если внутренняя норма доходности меньше уровня нормы дисконта", correct: false },
            { text: "если внутренняя норма доходности больше уровня нормы дисконта", correct: true }
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