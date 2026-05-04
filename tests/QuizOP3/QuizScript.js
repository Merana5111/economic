// Тест №3 по теме "Предприятие"
const questions = [
    {
        question: "Какими могут быть акции?",
        answers: [
            { text: "простыми и привилегированными", correct: true },
            { text: "простыми и золотыми", correct: false },
            { text: "простыми и контрольными", correct: false },
            { text: "простыми и именными", correct: false }
        ]
    },
    {
        question: "Процесс восстановления устойчивой платежеспособности и финансового оздоровления предприятия, предусматривающий переход права собственности, изменение договорных обязательств, реорганизацию, реструктуризацию или оказание финансовой поддержки, называется…",
        answers: [
            { text: "санацией", correct: true },
            { text: "банкротством", correct: false },
            { text: "приватизацией", correct: false },
            { text: "разгосударствлением", correct: false },
            { text: "ликвидацией", correct: false }
        ]
    },
    {
        question: "Если все акции окажутся у одного участника (государства), то общество может быть ликвидировано или преобразовано в…",
        answers: [
            { text: "унитарное предприятие", correct: true },
            { text: "производственный кооператив", correct: false },
            { text: "товарищество", correct: false }
        ]
    },
    {
        question: "Какими по форме в РБ бывают унитарные предприятия?",
        answers: [
            { text: "государственные (частные – ЧУП)", correct: true },
            { text: "республиканские и муниципальные", correct: false },
            { text: "коммунальные и федеральные", correct: false },
            { text: "только государственные", correct: false },
            { text: "только частные", correct: false }
        ]
    },
    {
        question: "К субъектам внешней макросреды функционирования предприятия относятся…",
        answers: [
            { text: "поставщики и покупатели", correct: false },
            { text: "государственные органы управления, местные органы власти и общественные организации", correct: true },
            { text: "деловые партнеры и конкуренты", correct: false },
            { text: "рыночная инфраструктура", correct: false }
        ]
    },
    {
        question: "Выберите перечень всех субъектов внешней микросреды по отношению к производителю.",
        answers: [
            { text: "поставщики, потребители, деловые партнеры, конкуренты", correct: true },
            { text: "поставщики, потребители, государственные органы управления", correct: false },
            { text: "деловые партнеры, конкуренты, местные органы власти", correct: false },
            { text: "поставщики", correct: false },
            { text: "все ответы верны", correct: false }
        ]
    },
    {
        question: "Как называется объединение по договору коммерческих организаций в целях координации их предпринимательской деятельности, а также представления и защиты общих имущественных интересов?",
        answers: [
            { text: "ассоциация", correct: true },
            { text: "концерн", correct: false },
            { text: "холдинговая компания", correct: false },
            { text: "союз", correct: false }
        ]
    },
    {
        question: "Как называется юридическое лицо любой организационно-правовой формы, в состав имущества которого входят акции в имуществе иных юридических лиц, обеспечивающие ему право принятия или отклонения решений? При объединении юридических лиц данной формы они сохраняют статус юридического лица, но теряют экономическую самостоятельность.",
        answers: [
            { text: "ассоциация", correct: false },
            { text: "концерн", correct: false },
            { text: "ФПГ", correct: false },
            { text: "холдинг", correct: true }
        ]
    },
    {
        question: "К микроорганизациям в РБ относятся коммерческие организации со средней численностью работников за год...",
        answers: [
            { text: "до 15 чел", correct: true },
            { text: "до 100 чел", correct: false },
            { text: "до 50 чел", correct: false },
            { text: "до 60 чел", correct: false }
        ]
    },
    {
        question: "К малым организациям в РБ относятся коммерческие организации со средней численностью работников за год…",
        answers: [
            { text: "от 16 до 100 чел", correct: true },
            { text: "от 50 до 100 чел", correct: false },
            { text: "от 16 до 250 чел", correct: false },
            { text: "от 16 до 30", correct: false }
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