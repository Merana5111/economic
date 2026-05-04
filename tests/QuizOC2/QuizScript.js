const questions = [
    {
        question: "Моральный износ происходит:",
        answers: [
            { text: "от бездействия основных средств;", correct: false },
            { text: "в случае роста производительности труда в отраслях, изготавливающих данные основные средства;", correct: true },
            { text: "в результате влияния различных внешних условий;", correct: false },
            { text: "в результате появления машин того же назначения, но более производительных", correct: true }
        ]
    },
    {
        question: "Изношенность основных средств характеризует:",
        answers: [
            { text: "остаточная стоимость;", correct: true },
            { text: "восстановительная стоимость;", correct: false },
            { text: "первоначальная стоимость", correct: false }
        ]
    },
    {
        question: "Моральный износ – это:",
        answers: [
            { text: "понижение стоимости действующих основных средств в результате появления новых их видов, более дешевых и более производительных;", correct: true },
            { text: "потеря основными средствами технических свойств и характеристик в результате эксплуатации, атмосферного воздействия, условий хранения;", correct: false },
            { text: "процесс перенесения стоимости основных средств на производимую продукцию;", correct: false },
            { text: "денежное выражение части стоимости основных средств, перенесенной на готовый продукт", correct: false }
        ]
    },
    {
        question: "При увеличении нормы амортизации:",
        answers: [
            { text: "повысится себестоимость продукции;", correct: true },
            { text: "замедлится процесс перенесения стоимости основных средств на готовую продукцию;", correct: false },
            { text: "уменьшатся поступления в бюджет;", correct: false },
            { text: "понизится стоимость продукции", correct: false }
        ]
    },
    {
        question: "Приобретен автомобиль с предполагаемым пробегом 200 тыс. км. стоимостью 400 тыс. руб. В отчетном периоде пробег составил 20 тыс. км. Годовая сумма амортизации, начисленная способом списания стоимости пропорционально объему продукции (работ) составила:",
        answers: [
            { text: "20 тыс. руб.;", correct: false },
            { text: "40 тыс. руб.;", correct: true },
            { text: "60 тыс. руб.;", correct: false },
            { text: "10 тыс. руб.", correct: false }
        ]
    },
    {
        question: "Фондоотдача рассчитывается как отношение произведенной продукции к:",
        answers: [
            { text: "среднегодовой стоимости ОПС;", correct: true },
            { text: "первоначальной стоимости ОПС;", correct: false },
            { text: "восстановительной;", correct: false },
            { text: "остаточной", correct: false }
        ]
    },
    {
        question: "Максимальная эффективность производства достигается в случае:",
        answers: [
            { text: "когда фондовооруженность труда растет более быстрыми темпами, чем производительность труда;", correct: false },
            { text: "когда производительность труда растет более быстрыми темпами, чем фондовооруженность труда;", correct: true },
            { text: "когда темпы роста фондовооруженность труда и производительности труда совпадают;", correct: false },
            { text: "эти показатели не зависимы", correct: false }
        ]
    },
    {
        question: "На предприятии за отчетный период объем выпуска и реализации продукции составляет 700 тыс. руб., среднегодовая стоимость основных производственных средств составила 350 тыс. руб. Фондоемкость составила:",
        answers: [
            { text: "2 руб./руб.;", correct: false },
            { text: "0,5 руб./руб.;", correct: true },
            { text: "1050 тыс. руб.;", correct: false },
            { text: "24,5 тыс. руб.", correct: false }
        ]
    },
    {
        question: "Лизинг – это:",
        answers: [
            { text: "зачет взаимных требований;", correct: false },
            { text: "форма долгосрочной аренды;", correct: true },
            { text: "переуступка платежных требований банку;", correct: false },
            { text: "нет правильного ответа", correct: false }
        ]
    },
    {
        question: "Основные производственные средства – это:",
        answers: [
            { text: "материальные и нематериальные элементы, используемые предприятием в производственной деятельности;", correct: false },
            { text: "средства труда, участвующие во многих производственных циклах, сохраняющие свою натуральную форму и переносящие стоимость на изготовляемую продукцию частями по мере износа;", correct: true },
            { text: "имущество предприятия, которое используется в течение нескольких производственных циклов, сохраняя свою натуральную форму и не перенося своей стоимости на продукт;", correct: false },
            { text: "предметы труда, используемые только в одном производственном цикле, меняющие свою натуральную форму и полностью переносящие стоимость на изготовляемый продукт;", correct: false }
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