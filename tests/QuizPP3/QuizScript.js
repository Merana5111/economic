const questions = [
    {
        question: "Производственная программа включает",
        answers: [
            { text: "план производства продукции в натуральном выражении", correct: false },
            { text: "план производства продукции в стоимостном выражении", correct: false },
            { text: "использование производственной мощности", correct: false },
            { text: "все вышеперечисленные", correct: true }   // таблица: 4 -> Г -> индекс 3
        ]
    },
    {
        question: "Номенклатура производимой продукции представляет собой",
        answers: [
            { text: "детализированный перечень продукции, дифференцированный по типам, сортам, размерам и т.д.", correct: false },
            { text: "укрупненный перечень производимой предприятием продукции", correct: true },   // таблица: 2 -> Б -> индекс 1
            { text: "перечень видов деятельности предприятия", correct: false },
            { text: "нет правильного ответа", correct: false }
        ]
    },
    {
        question: "В план производства продукции в стоимостном выражении входят",
        answers: [
            { text: "Реализованная, товарная и валовая продукция", correct: false },
            { text: "Товарная продукция и продукция из давальческого сырья", correct: false },
            { text: "Валовая и чистая продукция", correct: false },
            { text: "Валовая, товарная, реализованная продукция и чистая продукция", correct: true }   // таблица: 4 -> Г -> индекс 3
        ]
    },
    {
        question: "Производственная программа устанавливает",
        answers: [
            { text: "Объем производства продукции, соответствующей по номенклатуре и качеству требованиям плана продаж", correct: false },
            { text: "Задания по вводу в действие новых производственных мощностей", correct: false },
            { text: "Потребность в материально-сырьевых ресурсах", correct: false },
            { text: "Все вышеперечисленное", correct: true }   // таблица: 4 -> Г -> индекс 3
        ]
    },
    {
        question: "Наиболее полным набором процедур планирования производственной программы являются",
        answers: [
            { text: "Анализ выполнения плана производства и реализации продукции в предплановом периоде – анализ «портфеля» заказов – расчет производственной мощности – планирование выпуска продукции в натуральном выражении – то же в стоимостном выражении - планирование выполнения программы", correct: false },
            { text: "Анализ выполнения плана производства и реализации продукции в плановом периоде - анализ «портфеля» заказов – расчет производственной мощности – планирование выпуска продукции – оценка программы – разработка мер по реализации программы", correct: true },   // таблица: 1 -> А -> индекс 0
            { text: "третьего варианта нет", correct: false }
        ]
    },
    {
        question: "В показатели анализа плана производства входят",
        answers: [
            { text: "Оценка выполнения плана по ассортименту", correct: false },
            { text: "Ритмичность производства", correct: false },
            { text: "Качество продукции", correct: false },
            { text: "Остатки готовой продукции", correct: false },
            { text: "Все вышеперечисленное", correct: true }   // таблица: 5 -> Д -> индекс 4
        ]
    },
    {
        question: "Производственная программа формируется на основе",
        answers: [
            { text: "Сезонного изменения спроса, государственного заказа, заказов потребителей", correct: true },   // таблица: 1 -> А -> индекс 0
            { text: "Государственного заказа и цикличности появления конкурентов", correct: false },
            { text: "Тенденций изменения доходов населения", correct: false },
            { text: "Нет правильного ответа", correct: false }
        ]
    },
    {
        question: "Эффективность производственной программы оценивается путем определения",
        answers: [
            { text: "Цен реализации и полной себестоимости", correct: false },
            { text: "Фондоотдачи, фондоемкость, рентабельности продукции, продаж, капитала, относительной экономии основных производственных фондов, удельных капитальных вложений на один рубль прироста продукции", correct: false },
            { text: "Прироста объема выпуска продукции в плановом периоде, изменения глубины и широты ассортимента", correct: true },   // таблица: 3 -> В -> индекс 2
            { text: "Соответствия производственной программы потребности рынка и производственной мощности", correct: false }
        ]
    },
    {
        question: "Укрупненный перечень продукции, выпускаемой предприятием, называется:",
        answers: [
            { text: "ассортимент", correct: false },
            { text: "номенклатура", correct: true },   // таблица: 2 -> Б -> индекс 1
            { text: "диапазон товара", correct: false },
            { text: "производственная программа", correct: false }
        ]
    },
    {
        question: "Общий объем товарной продукции и изменение остатков незавершенного производства называют:",
        answers: [
            { text: "реализованная продукция", correct: false },
            { text: "валовый оборот", correct: false },
            { text: "валовая продукция", correct: true },   // таблица: 3 -> В -> индекс 2
            { text: "внутризаводской оборот", correct: false }
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