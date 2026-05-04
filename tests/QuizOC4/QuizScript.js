const questions = [
    {
        question: "К основным средствам не относятся:",
        answers: [
            { text: "передаточные устройства;", correct: false },
            { text: "производственные запасы;", correct: true },
            { text: "рабочий скот;", correct: false },
            { text: "легковой автотранспорт", correct: false }
        ]
    },
    {
        question: "Между коэффициентом прироста и коэффициентом обновления основных средств существует:",
        answers: [
            { text: "прямая связь: чем выше Кпр, тем выше Кобн;", correct: true },
            { text: "обратная связь;", correct: false },
            { text: "это независимые величины", correct: false }
        ]
    },
    {
        question: "Полная восстановительная стоимость:",
        answers: [
            { text: "выражает оценку воспроизводства основных фондов в современных условиях на момент переоценки;", correct: true },
            { text: "выражает стоимость средств труда, не перенесенных на изготовленную продукцию;", correct: false },
            { text: "в 3 раза больше, чем полная первоначальная стоимость;", correct: false },
            { text: "исчисляется как разница между полной первоначальной стоимостью и остаточной стоимостью", correct: false }
        ]
    },
    {
        question: "Моральный износ первого вида происходит:",
        answers: [
            { text: "от бездействия основных фондов;", correct: false },
            { text: "в случае роста производительности труда в отраслях, изготавливающих данные основные фонды;", correct: true },
            { text: "в результате влияния различных внешних условий;", correct: false },
            { text: "в результате появления машин того же назначения, но более производительных", correct: false }
        ]
    },
    {
        question: "Первоначальная стоимость основных средств 600 тыс. руб., срок полезного использования 4 года. Величина амортизационных отчислений, начисленная способом списания стоимости по сумме чисел лет полезного использования для первого года:",
        answers: [
            { text: "150 тыс. руб.,", correct: false },
            { text: "300 тыс. руб.;", correct: false },
            { text: "240 тыс. руб.;", correct: true },
            { text: "180 тыс. руб.", correct: false }
        ]
    },
    {
        question: "Показатель фондоемкости характеризует:",
        answers: [
            { text: "размер объема товарной продукции, приходящейся на 1 руб. основных производственных средств;", correct: false },
            { text: "уровень технической оснащенности труда;", correct: false },
            { text: "удельные затраты основных средств на 1 руб. реализованной продукции;", correct: true },
            { text: "количество оборотов оборотных средств", correct: false }
        ]
    },
    {
        question: "Уровень использования активной части основных производственных средств во времени характеризует:",
        answers: [
            { text: "интегральный коэффициент;", correct: false },
            { text: "коэффициент экстенсивного использования;", correct: true },
            { text: "коэффициент интенсивного использования;", correct: false },
            { text: "показатель фондоотдачи", correct: false }
        ]
    },
    {
        question: "Годовой объем выпуска изделий 300 тыс. шт. Производственная мощность цеха – 330 тыс. шт. Коэффициент интенсивной загрузки оборудования:",
        answers: [
            { text: "99 %;", correct: false },
            { text: "1,1;", correct: false },
            { text: "0,91;", correct: true },
            { text: "0,63", correct: false }
        ]
    },
    {
        question: "К активной части основных средств не относятся средства труда:",
        answers: [
            { text: "оборудование;", correct: false },
            { text: "здания;", correct: true },
            { text: "инвентарь;", correct: false },
            { text: "транспортные средства;", correct: false }
        ]
    },
    {
        question: "Отношением выбывших основных средств к их стоимости на начало периода исчисляется:",
        answers: [
            { text: "коэффициент прироста;", correct: false },
            { text: "коэффициент выбытия фондов;", correct: true },
            { text: "коэффициент обновления;", correct: false },
            { text: "коэффициент замены фондов", correct: false }
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