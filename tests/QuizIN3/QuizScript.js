const questions = [
    {
        question: "На какие две группы делятся показатели качества в зависимости от роли, выполняемой при оценке:",
        answers: [
            { text: "функциональные показатели", correct: false },
            { text: "классификационные показатели", correct: true },
            { text: "ресурсосберегающие показатели", correct: false },
            { text: "оценочные показатели", correct: true },
            { text: "природоохранные показатели", correct: false }
        ]
    },
    {
        question: "На какие три группы подразделяются оценочные показатели качества:",
        answers: [
            { text: "функциональные показатели", correct: false },
            { text: "классификационные показатели", correct: false },
            { text: "показатели функциональной пригодности", correct: true },
            { text: "ресурсосберегающие показатели", correct: true },
            { text: "показатели надежности", correct: true },
            { text: "природоохранные показатели", correct: false },
            { text: "показатели безопасности", correct: false }
        ]
    },
    {
        question: "На какие четыре группы подразделяются функциональные показатели:",
        answers: [
            { text: "показатели безотказности", correct: true },
            { text: "показатели надежности", correct: false },
            { text: "показатели долговечности", correct: true },
            { text: "показатели эргономичности продукции", correct: true },
            { text: "показатели функциональной пригодности", correct: false },
            { text: "показатели технологичности", correct: false },
            { text: "показатели эстетичности продукции", correct: true }
        ]
    },
    {
        question: "Какие три основных элемента качества в соответствии с международной практикой включает система качества:",
        answers: [
            { text: "проектирование, разработка продукции", correct: false },
            { text: "обеспечение качества", correct: true },
            { text: "маркетинг", correct: false },
            { text: "повышение качества", correct: true },
            { text: "контроль проведения испытаний", correct: false },
            { text: "управление качеством", correct: true }
        ]
    },
    {
        question: "Стандарты ИСО серии 9000 − это:",
        answers: [
            { text: "система сертификации продукции", correct: false },
            { text: "международная система качества продукции", correct: false },
            { text: "международные стандарты на системы управления качеством продукции", correct: true },
            { text: "стандарты по общему руководству качеством и обеспечению качества", correct: true }
        ]
    },
    {
        question: "В соответствии со стандартом ИСО жизненный цикл товара включает:",
        answers: [
            { text: "5 этапов", correct: false },
            { text: "7 этапов", correct: false },
            { text: "11 этапов", correct: true },
            { text: "13 этапов", correct: false }
        ]
    },
    {
        question: "На каких этапах жизненного цикла изделия актуальны меры по управлению качеством:",
        answers: [
            { text: "на стадии проектирования и разработки", correct: false },
            { text: "на стадии производства", correct: false },
            { text: "на стадии технической помощи и обслуживания", correct: false },
            { text: "на всех стадиях жизненного цикла товара", correct: true },
            { text: "на стадии маркетинга", correct: false },
            { text: "на стадии монтажа и эксплуатации", correct: false }
        ]
    },
    {
        question: "«Петля качества» («спираль качества») − это:",
        answers: [
            { text: "концептуальная модель взаимозависимых видов деятельности, влияющих на качество на различных стадиях − от определения потребностей до оценки их удовлетворения (т.е. модель жизненного цикла товара)", correct: true },
            { text: "изменение качества товара на различных этапах его жизненного цикла", correct: false },
            { text: "график, описывающий зависимость качества товара от спроса и предложения", correct: false }
        ]
    },
    {
        question: "Квалиметрия − это:",
        answers: [
            { text: "наука о количественных методах оценки качества продукции", correct: true },
            { text: "наука о показателях качества продукции", correct: false },
            { text: "наука о способах измерения степени надежности товара", correct: false }
        ]
    },
    {
        question: "Как достичь повышения качества продукции на фирме:",
        answers: [
            { text: "за счет снижения брака", correct: false },
            { text: "используя и совершенствуя систему управления качеством на предприятии", correct: true },
            { text: "повышая качество работ всех подразделений предприятия", correct: true }
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