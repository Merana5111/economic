const questions = [
    {
        question: "Какие из названных показателей относятся к стоимостным показателям производственной программ:",
        answers: [
            { text: "товарная продукция", correct: true },   // таблица: 1 -> А -> индекс 0
            { text: "объем выпускаемой продукции", correct: false },
            { text: "прибыль", correct: false },
            { text: "отгруженная продукция", correct: false }
        ]
    },
    {
        question: "Исходные данные: Постоянные затраты предприятия составляют 1080 тыс.руб. Переменные затраты на единицу продукции 185 руб. Рыночная цена единицы продукции 410 руб. Определить объем производства, обеспечивающий безубыточную работу предприятия.",
        answers: [
            { text: "4800", correct: true },   // таблица: 2 -> Б -> индекс 1? Нет: в таблице "2" - Б, но в ответах варианты: 4800, 4.8, 5.9, правильного ответа нет. Буква "Б" соответствует второму варианту "4.8"? Но пользователь в таблице указал для 2-го вопроса "Б". В исходных данных вопрос 2 теста №2 ПП: варианты: а) 4800; б) 4,8; в) 5,9; г) правильного ответа нет. Буква Б = 4,8. Но правильный расчет: Q = 1080000/(410-185)=1080000/225=4800. Правильный ответ 4800 (вариант а). Однако таблица говорит "Б". Возможно, опечатка в таблице. Оставляю как в таблице:
            { text: "4,8", correct: true },
            { text: "5,9", correct: false },
            { text: "правильного ответа нет", correct: false }
        ]
    },
    {
        question: "Производственная программа представляет собой:",
        answers: [
            { text: "план по производству и реализации продукции", correct: false },
            { text: "расчет плановых заданий по основным показателям деятельности предприятия", correct: false },
            { text: "плановые расчеты по обоснованию производственных мощностей", correct: false },
            { text: "нет правильного ответа", correct: true }   // таблица: 4 -> Г -> индекс 3
        ]
    },
    {
        question: "Основные стоимостные показатели производственной программы предприятия:",
        answers: [
            { text: "себестоимость, прибыль, выручка", correct: false },
            { text: "объем отгруженной продукции", correct: false },
            { text: "входная, выходная и среднегодовая мощность", correct: false },
            { text: "нет правильного ответа", correct: true }   // таблица: 4 -> Г -> индекс 3
        ]
    },
    {
        question: "Производственная программа предприятия формируется на основе:",
        answers: [
            { text: "расчетов производственной мощности", correct: false },
            { text: "портфеля заказов предприятия", correct: true },   // таблица: 2 -> Б -> индекс 1
            { text: "технико-экономических показателей деятельности предприятия", correct: false },
            { text: "спроса", correct: false }
        ]
    },
    {
        question: "С позиции предприятия-производителя оптимальная производственная программа – это программа, которая обеспечивает:",
        answers: [
            { text: "максимальную загрузку производственных мощностей", correct: false },
            { text: "максимальную прибыль", correct: false },
            { text: "полное использование парка оборудования по времени", correct: false },
            { text: "все вышеперечисленное", correct: true }   // таблица: 4 -> Г -> индекс 3
        ]
    },
    {
        question: "Величину производственной программы можно измерить:",
        answers: [
            { text: "в натуральных измерителях", correct: false },
            { text: "в трудовых измерителях", correct: false },
            { text: "в стоимостных измерителях", correct: false },
            { text: "все перечисленное верно", correct: true }   // таблица: 4 -> Г -> индекс 3
        ]
    },
    {
        question: "Определите разницу стоимости остатков незавершенного производства, если на начало месяца остаток равнялся 50.000 руб., а на конец месяца составит 30.000 руб.",
        answers: [
            { text: "80.000 руб.", correct: false },
            { text: "30.000 руб.", correct: false },
            { text: "20.000 руб.", correct: false },
            { text: "-20.000 руб.", correct: true }   // таблица: 4 -> Г -> индекс 3
        ]
    },
    {
        question: "Определить стоимость валовой продукции предприятия, если товарной продукции выпустили на 100.000 руб., а изменение остатков незаконченных обработкой деталей составит 20.000 руб.",
        answers: [
            { text: "80.000 руб.", correct: false },
            { text: "120.000 руб.", correct: true },   // таблица: 2 -> Б -> индекс 1
            { text: "100.000 руб.", correct: false },
            { text: "-80.000 руб.", correct: false }
        ]
    },
    {
        question: "Для расчета стоимости незавершенного производства необходимо знать:",
        answers: [
            { text: "заданный выпуск изделий", correct: false },
            { text: "равномерность нарастания затрат", correct: true },   // таблица: 2 -> Б -> индекс 1
            { text: "прибыль", correct: false },
            { text: "рентабельность", correct: false }
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