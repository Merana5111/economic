const test3 = [
    {
        question: "Заработная плата, начисляемая за объем произведенной продукции с выплатой премии за выполнение и перевыполнение планового задания – это:",
        answers: [
            { text: "прямая сдельная зарплата", correct: false },
            { text: "повременно – премиальная", correct: false },
            { text: "сдельно – прогрессивная", correct: false },
            { text: "сдельно – премиальная", correct: true }
        ]
    },
    {
        question: "Наиболее характерное условие применения повременной оплаты труда:",
        answers: [
            { text: "возможность точно планировать и учитывать количество заготовок, обрабатываемых работниками", correct: false },
            { text: "возможность технического нормирования труда", correct: false },
            { text: "производственный процесс строго регламентирован технологическим процессом", correct: true },
            { text: "имеются значительные заказы на производимую продукцию, а численность рабочих ограничена", correct: false }
        ]
    },
    {
        question: "Совокупность нормативов, с помощью которых осуществляется дифференциация заработной платы различных категорий работников:",
        answers: [
            { text: "тарифная ставка", correct: false },
            { text: "тарифная сетка", correct: false },
            { text: "тарифная система", correct: true },
            { text: "тарифно – квалификационный справочник", correct: false }
        ]
    },
    {
        question: "Между сдельной расценкой и часовой нормой выработки существует:",
        answers: [
            { text: "обратная зависимость", correct: true },
            { text: "прямая зависимость", correct: false },
            { text: "связи не существует", correct: false },
            { text: "нет правильного ответа", correct: false }
        ]
    },
    {
        question: "Заработная плата работников, поставленная в зависимость от результатов труда обслуживаемых им рабочих – сдельщиков – это:",
        answers: [
            { text: "прямая сдельная зарплата", correct: false },
            { text: "сдельно – премиальная", correct: false },
            { text: "косвенно – сдельная", correct: true },
            { text: "аккордная", correct: false }
        ]
    },
    {
        question: "Нецелесообразно применять сдельную форму оплаты труда, когда:",
        answers: [
            { text: "производственный процесс строго не регламентирован", correct: false },
            { text: "увеличение выпуска продукции может привести к ухудшению качества, увеличению брака", correct: true },
            { text: "рабочий может увеличить выработку", correct: false },
            { text: "возможен точный учет объема работ каждого рабочего", correct: false }
        ]
    },
    {
        question: "Система оплаты труда, при которой расценка устанавливается на весь объем подлежащих выполнению работ с указанием срока их выполнения – это:",
        answers: [
            { text: "прямая сдельная зарплата", correct: false },
            { text: "сдельно – премиальная", correct: false },
            { text: "косвенно – сдельная", correct: false },
            { text: "аккордная", correct: true }
        ]
    },
    {
        question: "Повременная форма оплаты труда предусматривает оплату труда в соответствии с количеством:",
        answers: [
            { text: "оказанных услуг", correct: false },
            { text: "изготовленной (отработанной) продукции", correct: false },
            { text: "отработанного времени", correct: true },
            { text: "все ответы верны", correct: false }
        ]
    },
    {
        question: "Между нормами времени и нормами выработки существует:",
        answers: [
            { text: "прямая зависимость", correct: false },
            { text: "обратная зависимость", correct: true },
            { text: "связи не существует", correct: false },
            { text: "нет правильного ответа", correct: false }
        ]
    },
    {
        question: "Заработная плата, начисляемая за фактически отработанное время по установленным тарифным ставкам или окладам – это:",
        answers: [
            { text: "прямая сдельная зарплата", correct: false },
            { text: "простая повременная", correct: true },
            { text: "повременно – премиальная", correct: false },
            { text: "сдельно – премиальная", correct: false }
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