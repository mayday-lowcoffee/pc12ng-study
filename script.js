// ==========================
// QUESTION DATABASE
// ==========================

let activeQuestions = [];
let currentQuestion = 0;
let responses = [];

// ==========================
// INITIALIZATION
// ==========================

window.addEventListener("load", () => {

    if (
        typeof limitationsQuestions === "undefined"
    ) {

        console.error(
            "limitationsQuestions not found"
        );

        alert(
            "limitations.js was not loaded."
        );

        return;
    }

    if (
        typeof allQuestions === "undefined"
    ) {

        window.allQuestions = [
            ...limitationsQuestions
        ];
    }

    startStudyMode();

});

// ==========================
// STUDY MODE
// ==========================

function startStudyMode() {

    const selectedMode =
        document.getElementById(
            "categorySelect"
        ).value;

    if (selectedMode === "ALL") {

        activeQuestions = [...allQuestions];

    } else if (
        selectedMode === "LIMITATIONS"
    ) {

        activeQuestions =
            [...limitationsQuestions];

    } else if (
    selectedMode ===
    "WEIGHT_BALANCE"
    ) {

    activeQuestions = [
        ...weightAndBalanceQuestions
    ];
    } else if (
    selectedMode ===
    "NORMAL_OPERATING_PROCEDURES"
    ) {

    activeQuestions = [
        ...normalOperatingProceduresQuestions
    ];
    } else if (
        selectedMode === "RANDOM_REVIEW"
    ) {

        const incorrectQuestions =
            activeQuestions.filter(
                (question, index) =>
                    responses[index] &&
                    responses[index]
                        .answered &&
                    !responses[index]
                        .correct
            );

        if (
            incorrectQuestions.length > 0
        ) {

            activeQuestions =
                [...incorrectQuestions];

        } else {

            activeQuestions =
                [...allQuestions];
        }
    }

    if (
        activeQuestions.length === 0
    ) {

        document.getElementById(
            "questionText"
        ).innerHTML =
            "No questions found.";

        return;
    }

    shuffleQuestions();

    responses = [];

    currentQuestion = 0;

    displayQuestion();

    updateStatistics();
}

// ==========================
// SHUFFLE
// ==========================

function shuffleQuestions() {

    for (
        let i =
            activeQuestions.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(
                Math.random() *
                (i + 1)
            );

        [
            activeQuestions[i],
            activeQuestions[j]
        ] = [
            activeQuestions[j],
            activeQuestions[i]
        ];
    }
}

// ==========================
// DISPLAY QUESTION
// ==========================

function displayQuestion() {

    if (
        activeQuestions.length === 0
    ) {
        return;
    }

    const question =
        activeQuestions[currentQuestion];

    document.getElementById(
        "questionCounter"
    ).innerHTML =
        `Question ${currentQuestion + 1}
        of ${activeQuestions.length}`;

    document.getElementById(
        "questionDifficulty"
    ).innerHTML =
        question.difficulty || "";

    document.getElementById(
        "questionCategory"
    ).innerHTML =
        question.category || "";

    document.getElementById(
        "questionText"
    ).innerHTML =
        question.question || "";

    document.getElementById(
        "questionReference"
    ).innerHTML =
        `<strong>Reference:</strong>
        ${question.reference || ""}`;

    document.getElementById(
        "questionTopic"
    ).innerHTML =
        `<strong>Topic:</strong>
        ${question.sourceTopic || ""}`;

    document.getElementById(
        "questionPage"
    ).innerHTML =
        `<strong>POH Page:</strong>
        ${question.sourcePage || ""}`;

    document.getElementById(
        "questionManual"
    ).innerHTML =
        `<strong>Manual:</strong>
        ${question.manual || ""}`;

    document.getElementById(
        "questionRevision"
    ).innerHTML =
        `<strong>Revision:</strong>
        ${question.revision || ""}`;

    renderAnswers();

    restoreResult();
}

// ==========================
// CLICK ANYWHERE ANSWER
// ==========================

function selectAnswer(index) {

    if (
        responses[currentQuestion] &&
        responses[currentQuestion]
            .answered
    ) {
        return;
    }

    saveAnswer(index);

    renderAnswers();
}

// ==========================
// RENDER ANSWERS
// ==========================

function renderAnswers() {

    const question =
        activeQuestions[currentQuestion];

    let html = "";

    question.answers.forEach(
        (
            answer,
            answerIndex
        ) => {

        let checked = "";

        let cssClass = "answer";

        if (
            responses[currentQuestion] &&
            responses[currentQuestion]
                .selected === answerIndex
        ) {

            checked = "checked";
        }

        if (
            responses[currentQuestion] &&
            responses[currentQuestion]
                .answered
        ) {

            if (
                answerIndex ===
                question.correct
            ) {

                cssClass +=
                    " correct";
            }

            if (
                answerIndex ===
                responses[currentQuestion]
                    .selected &&
                !responses[currentQuestion]
                    .correct
            ) {

                cssClass +=
                    " incorrect";
            }
        }

        html += `

        <div
            class="${cssClass}"
            onclick="selectAnswer(${answerIndex})">

            <input
                type="radio"
                name="answer"
                value="${answerIndex}"
                ${checked}
                ${responses[currentQuestion]?.answered ? "disabled" : ""}>

            <span>${answer}</span>

        </div>

        `;
    });

    document.getElementById(
        "answers"
    ).innerHTML = html;
}

// ==========================
// SAVE ANSWER
// ==========================

function saveAnswer(value) {

    responses[currentQuestion] = {

        selected: value,

        answered: false,

        correct: false
    };

    document.getElementById(
        "result"
    ).innerHTML = "";
}

// ==========================
// CHECK ANSWER
// ==========================

function checkAnswer() {

    if (
        !responses[currentQuestion]
    ) {

        alert(
            "Please select an answer."
        );

        return;
    }

    const question =
        activeQuestions[currentQuestion];

    const isCorrect =
        responses[currentQuestion]
            .selected ===
        question.correct;

    responses[currentQuestion]
        .answered = true;

    responses[currentQuestion]
        .correct = isCorrect;

    renderAnswers();

    restoreResult();

    updateStatistics();
}

// ==========================
// RESTORE RESULT
// ==========================

function restoreResult() {

    if (
        !responses[currentQuestion] ||
        !responses[currentQuestion]
            .answered
    ) {

        document.getElementById(
            "result"
        ).innerHTML = "";

        return;
    }

    const question =
        activeQuestions[currentQuestion];

    const correctAnswer =
        question.answers[
            question.correct
        ];

    document.getElementById(
        "result"
    ).innerHTML =
        responses[currentQuestion]
            .correct
        ?
        `
        <div class="result-card result-correct">
            <h3>✅ Correct</h3>
            <p>${question.explanation}</p>
        </div>
        `
        :
        `
        <div class="result-card result-incorrect">
            <h3>❌ Incorrect</h3>
            <p><strong>Correct Answer:</strong> ${correctAnswer}</p>
            <p>${question.explanation}</p>
        </div>
        `;
}

// ==========================
// NAVIGATION
// ==========================

function nextQuestion() {

    if (
        currentQuestion <
        activeQuestions.length - 1
    ) {

        currentQuestion++;

        displayQuestion();
    }
}

function previousQuestion() {

    if (
        currentQuestion > 0
    ) {

        currentQuestion--;

        displayQuestion();
    }
}

// ==========================
// STATISTICS
// ==========================

function updateStatistics() {

    let correct = 0;
    let incorrect = 0;

    responses.forEach(response => {

        if (
            response &&
            response.answered
        ) {

            if (
                response.correct
            ) {

                correct++;

            } else {

                incorrect++;
            }
        }
    });

    const total =
        correct + incorrect;

    const percent =
        total > 0
            ? Math.round(
                (correct / total) * 100
              )
            : 0;

    document.getElementById(
        "correctCount"
    ).innerHTML = correct;

    document.getElementById(
        "incorrectCount"
    ).innerHTML = incorrect;

    document.getElementById(
        "scorePercent"
    ).innerHTML =
        percent + "%";
}

// ==========================
// RESTART
// ==========================

function restartSession() {

    responses = [];

    currentQuestion = 0;

    shuffleQuestions();

    displayQuestion();

    updateStatistics();

    document.getElementById(
        "result"
    ).innerHTML = "";
}