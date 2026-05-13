const questions = [
    {
        question: "Инвестиции – это",
        answers: [
            { text: "Денежные средства, вкладываемые в объекты предпринимательской и других видов деятельности, в результате которой образуется прибыль и достигается социальный эффект", correct: false },
            { text: "Денежные и материальные ценности, предоставляемые во временное пользование на условиях возвратности и платности", correct: false },
            { text: "Любое имущество, включая денежные средства, ценные бумаги, оборудование и результаты интеллектуальной деятельности, вкладываемые в объекты инвестиционной деятельности в целях получения прибыли и достижения иного значимого результата", correct: true }
        ]
    },
    {
        question: "Объектами инвестиционной деятельности являются",
        answers: [
            { text: "Недвижимое имущество, рынки ценных бумаг, трудовые ресурсы", correct: false },
            { text: "Денежные средства, движимое и недвижимое имущество, труд, материальные ресурсы", correct: false },
            { text: "Любое имущество, имущественные и неимущественные права, права пользования природными ресурсами", correct: true }
        ]
    },
    {
        question: "Реальные инвестиции – это",
        answers: [
            { text: "Долговременное вложение средств в отрасли материального производства", correct: false },
            { text: "Покупка ценных бумаг, подготовка специалистов на курсах, передача опыта, лицензий", correct: false },
            { text: "Долговременное вложение средств в отрасли материального и нематериального производств", correct: false },
            { text: "Вложения в какой-либо тип материально осязаемых активов", correct: true }
        ]
    },
    {
        question: "Капитальные вложения – это реальные инвестиции",
        answers: [
            { text: "В обеспечение расширенного воспроизводства основных фондов", correct: true },
            { text: "Оборотные средства", correct: false },
            { text: "Фонды обращения", correct: false },
            { text: "Обеспечение простого воспроизводства основных фондов", correct: false }
        ]
    },
    {
        question: "Технологическая структура капитальных вложений – это",
        answers: [
            { text: "Процентное соотношение затрат по элементам капитальных вложений", correct: true },
            { text: "Распределение средств по формам воспроизводства основных фондов", correct: false },
            { text: "Распределение капитальных вложений по отраслям", correct: false }
        ]
    },
    {
        question: "Дисконтированная стоимость будущих доходов – это",
        answers: [
            { text: "Стоимость будущих доходов с учетом износа", correct: false },
            { text: "Стоимость воспроизводства физического капитала в новых условиях воспроизводства", correct: false },
            { text: "Первоначальная сумма, которую необходимо вложить сегодня, чтобы через определенный период иметь гарантированный доход", correct: false },
            { text: "Стоимость будущих доходов, приведенная к моменту начала инвестирования", correct: true }
        ]
    },
    {
        question: "Дисконтированная стоимость будущих доходов зависит от",
        answers: [
            { text: "Процентной ставки, текущих цен, номенклатуры выпускаемой продукции", correct: false },
            { text: "Ставки дисконтирования; периода, через который должен быть получен определенный доход", correct: true },
            { text: "Ставки дисконтирования; периода функционирования предприятия", correct: false }
        ]
    },
    {
        question: "Капиталоемкость определяется отношением",
        answers: [
            { text: "Капиталовложений к приросту объема производства", correct: true },
            { text: "Капиталовложений к объему производства", correct: false },
            { text: "Объема производства к капиталовложениям", correct: false }
        ]
    },
    {
        question: "Рентабельность капитала определяется отношением",
        answers: [
            { text: "Чистой прибыли к сумме капиталовложений", correct: false },
            { text: "Прибыли к сумме среднегодовой стоимости капитальных фондов", correct: true },
            { text: "Прироста прибыли к капитальным вложениям", correct: false }
        ]
    },
    {
        question: "Воспроизводственная структура капитальных вложений – это",
        answers: [
            { text: "Процентное соотношение капитальных вложений, осуществляемых по направлениям расширенного воспроизводства", correct: false },
            { text: "Распределение капитальных вложений по территории", correct: false },
            { text: "Распределение средств по формам воспроизводства основных фондов", correct: true },
            { text: "Распределение средств на новое строительство", correct: false }
        ]
    },
    {
        question: "Портфельные инвестиции – это инвестиции, направляемые для приобретения",
        answers: [
            { text: "Совокупности различных фондовых ценностей", correct: true },
            { text: "Основных фондов", correct: false },
            { text: "Интеллектуальных ресурсов", correct: false },
            { text: "Совокупности товарно-материальных ценностей", correct: false }
        ]
    },
    {
        question: "Реконструкция производства − это:",
        answers: [
            { text: "замена морально устаревших и физически изношенных машин и оборудования", correct: false },
            { text: "совершенствование и перестройка зданий и сооружений", correct: false },
            { text: "замена морально устаревших и физически изношенных машин и оборудования, а также совершенствование и перестройка зданий и сооружений", correct: true }
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