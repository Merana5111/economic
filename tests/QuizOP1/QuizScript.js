const questions = [
    {
        question: "Какой из этапов в процессе создания предприятия является определяющим?",
        answers: [
            { text: "выбор места расположения предприятия", correct: false },
            { text: "изучение рынка, на удовлетворение потребностей которого нацелено предприятие", correct: false },
            { text: "изготовление печатей", correct: false },
            { text: "разработка учредительных документов", correct: true }
        ]
    },
    {
        question: "Как называется коммерческая организация, участники которого в соответствии с заключенным между ними договором занимаются предпринимательской деятельностью от имени данной организации и несут при недостаточности имущества солидарную ответственность по его обязательствам всем принадлежащим им имуществом?",
        answers: [
            { text: "открытое акционерное общество", correct: false },
            { text: "закрытое акционерное общество", correct: false },
            { text: "общество с дополнительной ответственностью", correct: false },
            { text: "общество с ограниченной ответственностью", correct: false },
            { text: "полное (хозяйственное) товарищество", correct: true }
        ]
    },
    {
        question: "Как называется коммерческая организация, уставный фонд которой разделен на определенное число акций, а акционеры имеют право свободно отчуждать свои акции неограниченному кругу лиц, само общество имеет право на открытую подписку выпускаемых акций и свободную их продажу?",
        answers: [
            { text: "открытое акционерное общество", correct: true },
            { text: "закрытое акционерное общество", correct: false },
            { text: "общество с дополнительной ответственностью", correct: false },
            { text: "общество с ограниченной ответственностью", correct: false },
            { text: "унитарное предприятие", correct: false }
        ]
    },
    {
        question: "Как называется коммерческая организация, уставный фонд которой разделен на определенное количество акций, отчуждение которых может иметь место только с согласия всех акционеров либо ограниченному кругу лиц?",
        answers: [
            { text: "открытое акционерное общество", correct: false },
            { text: "закрытое акционерное общество", correct: true },
            { text: "общество с дополнительной ответственностью", correct: false },
            { text: "общество с ограниченной ответственностью", correct: false },
            { text: "полное товарищество", correct: false }
        ]
    },
    {
        question: "Как называется коммерческая организация, уставный фонд которой разделен на доли между участниками. Участники не отвечают по обязательствам общества, а риск по убыткам общества несут в пределах стоимости внесенных в уставный фонд вкладов?",
        answers: [
            { text: "открытое акционерное общество", correct: false },
            { text: "закрытое акционерное общество", correct: false },
            { text: "общество с дополнительной ответственностью", correct: false },
            { text: "общество с ограниченной ответственностью", correct: true },
            { text: "хозяйственное (полное) товарищество", correct: false }
        ]
    },
    {
        question: "Как называется коммерческая организация, уставный фонд которой разделен на доли между участниками, определённые учредительными документами. Часть участников несут солидарную (субсидиарную) ответственность по обязательствам общества в пределах, определённых учредительными документами, остальная – ограниченную.",
        answers: [
            { text: "открытое акционерное общество", correct: false },
            { text: "закрытое акционерное общество", correct: false },
            { text: "общество с дополнительной ответственностью", correct: true },
            { text: "общество с ограниченной ответственностью", correct: false },
            { text: "унитарное предприятие", correct: false }
        ]
    },
    {
        question: "Как называется коммерческая организация, в которой наряду с полными товарищами имеется один или несколько участников-вкладчиков, которые несут риск убытков, связанных с деятельностью организации в пределах сумм внесенных ими вкладов?",
        answers: [
            { text: "производственный кооператив", correct: false },
            { text: "закрытое акционерное общество", correct: false },
            { text: "общество с дополнительной ответственностью", correct: false },
            { text: "коммандитное товарищество", correct: true },
            { text: "полное товарищество", correct: false }
        ]
    },
    {
        question: "Как называется коммерческая организация, основанная на имущественных паевых взносах участников, их личном трудовом участии в деятельности и субсидиарной ответственности по обязательствам организации, установленных уставом в пределах не меньше величины получаемого им в данной организации годового дохода?",
        answers: [
            { text: "производственный кооператив", correct: true },
            { text: "закрытое акционерное общество", correct: false },
            { text: "общество с дополнительной ответственностью", correct: false },
            { text: "коммандитное товарищество", correct: false },
            { text: "полное товарищество", correct: false }
        ]
    },
    {
        question: "Как называется коммерческая организация, не наделённая правом собственности на закреплённое за ней имущество, у которой есть один собственник в лице государства?",
        answers: [
            { text: "производственный кооператив", correct: false },
            { text: "закрытое акционерное общество", correct: false },
            { text: "общество с дополнительной ответственностью", correct: false },
            { text: "унитарное предприятие", correct: true }
        ]
    },
    {
        question: "Как называется акция, позволяющая получать доход в виде заранее фиксированной суммы и в случае ликвидации акционерного общества владельцы этих акций получают выплаты в первую очередь.",
        answers: [
            { text: "привилегированная", correct: true },
            { text: "именная", correct: false },
            { text: "на предъявителя", correct: false },
            { text: "простая", correct: false },
            { text: "золотая", correct: false }
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