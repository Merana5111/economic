// Тест №4 по теме "Предприятие"
const questions = [
    {
        question: "К средним организациям в РБ относятся коммерческие организации со средней численностью работников за год…",
        answers: [
            { text: "от 101 до 250 чел", correct: true },
            { text: "от 250 до 500 чел", correct: false },
            { text: "от 16 до 100 чел", correct: false },
            { text: "от 101 до 500 чел", correct: false }
        ]
    },
    {
        question: "Как называется механизм взаимодействия государства и частных субъектов хозяйствования, направленных на реализацию различных проектов в сферах, которые представляют особый интерес для общества и традиционно осуществляются государством?",
        answers: [
            { text: "приватизация", correct: false },
            { text: "франчайзинг", correct: false },
            { text: "акционирование", correct: false },
            { text: "государственно-частное партнерство", correct: true }
        ]
    },
    {
        question: "Как называется сосредоточение производства товаров или услуг на крупных и крупнейших предприятиях на основе увеличения капитала в результате роста капитализации доходов предпринимательской деятельности, либо объединение капитала двух и более предпринимателей?",
        answers: [
            { text: "концентрация", correct: true },
            { text: "специализация", correct: false },
            { text: "диверсификация", correct: false },
            { text: "интеграция", correct: false }
        ]
    },
    {
        question: "Как называется одновременное развитие в рамках одного предприятия других видов производства, расширение номенклатуры и ассортимента производимой продукции, направленное на снижение риска?",
        answers: [
            { text: "интеграция производств", correct: false },
            { text: "диверсификация производства", correct: true },
            { text: "концентрация комбинированного производства", correct: false }
        ]
    },
    {
        question: "Как называется самостоятельная, инициативная деятельность граждан, направленная на получение прибыли или личного дохода и осуществляемая от своего имени, на свой риск и под свою имущественную ответственность?",
        answers: [
            { text: "экономическая", correct: false },
            { text: "торговая", correct: false },
            { text: "производственная", correct: false },
            { text: "предпринимательская", correct: true }
        ]
    },
    {
        question: "Как называется принцип организации коммерческого расчета, который обеспечивает возмещение текущих затрат?",
        answers: [
            { text: "самоокупаемость", correct: true },
            { text: "самофинансирование", correct: false },
            { text: "рентабельность", correct: false },
            { text: "экономическая заинтересованность", correct: false }
        ]
    },
    {
        question: "Как называется принцип организации коммерческого расчета, который обеспечивает не только возмещение текущих затрат, но и получение экономической прибыли?",
        answers: [
            { text: "самоокупаемость", correct: false },
            { text: "самофинансирование", correct: false },
            { text: "рентабельность", correct: true },
            { text: "экономическая заинтересованность", correct: false }
        ]
    },
    {
        question: "Как называется принцип организации коммерческого расчета, который означает, что предприятие несет ответственность перед потребителями за количество и качество поставляемой продукции, своевременность ее поставки, а перед поставщиками, банками, государством – по принятым или установленным обязательствам?",
        answers: [
            { text: "самофинансирование", correct: false },
            { text: "экономическая ответственность", correct: true },
            { text: "экономическая заинтересованность", correct: false },
            { text: "рентабельность", correct: false }
        ]
    },
    {
        question: "Как называется принцип коммерческого расчета, который предполагает необходимость соизмерения затрат и результатов хозяйственной деятельности предприятия?",
        answers: [
            { text: "самоконтроль", correct: true },
            { text: "самофинансирование", correct: false },
            { text: "экономическая ответственность", correct: false },
            { text: "экономическая самостоятельность", correct: false },
            { text: "экономическая заинтересованность", correct: false }
        ]
    },
    {
        question: "Что подразумевает принцип коммерческого расчета «самофинансирование»?",
        answers: [
            { text: "необходимость соизмерения затрат и результатов хозяйственной деятельности предприятия", correct: false },
            { text: "ответственность перед потребителями за количество и качество поставляемой продукции, своевременность ее поставки, а перед поставщиками, банками, государством – по принятым или установленным обязательствам", correct: false },
            { text: "возмещение текущих затрат", correct: false },
            { text: "получение экономической прибыли", correct: false },
            { text: "финансирование расширенного воспроизводства на предприятии за счет собственных источников, частично – за счет привлечения заемного капитала, но не за счет бюджетных средств", correct: true }
        ]
    },
    {
        question: "Что подразумевает принцип коммерческого расчета «рентабельность»?",
        answers: [
            { text: "необходимость соизмерения затрат и результатов хозяйственной деятельности предприятия", correct: false },
            { text: "ответственность перед потребителями за количество и качество поставляемой продукции, своевременность ее поставки, а перед поставщиками, банками, государством – по принятым или установленным обязательствам", correct: false },
            { text: "возмещение текущих затрат", correct: false },
            { text: "получение экономической прибыли", correct: true },
            { text: "финансирование расширенного воспроизводства на предприятии за счет собственных источников, частично – за счет привлечения заемного капитала, но не за счет бюджетных средств", correct: false }
        ]
    },
    {
        question: "Что из нижеперечисленного не относится к экономическим методам государственного регулирования деятельности предприятия?",
        answers: [
            { text: "налоговая политика", correct: false },
            { text: "финансово-кредитная политика", correct: false },
            { text: "регулирование ценообразования", correct: false },
            { text: "инвестиционная политика", correct: false },
            { text: "лицензирование", correct: true }
        ]
    },
    {
        question: "Как называется прибыль отчетного периода, которая определяется как превышение выручки от реализации (без НДС и акцизов) над себестоимостью реализованной продукции, включая управленческие и коммерческие расходы?",
        answers: [
            { text: "прибыль от реализации продукции, работ и услуг", correct: true },
            { text: "балансовая прибыль", correct: false },
            { text: "чистая прибыль", correct: false },
            { text: "валовая прибыль", correct: false }
        ]
    },
    {
        question: "Как называется прибыль, освобождаемая от уплаты налога на нее?",
        answers: [
            { text: "балансовая", correct: false },
            { text: "чистая", correct: false },
            { text: "налогооблагаемая", correct: false },
            { text: "льготируемая", correct: true }
        ]
    },
    {
        question: "Как называется прибыль, остающаяся в распоряжении предприятия после уплаты налогов и обязательных платежей?",
        answers: [
            { text: "балансовая", correct: false },
            { text: "чистая", correct: true },
            { text: "налогооблагаемая", correct: false },
            { text: "льготируемая", correct: false }
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