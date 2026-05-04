const questions = [
    {
        question: "Оборотные средства – это средства, авансированные в:",
        answers: [
            { text: "основные производственные фонды и фонды обращения;", correct: false },
            { text: "оборотные производственные фонды;", correct: false },
            { text: "оборотные производственные фонды и фонды обращения;", correct: true },
            { text: "основные и оборотные производственные фонды", correct: false }
        ]
    },
    {
        question: "Увеличение времени оборота оборотных средств при неизменном объеме продукции и при прочих равных условиях приводит к:",
        answers: [
            { text: "повышению потребности в оборотных средствах;", correct: true },
            { text: "уменьшению потребности в оборотных средствах;", correct: false },
            { text: "сохранению их на прежнем уровне;", correct: false },
            { text: "не оказывает влияния на величину оборотных средств", correct: false }
        ]
    },
    {
        question: "Количество оборотов, которое совершают оборотные средства в течение рассматриваемого периода, показывает коэффициент:",
        answers: [
            { text: "закрепления;", correct: false },
            { text: "загрузки средств в обороте;", correct: false },
            { text: "коэффициент оборачиваемости;", correct: true },
            { text: "время оборота", correct: false }
        ]
    },
    {
        question: "Выручка от реализации за квартал 200 тыс. руб., средний остаток оборотных средств – 40 тыс. руб. Коэффициент закрепления оборотных средств равен:",
        answers: [
            { text: "5;", correct: false },
            { text: "0,2;", correct: true },
            { text: "18;", correct: false },
            { text: "800", correct: false }
        ]
    },
    {
        question: "Объем незавершенного производства не включает:",
        answers: [
            { text: "изделия, законченные изготовлением, но не полностью укомплектованные;", correct: false },
            { text: "изделия и полуфабрикаты до сдачи на склад готовой продукции;", correct: false },
            { text: "изделия, законченные изготовлением, но не принятые службой контроля качества;", correct: false },
            { text: "изделия, законченные изготовлением и принятые заказчиком", correct: true }
        ]
    },
    {
        question: "Высвобождение оборотных средств может быть:",
        answers: [
            { text: "номинальным и реальным;", correct: false },
            { text: "абсолютным и относительным;", correct: true },
            { text: "первичным и вторичным;", correct: false },
            { text: "нет правильного ответа", correct: false }
        ]
    },
    {
        question: "Какие стадии проходят оборотные средства:",
        answers: [
            { text: "денежную, товарную;", correct: false },
            { text: "товарную, производственную, денежную;", correct: true },
            { text: "денежную и реализационную;", correct: false },
            { text: "денежную, реализационную, товарную", correct: false }
        ]
    },
    {
        question: "При ускорении оборачиваемости оборотных средств объем реализованной продукции:",
        answers: [
            { text: "уменьшается;", correct: false },
            { text: "увеличивается;", correct: true },
            { text: "не изменяется;", correct: false },
            { text: "нет правильного ответа", correct: false }
        ]
    },
    {
        question: "Оборотные производственные фонды – это:",
        answers: [
            { text: "материальные и нематериальные элементы, используемые предприятием в производственной деятельности;", correct: false },
            { text: "средства труда, участвующие во многих производственных циклах, сохраняющие свою натуральную форму и переносящие стоимость на изготовляемую продукцию частями по мере износа;", correct: false },
            { text: "имущество предприятия, которое используется в течение нескольких производственных циклов, сохраняя свою натуральную форму и не перенося своей стоимости на продукт;", correct: false },
            { text: "предметы труда, используемые только в одном производственном цикле, меняющие свою натуральную форму и полностью переносящие стоимость на изготовляемый продукт", correct: true }
        ]
    },
    {
        question: "Оборотные производственные фонды не включают:",
        answers: [
            { text: "незавершенное производство;", correct: false },
            { text: "готовую продукцию;", correct: true },
            { text: "расходы будущих периодов;", correct: false },
            { text: "производственные запасы", correct: false }
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