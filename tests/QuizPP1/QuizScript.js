const questions = [
    {
        question: "Производственная мощность (ПМ) это:",
        answers: [
            { text: "работы по модернизации оборудования, намеченного изменением технологии", correct: false },
            { text: "обеспечение качественного своевременного и комплексного производства продукции", correct: false },
            { text: "наибольший возможный, годовой выпуск продукции в установленной номенклатуре и ассортименте в данных экономическо-организационных условиях", correct: true },
            { text: "нет правильного ответа", correct: false }
        ]
    },
    {
        question: "Чтобы определить Мвых необходимо:",
        answers: [
            { text: "Мвых = Мвх + Мвв - Мвыб", correct: true },
            { text: "Мвых = Мвх + Мвыб - Мвв", correct: false },
            { text: "Мвых = Мвыб + Мвх - Мвв", correct: false },
            { text: "нет правильного ответа", correct: false }
        ]
    },
    {
        question: "Среднегодовая мощность (Мсрг):",
        answers: [
            { text: "применяется при расчетах ПМ оборудования, работающего круглосуточно", correct: false },
            { text: "определяется с учетом ввода и выбытия мощности", correct: true },
            { text: "определяется при изготовлении оборудования исходя из производительности в единицу рабочего времени", correct: false },
            { text: "нет правильного ответа", correct: false }
        ]
    },
    {
        question: "Производственная мощность – это:",
        answers: [
            { text: "производственная программа на текущий год", correct: false },
            { text: "максимальные возможности по выпуску продукции", correct: true },
            { text: "максимальное время работы парка оборудования предприятия", correct: false },
            { text: "нет правильного ответа", correct: false }
        ]
    },
    {
        question: "Виды производственных мощностей:",
        answers: [
            { text: "входная, выходная, среднегодовая", correct: true },
            { text: "на начало года, на конец года, выходная", correct: false },
            { text: "расчетная, плановая, фактическая", correct: false },
            { text: "нет правильного ответа", correct: false }
        ]
    },
    {
        question: "Факторы, определяющие величину производственной мощности предприятия:",
        answers: [
            { text: "количество и производительность оборудования, качество сырья, уровень организации производства", correct: true },
            { text: "производственная программа и величина производственных запасов", correct: false },
            { text: "среднесписочная численность персонала, среднегодовая стоимость фондов", correct: false },
            { text: "нет правильного ответа", correct: false }
        ]
    },
    {
        question: "Среднегодовая мощность рассчитывается с учетом:",
        answers: [
            { text: "мощности ведущего цеха, ведущего участка и ведущей группы оборудования", correct: false },
            { text: "входной мощности, среднегодового прироста и сокращения мощностей", correct: false },
            { text: "мощности входной, выходной и полных месяцев функционирования оборудования в году", correct: true },
            { text: "нет правильного ответа", correct: false }
        ]
    },
    {
        question: "В качестве ведущего признается цех, в котором:",
        answers: [
            { text: "сосредоточена основная часть оборудования", correct: false },
            { text: "осуществляется финишная операция технологического процесса", correct: true },
            { text: "осуществляется стартовая операция технологического процесса", correct: false },
            { text: "нет правильного ответа", correct: false }
        ]
    },
    {
        question: "Коэффициент использования производственной мощности рассчитывается как отношение:",
        answers: [
            { text: "действительного фонда времени работы оборудования к его среднегодовой производственной мощности", correct: false },
            { text: "производственной программы по плану и фактически", correct: false },
            { text: "производственной программы к среднегодовой производственной мощности", correct: true },
            { text: "нет правильного ответа", correct: false }
        ]
    },
    {
        question: "При расчете производственной мощности используется фонд времени работы оборудования:",
        answers: [
            { text: "календарный", correct: false },
            { text: "режимный", correct: false },
            { text: "плановый (эффективный, действительный)", correct: true },
            { text: "фактический", correct: false }
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