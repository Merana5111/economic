const questions = [
    {
        question: "Из указанных определений выделите то, которое характеризует моральный износ основных средств второй формы:",
        answers: [
            { text: "постепенная утрата основными средствами своей первоначальной стоимости в результате их изнашивания в процессе эксплуатации;", correct: false },
            { text: "уменьшение стоимости машин и оборудования в результате выпуска таких же, но более дешевых видов техники;", correct: false },
            { text: "уменьшение стоимости машин и оборудования в результате выпуска значительно лучших по полезности машин и оборудования", correct: true },
            { text: "нет правильного ответа", correct: false }
        ]
    },
    {
        question: "Какая из указанных ниже характеристик не является признаком, отражающим специфику основных производственных средств (ОПС)?",
        answers: [
            { text: "по натуральной форме ОПС - средства труда;", correct: false },
            { text: "ОПС однократно участвуют в производственном процессе;", correct: true },
            { text: "в процессе производства ОПС изнашиваются постепенно;", correct: false },
            { text: "по частям переносят свою стоимость на стоимость готовой продукции", correct: false }
        ]
    },
    {
        question: "Методы учета основных средств:",
        answers: [
            { text: "трудовой, стоимостной;", correct: false },
            { text: "натуральный, стоимостной;", correct: true },
            { text: "трудовой, натуральный;", correct: false },
            { text: "стоимостной, условно-натуральный.", correct: false }
        ]
    },
    {
        question: "Экстенсивное использование основных производственных средств характеризуют:",
        answers: [
            { text: "фондоотдача, фондоемкость;", correct: false },
            { text: "коэффициент сменности;", correct: true },
            { text: "фондовооруженность труда рабочего;", correct: false },
            { text: "рентабельность основных средств.", correct: false }
        ]
    },
    {
        question: "Из предложенных ниже основных производственных средств исключите те, которые не входят в состав видовой группы 'Транспортные средства':",
        answers: [
            { text: "подвижной состав всех видов морского и речного транспорта;", correct: false },
            { text: "внутризаводской транспорт;", correct: false },
            { text: "автодороги;", correct: true },
            { text: "нет правильного ответа", correct: false }
        ]
    },
    {
        question: "Возмещение в денежной форме износа основных средств называется:",
        answers: [
            { text: "норма амортизации;", correct: false },
            { text: "арендная плата;", correct: false },
            { text: "амортизация;", correct: true },
            { text: "инвестиция", correct: false }
        ]
    },
    {
        question: "Какой показатель не используется при оценке эффективности использования основных средств:",
        answers: [
            { text: "коэффициент сменности;", correct: false },
            { text: "фондовооруженность;", correct: false },
            { text: "фондоотдача;", correct: false },
            { text: "амортизация", correct: true }
        ]
    },
    {
        question: "К основным производственным средствам относится:",
        answers: [
            { text: "оборудование производственного цеха;", correct: true },
            { text: "парк автомашин, обслуживающий общежитие;", correct: false },
            { text: "оборудование заводской поликлиники;", correct: false },
            { text: "станки, установленные в корпусе учебного центра", correct: false }
        ]
    },
    {
        question: "К активной части основных средств относятся средства труда:",
        answers: [
            { text: "сооружения;", correct: false },
            { text: "здания;", correct: false },
            { text: "передаточные устройства;", correct: false },
            { text: "оборудование", correct: true }
        ]
    },
    {
        question: "Отношением вновь введенных основных средств к их стоимости на конец периода исчисляется:",
        answers: [
            { text: "коэффициент прироста;", correct: false },
            { text: "коэффициент выбытия основных средств;", correct: false },
            { text: "коэффициент обновления;", correct: true },
            { text: "коэффициент замены основных средств", correct: false }
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