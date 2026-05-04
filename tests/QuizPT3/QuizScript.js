const questions = [
    {
        question: "Хронометраж − это:",
        answers: [
            { text: "изучение операции путем наблюдения", correct: false },
            { text: "измерение затрат рабочего времени на отдельные операции", correct: false },
            { text: "изучение всех затрат рабочего времени в течение смены", correct: false },
            { text: "изучение затрат времени на изготовление единицы продукции", correct: false },
            { text: "изучение операции путем наблюдения и измерения затрат рабочего времени на отдельные элементы", correct: true }
        ]
    },
    {
        question: "Цель хронометража:",
        answers: [
            { text: "определение норм времени на отдельные операции", correct: true },
            { text: "определение норм времени на изготовление единицы продукции", correct: false },
            { text: "разработка нормативов времени", correct: true },
            { text: "выявление и изучение новых приемов и методов работы", correct: true },
            { text: "установление причин невыполнения норм времени", correct: false },
            { text: "устранение всех потерь и лишних затрат рабочего времени", correct: true }
        ]
    },
    {
        question: "Основная задача нормирования труда:",
        answers: [
            { text: "установление необходимых затрат времени на производство единицы продукции (выполнение работы)", correct: true },
            { text: "анализ и проектирование рациональных условий, режимов и приемов работы", correct: false },
            { text: "выявление резервов снижения трудовых затрат", correct: false }
        ]
    },
    {
        question: "Определите категорию затрат рабочего времени на установку и снятие деталей на станочных работах:",
        answers: [
            { text: "подготовительно-заключительное время", correct: false },
            { text: "время обслуживания рабочего места", correct: false },
            { text: "вспомогательное время", correct: true },
            { text: "основное время", correct: false }
        ]
    },
    {
        question: "Назовите, к какой категории затрат рабочего времени основного рабочего относится время на уборку рабочего места в серийном производстве:",
        answers: [
            { text: "подготовительно-заключительное время", correct: false },
            { text: "время технического обслуживания рабочего места", correct: true },
            { text: "время организационного обслуживания рабочего места", correct: false },
            { text: "оперативное время", correct: false }
        ]
    },
    {
        question: "Какова необходимая и достаточная продолжительность наблюдений при фотографии рабочего дня работников экономических служб с целью изучения содержания их функций?",
        answers: [
            { text: "один день", correct: true },
            { text: "один месяц", correct: false },
            { text: "одна неделя", correct: false },
            { text: "один год", correct: false }
        ]
    },
    {
        question: "Почему исследовательский метод нормирования применяется реже, чем расчетный:",
        answers: [
            { text: "потому что менее точен", correct: false },
            { text: "потому что более трудоемок", correct: true },
            { text: "потому что требует специальных знаний", correct: false }
        ]
    },
    {
        question: "Разновидностью каких нормативов являются микроэлементные нормативы:",
        answers: [
            { text: "дифференцированных", correct: false },
            { text: "укрупненных", correct: false },
            { text: "единых", correct: false },
            { text: "типовых", correct: true }
        ]
    },
    {
        question: "Как определяется уровень производительности труда в машиностроительном производстве:",
        answers: [
            { text: "выработкой продукции в единицу рабочего времени", correct: false },
            { text: "затратами рабочего времени на единицу продукции", correct: false },
            { text: "количеством выработанной продукции на одного работающего", correct: true },
            { text: "объемом продукции на одного рабочего", correct: false },
            { text: "объемом выпущенной продукции в год", correct: false }
        ]
    },
    {
        question: "Каким показателем характеризуется уровень роста производительности труда на предприятии:",
        answers: [
            { text: "снижением трудоемкости единицы продукции", correct: true },
            { text: "внедрением новых технологических процессов", correct: false },
            { text: "внедрением нового оборудования", correct: false },
            { text: "сокращением общей численности работающих", correct: false },
            { text: "применением передового опыта", correct: false }
        ]
    },
    {
        question: "Как рассчитывается численность основных рабочих на предприятиях машиностроения:",
        answers: [
            { text: "отношением фонда времени рабочего к трудоемкости продукции", correct: false },
            { text: "вычитанием трудоемкости продукции из фонда времени рабочего", correct: false },
            { text: "отношением числа рабочих мест к норме обслуживания", correct: false },
            { text: "отношением трудоемкости продукции к фонду времени рабочего", correct: true },
            { text: "суммированием трудоемкости продукции и фонда времени рабочего", correct: false }
        ]
    },
    {
        question: "К промышленно-производственному персоналу относятся:",
        answers: [
            { text: "работники, которые непосредственно связаны с производством и его обслуживанием", correct: true },
            { text: "работники, которые непосредственно не связаны с производством и его обслуживанием", correct: false },
            { text: "работники, которые организуют процесс управления предприятием", correct: false }
        ]
    },
    {
        question: "К непромышленному персоналу относятся:",
        answers: [
            { text: "работники, которые непосредственно связаны с производством и его обслуживанием", correct: false },
            { text: "работники, которые непосредственно не связаны с производством и его обслуживанием", correct: true },
            { text: "работники, которые организуют процесс управления предприятием", correct: false }
        ]
    },
    {
        question: "Списочная численность работников предприятия — это:",
        answers: [
            { text: "численность работников списочного состава на определенную дату с учетом прибывших и выбывших за этот день работников", correct: true },
            { text: "численность работников списочного состава, явившихся на работу", correct: false },
            { text: "отношение численности работников списочного состава за каждый календарный день месяца (включая праздничные и выходные дни) к числу календарных дней месяца", correct: false }
        ]
    },
    {
        question: "Явочная численность — это:",
        answers: [
            { text: "численность работников списочного состава на определенное число или дату с учетом принятых и выбывших за этот день работников", correct: false },
            { text: "численность работников списочного состава, явившихся на работу (включая находящихся в командировке)", correct: true },
            { text: "отношение численности работников списочного состава за каждый календарный день месяца (включая праздничные и выходные дни) к числу календарных дней месяца", correct: false }
        ]
    },
    {
        question: "Какие показатели используются для измерения производительности труда:",
        answers: [
            { text: "фондоотдача, фондоемкость", correct: false },
            { text: "выработка на одного рабочего", correct: true },
            { text: "трудоемкость продукции", correct: false },
            { text: "фондовооруженность", correct: false },
            { text: "прибыль", correct: false }
        ]
    },
    {
        question: "Какая экономическая проблема возникает на рынке труда при превышении спроса на рабочую силу над предложением:",
        answers: [
            { text: "временная безработица", correct: false },
            { text: "переквалификация кадров", correct: false },
            { text: "нехватка рабочих мест", correct: false },
            { text: "перемещение работников", correct: false },
            { text: "вакансии рабочих мест", correct: true }
        ]
    },
    {
        question: "Предприятие работает с 6 ноября. Для расчета среднесписочной численности необходимо:",
        answers: [
            { text: "сумму списочной численности работников начиная с 6 ноября разделить на 25 дней", correct: false },
            { text: "сумму списочной численности работников за ноябрь (включая праздничные и выходные дни) разделить на число календарных дней месяца", correct: true },
            { text: "сумму списочной численности работников за ноябрь разделить на число рабочих дней в данном месяце", correct: false }
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