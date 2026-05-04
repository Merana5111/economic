const questions = [
    {
        question: "Коэффициент оборачиваемости оборотных средств за год определяется:",
        answers: [
            { text: "выручка от продаж/среднегодовой остаток оборотных средств;", correct: true },
            { text: "360 дней/коэффициент оборачиваемости оборотных средств (в оборотах);", correct: false },
            { text: "среднегодовой остаток оборотных средств / выручка от продаж;", correct: false },
            { text: "выручка от продаж / 360 дней", correct: false }
        ]
    },
    {
        question: "При сокращении интервала между поставками оборачиваемость оборотных средств:",
        answers: [
            { text: "уменьшается;", correct: false },
            { text: "не изменяется;", correct: false },
            { text: "увеличивается;", correct: true },
            { text: "нет правильного ответа", correct: false }
        ]
    },
    {
        question: "Какой элемент оборотных средств не нормируется:",
        answers: [
            { text: "производственные запасы;", correct: false },
            { text: "незавершенное производство;", correct: false },
            { text: "дебиторская задолженность;", correct: true },
            { text: "готовая продукция", correct: false }
        ]
    },
    {
        question: "Выручка от реализации за квартал 200 тыс. руб., средний остаток оборотных средств – 40 тыс. руб. Продолжительность оборота оборотных средств равна:",
        answers: [
            { text: "5;", correct: false },
            { text: "0,2;", correct: false },
            { text: "18;", correct: true },
            { text: "800", correct: false }
        ]
    },
    {
        question: "Минимальная плановая сумма оборотных средств, необходимая для обеспечения нормального, бесперебойного процесса производства – это:",
        answers: [
            { text: "норма оборотных средств;", correct: false },
            { text: "норматив оборотных средств;", correct: true },
            { text: "норма материальных ресурсов;", correct: false },
            { text: "норматив оборотных средств в производственных запасах", correct: false }
        ]
    },
    {
        question: "Время пробега груза по расписанию 12 дней, время документооборота – 7 дней. Средний транспортный запас:",
        answers: [
            { text: "19 дней;", correct: true },
            { text: "5;", correct: false },
            { text: "1,83;", correct: false },
            { text: "7/12", correct: false }
        ]
    },
    {
        question: "Время на подготовку сырья, материалов к производству - это:",
        answers: [
            { text: "страховой запас;", correct: false },
            { text: "текущий запас;", correct: false },
            { text: "транспортный;", correct: false },
            { text: "технологический", correct: true }
        ]
    },
    {
        question: "Интервал между очередными поставками сырьевых ресурсов на предприятии – 10 дней. Для выполнения годовой производственной программы предприятия необходимо 180 т сырья. Текущий производственный запас равен:",
        answers: [
            { text: "5 т.;", correct: true },
            { text: "2,5 т.;", correct: false },
            { text: "3,75 т.;", correct: false },
            { text: "10т", correct: false }
        ]
    },
    {
        question: "Норматив оборотных средств в запасах незавершенного производства учитывает длительность:",
        answers: [
            { text: "операционного цикла;", correct: false },
            { text: "производственного цикла;", correct: true },
            { text: "цикла оборота финансовых ресурсов;", correct: false },
            { text: "нет правильного ответа", correct: false }
        ]
    },
    {
        question: "Оборотные средства – это средства, авансированные в:",
        answers: [
            { text: "основные производственные фонды и фонды обращения;", correct: false },
            { text: "оборотные производственные фонды;", correct: false },
            { text: "оборотные производственные фонды и фонды обращения;", correct: true },
            { text: "основные и оборотные производственные фонды", correct: false }
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