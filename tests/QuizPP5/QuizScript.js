const questions = [
    {
        question: "Ассортимент производимой продукции представляет собой:",
        answers: [
            { text: "детализированный перечень продукции, дифференцированный по типам, сортам, размерам и т.д.", correct: true },   // таблица: 1 -> А -> индекс 0
            { text: "укрупненный перечень производимой предприятием продукции", correct: false },
            { text: "перечень видов деятельности предприятия", correct: false },
            { text: "нет правильного ответа", correct: false }
        ]
    },
    {
        question: "Состав исходной информации для разработки производственной программы формируется и обрабатывается отделом:",
        answers: [
            { text: "финансовым", correct: false },
            { text: "плановым", correct: false },
            { text: "маркетинга", correct: true },   // таблица: 3 -> В -> индекс 2
            { text: "труда и заработной платы", correct: false }
        ]
    },
    {
        question: "Незавершенное производство на предприятии:",
        answers: [
            { text: "свидетельствует о недостатках в организации производства", correct: false },
            { text: "является объективно необходимым", correct: true },   // таблица: 2 -> Б -> индекс 1
            { text: "способствует росту эффективности использования оборудования и рабочей силы", correct: false },
            { text: "нет правильного ответа", correct: false }
        ]
    },
    {
        question: "Определить стоимость валовой продукции предприятия, если товарной продукции выпустили на 150.000 руб., а изменение остатков незаконченных обработкой деталей составит 50.000 руб.",
        answers: [
            { text: "150.000 руб.", correct: false },
            { text: "200.000 руб.", correct: true },   // таблица: 2 -> Б -> индекс 1
            { text: "100.000 руб.", correct: false },
            { text: "-100.000 руб.", correct: false }
        ]
    },
    {
        question: "Определите разницу стоимости остатков незавершенного собственного производства, если на начало месяца остаток равнялся 250.000 руб., а на конец месяца составил 150.000 руб.",
        answers: [
            { text: "400.000 руб.", correct: false },
            { text: "-100.000 руб.", correct: true },   // таблица: 2 -> Б -> индекс 1
            { text: "100.000 руб.", correct: false },
            { text: "150.000 руб.", correct: false }
        ]
    },
    {
        question: "Какой из разделов плана развития предприятия является основным?",
        answers: [
            { text: "план оперативно-производственного планирования", correct: false },
            { text: "план технического развития", correct: false },
            { text: "план маркетинга", correct: false },
            { text: "производственная программа", correct: true }   // таблица: 4 -> Г -> индекс 3
        ]
    },
    {
        question: "Назовите, какой из разделов плана развития предприятия определяет максимально возможный годовой объем выпуска продукции:",
        answers: [
            { text: "производственная программа", correct: false },
            { text: "план технического развития", correct: false },
            { text: "производственная мощность", correct: true },   // таблица: 3 -> В -> индекс 2
            { text: "план маркетинга", correct: false }
        ]
    },
    {
        question: "К стоимостным показателям производственной программы предприятия относятся",
        answers: [
            { text: "товарная продукция", correct: true },   // таблица: 1 -> А -> индекс 0
            { text: "себестоимость", correct: false },
            { text: "затраты на 1 руб. товарной продукции", correct: false },
            { text: "амортизация", correct: false }
        ]
    },
    {
        question: "Состав исходной информации для разработки производственной программы формируется и обрабатывается отделом: (дубликат вопроса 2)",
        answers: [
            { text: "финансовым", correct: false },
            { text: "плановым", correct: false },
            { text: "маркетинга", correct: false },
            { text: "труда и заработной платы", correct: false }   // таблица: прочерк "-" -> все false, требуется уточнение
        ]
    },
    {
        question: "Производственная программа включает",
        answers: [
            { text: "план производства продукции в натуральном выражении", correct: false },
            { text: "план производства продукции в стоимостном выражении", correct: false },
            { text: "использование производственной мощности", correct: false },
            { text: "все вышеперечисленные", correct: false }   // таблица: прочерк "-" -> все false
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