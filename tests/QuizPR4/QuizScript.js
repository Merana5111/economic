const questions = [
    {
        question: "Себестоимость продукции и прибыль от продаж находятся в ... зависимости:",
        answers: [
            { text: "прямо пропорциональной", correct: false },
            { text: "опосредованной", correct: false },
            { text: "регрессионной", correct: false },
            { text: "обратно пропорциональной", correct: true }
        ]
    },
    {
        question: "Рентабельность оборота (продаж) предприятия характеризует:",
        answers: [
            { text: "степень использования оборотных средств", correct: false },
            { text: "эффективность производственной деятельности предприятия", correct: false },
            { text: "эффективность производственной и коммерческой деятельности", correct: true },
            { text: "производительность труда на предприятии", correct: false }
        ]
    },
    {
        question: "Экономический смысл показателей эффективности (отношение результатов к затратам) состоит в том, что они:",
        answers: [
            { text: "дают информацию о ресурсоемкости производства", correct: false },
            { text: "дают представление о рентабельности производства", correct: true },
            { text: "характеризуют техническую сторону производства", correct: false },
            { text: "нет правильного ответа", correct: false }
        ]
    },
    {
        question: "Рентабельность оборота (продаж) предприятия определяется как отношение:",
        answers: [
            { text: "выручки от реализации к собственным средствам (собственному капиталу) предприятия", correct: false },
            { text: "выручки от реализации к балансовой прибыли", correct: false },
            { text: "балансовой прибыли ко всем источникам средств (капиталу) предприятия", correct: false },
            { text: "балансовой прибыли к выручке от реализации", correct: true }
        ]
    },
    {
        question: "Суть бухгалтерского подхода к определению прибыли заключается в ее расчете как:",
        answers: [
            { text: "разницы между доходами и переменными затратами (расходами), относимыми к отчетному периоду", correct: false },
            { text: "изменении чистых активов, исчисляемых как капитализированная стоимость будущих чистых поступлений за минусом обязательств", correct: false },
            { text: "разницы между доходами и затратами (расходами), относимыми к будущим периодам", correct: false },
            { text: "разницы между доходами и затратами (расходами), относимыми к отчетному периоду", correct: true }
        ]
    },
    {
        question: "Рентабельность есть:",
        answers: [
            { text: "отношение прибыли за период к используемым ресурсам", correct: true },
            { text: "отношение используемых ресурсов к прибыли", correct: false },
            { text: "отношение выручки к используемым ресурсам", correct: false },
            { text: "отношение используемых ресурсов к выручке за период", correct: false }
        ]
    },
    {
        question: "Долю прибыли в каждом рубле выручки показывает рентабельность:",
        answers: [
            { text: "всего капитала", correct: false },
            { text: "продаж", correct: true },
            { text: "собственного капитала", correct: false },
            { text: "основных средств", correct: false }
        ]
    },
    {
        question: "Валовая прибыль по данным бухгалтерской отчетности определяется как разница между:",
        answers: [
            { text: "валовой прибылью и расходами периода (коммерческими и управленческими)", correct: false },
            { text: "прочими операционными и внереализационными доходами и расходами", correct: false },
            { text: "прибылью до налогообложения и текущим налогом на прибыль с учетом отложенных налоговых активов и обязательств", correct: false },
            { text: "выручкой от продаж и себестоимостью проданных товаров, продукции, работ и услуг", correct: true }
        ]
    },
    {
        question: "Основной показатель финансовых результатов предприятия, характеризующий его экономический эффект – это:",
        answers: [
            { text: "прибыль (убыток) от продаж", correct: false },
            { text: "валовая прибыль", correct: false },
            { text: "чистая прибыль", correct: false },
            { text: "прибыль до налогообложения (общая бухгалтерская прибыль)", correct: true }
        ]
    },
    {
        question: "Рентабельность собственных средств (собственного капитала) показывает:",
        answers: [
            { text: "эффективность использования основных средств предприятия", correct: false },
            { text: "насколько успешно используется собственные средства (собственный капитал) предприятия", correct: true },
            { text: "степень использования оборотных средств", correct: false },
            { text: "положение предприятия на рынке", correct: false },
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