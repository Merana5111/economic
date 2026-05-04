const questions = [
    {
        question: "Остаточная стоимость – это:",
        answers: [
            { text: "разница между полной первоначальной стоимостью и начисленным износом;", correct: true },
            { text: "доход от перепродажи основных средств, бывших в употреблении;", correct: false },
            { text: "стоимость, по которой основные средства учитываются в балансе предприятия по данным бух. учета об их наличии и движении;", correct: false },
            { text: "сумма фактических затрат на покупку или создание средств труда", correct: false }
        ]
    },
    {
        question: "Моральный износ второго вида происходит:",
        answers: [
            { text: "от бездействия основных фондов;", correct: false },
            { text: "в случае роста производительности труда в отраслях, изготавливающих данные основные фонды;", correct: false },
            { text: "в результате влияния различных внешних условий;", correct: false },
            { text: "в результате появления машин того же назначения, но более производительных", correct: true }
        ]
    },
    {
        question: "Потеря средствами труда своих первоначальных качеств – это:",
        answers: [
            { text: "моральный износ первой формы;", correct: false },
            { text: "моральный износ второй формы;", correct: false },
            { text: "физический износ;", correct: true },
            { text: "экономический износ", correct: false }
        ]
    },
    {
        question: "Первоначальная стоимость основных средств 120 тыс. руб. срок полезного использования 10 лет. Ежемесячная сумма амортизационных отчислений, исчисленная линейным способом, составляет:",
        answers: [
            { text: "10 тыс. руб.;", correct: false },
            { text: "20 тыс. руб.;", correct: false },
            { text: "1 тыс. руб.;", correct: true },
            { text: "1,2 тыс. руб.", correct: false }
        ]
    },
    {
        question: "Показатель фондоотдачи характеризует:",
        answers: [
            { text: "размер объема товарной продукции, приходящейся на 1 руб. основных производственных фондов;", correct: true },
            { text: "уровень технической оснащенности труда;", correct: false },
            { text: "удельные затраты основных фондов на 1 руб. реализованной продукции;", correct: false },
            { text: "количество оборотов оборотных средств", correct: false }
        ]
    },
    {
        question: "Уровень использования машин и оборудования как во времени, так и по производительности характеризует:",
        answers: [
            { text: "интегральный коэффициент;", correct: true },
            { text: "коэффициент экстенсивного использования;", correct: false },
            { text: "коэффициент интенсивного использования;", correct: false },
            { text: "показатель фондоотдачи", correct: false }
        ]
    },
    {
        question: "Выпуск продукции за год 4 000 тыс. руб. Среднегодовая стоимость основных производственных фондов - 2 000 тыс. руб. Средняя численность работающих 100 чел. Фондовооруженность труда:",
        answers: [
            { text: "4 тыс. руб./чел;", correct: false },
            { text: "20 тыс. руб./чел;", correct: true },
            { text: "8 тыс. руб./чел;", correct: false },
            { text: "2 руб./руб.", correct: false }
        ]
    },
    {
        question: "Амортизация – это:",
        answers: [
            { text: "процесс перенесения по частям стоимости основных средств и нематериальных активов по мере износа на стоимость производимой продукции (работ, услуг);", correct: true },
            { text: "показатель эффективности использования основных средств;", correct: false },
            { text: "включение стоимости основных средств в стоимость производимой продукции;", correct: false },
            { text: "показатель технического состояния основных средств", correct: false }
        ]
    },
    {
        question: "К показателям технического состояния основных производственных средств относятся:",
        answers: [
            { text: "коэффициент ввода и коэффициент обновления;", correct: false },
            { text: "коэффициент выбытия;", correct: false },
            { text: "коэффициент годности и коэффициент износа;", correct: true },
            { text: "коэффициент прироста", correct: false }
        ]
    },
    {
        question: "К показателям динамики основных производственных средств относятся:",
        answers: [
            { text: "коэффициент ввода и коэффициент выбытия;", correct: true },
            { text: "коэффициент годности и коэффициент износа;", correct: false },
            { text: "коэффициент прироста и коэффициент интенсивного использования;", correct: false },
            { text: "нет правильного ответа", correct: false }
        ]
    },
    {
        question: "Установите соответствие между показателями и формулами. Выберите правильное соответствие:",
        answers: [
            { text: "1) Фондоотдача – 1, 2) Фондоемкость – 3, 3) Фондовооруженность – 4, 4) Рентабельность ОПФ – 2", correct: true },
            { text: "1) Фондоотдача – 2, 2) Фондоемкость – 1, 3) Фондовооруженность – 4, 4) Рентабельность ОПФ – 3", correct: false },
            { text: "1) Фондоотдача – 3, 2) Фондоемкость – 4, 3) Фондовооруженность – 1, 4) Рентабельность ОПФ – 2", correct: false },
            { text: "1) Фондоотдача – 4, 2) Фондоемкость – 2, 3) Фондовооруженность – 3, 4) Рентабельность ОПФ – 1", correct: false }
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