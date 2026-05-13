const questions = [
    {
        question: "Прибыль (убыток) от продаж определяется как разница между:",
        answers: [
            { text: "валовой прибылью и расходами периода (коммерческими и управленческими)", correct: false },
            { text: "доходами от обычных видов деятельности и расходами по обычным видам деятельности", correct: false },
            { text: "прибылью до налогообложения и текущим налогом на прибыль с учетом отложенных налоговых активов и обязательств", correct: false },
            { text: "выручкой от продаж и себестоимостью проданных товаров, продукции, работ и услуг", correct: true }
        ]
    },
    {
        question: "Эффективность всей производственно-хозяйственной деятельности предприятия характеризует:",
        answers: [
            { text: "прибыль (убыток) от продаж", correct: false },
            { text: "валовая прибыль", correct: false },
            { text: "чистая прибыль", correct: true },
            { text: "прибыль (убыток) до налогообложения", correct: false }
        ]
    },
    {
        question: "Показателем экономической эффективности основной деятельности предприятия (производства и реализации продукции) является:",
        answers: [
            { text: "прибыль (убыток) от продаж", correct: true },
            { text: "валовая прибыль", correct: false },
            { text: "чистая прибыль", correct: false },
            { text: "прибыль (убыток) до налогообложения", correct: false }
        ]
    },
    {
        question: "Показатель результативности деятельности организации, показывающий, какую часть выручки составляет прибыль – это рентабельность:",
        answers: [
            { text: "активов", correct: false },
            { text: "собственного капитала", correct: false },
            { text: "основного капитала", correct: false },
            { text: "продаж", correct: true }
        ]
    },
    {
        question: "Для определения рентабельности собственных средств (собственного капитала) за отчетный период необходимы следующие данные:",
        answers: [
            { text: "источники собственных и заемных средств (весь капитал) предприятия и балансовая прибыль", correct: false },
            { text: "прибыль и источники собственных средств (собственный капитал)", correct: true },
            { text: "выручка от реализации и источники собственных и заемных средств (весь капитал) весь капитал", correct: false },
            { text: "выручка от реализации и источники собственных средств (собственный капитал)", correct: false }
        ]
    },
    {
        question: "Экономическая интерпретация показателя рентабельности всех средств предприятия (капитала) такова:",
        answers: [
            { text: "сколько рублей прибыли приходится на один рубль всех средств (капитала) предприятия", correct: true },
            { text: "сколько рублей прибыли приходится на один рубль выручки", correct: false },
            { text: "сколько рублей оборотного капитала приходится на один рубль прибыли", correct: false },
            { text: "сколько рублей прибыли приходится на один рубль оборотного капитала", correct: false }
        ]
    },
    {
        question: "Количественно величина прибыли определяется как:",
        answers: [
            { text: "сумма всех доходов предприятия", correct: false },
            { text: "сумма всех доходов и расходов предприятия", correct: false },
            { text: "разница между доходами и расходами предприятия", correct: true },
            { text: "сальдо прочих доходов и расходов предприятия", correct: false }
        ]
    },
    {
        question: "Показатель рентабельности продаж (оборота) рассчитывается как отношение прибыли от продаж к:",
        answers: [
            { text: "себестоимости реализованной продукции × 100 %", correct: false },
            { text: "среднегодовой стоимости собственного капитала × 100 %", correct: false },
            { text: "выручке от реализации товаров, продукции, работ и услуг × 100 %", correct: true },
            { text: "среднегодовой стоимости авансированного капитала × 100 %", correct: false }
        ]
    },
    {
        question: "Зависимость между прибылью от реализации продукции и ее себестоимостью отражает рентабельность:",
        answers: [
            { text: "продаж", correct: false },
            { text: "продукции", correct: true },
            { text: "производственных фондов", correct: false },
            { text: "собственного капитала", correct: false }
        ]
    },
    {
        question: "Укажите на прибыль после уплаты налога на прибыль:",
        answers: [
            { text: "прибыль (убыток) от продаж", correct: false },
            { text: "валовая прибыль", correct: false },
            { text: "чистая прибыль", correct: true },
            { text: "прибыль (убыток) до налогообложения", correct: false }
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