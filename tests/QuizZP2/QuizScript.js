const questions = [
    {
        question: "Организационно–распорядительный документ, содержащий информацию, необходимую для определения места работника в общей структуре трудового коллектива, его профессии (должности), размера тарифной ставки (оклада) и другие сведения – это:",
        answers: [
            { text: "организационная структура управления", correct: false },
            { text: "штатное расписание", correct: true },
            { text: "единый тарифно–квалификационный справочник", correct: false },
            { text: "единая тарифная сетка", correct: false }
        ]
    },
    {
        question: "При какой системе оплаты труда рабочих размер заработной платы устанавливается за весь объем работы в целом, а не за каждую операцию или изделие?",
        answers: [
            { text: "Сдельно–прогрессивной", correct: false },
            { text: "Косвенно–сдельной", correct: false },
            { text: "Аккордно–сдельной", correct: true },
            { text: "нет правильного ответа", correct: false }
        ]
    },
    {
        question: "Из совокупности представленных ниже элементов, исключите тот, который не является видом системы оплаты труда рабочих:",
        answers: [
            { text: "сдельно–премиальная", correct: false },
            { text: "повременно–премиальная", correct: false },
            { text: "штатно–окладная", correct: true },
            { text: "косвенная", correct: false }
        ]
    },
    {
        question: "Совокупность государственных нормативов, посредством которых осуществляется дифференциация и регулирование оплаты труда различных групп работников в зависимости от сложности и условий труда – это:",
        answers: [
            { text: "единый тарифно–квалификационный справочник", correct: false },
            { text: "тарифная ставка", correct: false },
            { text: "тарифная система", correct: true },
            { text: "единая тарифная сетка", correct: false }
        ]
    },
    {
        question: "Из представленного ниже перечня исключите элемент, не относящийся к элементам тарифной системы:",
        answers: [
            { text: "Реальная заработная плата", correct: true },
            { text: "Тарифная сетка", correct: false },
            { text: "Тарифные ставки", correct: false },
            { text: "тарифно-квалификационный справочник", correct: false }
        ]
    },
    {
        question: "Номинальная заработная плата – это:",
        answers: [
            { text: "начисленная и полученная работником заработная плата за определенный период", correct: true },
            { text: "количество материальных благ, которое можно приобрести за полученную заработную плату", correct: false },
            { text: "основная статья дохода, средство повышения благосостояния работника и членов его семьи", correct: false },
            { text: "зарплата за выполненную работу и отработанное время", correct: false }
        ]
    },
    {
        question: "Укажите систему оплаты труда, при которой заработок вспомогательного рабочего ставится в зависимость от результатов труда обслуживаемых им основных рабочих?",
        answers: [
            { text: "прямая сдельная", correct: false },
            { text: "сдельно-премиальная", correct: false },
            { text: "косвенная сдельная", correct: true },
            { text: "сдельно-прогрессивная", correct: false }
        ]
    },
    {
        question: "Укажите систему оплаты труда, при которой заработок рабочего ставится в зависимость от фактически выпущенной продукции?",
        answers: [
            { text: "прямая сдельная", correct: true },
            { text: "сдельно-премиальная", correct: false },
            { text: "косвенная сдельная", correct: false },
            { text: "сдельно-прогрессивная", correct: false }
        ]
    },
    {
        question: "Номинальная заработная плата – это:",
        answers: [
            { text: "Начисленная и полученная работником заработная плата за определенный период", correct: true },
            { text: "Количество материальных благ, которое можно приобрести за полученную заработную плату", correct: false },
            { text: "Основная статья дохода, средство повышения благосостояния работника и членов его семьи", correct: false }
        ]
    },
    {
        question: "В каком диапазоне квалификационных разрядов располагают рабочих предприятий?",
        answers: [
            { text: "с 1 по 6 разряды", correct: false },
            { text: "с 1 по 7 разряды", correct: false },
            { text: "с 1 по 8 разряды", correct: true }
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